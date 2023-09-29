import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await import('./MainPage'))
// export const MainPageAsync = lazy(
//     () => new Promise(function (resolveFunc) {
//             //@ts-ignore
//             setTimeout(() => resolveFunc(import("./MainPage")), 1000);
//         }
//     ));
