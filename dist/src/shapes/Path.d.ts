import { Point } from '../Point';
import { FabricObject } from './Object/FabricObject';
import { TComplexPathData, TPathSegmentInfo, TSimplePathData } from '../util/path/typedefs';
import type { FabricObjectProps, SerializedObjectProps, TProps } from './Object/types';
import type { ObjectEvents } from '../EventTypeDefs';
import { TBBox, TClassProperties, TSVGReviver } from '../typedefs';
interface UniquePathProps {
    sourcePath?: string;
    path?: TSimplePathData;
}
export interface SerializedPathProps extends SerializedObjectProps, UniquePathProps {
}
export interface PathProps extends FabricObjectProps, UniquePathProps {
}
export interface IPathBBox extends TBBox {
    left: number;
    top: number;
    pathOffset: Point;
}
export declare class Path<Props extends TProps<PathProps> = Partial<PathProps>, SProps extends SerializedPathProps = SerializedPathProps, EventSpec extends ObjectEvents = ObjectEvents> extends FabricObject<Props, SProps, EventSpec> {
    /**
     * Array of path points
     * @type Array
     * @default
     */
    path: TSimplePathData;
    pathOffset: Point;
    fromSVG?: boolean;
    sourcePath?: string;
    segmentsInfo?: TPathSegmentInfo[];
    static cacheProperties: string[];
    /**
     * Constructor
     * @param {TComplexPathData} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Partial<PathProps>} [options] Options object
     * @return {Path} thisArg
     */
    constructor(path: TComplexPathData | string, { path, left, top, ...options }?: Partial<Props>);
    /**
     * @private
     * @param {TComplexPathData | string} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {boolean} [adjustPosition] pass true to reposition the object according to the bounding box
     * @returns {Point} top left position of the bounding box, useful for complementary positioning
     */
    _setPath(path: TComplexPathData | string, adjustPosition?: boolean): void;
    /**
     * This function is an helper for svg import. it returns the center of the object in the svg
     * untransformed coordinates, by look at the polyline/polygon points.
     * @private
     * @return {Point} center point from element coordinates
     */
    _findCenterFromElement(): Point;
    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _renderPathCommands(ctx: CanvasRenderingContext2D): void;
    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _render(ctx: CanvasRenderingContext2D): void;
    /**
     * Returns string representation of an instance
     * @return {string} string representation of an instance
     */
    toString(): string;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject<T extends Omit<Props & TClassProperties<this>, keyof SProps>, K extends keyof T = never>(propertiesToInclude?: K[]): Pick<T, K> & SProps;
    /**
     * Returns dataless object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject<T extends Omit<Props & TClassProperties<this>, keyof SProps>, K extends keyof T = never>(propertiesToInclude?: K[]): Pick<T, K> & SProps;
    /**
     * Returns svg representation of an instance
     * @return {Array} an array of strings with the specific svg representation
     * of the instance
     */
    _toSVG(): string[];
    /**
     * @private
     * @return the path command's translate transform attribute
     */
    _getOffsetTransform(): string;
    /**
     * Returns svg clipPath representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {string} svg representation of an instance
     */
    toClipPathSVG(reviver: TSVGReviver): string;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {string} svg representation of an instance
     */
    toSVG(reviver: TSVGReviver): string;
    /**
     * Returns number representation of an instance complexity
     * @return {number} complexity of this instance
     */
    complexity(): number;
    setDimensions(): void;
    setBoundingBox(adjustPosition?: boolean): void;
    _calcBoundsFromPath(): TBBox;
    /**
     * @private
     */
    _calcDimensions(): IPathBBox;
    /**
     * List of attribute names to account for when parsing SVG element (used by `Path.fromElement`)
     * @static
     * @memberOf Path
     * @see http://www.w3.org/TR/SVG/paths.html#PathElement
     */
    static ATTRIBUTE_NAMES: string[];
    /**
     * Creates an instance of Path from an object
     * @static
     * @memberOf Path
     * @param {Object} object
     * @returns {Promise<Path>}
     */
    static fromObject<T extends TProps<SerializedPathProps>>(object: T): Promise<Path<Partial<PathProps>, SerializedPathProps, ObjectEvents>>;
    /**
     * Creates an instance of Path from an SVG <path> element
     * @static
     * @memberOf Path
     * @param {SVGElement} element to parse
     * @param {(path: Path) => void} callback Callback to invoke after the element has been parsed
     * @param {Partial<PathProps>} [options] Options object
     */
    static fromElement(element: SVGElement, callback: (path: Path) => void, options: Partial<PathProps>): void;
}
export {};
//# sourceMappingURL=Path.d.ts.map