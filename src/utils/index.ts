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