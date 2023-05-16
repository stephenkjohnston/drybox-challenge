export type Container = {
    id: string,
    title: string,
    image: string,
    dimensions: ContainerDimension[],
    keywords: string[],
    description?: string,
    condition: string,
    colors: string[]
}

export type Containers = Container[];

export type ContainerDimension = {
    width: number,
    height: number,
    length: number
}