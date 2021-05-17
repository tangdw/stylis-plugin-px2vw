import { StylisPlugin } from '@emotion/cache';
interface Options {
    minWidth?: number;
    width?: number;
    precision?: number;
}
interface Props extends Options {
    excludes?: string[];
}
declare const stylisPluginPx2vw: (props?: Props | undefined) => StylisPlugin;
export default stylisPluginPx2vw;
