// Global types declaration - allows to import SCSS files to typescript (TSX) file.

declare module '*.scss' {

    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const IS_DEV: boolean
