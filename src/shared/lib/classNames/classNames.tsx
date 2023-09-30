type Mods = Record<string, boolean | string>

export function myClassNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}

myClassNames('remove-btn', { hovered: true, selectable: true, red: false }, ['padding'])
