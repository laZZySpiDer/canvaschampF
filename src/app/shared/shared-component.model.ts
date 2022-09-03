export interface ProductDetailCardData {
    title: string;
    imageName: string;
    description?: string;
    buttonName?: string;
    alignment?: string;
}

export interface ProductCardData {
    title: string;
    dimension?: string;
    strikePrice?: string;
    cprice?: string;
    varietyList?: string[];
    imageName: string;
    buttonName?: string;
}

export enum Alignment {
    CENTER = 'center',
    LEFT = 'left',
}