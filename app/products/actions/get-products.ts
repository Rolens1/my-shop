"use server"

import { get } from "@/app/common/utils/fetch" 
import { Product } from "../interfaces/product.interface"

export default async function getProducts():Promise<Product[]> {
    return await get<Product[]>('products', ['products'])
};
