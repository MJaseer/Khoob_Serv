import { Document, Model, Schema } from "mongoose";

export const findOne = async <T>(item: string, value: string, itemSchema: Model<T & Document>,from?:string,) => {
    try {
        if(from) console.log(from);
        
        const data = await itemSchema.findOne({ item: value })
        console.log(data);
        
        if (!data) {
            if(from != 'register') throw new Error('No data found');
        }
        return data 
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to find ${item}`, error);
        else throw error;
    }
}

export const findMany = async <T>(item: string, value: string, itemSchema: Model<T & Document>) => {
    try {
        const data = await itemSchema.find({ item: value })
        if (!data) throw new Error('No data found');
        return data
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to find ${item}`, error);
        else throw error;
    }
}

export const findById = async <T>(item: string, id: Schema.Types.ObjectId, itemSchema: Model<T & Document>) => {
    try {
        const data = await itemSchema.findById({ id })
        if (!data) throw new Error('No data found');
        return data
    } catch (error) {
        console.log(error);
        if (error instanceof Error) throw new Error(`Failed to find ${item}`, error);
        else throw error;
    }
}