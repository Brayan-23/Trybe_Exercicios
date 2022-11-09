export class Client {
    constructor(private nome: string) {}
}

export class ItemPedido {
    constructor(private _nome: string, private _price: number) {}

    get price() {
        return this._price;
    }
}