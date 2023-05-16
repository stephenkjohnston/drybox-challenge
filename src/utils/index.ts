export function formatDimensions(dimension: number) {
    const stringifiedDimensions = `${dimension}`.split('.');
    let newDimensions;
    if (~~stringifiedDimensions[1] === 0) {
        newDimensions = `${stringifiedDimensions}'`
    } else {
        newDimensions = `${stringifiedDimensions[0]}' ${stringifiedDimensions[1]}"`
    }

    return newDimensions;
}

export function hyphenize_string(str: string) {
    return str?.replace(/,/g, '').replace(/\s/g, "-").toLowerCase();
}

export function getTwentyRandomCities(cities: string[]) {
    const indexes: number[] = [];
    while(indexes.length < 20) {
        const index = Math.floor(Math.random() * cities?.length);
        if (!indexes.includes(index)) {
            indexes.push(index);
        }
    }

    return indexes.map(index => cities[index]);
}