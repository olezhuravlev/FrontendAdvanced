import {lazy} from "react";

export const MainPageAsync = lazy(() => import("./MainPage"));
// export const MainPageAsync = lazy(
//     () => new Promise(function (resolveFunc) {
//             //@ts-ignore
//             setTimeout(() => resolveFunc(import("./MainPage")), 1000);
//         }
//     ));
