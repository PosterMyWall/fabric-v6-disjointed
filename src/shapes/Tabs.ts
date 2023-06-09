import {Group, GroupProps} from './Group';

export interface TabsOwnProps {
  customPMWType: string;
}

export interface TabsProps extends GroupProps, TabsOwnProps {}

export class Tabs extends Group {
  declare customPMWType: string;
}
