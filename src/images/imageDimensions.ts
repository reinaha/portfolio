const dimensionsBySrc = new Map<string, number>();

export const registerImageAspectRatio = (src: string, width: number, height: number) => {
    dimensionsBySrc.set(src, width / height);
};

export const getImageAspectRatio = (src: string): number | undefined => {
    return dimensionsBySrc.get(src);
};
