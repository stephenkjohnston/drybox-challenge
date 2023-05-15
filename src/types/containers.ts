export type Container = {
    title: string,
    image: string,
    dimensions: ContainerDimension[],
    keywords: string[],
    condition: string,
    colors: string[]
}

export type Containers = Container[];

export type ContainerDimension = {
    width: number,
    height: number,
    length: number
}