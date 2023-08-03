import type { BaseFilter } from "../filters/BaseFilter";
import { FabricObject } from "./Object/FabricObject";
import type { FabricObjectProps, TProps } from "./Object/types";
import type { ObjectEvents } from "../EventTypeDefs";
import type * as Filters from "../filters/filters";
import { SerializedImageProps } from "./Image";
type FilterType = Filters.GradientTransparency | Filters.Invert | Filters.Sepia | Filters.Grayscale | Filters.BlendColor | Filters.BlendImage | Filters.Blur | Filters.Brightness | Filters.Contrast | Filters.Gamma | Filters.Pixelate | Filters.RemoveColor | Filters.Saturation | Filters.Vibrance;
export type ImageSource = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
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
/**
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#images}
 */
export declare class Sprite<Props extends TProps<StickerProps> = Partial<StickerProps>, SProps extends SerializedStickerProps = SerializedStickerProps, EventSpec extends ObjectEvents = ObjectEvents> extends FabricObject<Props, SProps, EventSpec> implements StickerProps {
    spriteWidth: null | number;
    spriteHeight: null | number;
    frameTime: null | number;
    paused_: boolean;
    spriteIndex: number;
    type: "sprite";
    constructor(elementId: string, options: Props);
    constructor(element: ImageSource, options: Props);
    play(): void;
    pause(): void;
    stop(): void;
}
export {};
//# sourceMappingURL=Sprite.d.ts.map