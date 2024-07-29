"use server";
// import dayjs from "dayjs";
import { db } from "./db";
import type { Asset } from '@prisma/client'

export async function getAssetById(id: string) {
  try {
    const rawAsset = await db.asset.findUnique({
      where: {
        id
      }
    });
    if (!rawAsset) {
      return {
        status: 404,
        error: "Asset not found"
      }
    }
  
    const brands = await db.assetBrand.findMany();
    const categories = await db.assetCategory.findMany();
    const units = await db.quantityUnit.findMany();
  
    const asset: Asset = {  
      id: rawAsset.id,
      name: rawAsset.name,
      brand: brands.find((brand) => brand.id === rawAsset.brand)?.name ?? null,
      category: categories.find((category) => category.id === rawAsset.category)?.name ?? null,
      location: rawAsset.location,
      quantity: rawAsset.quantity,
      quantityUnit: units.find((unit) => unit.id === rawAsset.quantityUnit)?.name ?? null,
      packageSize: rawAsset.packageSize,
      packageSizeUnit: units.find((unit) => unit.id === rawAsset.packageSizeUnit)?.name ?? null,
      upc: rawAsset.upc,
      ndc: rawAsset.ndc,
      expiration: rawAsset.expiration,
      lot: rawAsset.lot,
      comments: rawAsset.comments
    }

    return {
      status: 200,
      asset
    }
  } catch (ex) {
    return {
      status: 500,
      error: ex
    }
  }
}

export async function getAllAssets() {
  try {
    const rawAssets = await db.asset.findMany();
    const brands = await db.assetBrand.findMany();
    const categories = await db.assetCategory.findMany();
    const units = await db.quantityUnit.findMany();

    const assets: Asset[] = rawAssets.map((asset) => {
      return {
        id: asset.id,
        name: asset.name,
        brand: brands.find((brand) => brand.id === asset.brand)?.name ?? null,
        category: categories.find((category) => category.id === asset.category)?.name ?? null,
        location: asset.location,
        quantity: asset.quantity,
        quantityUnit: units.find((unit) => unit.id === asset.quantityUnit)?.name ?? null,
        packageSize: asset.packageSize,
        packageSizeUnit: units.find((unit) => unit.id === asset.packageSizeUnit)?.name ?? null,
        upc: asset.upc,
        ndc: asset.ndc,
        expiration: asset.expiration,
        lot: asset.lot,
        comments: asset.comments
      }
    })

    return {
      status: 200,
      assets,
    }
  } catch (ex) {
    return {
      status: 500,
      error: ex
    }
  }
}