import * as Fabric from './dist/index';
import {InteractiveFabricObject} from "./src/shapes/Object/InteractiveObject";
import {Grayscale} from "./src/filters/Grayscale";
import {BaseFilter} from "./src/filters/BaseFilter";

export const onResizeWithLeftHandle = (e: Fabric.TPointerEvent, transformData: Fabric.Transform): any => {
  if (!transformData.corner) {
    return false;
  }

  const canvas = new Fabric.Canvas('test');

  var img = new Image(1,1);
  const imageItem = new Fabric.Image(img,{
    frameWidth: 10,
    frameHeight: 10,
    frameTime: 10,
  })
  const spriteItem = new Fabric.Sprite(img,{
    frameWidth: 10,
    frameHeight: 10,
    frameTime: 10,
  })
  spriteItem.play();
}
