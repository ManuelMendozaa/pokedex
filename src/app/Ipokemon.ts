
export interface Ipokemon {
    _id: string;
    pkdx_id: number;
    national_id: number;
    name: string;
    _v: number;
    image_url: string;
    description: string;
    art_url: string;
    types: Array<string>;
    evolutions: ArrayBuffer;
}