interface Card {
    id: string,
    title: string,
    body: string,
}

interface List {
    id: string,
    title: string,
    cards: Card[],
}

interface NewCard {
    title: string,
    body: string,
    list_id: string,
}

interface NewList {
    title: string
}

interface ResponseList {
    id: string,
    title: string,
    user_id: string,
    created_at: Date,
    updated_at: Date,
}

export type { Card, List, NewCard, NewList, ResponseList };