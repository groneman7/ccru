"use server";
import { db } from "./db";
import { defaultQueryReturns } from './defaultQueryResponses'
import type { QueryReturn } from "./defaultQueryResponses"
import type { Inventory, InventoryBrand, QuantityUnit } from '@prisma/client'

export async function getAllQuantityUnits(): Promise<QueryReturn<QuantityUnit[]>> {
  try {
    const results = await db.quantityUnit.findMany()
    if (!results) {
      return defaultQueryReturns[404]
    }
    return {
      ...defaultQueryReturns[200],
      data: results
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function searchBrands(query: string): Promise<QueryReturn<InventoryBrand[]>> {
  try {
    const results = await db.inventoryBrand.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive"
        }
      }
    })
    if (!results) {
      return defaultQueryReturns[404]
    }
    return {
      ...defaultQueryReturns[200],
      data: results
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getAllBrands(): Promise<QueryReturn<InventoryBrand[]>> {
  try {
    const allBrands = await db.inventoryBrand.findMany()
    if (!allBrands) {
      return defaultQueryReturns[404]
    }
    return {
      ...defaultQueryReturns[200],
      data: allBrands
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getItemById(id: string): Promise<QueryReturn<Inventory>> {
  try {
    const item = await db.inventory.findUnique({
      where: {
        id
      }
    });
    if (!item) {
      return defaultQueryReturns[404]
    }
  
    const brands = await db.inventoryBrand.findMany();
    const categories = await db.inventoryCategory.findMany();
    const units = await db.quantityUnit.findMany();
  
    const mappedItem: Inventory = {  
      id: item.id,
      name: item.name,
      brand: brands.find((brand) => brand.id === item.brand)?.name ?? null,
      category: categories.find((category) => category.id === item.category)?.name ?? null,
      location: item.location,
      quantity: item.quantity,
      quantityUnit: units.find((unit) => unit.id === item.quantityUnit)?.name ?? null,
      packageSize: item.packageSize,
      packageSizeUnit: units.find((unit) => unit.id === item.packageSizeUnit)?.name ?? null,
      upc: item.upc,
      ndc: item.ndc,
      expiration: item.expiration,
      lot: item.lot,
      comments: item.comments,
      link: item.link
    }
    return {
      ...defaultQueryReturns[200],
      data: mappedItem
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getAllItems(): Promise<QueryReturn<Inventory[]>> {
  try {
    const items = await db.inventory.findMany();
    if (!items) {
      return defaultQueryReturns[404];
    }

    const brands = await db.inventoryBrand.findMany();
    const categories = await db.inventoryCategory.findMany();
    const units = await db.quantityUnit.findMany();

    const mappedItems: Inventory[] = items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        brand: brands.find((brand) => brand.id === item.brand)?.name ?? null,
        category: categories.find((category) => category.id === item.category)?.name ?? null,
        location: item.location,
        quantity: item.quantity,
        quantityUnit: units.find((unit) => unit.id === item.quantityUnit)?.name ?? null,
        packageSize: item.packageSize,
        packageSizeUnit: units.find((unit) => unit.id === item.packageSizeUnit)?.name ?? null,
        upc: item.upc,
        ndc: item.ndc,
        expiration: item.expiration,
        lot: item.lot,
        comments: item.comments,
        link: item.link
      }
    })

    return {
      ...defaultQueryReturns[200],
      data: mappedItems,
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}