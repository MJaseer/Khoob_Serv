import { Document, Model } from "mongoose";
import { User } from "../../models/user";
import { Address } from "../../models/address";
import { Cart } from "../../models/cart";
import { Review } from "../../models/review";
import { Wallet } from "../../models/wallet";
import { Product } from "../../models/product";
import { Category } from "../../models/category";
import { Order } from "../../models/order";
import { Wishlist } from "../../models/wishlist";
import { Coupon } from "../../models/coupon";




export const create = async <T>(item: string, value: (User | Address | Cart | Coupon | Review | Wallet | Product | Category | Order | Wishlist), itemSchema: Model<T & Document>) => {
    try {
        const data = new itemSchema(value)
        if (!data) throw new Error('No data found');
        const saveData = await data.save()
        return saveData
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to create ${item}`, error);
        else throw error;
    }
}

