import type { Constructor, TBBox } from './typedefs';
import type { BaseFabricObject } from './EventTypeDefs';
import { InteractiveFabricObject } from './shapes/Object/InteractiveObject';
export declare function createCollectionMixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        /**
         * @type {BaseFabricObject[]}
         * @TODO needs to end up in the constructor too
         */
        _objects: BaseFabricObject[];
        _onObjectAdded(object: BaseFabricObject): void;
        _onObjectRemoved(object: BaseFabricObject): void;
        _onStackOrderChanged(object: BaseFabricObject): void;
        /**
         * Adds objects to collection
         * Objects should be instances of (or inherit from) BaseFabricObject
         * @param {...BaseFabricObject[]} objects to add
         * @returns {number} new array length
         */
        add(...objects: BaseFabricObject[]): number;
        /**
         * Inserts an object into collection at specified index
         * @param {number} index Index to insert object at
         * @param {...BaseFabricObject[]} objects Object(s) to insert
         * @returns {number} new array length
         */
        insertAt(index: number, ...objects: BaseFabricObject[]): number;
        /**
         * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
         * @private
         * @param {...BaseFabricObject[]} objects objects to remove
         * @returns {BaseFabricObject[]} removed objects
         */
        remove(...objects: BaseFabricObject[]): BaseFabricObject[];
        /**
         * Executes given function for each object in this group
         * A simple shortcut for getObjects().forEach, before es6 was more complicated,
         * now is just a shortcut.
         * @param {Function} callback
         *                   Callback invoked with current object as first argument,
         *                   index - as second and an array of all objects - as third.
         */
        forEachObject(callback: (object: BaseFabricObject, index: number, array: BaseFabricObject[]) => any): void;
        /**
         * Returns an array of children objects of this instance
         * @param {...String} [types] When specified, only objects of these types are returned
         * @return {Array}
         */
        getObjects(...types: string[]): BaseFabricObject[];
        /**
         * Returns object at specified index
         * @param {Number} index
         * @return {Object} object at index
         */
        item(index: number): BaseFabricObject;
        /**
         * Returns true if collection contains no objects
         * @return {Boolean} true if collection is empty
         */
        isEmpty(): boolean;
        /**
         * Returns a size of a collection (i.e: length of an array containing its objects)
         * @return {Number} Collection size
         */
        size(): number;
        /**
         * Returns true if collection contains an object.\
         * **Prefer using {@link `BaseFabricObject#isDescendantOf`} for performance reasons**
         * instead of `a.contains(b)` use `b.isDescendantOf(a)`
         * @param {Object} object Object to check against
         * @param {Boolean} [deep=false] `true` to check all descendants, `false` to check only `_objects`
         * @return {Boolean} `true` if collection contains an object
         */
        contains(object: BaseFabricObject, deep?: boolean): boolean;
        /**
         * Returns number representation of a collection complexity
         * @return {Number} complexity
         */
        complexity(): number;
        /**
         * Moves an object or the objects of a multiple selection
         * to the bottom of the stack of drawn objects
         * @param {fabric.Object} object Object to send to back
         * @returns {boolean} true if change occurred
         */
        sendObjectToBack(object: BaseFabricObject): boolean;
        /**
         * Moves an object or the objects of a multiple selection
         * to the top of the stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @returns {boolean} true if change occurred
         */
        bringObjectToFront(object: BaseFabricObject): boolean;
        /**
         * Moves an object or a selection down in stack of drawn objects
         * An optional parameter, `intersecting` allows to move the object in behind
         * the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {boolean} [intersecting] If `true`, send object behind next lower intersecting object
         * @returns {boolean} true if change occurred
         */
        sendObjectBackwards(object: BaseFabricObject, intersecting?: boolean): boolean;
        /**
         * Moves an object or a selection up in stack of drawn objects
         * An optional parameter, intersecting allows to move the object in front
         * of the first intersecting object. Where intersection is calculated with
         * bounding box. If no intersection is found, there will not be change in the
         * stack.
         * @param {fabric.Object} object Object to send
         * @param {boolean} [intersecting] If `true`, send object in front of next upper intersecting object
         * @returns {boolean} true if change occurred
         */
        bringObjectForward(object: BaseFabricObject, intersecting?: boolean): boolean;
        /**
         * Moves an object to specified level in stack of drawn objects
         * @param {fabric.Object} object Object to send
         * @param {number} index Position to move to
         * @returns {boolean} true if change occurred
         */
        moveObjectTo(object: BaseFabricObject, index: number): boolean;
        findNewLowerIndex(object: BaseFabricObject, idx: number, intersecting?: boolean): number;
        findNewUpperIndex(object: BaseFabricObject, idx: number, intersecting?: boolean): number;
        /**
         * Given a bounding box, return all the objects of the collection that are contained in the bounding box.
         * If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
         * This is meant to work with selection. Is not a generic method.
         * @returns array of objects contained in the bounding box, ordered from top to bottom stacking wise
         */
        collectObjects({ left, top, width, height }: TBBox, { includeIntersecting }?: {
            includeIntersecting?: boolean | undefined;
        }): InteractiveFabricObject<Partial<import("./shapes/Object/types").FabricObjectProps>, import("./shapes/Object/types").SerializedObjectProps, import("./EventTypeDefs").ObjectEvents>[];
    };
} & TBase;
//# sourceMappingURL=Collection.d.ts.map