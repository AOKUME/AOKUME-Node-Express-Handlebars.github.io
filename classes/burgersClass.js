const burgerModel = require('../models/burgersModel');

class Burger {

    //////////////////////////////////////

    constructor(burger_obj) {
        this._burger = burger_obj;
    }

    //////////////////////////////////////


    get id() {
        return this._burger.id;
    }

    get burger_name() {
        return this._burger.burger_name;
    }
    set burger_name(burger_name) {
        this._burger.burger_name = burger_name;
    }

    get devoured() {
        return this._burger.devoured;
    }s
    set devoured(devoured) {
        this._burger.devoured = devoured;
    }

    //////////////////////////////////////
    // CREATE //

    async insert() {
        const results = await burgerModel.insertOne(this._burger);
        this._burger.id = results.insertId;
    }

    //////////////////////////////////////
    // READ / RETREIVE //

    async selectAll() {
        this._burger = await burgerModel.selectAll();
    }

    async getById(id){
        this._burger = await burgerModel.selectByID(id);
    }

    //////////////////////////////////////
    // UPDATE //

    async merge(new_burger) {
        this._burger = { ...this._burger, ...new_burger};
    }

    async update(id) {
        await burgerModel.updateOne(id, this._burger);
    }

    //////////////////////////////////////
    // DELETE //

    async delete(id) {
        await burgerModel.deleteOne(id, this._burger);
    }

    getLiteral() {
        return this._burger;
    }
}
module.exports = Burger;
