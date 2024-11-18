import type { InventoryLink } from '@prisma/client';
import { Form, Input, Select } from 'antd'

type InventoryLinkFormProps = {
  linkId?: string;
  onCreateLink?: () => void;
};
export function InventoryLinkForm(props: InventoryLinkFormProps) {
  const [inventoryLinkForm] = Form.useForm<InventoryLink>();

  return <Form className="flex flex-1 flex-col gap-4" form={inventoryLinkForm} layout="vertical">
    <Form.Item label="Product" name="linkName">
      <Input />
    </Form.Item>
    <Form.Item label="Description" name="test1">
      <Input.TextArea />
    </Form.Item>
    <Form.Item label="Categories" name="categories">
      <Select
        mode="multiple"
        showSearch
      />
    </Form.Item>
    <Form.Item label="Comments" name="comments">
      Insert comment section here
    </Form.Item>
    <Form.Item label="Items linked">
      List of inventory items linked
    </Form.Item>
  </Form>;
}


// model InventoryLink {
//   id          String   @id @default(auto()) @map("_id") @db.ObjectId
//   linkName    String
//   description String?
//   category    String? // Link to id of InventoryCategory
//   comments    String?
//   items       String[] @default([])
// }
