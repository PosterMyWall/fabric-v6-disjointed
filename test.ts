import * as Fabric from './dist/index';

export const onResizeWithLeftHandle = (e: Fabric.TPointerEvent, transformData: Fabric.Transform): boolean => {
  if (!transformData.corner) {
    return false;
  }
}
