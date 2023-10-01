export const delay = async (callback: any, ms: number) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms)
    })
}
