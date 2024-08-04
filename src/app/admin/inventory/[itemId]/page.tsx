import { getItemById } from "~/server/inventory";
import { InventoryForm } from "../_components/InventoryForm"

export default async function ItemPage({ params }: {
  params: {
    itemId: string
  }
}) {
  const response = params.itemId === 'new' ? null : await getItemById(params?.itemId);

  return (
    <div className="default-admin-page">
      <InventoryForm
        item={response?.data}
      />
    </div>
  )
}