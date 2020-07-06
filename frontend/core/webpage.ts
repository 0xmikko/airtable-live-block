import {Block} from "./block";

export interface JSONBlock {
    index: number;
    content: string;
}

export interface Webpage {
    id: string;
    blocks: JSONBlock[];
}
