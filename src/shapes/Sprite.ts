// @ts-nocheck
import type { BaseFilter } from "../filters/BaseFilter";
import { classRegistry } from "../ClassRegistry";
import { FabricObject, cacheProperties } from "./Object/FabricObject";
import type {
  FabricObjectProps,
  SerializedObjectProps,
  TProps
} from "./Object/types";
import type { ObjectEvents } from "../EventTypeDefs";
import { WebGLFilterBackend } from "../filters/WebGLFilterBackend";
import type * as Filters from "../filters/filters";
import { SerializedImageProps } from "./Image";
import { uid } from "../util/internals/uid";
import { getDocument } from "../env";

type FilterType =
  Filters.GradientTransparency
  | Filters.Invert
  | Filters.Sepia
  | Filters.Grayscale
  | Filters.BlendColor
  | Filters.BlendImage
  | Filters.Blur
  | Filters.Brightness
  | Filters.Contrast
  | Filters.Gamma
  | Filters.Pixelate
  | Filters.RemoveColor
  | Filters.Saturation
  | Filters.Vibrance;

// @todo Would be nice to have filtering code not imported directly.

export type ImageSource =
  | HTMLImageElement
  | HTMLVideoElement
  | HTMLCanvasElement;

interface UniqueImageProps {
  srcFromAttribute: boolean;
  minimumScaleTrigger: number;
  cropX: number;
  cropY: number;
  imageSmoothing: boolean;
  crossOrigin: string | null;
  filters: Array<FilterType>;
  resizeFilter?: BaseFilter;
}

const imageDefaultValues: Partial<UniqueImageProps> &
  Partial<FabricObjectProps> = {
  strokeWidth: 0,
  srcFromAttribute: false,
  minimumScaleTrigger: 0.5,
  cropX: 0,
  cropY: 0,
  imageSmoothing: true
};

interface SerializedStickerProps extends SerializedImageProps {
  src: string;
  crossOrigin: string | null;
  filters: any[];
  resizeFilter?: any;
  cropX: number;
  cropY: number;
  frameHeight: number;
  frameWidth: number;
  frameTime: number;
}

interface StickerProps extends FabricObjectProps, UniqueImageProps {
  frameHeight: number;
  frameWidth: number;
  frameTime: number;
}

const IMAGE_PROPS = ["cropX", "cropY"] as const;

/**
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#images}
 */
export class Sprite<Props extends TProps<StickerProps> = Partial<StickerProps>,
  SProps extends SerializedStickerProps = SerializedStickerProps,
  EventSpec extends ObjectEvents = ObjectEvents>
  extends FabricObject<Props, SProps, EventSpec>
  implements StickerProps {
  declare spriteWidth: null | number;
  declare spriteHeight: null | number;
  declare frameTime: null | number;
  declare paused_: boolean;
  declare spriteIndex: number;

  type: "sprite";
  constructor(elementId: string, options: Props);
  constructor(element: ImageSource, options: Props);
  constructor(arg0: ImageSource | string, options: Props = {} as Props) {
    super({...options });
  }

  play() {
    // TOOD
  }

  pause() {
    // TOOD
  }

  stop() {
    // TOOD
  }
}

classRegistry.setClass(Image);
classRegistry.setSVGClass(Image);
