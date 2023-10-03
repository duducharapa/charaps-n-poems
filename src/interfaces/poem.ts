import { Stanza } from "./stanza";

interface Poem {
    id: number;
    name: string;
    stanzas: Stanza[];
}

interface ListPoemsRequest {
    data: Poem[];
}

export type {
    Poem,
    ListPoemsRequest
};