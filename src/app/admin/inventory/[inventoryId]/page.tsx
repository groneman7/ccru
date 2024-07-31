import { getItemById } from "~/server/inventory";
import { InventoryForm } from "../_components/InventoryForm"

export default async function ItemPage({ params }: {
  params: {
    itemId: string
  }
}) {

  if (params.itemId === 'new') {
    return (
      <div className="default-admin-page">
        <InventoryForm item={null} />
      </div>
    );
  } else {
    const response = await getItemById(params?.itemId);
    <div className="default-admin-page">
      {
        response.status === 200 ? <InventoryForm item={response.data} /> : <div>{response.status}</div>
      }
    </div>
  }
}