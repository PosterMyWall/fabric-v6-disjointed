import * as Fabric from './dist/index';
import {InteractiveFabricObject} from "./src/shapes/Object/InteractiveObject";
import {Grayscale} from "./src/filters/Grayscale";
import {BaseFilter} from "./src/filters/BaseFilter";

export const onResizeWithLeftHandle = (e: Fabric.TPointerEvent, transformData: Fabric.Transform): any => {
  if (!transformData.corner) {
    return false;
  }
}
