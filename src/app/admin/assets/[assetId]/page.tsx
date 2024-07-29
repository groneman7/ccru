import { getAssetById } from "~/server/assets"
import { AssetForm } from "../_components/AssetForm"

export default async function AssetPage({ params }: {
  params: {
    assetId: string
  }
}) {
  const { asset } = await getAssetById(params.assetId)

  return (
    <div className="default-admin-page">
      <AssetForm asset={asset ?? null} />
    </div>
  )
}