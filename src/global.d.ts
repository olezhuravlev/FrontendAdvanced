// Global types declaration - allows to import SCSS files to typescript (TSX) file.

declare module "*.scss" {

    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}
