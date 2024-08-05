"use server";
import { db } from "./db";
import { defaultQueryReturns } from './defaultQueryResponses'
import type { QueryResponse } from "./defaultQueryResponses"
import type { Inventory, InventoryBrand, QuantityUnit } from '@prisma/client'

export async function createItem(item: Omit<Inventory, 'id'>) {
  try {

    const newItem = await db.inventory.create({
      data: {
        ...item,
      }
    })
    
    return {
      status: 201,
      data: newItem,
      message: "Item created successfully"
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getAllQuantityUnits(): Promise<QueryResponse<QuantityUnit[]>> {
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

export async function createBrand(brandName: string): Promise<QueryResponse<InventoryBrand>> {
  try {
    const newBrand = await db.inventoryBrand.create({
      data: {
        brandName
      }
    })
    return {
      ...defaultQueryReturns[201],
      data: newBrand
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function searchBrands(query: string): Promise<QueryResponse<InventoryBrand[]>> {
  try {
    const results = await db.inventoryBrand.findMany({
      where: {
        brandName: {
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

export async function getAllBrands(): Promise<QueryResponse<InventoryBrand[]>> {
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

export async function getBrandById(id: string): Promise<QueryResponse<InventoryBrand>> {
  try {
    const brand = await db.inventoryBrand.findUnique({
      where: {
        id
      }
    });
    if (!brand) {
      return defaultQueryReturns[404]
    }
    return {
      ...defaultQueryReturns[200],
      data: brand
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getItemById(id: string): Promise<QueryResponse<Inventory>> {
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
      ...item,
      brandId: brands.find((brand) => brand.id === item.brandId)?.brandName ?? null,
      categoryId: categories.find((category) => category.id === item.categoryId)?.label ?? null,
      quantityUnitId: units.find((unit) => unit.id === item.quantityUnitId)?.label ?? null,
      packageSizeUnitId: units.find((unit) => unit.id === item.packageSizeUnitId)?.label ?? null,
    }
    return {
      ...defaultQueryReturns[200],
      data: mappedItem
    }
  } catch (ex) {
    return defaultQueryReturns[500]
  }
}

export async function getAllItems(): Promise<QueryResponse<Inventory[]>> {
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
        ...item,
        brandId: brands.find((brand) => brand.id === item.brandId)?.brandName ?? null,
        categoryId: categories.find((category) => category.id === item.categoryId)?.label ?? null,
        quantityUnitId: units.find((unit) => unit.id === item.quantityUnitId)?.label ?? null,
        packageSizeUnitId: units.find((unit) => unit.id === item.packageSizeUnitId)?.label ?? null,
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