import { fakeDB } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
    createBurger(burgerData) {
        throw new Error("Method not implemented.")
    }
    async getBurgersById(burgerId) {
        const burger = await fakeDB.burgers.find(b => b.id == burgerId)
        if (!burger) {
            throw new BadRequest('the id was invalid burger does not exist')
        }

        return burger
    }

    async getBurgers(query) {
        let burgers = await fakeDB.burgers
        return burgers
    }


}

export const burgersService = new BurgersService()