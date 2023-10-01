export const square = (val: number) => {
    if (val === 0) {
        return 0
    }

    if (val === 1) {
        return 1
    }

    return Math.pow(val, 2)
}
