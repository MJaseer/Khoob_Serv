import { Request, Response } from "express";
import productSchema, { Product } from "../../models/product";

import dotenv from "dotenv";
import { Creates } from "../../repositeries/common/create";
dotenv.config();

export class ProductClass {

    private createService!: Creates

    constructor() {
        this.createService = new Creates()
    }

    async addProduct(req: Request, res: Response) {

        try {
            const { name, description, returnPolicy, tags, category, quantity, image } = req.body
            const productData: Product = {
                name: name,
                description: description,
                category: category,
                quantity: quantity,
                returnPolicy: returnPolicy,
                tags: tags,
                image: image,
            }
            const newProduct = await this.createService.create('produc', productData, productSchema)
            res.status(200).json({ message: 'Product succesfully created', newProduct })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to create product" });
        }
    }
}