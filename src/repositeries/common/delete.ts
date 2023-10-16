import { Model } from "mongoose";
import { IAddress } from "../../models/address";
import { IProduct } from "../../models/product";
import { ICart } from "../../models/cart";
import { IReview } from "../../models/review";
import { ICategory } from "../../models/category";
import { IOrder } from "../../models/order";
import { ICoupon } from "../../models/coupon";
import { IWallet } from "../../models/wallet";
import { IWishlist } from "../../models/wishlist";
import { IUser } from "../../models/user";

export const deleteOne = async (item: string, value: string, Schema: Model<IAddress | IUser | IProduct | ICart | IReview | ICategory | IOrder | ICoupon | IWallet | IWishlist>) => {
    try {
        const data = await Schema.deleteOne({ [item]: value }, { new: true });
        if (!data) throw new Error('No data found');
        return { message: `${item} succesfully deleted` }
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to delete ${item}`, error);
        else throw error;
    }
}

export const deleteMany = async (item: string, value: string, Schema: Model<IAddress | IUser | IProduct | ICart | IReview | ICategory | IOrder | ICoupon | IWallet | IWishlist>) => {
    try {
        const data = await Schema.deleteMany({ [item]: value }, { new: true })
        if (!data) throw new Error('No data found');
        return { message: `${item} succesfully deleted` }
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to delete ${item}`, error);
        else throw error;
    }
}
