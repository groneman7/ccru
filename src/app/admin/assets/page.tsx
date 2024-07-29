import { AssetsTable } from "./_components/AssetsTable"
import { getAllAssets } from "~/server/assets"

export default async function AssetsPage() {
  const { assets } = await getAllAssets()

  return (
    <div className="default-admin-page">
      <AssetsTable data={assets ?? []}/>
    </div>
  )
}