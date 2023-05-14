import { TDegree, TMat2D } from '../typedefs';
/**
 * A rotation matrix
 * In the form of
 * [cos(a) -sin(a) -xcos(a)+ysin(a)+x]
 * [sin(a)  cos(a) -xsin(a)-ycos(a)+y]
 * [0       0      1                 ]
 */
/**
 * Generate a rotation matrix around the center or around a point x,y
 * @param {TDegree} angle rotation in degrees
 * @param {number} [x] translation on X axis for the pivot point
 * @param {number} [y] translation on Y axis for the pivot point
 * @returns {TMat2D} matrix
 */
export declare function rotateMatrix(angle: TDegree, x?: number, y?: number): TMat2D;
//# sourceMappingURL=rotateMatrix.d.ts.map