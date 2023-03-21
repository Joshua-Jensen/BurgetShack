import { generateId } from "../utils/GenerateID.js";

export class Burger {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.price = data.price
    }
}
class FakeDB {

    burgers = [
        new Burger({
            name: 'burget',
            price: 1,
        }),

        new Burger({
            name: 'the other burget',
            price: 3,
        }),

        new Burger({
            name: 'this burget is crazy',
            price: 10
        }),

    ]
}


export const fakeDB = new FakeDB()