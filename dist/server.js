"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Sesami_node_1 = __importDefault(require("./Sesami.node"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT ?? 3000;
app.get("/test", async (req, res) => {
    try {
        const api = new Sesami_node_1.default({
            apiToken: process.env.API_TOKEN,
            apiClientID: process.env.API_CLIENT_ID,
            shopID: process.env.SHOP_ID,
        });
        if (!process.env.SHOP_ID) {
            throw new Error("SHOP_ID is not defined");
        }
        const shops = api.shops.get({});
        const ishop = api.shops.getById(process.env.SHOP_ID);
        const shop_data = await ishop.get();
        const shop_config = await ishop.config();
        const shop_services = await ishop.services.get({});
        const shop_team = await ishop.teamMembers.get({});
        const iservice = ishop.services.getById("67f33c31453b8f624137c77a");
        const service_data = await iservice.get();
        res.json({
            shops,
            shop_data,
            shop_config,
            shop_services,
            service_data,
            shop_team,
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(port, function () {
    console.log(`🚀 Server listening on http://localhost:${port}`);
});
