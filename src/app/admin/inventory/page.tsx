import { InventoryTable } from "./_components/InventoryTable"
import { getAllItems } from "~/server/inventory"

export default async function InventoryPage() {
  const { data } = await getAllItems();

  return (
    <div className="default-admin-page">
      <InventoryTable data={data ?? []}/>
    </div>
  )
}