import {Client, ItemPedido} from './clientAndPedido';

class Pedido {
    private _client: Client;
    private _itens: ItemPedido[] = [];
    private _paymentMethod: string;
    private _discount: number = 0;

    constructor(client: Client, itens: ItemPedido[], payment: string, discount: number){
        this._client = client;
        this._itens = itens;
        this._paymentMethod = payment;
        this._discount = discount;
    }

    calculateTotal() {
        return this._itens.reduce((acc, curr) => acc += curr.price , 0)
    }

    calculateTotalDiscount() {
       return this.calculateTotal() * (1 - this._discount)
    }
}


const eu1 = new Client('Brayan Santos');
const eu2 = new Client('Brayan Rosa');

const itemPedido1 = new ItemPedido('Batata Frita', 20);
const itemPedido2 = new ItemPedido('Açai', 10);

const pedido = new Pedido(eu1, [itemPedido1, itemPedido2], 'cash', 0.2);

console.log(pedido.calculateTotal());
console.log(pedido.calculateTotalDiscount());