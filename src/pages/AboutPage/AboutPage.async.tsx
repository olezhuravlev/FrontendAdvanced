import {lazy} from "react";

export const AboutPageAsync = lazy(() => import("./AboutPage"));
// const executor = function (resolveFunc: any, rejectFunc: any) {
//     setTimeout(function () {
//         return resolveFunc(import("./AboutPage"));
//     }, 1000);
// }
//
// export const AboutPageAsync = lazy(() => {
//     return new Promise(executor)
// });
