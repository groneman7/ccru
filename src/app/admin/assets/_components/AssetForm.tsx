'use client'
import type { Asset } from '@prisma/client';
import { Form, Input } from 'antd';

type AssetFormProps = {
  asset: Asset | null
}

export function AssetForm({ asset }: AssetFormProps) {
  const [assetForm] = Form.useForm();
  
  return (
    <Form className="flex-1" form={assetForm}>
      <Form.Item
        label="Asset"
        name="name"
      >
        <Input />
      </Form.Item>
    </Form>
  );
}