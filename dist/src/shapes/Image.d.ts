import type { BaseFilter } from "../filters/BaseFilter";
import { TClassProperties, TSize } from "../typedefs";
import { LoadImageOptions } from "../util/misc/objectEnlive";
import { FabricObject } from "./Object/FabricObject";
import type { FabricObjectProps, SerializedObjectProps, TProps } from "./Object/types";
import type { ObjectEvents } from "../EventTypeDefs";
import type * as Filters from "../filters/filters";
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
export declare const imageDefaultValues: Partial<UniqueImageProps> & Partial<FabricObjectProps>;
export interface SerializedImageProps extends SerializedObjectProps {
    src: string;
    crossOrigin: string | null;
    filters: any[];
    resizeFilter?: any;
    cropX: number;
    cropY: number;
}
export interface ImageProps extends FabricObjectProps, UniqueImageProps {
}
/**
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#images}
 */
export declare class Image<Props extends TProps<ImageProps> = Partial<ImageProps>, SProps extends SerializedImageProps = SerializedImageProps, EventSpec extends ObjectEvents = ObjectEvents> extends FabricObject<Props, SProps, EventSpec> implements ImageProps {
    /**
     * When calling {@link Image.getSrc}, return value from element src with `element.getAttribute('src')`.
     * This allows for relative urls as image src.
     * @since 2.7.0
     * @type Boolean
     * @default false
     */
    srcFromAttribute: boolean;
    /**
     * private
     * contains last value of scaleX to detect
     * if the Image got resized after the last Render
     * @type Number
     */
    protected _lastScaleX: number;
    /**
     * private
     * contains last value of scaleY to detect
     * if the Image got resized after the last Render
     * @type Number
     */
    protected _lastScaleY: number;
    /**
     * private
     * contains last value of scaling applied by the apply filter chain
     * @type Number
     */
    protected _filterScalingX: number;
    /**
     * private
     * contains last value of scaling applied by the apply filter chain
     * @type Number
     */
    protected _filterScalingY: number;
    /**
     * minimum scale factor under which any resizeFilter is triggered to resize the image
     * 0 will disable the automatic resize. 1 will trigger automatically always.
     * number bigger than 1 are not implemented yet.
     * @type Number
     */
    minimumScaleTrigger: number;
    /**
     * key used to retrieve the texture representing this image
     * @since 2.0.0
     * @type String
     * @default
     */
    cacheKey: string;
    /**
     * Image crop in pixels from original image size.
     * @since 2.0.0
     * @type Number
     * @default
     */
    cropX: number;
    /**
     * Image crop in pixels from original image size.
     * @since 2.0.0
     * @type Number
     * @default
     */
    cropY: number;
    /**
     * Indicates whether this canvas will use image smoothing when painting this image.
     * Also influence if the cacheCanvas for this image uses imageSmoothing
     * @since 4.0.0-beta.11
     * @type Boolean
     * @default
     */
    imageSmoothing: boolean;
    preserveAspectRatio: string;
    protected src: string;
    filters: Array<FilterType>;
    resizeFilter: BaseFilter;
    protected _element: ImageSource;
    protected _originalElement: ImageSource;
    protected _filteredEl: ImageSource;
    static cacheProperties: string[];
    static ownDefaults: Record<string, any>;
    static getDefaults(): {
        [x: string]: any;
    };
    /**
     * Constructor
     * Image can be initialized with any canvas drawable or a string.
     * The string should be a url and will be loaded as an image.
     * Canvas and Image element work out of the box, while videos require extra code to work.
     * Please check video element events for seeking.
     * @param {ImageSource | string} element Image element
     * @param {Object} [options] Options object
     */
    constructor(elementId: string, options: Props);
    constructor(element: ImageSource, options: Props);
    /**
     * Returns image element which this instance if based on
     */
    getElement(): ImageSource;
    /**
     * Sets image element for this instance to a specified one.
     * If filters defined they are applied to new image.
     * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
     * @param {HTMLImageElement} element
     * @param {Partial<TSize>} [size] Options object
     */
    setElement(element: ImageSource, size?: Partial<TSize>): void;
    /**
     * Delete a single texture if in webgl mode
     */
    removeTexture(key: string): void;
    /**
     * Delete textures, reference to elements and eventually JSDOM cleanup
     */
    dispose(): void;
    /**
     * Get the crossOrigin value (of the corresponding image element)
     */
    getCrossOrigin(): string | null;
    /**
     * Returns original size of an image
     */
    getOriginalSize(): {
        width: any;
        height: any;
    };
    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _stroke(ctx: CanvasRenderingContext2D): void;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject<T extends Omit<Props & TClassProperties<this>, keyof SProps>, K extends keyof T = never>(propertiesToInclude?: K[]): Pick<T, K> & SProps;
    /**
     * Returns true if an image has crop applied, inspecting values of cropX,cropY,width,height.
     * @return {Boolean}
     */
    hasCrop(): boolean;
    /**
     * Returns svg representation of an instance
     * @return {string[]} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string[];
    /**
     * Returns source of an image
     * @param {Boolean} filtered indicates if the src is needed for svg
     * @return {String} Source of an image
     */
    getSrc(filtered?: boolean): string;
    /**
     * Alias for getSrc
     * @param filtered
     * @deprecated
     */
    getSvgSrc(filtered?: boolean): string;
    /**
     * Loads and sets source of an image\
     * **IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking
     * @param {String} src Source string (URL)
     * @param {LoadImageOptions} [options] Options object
     */
    setSrc(src: string, { crossOrigin, signal }?: LoadImageOptions): Promise<void>;
    /**
     * Returns string representation of an instance
     * @return {String} String representation of an instance
     */
    toString(): string;
    applyResizeFilters(): void;
    /**
     * Applies filters assigned to this image (from "filters" array) or from filter param
     * @method applyFilters
     * @param {Array} filters to be applied
     * @param {Boolean} forResizing specify if the filter operation is a resize operation
     */
    applyFilters(filters?: BaseFilter[]): void;
    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render(ctx: CanvasRenderingContext2D): void;
    /**
     * Paint the cached copy of the object on the target context.
     * it will set the imageSmoothing for the draw operation
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    drawCacheOnCanvas(ctx: CanvasRenderingContext2D): void;
    /**
     * Decide if the object should cache or not. Create its own cache level
     * needsItsOwnCache should be used when the object drawing method requires
     * a cache step. None of the fabric classes requires it.
     * Generally you do not cache objects in groups because the group outside is cached.
     * This is the special image version where we would like to avoid caching where possible.
     * Essentially images do not benefit from caching. They may require caching, and in that
     * case we do it. Also caching an image usually ends in a loss of details.
     * A full performance audit should be done.
     * @return {Boolean}
     */
    shouldCache(): boolean;
    _renderFill(ctx: CanvasRenderingContext2D): void;
    /**
     * needed to check if image needs resize
     * @private
     */
    _needsResize(): boolean;
    /**
     * @private
     * @deprecated unused
     */
    _resetWidthHeight(): void;
    /**
     * @private
     * Set the width and the height of the image object, using the element or the
     * options.
     */
    _setWidthHeight({ width, height }?: Partial<TSize>): void;
    /**
     * Calculate offset for center and scale factor for the image in order to respect
     * the preserveAspectRatio attribute
     * @private
     */
    parsePreserveAspectRatioAttribute(): {
        width: number;
        height: number;
        scaleX: number;
        scaleY: number;
        offsetLeft: number;
        offsetTop: number;
        cropX: number;
        cropY: number;
    };
    /**
     * Default CSS class name for canvas
     * @static
     * @type String
     * @default
     */
    static CSS_CANVAS: string;
    /**
     * List of attribute names to account for when parsing SVG element (used by {@link Image.fromElement})
     * @static
     * @see {@link http://www.w3.org/TR/SVG/struct.html#ImageElement}
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Creates an instance of Image from its object representation
     * @static
     * @param {Object} object Object to create an instance from
     * @param {object} [options] Options object
     * @param {AbortSignal} [options.signal] handle aborting, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
     * @returns {Promise<Image>}
     */
    static fromObject<T extends TProps<SerializedImageProps>>({ filters: f, resizeFilter: rf, src, crossOrigin, ...object }: T, options: {
        signal: AbortSignal;
    }): Promise<Image<Omit<T, "crossOrigin" | "filters" | "resizeFilter" | "src"> & {
        src: string | undefined;
        crossOrigin: string | null | undefined;
        filters: FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>[];
        resizeFilter: any;
    }, SerializedImageProps, ObjectEvents>>;
    /**
     * Creates an instance of Image from an URL string
     * @static
     * @param {String} url URL to create an image from
     * @param {LoadImageOptions} [options] Options object
     * @returns {Promise<Image>}
     */
    static fromURL<T extends TProps<SerializedImageProps>>(url: string, options?: T & LoadImageOptions): Promise<Image>;
    /**
     * Returns {@link Image} instance from an SVG element
     * @static
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     * @param {AbortSignal} [options.signal] handle aborting, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
     * @param {Function} callback Callback to execute when Image object is created
     */
    static fromElement(element: SVGElement, callback: (image: Image) => any, options?: {
        signal?: AbortSignal;
    }): void;
    static filters: {
        Grayscale: typeof Filters.Grayscale;
        Sepia: {
            new ({ ...options }?: Record<string, any>): {
                readonly type: string;
                matrix: number[];
                colorsOnly: boolean;
                setOptions({ matrix, ...options }: Record<string, any>): void;
                getFragmentSource(): string;
                applyTo2d(options: import("../filters/typedefs").T2DPipelineState): void;
                getUniformLocations(gl: WebGLRenderingContext, program: WebGLProgram): import("../filters/typedefs").TWebGLUniformLocationMap;
                sendUniformData(gl: WebGLRenderingContext, uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap): void;
                vertexSource: string;
                mainParameter?: keyof any | undefined;
                createProgram(gl: WebGLRenderingContext, fragmentSource?: string, vertexSource?: string): {
                    program: WebGLProgram;
                    attributeLocations: import("../filters/typedefs").TWebGLAttributeLocationMap;
                    uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap;
                };
                getAttributeLocations(gl: WebGLRenderingContext, program: WebGLProgram): import("../filters/typedefs").TWebGLAttributeLocationMap;
                sendAttributeData(gl: WebGLRenderingContext, attributeLocations: Record<string, number>, aPositionData: Float32Array): void;
                _setupFrameBuffer(options: import("../filters/typedefs").TWebGLPipelineState): void;
                _swapTextures(options: import("../filters/typedefs").TWebGLPipelineState): void;
                isNeutralState(options?: any): boolean;
                applyTo(options: import("../filters/typedefs").TWebGLPipelineState | import("../filters/typedefs").T2DPipelineState): void;
                getCacheKey(): string;
                retrieveShader(options: import("../filters/typedefs").TWebGLPipelineState): import("../filters/typedefs").TWebGLProgramCacheItem;
                applyToWebGL(options: import("../filters/typedefs").TWebGLPipelineState): void;
                bindAdditionalTexture(gl: WebGLRenderingContext, texture: WebGLTexture, textureUnit: number): void;
                unbindAdditionalTexture(gl: WebGLRenderingContext, textureUnit: number): void;
                getMainParameter(): string | boolean | number[] | ((gl: WebGLRenderingContext, program: WebGLProgram) => import("../filters/typedefs").TWebGLAttributeLocationMap) | ((options: import("../filters/typedefs").TWebGLPipelineState) => import("../filters/typedefs").TWebGLProgramCacheItem) | ((options?: any) => boolean) | ((gl: WebGLRenderingContext, program: WebGLProgram) => import("../filters/typedefs").TWebGLUniformLocationMap) | (() => string) | (({ matrix, ...options }: Record<string, any>) => void) | ((options: import("../filters/typedefs").T2DPipelineState) => void) | ((gl: WebGLRenderingContext, uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap) => void) | ((gl: WebGLRenderingContext, fragmentSource?: string, vertexSource?: string) => {
                    program: WebGLProgram;
                    attributeLocations: import("../filters/typedefs").TWebGLAttributeLocationMap;
                    uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap;
                }) | ((gl: WebGLRenderingContext, attributeLocations: Record<string, number>, aPositionData: Float32Array) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState | import("../filters/typedefs").T2DPipelineState) => void) | (() => string) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((gl: WebGLRenderingContext, texture: WebGLTexture, textureUnit: number) => void) | ((gl: WebGLRenderingContext, textureUnit: number) => void) | (() => string | boolean | number[] | ((gl: WebGLRenderingContext, program: WebGLProgram) => import("../filters/typedefs").TWebGLAttributeLocationMap) | ((options: import("../filters/typedefs").TWebGLPipelineState) => import("../filters/typedefs").TWebGLProgramCacheItem) | ((options?: any) => boolean) | ((gl: WebGLRenderingContext, program: WebGLProgram) => import("../filters/typedefs").TWebGLUniformLocationMap) | (() => string) | (({ matrix, ...options }: Record<string, any>) => void) | ((options: import("../filters/typedefs").T2DPipelineState) => void) | ((gl: WebGLRenderingContext, uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap) => void) | ((gl: WebGLRenderingContext, fragmentSource?: string, vertexSource?: string) => {
                    program: WebGLProgram;
                    attributeLocations: import("../filters/typedefs").TWebGLAttributeLocationMap;
                    uniformLocations: import("../filters/typedefs").TWebGLUniformLocationMap;
                }) | ((gl: WebGLRenderingContext, attributeLocations: Record<string, number>, aPositionData: Float32Array) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((options: import("../filters/typedefs").TWebGLPipelineState | import("../filters/typedefs").T2DPipelineState) => void) | (() => string) | ((options: import("../filters/typedefs").TWebGLPipelineState) => void) | ((gl: WebGLRenderingContext, texture: WebGLTexture, textureUnit: number) => void) | ((gl: WebGLRenderingContext, textureUnit: number) => void) | any | (() => {
                    type: string;
                }) | (() => {
                    type: string;
                }) | ((value: any) => void) | ((options: import("../filters/typedefs").T2DPipelineState) => void) | undefined) | (() => {
                    type: string;
                }) | (() => {
                    type: string;
                }) | ((value: any) => void) | ((options: import("../filters/typedefs").T2DPipelineState) => void) | undefined;
                setMainParameter(value: any): void;
                createHelpLayer(options: import("../filters/typedefs").T2DPipelineState): void;
                toObject(): {
                    type: string;
                };
                toJSON(): {
                    type: string;
                };
            };
            defaults: {
                mainParameter: undefined;
                matrix: number[];
                type?: string | undefined;
                vertexSource?: string | undefined;
                colorsOnly?: boolean | undefined;
            };
            fromObject({ type, ...filterOptions }: Record<string, any>, options: {
                signal: AbortSignal;
            }): Promise<BaseFilter>;
        };
        Invert: typeof Filters.Invert;
        Blur: typeof Filters.Blur;
        Pixelate: typeof Filters.Pixelate;
        Contrast: typeof Filters.Contrast;
        Vibrance: typeof Filters.Vibrance;
        Saturation: typeof Filters.Saturation;
        Gamma: typeof Filters.Gamma;
        BlendColor: typeof Filters.BlendColor;
        RemoveColor: typeof Filters.RemoveColor;
        Brightness: typeof Filters.Brightness;
        GradientTransparency: typeof Filters.GradientTransparency;
        BlendImage: typeof Filters.BlendImage;
    };
}
export {};
//# sourceMappingURL=Image.d.ts.map