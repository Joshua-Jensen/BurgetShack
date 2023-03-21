import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgId', this.getBurgerById)
            .post('', this.createBurger)
        this.test

    }
    async createBurger(req, res, next) {
        try {
            const burgerData = req.body
            const burger = await burgersService.createBurger(burgerData)
            return res.send(burger)
        }
        catch (error) {
            next(error)
        }
    }

    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.burgId
            const burger = await burgersService.getBurgersById(burgerId)
            return res.send(burger)
        }
        catch (error) {
            next(error)
        }
    }


    async getBurgers(req, res, next) {
        try {
            const query = req.query
            const burgers = await burgersService.getBurgers(query)
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

}