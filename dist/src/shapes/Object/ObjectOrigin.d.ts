import { Point } from '../../Point';
import type { Group } from '../Group';
import { TDegree, TOriginX, TOriginY } from '../../typedefs';
import { CommonMethods } from '../../CommonMethods';
import { BaseProps } from './types/BaseProps';
import { FillStrokeProps } from './types/FillStrokeProps';
export declare class ObjectOrigin<EventSpec> extends CommonMethods<EventSpec> implements BaseProps, Pick<FillStrokeProps, 'strokeWidth' | 'strokeUniform'> {
    top: number;
    left: number;
    width: number;
    height: number;
    flipX: boolean;
    flipY: boolean;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    originX: TOriginX;
    originY: TOriginY;
    angle: TDegree;
    strokeWidth: number;
    strokeUniform: boolean;
    /**
     * Object containing this object.
     * can influence its size and position
     */
    group?: Group;
    _originalOriginX?: TOriginX;
    _originalOriginY?: TOriginY;
    /**
     * Calculate object bounding box dimensions from its properties scale, skew.
     * @param {Object} [options]
     * @param {Number} [options.scaleX]
     * @param {Number} [options.scaleY]
     * @param {Number} [options.skewX]
     * @param {Number} [options.skewY]
     * @private
     * @returns {Point} dimensions
     */
    _getTransformedDimensions(options?: any): Point;
    /**
     * Translates the coordinates from a set of origin to another (based on the object's dimensions)
     * @param {Point} point The point which corresponds to the originX and originY params
     * @param {TOriginX} fromOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {TOriginY} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @param {TOriginX} toOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {TOriginY} toOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @return {Point}
     */
    translateToGivenOrigin(point: Point, fromOriginX: TOriginX, fromOriginY: TOriginY, toOriginX: TOriginX, toOriginY: TOriginY): Point;
    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param {Point} point The point which corresponds to the originX and originY params
     * @param {TOriginX} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {TOriginY} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {Point}
     */
    translateToCenterPoint(point: Point, originX: TOriginX, originY: TOriginY): Point;
    /**
     * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
     * @param {Point} center The point which corresponds to center of the object
     * @param {OriginX} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {OriginY} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {Point}
     */
    translateToOriginPoint(center: Point, originX: TOriginX, originY: TOriginY): Point;
    /**
     * Returns the center coordinates of the object relative to canvas
     * @return {Point}
     */
    getCenterPoint(): Point;
    /**
     * Returns the center coordinates of the object relative to it's parent
     * @return {Point}
     */
    getRelativeCenterPoint(): Point;
    /**
     * Returns the coordinates of the object as if it has a different origin
     * @param {TOriginX} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {TOriginY} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {Point}
     */
    getPointByOrigin(originX: TOriginX, originY: TOriginY): Point;
    /**
     * Sets the position of the object taking into consideration the object's origin
     * @param {Point} pos The new position of the object
     * @param {TOriginX} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {TOriginY} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {void}
     */
    setPositionByOrigin(pos: Point, originX: TOriginX, originY: TOriginY): void;
    /**
     * Sets the origin/position of the object to it's center point
     * @private
     * @return {void}
     */
    _setOriginToCenter(): void;
    /**
     * Resets the origin/position of the object to it's original origin
     * @private
     * @return {void}
     */
    _resetOrigin(): void;
    /**
     * @private
     */
    _getLeftTopCoords(): Point;
}
//# sourceMappingURL=ObjectOrigin.d.ts.map