import { z } from 'zod';
import type { Prisma } from '../client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const EventScalarFieldEnumSchema = z.enum(['id','date','eventName','description','location','timeStart','timeEnd','createdAt','createdBy']);

export const EventTemplateScalarFieldEnumSchema = z.enum(['id','templateName','description','location','timeStart','timeEnd']);

export const EventPositionScalarFieldEnumSchema = z.enum(['id','positionName','label','description','allowedUserTypes','officerOnly']);

export const InventoryScalarFieldEnumSchema = z.enum(['id','itemName','brandId','categoryId','location','quantity','quantityUnitId','packageSize','packageSizeUnitId','upc','ndc','expiration','lot','comments','linkId']);

export const InventoryCategoryScalarFieldEnumSchema = z.enum(['id','label','description']);

export const QuantityUnitScalarFieldEnumSchema = z.enum(['id','label']);

export const InventoryTagScalarFieldEnumSchema = z.enum(['id','label']);

export const InventoryBrandScalarFieldEnumSchema = z.enum(['id','brandName']);

export const InventoryLinkScalarFieldEnumSchema = z.enum(['id','linkName','description','category','comments','items']);

export const UserRoleScalarFieldEnumSchema = z.enum(['id','label','description']);

export const UserTypeScalarFieldEnumSchema = z.enum(['id','label','description']);

export const OfficerRoleScalarFieldEnumSchema = z.enum(['id','label','description']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EVENT SCHEMA
/////////////////////////////////////////

export const EventSchema = z.object({
  id: z.string(),
  date: z.coerce.date(),
  eventName: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  timeStart: z.coerce.date().nullable(),
  timeEnd: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
})

export type Event = z.infer<typeof EventSchema>

/////////////////////////////////////////
// EVENT TEMPLATE SCHEMA
/////////////////////////////////////////

export const EventTemplateSchema = z.object({
  id: z.string(),
  templateName: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  timeStart: z.coerce.date().nullable(),
  timeEnd: z.coerce.date().nullable(),
})

export type EventTemplate = z.infer<typeof EventTemplateSchema>

/////////////////////////////////////////
// EVENT POSITION SCHEMA
/////////////////////////////////////////

export const EventPositionSchema = z.object({
  id: z.string(),
  positionName: z.string(),
  label: z.string().nullable(),
  description: z.string().nullable(),
  allowedUserTypes: z.string().array(),
  officerOnly: z.boolean().nullable(),
})

export type EventPosition = z.infer<typeof EventPositionSchema>

/////////////////////////////////////////
// INVENTORY SCHEMA
/////////////////////////////////////////

export const InventorySchema = z.object({
  id: z.string(),
  itemName: z.string(),
  brandId: z.string().nullable(),
  categoryId: z.string().nullable(),
  location: z.string().nullable(),
  quantity: z.number().int(),
  quantityUnitId: z.string().nullable(),
  packageSize: z.number().int().nullable(),
  packageSizeUnitId: z.string().nullable(),
  upc: z.string().nullable(),
  ndc: z.string().nullable(),
  expiration: z.coerce.date().nullable(),
  lot: z.string().nullable(),
  comments: z.string().nullable(),
  linkId: z.string().nullable(),
})

export type Inventory = z.infer<typeof InventorySchema>

/////////////////////////////////////////
// INVENTORY CATEGORY SCHEMA
/////////////////////////////////////////

export const InventoryCategorySchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().nullable(),
})

export type InventoryCategory = z.infer<typeof InventoryCategorySchema>

/////////////////////////////////////////
// QUANTITY UNIT SCHEMA
/////////////////////////////////////////

export const QuantityUnitSchema = z.object({
  id: z.string(),
  label: z.string(),
})

export type QuantityUnit = z.infer<typeof QuantityUnitSchema>

/////////////////////////////////////////
// INVENTORY TAG SCHEMA
/////////////////////////////////////////

export const InventoryTagSchema = z.object({
  id: z.string(),
  label: z.string(),
})

export type InventoryTag = z.infer<typeof InventoryTagSchema>

/////////////////////////////////////////
// INVENTORY BRAND SCHEMA
/////////////////////////////////////////

export const InventoryBrandSchema = z.object({
  id: z.string(),
  brandName: z.string(),
})

export type InventoryBrand = z.infer<typeof InventoryBrandSchema>

/////////////////////////////////////////
// INVENTORY LINK SCHEMA
/////////////////////////////////////////

export const InventoryLinkSchema = z.object({
  id: z.string(),
  linkName: z.string(),
  description: z.string().nullable(),
  category: z.string().nullable(),
  comments: z.string().nullable(),
  items: z.string().array(),
})

export type InventoryLink = z.infer<typeof InventoryLinkSchema>

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().nullable(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// USER TYPE SCHEMA
/////////////////////////////////////////

export const UserTypeSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().nullable(),
})

export type UserType = z.infer<typeof UserTypeSchema>

/////////////////////////////////////////
// OFFICER ROLE SCHEMA
/////////////////////////////////////////

export const OfficerRoleSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().nullable(),
})

export type OfficerRole = z.infer<typeof OfficerRoleSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////
// EVENT SHIFT
//------------------------------------------------------


/////////////////////////////////////////
// EVENT SHIFT SCHEMA
/////////////////////////////////////////

export const EventShiftSchema = z.object({
  positionId: z.string(),
  userId: z.string().nullable(),
})

export type EventShift = z.infer<typeof EventShiftSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EVENT
//------------------------------------------------------

export const EventIncludeSchema: z.ZodType<Prisma.EventInclude> = z.object({
}).strict()

export const EventArgsSchema: z.ZodType<Prisma.EventDefaultArgs> = z.object({
  select: z.lazy(() => EventSelectSchema).optional(),
  include: z.lazy(() => EventIncludeSchema).optional(),
}).strict();

export const EventSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  eventName: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  timeStart: z.boolean().optional(),
  timeEnd: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  shifts: z.union([z.boolean(),z.lazy(() => EventShiftArgsSchema)]).optional(),
}).strict()

// EVENT TEMPLATE
//------------------------------------------------------

export const EventTemplateIncludeSchema: z.ZodType<Prisma.EventTemplateInclude> = z.object({
}).strict()

export const EventTemplateArgsSchema: z.ZodType<Prisma.EventTemplateDefaultArgs> = z.object({
  select: z.lazy(() => EventTemplateSelectSchema).optional(),
  include: z.lazy(() => EventTemplateIncludeSchema).optional(),
}).strict();

export const EventTemplateSelectSchema: z.ZodType<Prisma.EventTemplateSelect> = z.object({
  id: z.boolean().optional(),
  templateName: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  timeStart: z.boolean().optional(),
  timeEnd: z.boolean().optional(),
  shifts: z.union([z.boolean(),z.lazy(() => EventShiftArgsSchema)]).optional(),
}).strict()

// EVENT POSITION
//------------------------------------------------------

export const EventPositionArgsSchema: z.ZodType<Prisma.EventPositionDefaultArgs> = z.object({
  select: z.lazy(() => EventPositionSelectSchema).optional(),
}).strict();

export const EventPositionSelectSchema: z.ZodType<Prisma.EventPositionSelect> = z.object({
  id: z.boolean().optional(),
  positionName: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  allowedUserTypes: z.boolean().optional(),
  officerOnly: z.boolean().optional(),
}).strict()

// INVENTORY
//------------------------------------------------------

export const InventoryArgsSchema: z.ZodType<Prisma.InventoryDefaultArgs> = z.object({
  select: z.lazy(() => InventorySelectSchema).optional(),
}).strict();

export const InventorySelectSchema: z.ZodType<Prisma.InventorySelect> = z.object({
  id: z.boolean().optional(),
  itemName: z.boolean().optional(),
  brandId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  location: z.boolean().optional(),
  quantity: z.boolean().optional(),
  quantityUnitId: z.boolean().optional(),
  packageSize: z.boolean().optional(),
  packageSizeUnitId: z.boolean().optional(),
  upc: z.boolean().optional(),
  ndc: z.boolean().optional(),
  expiration: z.boolean().optional(),
  lot: z.boolean().optional(),
  comments: z.boolean().optional(),
  linkId: z.boolean().optional(),
}).strict()

// INVENTORY CATEGORY
//------------------------------------------------------

export const InventoryCategoryArgsSchema: z.ZodType<Prisma.InventoryCategoryDefaultArgs> = z.object({
  select: z.lazy(() => InventoryCategorySelectSchema).optional(),
}).strict();

export const InventoryCategorySelectSchema: z.ZodType<Prisma.InventoryCategorySelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// QUANTITY UNIT
//------------------------------------------------------

export const QuantityUnitArgsSchema: z.ZodType<Prisma.QuantityUnitDefaultArgs> = z.object({
  select: z.lazy(() => QuantityUnitSelectSchema).optional(),
}).strict();

export const QuantityUnitSelectSchema: z.ZodType<Prisma.QuantityUnitSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
}).strict()

// INVENTORY TAG
//------------------------------------------------------

export const InventoryTagArgsSchema: z.ZodType<Prisma.InventoryTagDefaultArgs> = z.object({
  select: z.lazy(() => InventoryTagSelectSchema).optional(),
}).strict();

export const InventoryTagSelectSchema: z.ZodType<Prisma.InventoryTagSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
}).strict()

// INVENTORY BRAND
//------------------------------------------------------

export const InventoryBrandArgsSchema: z.ZodType<Prisma.InventoryBrandDefaultArgs> = z.object({
  select: z.lazy(() => InventoryBrandSelectSchema).optional(),
}).strict();

export const InventoryBrandSelectSchema: z.ZodType<Prisma.InventoryBrandSelect> = z.object({
  id: z.boolean().optional(),
  brandName: z.boolean().optional(),
}).strict()

// INVENTORY LINK
//------------------------------------------------------

export const InventoryLinkArgsSchema: z.ZodType<Prisma.InventoryLinkDefaultArgs> = z.object({
  select: z.lazy(() => InventoryLinkSelectSchema).optional(),
}).strict();

export const InventoryLinkSelectSchema: z.ZodType<Prisma.InventoryLinkSelect> = z.object({
  id: z.boolean().optional(),
  linkName: z.boolean().optional(),
  description: z.boolean().optional(),
  category: z.boolean().optional(),
  comments: z.boolean().optional(),
  items: z.boolean().optional(),
}).strict()

// USER ROLE
//------------------------------------------------------

export const UserRoleArgsSchema: z.ZodType<Prisma.UserRoleDefaultArgs> = z.object({
  select: z.lazy(() => UserRoleSelectSchema).optional(),
}).strict();

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// USER TYPE
//------------------------------------------------------

export const UserTypeArgsSchema: z.ZodType<Prisma.UserTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserTypeSelectSchema).optional(),
}).strict();

export const UserTypeSelectSchema: z.ZodType<Prisma.UserTypeSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// OFFICER ROLE
//------------------------------------------------------

export const OfficerRoleArgsSchema: z.ZodType<Prisma.OfficerRoleDefaultArgs> = z.object({
  select: z.lazy(() => OfficerRoleSelectSchema).optional(),
}).strict();

export const OfficerRoleSelectSchema: z.ZodType<Prisma.OfficerRoleSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// EVENT SHIFT
//------------------------------------------------------

export const EventShiftArgsSchema: z.ZodType<Prisma.EventShiftDefaultArgs> = z.object({
  select: z.lazy(() => EventShiftSelectSchema).optional(),
}).strict();

export const EventShiftSelectSchema: z.ZodType<Prisma.EventShiftSelect> = z.object({
  positionId: z.boolean().optional(),
  userId: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const EventWhereInputSchema: z.ZodType<Prisma.EventWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  eventName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftCompositeListFilterSchema),z.lazy(() => EventShiftObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const EventOrderByWithRelationInputSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  eventName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  shifts: z.lazy(() => EventShiftOrderByCompositeAggregateInputSchema).optional()
}).strict();

export const EventWhereUniqueInputSchema: z.ZodType<Prisma.EventWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  eventName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftCompositeListFilterSchema),z.lazy(() => EventShiftObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const EventOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  eventName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  eventName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventTemplateWhereInputSchema: z.ZodType<Prisma.EventTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  templateName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftCompositeListFilterSchema),z.lazy(() => EventShiftObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  shifts: z.lazy(() => EventShiftOrderByCompositeAggregateInputSchema).optional()
}).strict();

export const EventTemplateWhereUniqueInputSchema: z.ZodType<Prisma.EventTemplateWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  templateName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftCompositeListFilterSchema),z.lazy(() => EventShiftObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const EventTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventTemplateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  templateName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const EventPositionWhereInputSchema: z.ZodType<Prisma.EventPositionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const EventPositionOrderByWithRelationInputSchema: z.ZodType<Prisma.EventPositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  positionName: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventPositionWhereUniqueInputSchema: z.ZodType<Prisma.EventPositionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  positionName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict());

export const EventPositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventPositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  positionName: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventPositionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventPositionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventPositionMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventPositionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventPositionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema),z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema),z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  positionName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const InventoryWhereInputSchema: z.ZodType<Prisma.InventoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  itemName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quantityUnitId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  linkId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InventoryOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnitId: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnitId: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryWhereUniqueInputSchema: z.ZodType<Prisma.InventoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  itemName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  quantityUnitId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  linkId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const InventoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnitId: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnitId: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InventoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InventorySumOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  itemName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  categoryId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  quantityUnitId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  linkId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InventoryCategoryWhereInputSchema: z.ZodType<Prisma.InventoryCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryCategoryWhereInputSchema),z.lazy(() => InventoryCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryCategoryWhereInputSchema),z.lazy(() => InventoryCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InventoryCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryCategoryWhereUniqueInputSchema: z.ZodType<Prisma.InventoryCategoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryCategoryWhereInputSchema),z.lazy(() => InventoryCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryCategoryWhereInputSchema),z.lazy(() => InventoryCategoryWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const InventoryCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryCategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryCategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const QuantityUnitWhereInputSchema: z.ZodType<Prisma.QuantityUnitWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const QuantityUnitOrderByWithRelationInputSchema: z.ZodType<Prisma.QuantityUnitOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitWhereUniqueInputSchema: z.ZodType<Prisma.QuantityUnitWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const QuantityUnitOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuantityUnitOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuantityUnitCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuantityUnitMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuantityUnitMinOrderByAggregateInputSchema).optional()
}).strict();

export const QuantityUnitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuantityUnitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema),z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema),z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryTagWhereInputSchema: z.ZodType<Prisma.InventoryTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryTagWhereInputSchema),z.lazy(() => InventoryTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryTagWhereInputSchema),z.lazy(() => InventoryTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryTagOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryTagWhereUniqueInputSchema: z.ZodType<Prisma.InventoryTagWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryTagWhereInputSchema),z.lazy(() => InventoryTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryTagWhereInputSchema),z.lazy(() => InventoryTagWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const InventoryTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryTagMinOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryTagScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryTagScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryBrandWhereInputSchema: z.ZodType<Prisma.InventoryBrandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryBrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brandName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryBrandOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryBrandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brandName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandWhereUniqueInputSchema: z.ZodType<Prisma.InventoryBrandWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryBrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  brandName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const InventoryBrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryBrandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brandName: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryBrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryBrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryBrandMinOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryBrandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryBrandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brandName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryLinkWhereInputSchema: z.ZodType<Prisma.InventoryLinkWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const InventoryLinkOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryLinkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkWhereUniqueInputSchema: z.ZodType<Prisma.InventoryLinkWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  linkName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict());

export const InventoryLinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryLinkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryLinkCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryLinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryLinkMinOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryLinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryLinkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryLinkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  linkName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleWhereUniqueInputSchema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserRoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserRoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserRoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserTypeWhereInputSchema: z.ZodType<Prisma.UserTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.UserTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeWhereUniqueInputSchema: z.ZodType<Prisma.UserTypeWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const UserTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserTypeMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => UserTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => UserTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OfficerRoleWhereInputSchema: z.ZodType<Prisma.OfficerRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OfficerRoleWhereInputSchema),z.lazy(() => OfficerRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerRoleWhereInputSchema),z.lazy(() => OfficerRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OfficerRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.OfficerRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerRoleWhereUniqueInputSchema: z.ZodType<Prisma.OfficerRoleWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OfficerRoleWhereInputSchema),z.lazy(() => OfficerRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerRoleWhereInputSchema),z.lazy(() => OfficerRoleWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const OfficerRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.OfficerRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OfficerRoleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OfficerRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OfficerRoleMinOrderByAggregateInputSchema).optional()
}).strict();

export const OfficerRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OfficerRoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OfficerRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => OfficerRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => OfficerRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const EventCreateInputSchema: z.ZodType<Prisma.EventCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  eventName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  eventName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  eventName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  eventName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  eventName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  eventName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  eventName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateInputSchema: z.ZodType<Prisma.EventTemplateCreateInput> = z.object({
  id: z.string().optional(),
  templateName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  templateName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateInputSchema: z.ZodType<Prisma.EventTemplateUpdateInput> = z.object({
  templateName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateInput> = z.object({
  templateName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateManyInputSchema: z.ZodType<Prisma.EventTemplateCreateManyInput> = z.object({
  id: z.string().optional(),
  templateName: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListCreateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateManyMutationInputSchema: z.ZodType<Prisma.EventTemplateUpdateManyMutationInput> = z.object({
  templateName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateManyInput> = z.object({
  templateName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => EventShiftListUpdateEnvelopeInputSchema),z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventPositionCreateInputSchema: z.ZodType<Prisma.EventPositionCreateInput> = z.object({
  id: z.string().optional(),
  positionName: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const EventPositionUncheckedCreateInputSchema: z.ZodType<Prisma.EventPositionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  positionName: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const EventPositionUpdateInputSchema: z.ZodType<Prisma.EventPositionUpdateInput> = z.object({
  positionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventPositionUncheckedUpdateInputSchema: z.ZodType<Prisma.EventPositionUncheckedUpdateInput> = z.object({
  positionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventPositionCreateManyInputSchema: z.ZodType<Prisma.EventPositionCreateManyInput> = z.object({
  id: z.string().optional(),
  positionName: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const EventPositionUpdateManyMutationInputSchema: z.ZodType<Prisma.EventPositionUpdateManyMutationInput> = z.object({
  positionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventPositionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventPositionUncheckedUpdateManyInput> = z.object({
  positionName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => EventPositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCreateInputSchema: z.ZodType<Prisma.InventoryCreateInput> = z.object({
  id: z.string().optional(),
  itemName: z.string(),
  brandId: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnitId: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnitId: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  linkId: z.string().optional().nullable()
}).strict();

export const InventoryUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  itemName: z.string(),
  brandId: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnitId: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnitId: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  linkId: z.string().optional().nullable()
}).strict();

export const InventoryUpdateInputSchema: z.ZodType<Prisma.InventoryUpdateInput> = z.object({
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  linkId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateInput> = z.object({
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  linkId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCreateManyInputSchema: z.ZodType<Prisma.InventoryCreateManyInput> = z.object({
  id: z.string().optional(),
  itemName: z.string(),
  brandId: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnitId: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnitId: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  linkId: z.string().optional().nullable()
}).strict();

export const InventoryUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryUpdateManyMutationInput> = z.object({
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  linkId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyInput> = z.object({
  itemName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnitId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  linkId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCategoryCreateInputSchema: z.ZodType<Prisma.InventoryCategoryCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const InventoryCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryCategoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const InventoryCategoryUpdateInputSchema: z.ZodType<Prisma.InventoryCategoryUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryCategoryUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCategoryCreateManyInputSchema: z.ZodType<Prisma.InventoryCategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const InventoryCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryCategoryUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryCategoryUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const QuantityUnitCreateInputSchema: z.ZodType<Prisma.QuantityUnitCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const QuantityUnitUncheckedCreateInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const QuantityUnitUpdateInputSchema: z.ZodType<Prisma.QuantityUnitUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitUncheckedUpdateInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitCreateManyInputSchema: z.ZodType<Prisma.QuantityUnitCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const QuantityUnitUpdateManyMutationInputSchema: z.ZodType<Prisma.QuantityUnitUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryTagCreateInputSchema: z.ZodType<Prisma.InventoryTagCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const InventoryTagUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryTagUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const InventoryTagUpdateInputSchema: z.ZodType<Prisma.InventoryTagUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryTagUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryTagUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryTagCreateManyInputSchema: z.ZodType<Prisma.InventoryTagCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string()
}).strict();

export const InventoryTagUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryTagUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryTagUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandCreateInputSchema: z.ZodType<Prisma.InventoryBrandCreateInput> = z.object({
  id: z.string().optional(),
  brandName: z.string()
}).strict();

export const InventoryBrandUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  brandName: z.string()
}).strict();

export const InventoryBrandUpdateInputSchema: z.ZodType<Prisma.InventoryBrandUpdateInput> = z.object({
  brandName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedUpdateInput> = z.object({
  brandName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandCreateManyInputSchema: z.ZodType<Prisma.InventoryBrandCreateManyInput> = z.object({
  id: z.string().optional(),
  brandName: z.string()
}).strict();

export const InventoryBrandUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryBrandUpdateManyMutationInput> = z.object({
  brandName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedUpdateManyInput> = z.object({
  brandName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryLinkCreateInputSchema: z.ZodType<Prisma.InventoryLinkCreateInput> = z.object({
  id: z.string().optional(),
  linkName: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  linkName: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUpdateInputSchema: z.ZodType<Prisma.InventoryLinkUpdateInput> = z.object({
  linkName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedUpdateInput> = z.object({
  linkName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkCreateManyInputSchema: z.ZodType<Prisma.InventoryLinkCreateManyInput> = z.object({
  id: z.string().optional(),
  linkName: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryLinkUpdateManyMutationInput> = z.object({
  linkName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedUpdateManyInput> = z.object({
  linkName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.UserRoleUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeCreateInputSchema: z.ZodType<Prisma.UserTypeCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUncheckedCreateInputSchema: z.ZodType<Prisma.UserTypeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUpdateInputSchema: z.ZodType<Prisma.UserTypeUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.UserTypeUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeCreateManyInputSchema: z.ZodType<Prisma.UserTypeCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.UserTypeUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserTypeUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerRoleCreateInputSchema: z.ZodType<Prisma.OfficerRoleCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerRoleUncheckedCreateInputSchema: z.ZodType<Prisma.OfficerRoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerRoleUpdateInputSchema: z.ZodType<Prisma.OfficerRoleUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.OfficerRoleUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerRoleCreateManyInputSchema: z.ZodType<Prisma.OfficerRoleCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.OfficerRoleUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OfficerRoleUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EventShiftCompositeListFilterSchema: z.ZodType<Prisma.EventShiftCompositeListFilter> = z.object({
  equals: z.lazy(() => EventShiftObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => EventShiftWhereInputSchema).optional(),
  some: z.lazy(() => EventShiftWhereInputSchema).optional(),
  none: z.lazy(() => EventShiftWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const EventShiftObjectEqualityInputSchema: z.ZodType<Prisma.EventShiftObjectEqualityInput> = z.object({
  positionId: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const EventShiftOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.EventShiftOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  eventName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  eventName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  eventName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const EventTemplateCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EventPositionCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventPositionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  positionName: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventPositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventPositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  positionName: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventPositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventPositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  positionName: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const InventoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnitId: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnitId: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnitId: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnitId: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  itemName: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnitId: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnitId: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventorySumOrderByAggregateInputSchema: z.ZodType<Prisma.InventorySumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const InventoryCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryCategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryCategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryTagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryTagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryBrandCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brandName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryBrandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brandName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryBrandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  brandName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkName: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventShiftListCreateEnvelopeInputSchema: z.ZodType<Prisma.EventShiftListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
}).strict();

export const EventShiftCreateInputSchema: z.ZodType<Prisma.EventShiftCreateInput> = z.object({
  positionId: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const EventShiftListUpdateEnvelopeInputSchema: z.ZodType<Prisma.EventShiftListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => EventShiftCreateInputSchema),z.lazy(() => EventShiftCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => EventShiftUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => EventShiftDeleteManyInputSchema).optional()
}).strict();

export const EventPositionCreateallowedUserTypesInputSchema: z.ZodType<Prisma.EventPositionCreateallowedUserTypesInput> = z.object({
  set: z.string().array()
}).strict();

export const EventPositionUpdateallowedUserTypesInputSchema: z.ZodType<Prisma.EventPositionUpdateallowedUserTypesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
  unset: z.boolean().optional()
}).strict();

export const InventoryLinkCreateitemsInputSchema: z.ZodType<Prisma.InventoryLinkCreateitemsInput> = z.object({
  set: z.string().array()
}).strict();

export const InventoryLinkUpdateitemsInputSchema: z.ZodType<Prisma.InventoryLinkUpdateitemsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EventShiftWhereInputSchema: z.ZodType<Prisma.EventShiftWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  positionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EventShiftUpdateManyInputSchema: z.ZodType<Prisma.EventShiftUpdateManyInput> = z.object({
  where: z.lazy(() => EventShiftWhereInputSchema),
  data: z.lazy(() => EventShiftUpdateInputSchema)
}).strict();

export const EventShiftDeleteManyInputSchema: z.ZodType<Prisma.EventShiftDeleteManyInput> = z.object({
  where: z.lazy(() => EventShiftWhereInputSchema)
}).strict();

export const EventShiftUpdateInputSchema: z.ZodType<Prisma.EventShiftUpdateInput> = z.object({
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const EventFindFirstArgsSchema: z.ZodType<Prisma.EventFindFirstArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventFindFirstOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindManyArgsSchema: z.ZodType<Prisma.EventFindManyArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventAggregateArgsSchema: z.ZodType<Prisma.EventAggregateArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventGroupByArgsSchema: z.ZodType<Prisma.EventGroupByArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithAggregationInputSchema.array(),EventOrderByWithAggregationInputSchema ]).optional(),
  by: EventScalarFieldEnumSchema.array(),
  having: EventScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventFindUniqueArgsSchema: z.ZodType<Prisma.EventFindUniqueArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventFindUniqueOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventTemplateFindFirstArgsSchema: z.ZodType<Prisma.EventTemplateFindFirstArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereInputSchema.optional(),
  orderBy: z.union([ EventTemplateOrderByWithRelationInputSchema.array(),EventTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: EventTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventTemplateScalarFieldEnumSchema,EventTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventTemplateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventTemplateFindFirstOrThrowArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereInputSchema.optional(),
  orderBy: z.union([ EventTemplateOrderByWithRelationInputSchema.array(),EventTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: EventTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventTemplateScalarFieldEnumSchema,EventTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventTemplateFindManyArgsSchema: z.ZodType<Prisma.EventTemplateFindManyArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereInputSchema.optional(),
  orderBy: z.union([ EventTemplateOrderByWithRelationInputSchema.array(),EventTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: EventTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventTemplateScalarFieldEnumSchema,EventTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventTemplateAggregateArgsSchema: z.ZodType<Prisma.EventTemplateAggregateArgs> = z.object({
  where: EventTemplateWhereInputSchema.optional(),
  orderBy: z.union([ EventTemplateOrderByWithRelationInputSchema.array(),EventTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: EventTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventTemplateGroupByArgsSchema: z.ZodType<Prisma.EventTemplateGroupByArgs> = z.object({
  where: EventTemplateWhereInputSchema.optional(),
  orderBy: z.union([ EventTemplateOrderByWithAggregationInputSchema.array(),EventTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: EventTemplateScalarFieldEnumSchema.array(),
  having: EventTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventTemplateFindUniqueArgsSchema: z.ZodType<Prisma.EventTemplateFindUniqueArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereUniqueInputSchema,
}).strict() ;

export const EventTemplateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventTemplateFindUniqueOrThrowArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereUniqueInputSchema,
}).strict() ;

export const EventPositionFindFirstArgsSchema: z.ZodType<Prisma.EventPositionFindFirstArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventPositionScalarFieldEnumSchema,EventPositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventPositionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventPositionFindFirstOrThrowArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventPositionScalarFieldEnumSchema,EventPositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventPositionFindManyArgsSchema: z.ZodType<Prisma.EventPositionFindManyArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventPositionScalarFieldEnumSchema,EventPositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventPositionAggregateArgsSchema: z.ZodType<Prisma.EventPositionAggregateArgs> = z.object({
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventPositionGroupByArgsSchema: z.ZodType<Prisma.EventPositionGroupByArgs> = z.object({
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithAggregationInputSchema.array(),EventPositionOrderByWithAggregationInputSchema ]).optional(),
  by: EventPositionScalarFieldEnumSchema.array(),
  having: EventPositionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventPositionFindUniqueArgsSchema: z.ZodType<Prisma.EventPositionFindUniqueArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventPositionFindUniqueOrThrowArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const InventoryFindFirstArgsSchema: z.ZodType<Prisma.InventoryFindFirstArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryScalarFieldEnumSchema,InventoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryFindFirstOrThrowArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryScalarFieldEnumSchema,InventoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryFindManyArgsSchema: z.ZodType<Prisma.InventoryFindManyArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryScalarFieldEnumSchema,InventoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryAggregateArgsSchema: z.ZodType<Prisma.InventoryAggregateArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryGroupByArgsSchema: z.ZodType<Prisma.InventoryGroupByArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithAggregationInputSchema.array(),InventoryOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryScalarFieldEnumSchema.array(),
  having: InventoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryFindUniqueArgsSchema: z.ZodType<Prisma.InventoryFindUniqueArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryFindUniqueOrThrowArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryCategoryFindFirstArgsSchema: z.ZodType<Prisma.InventoryCategoryFindFirstArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryCategoryOrderByWithRelationInputSchema.array(),InventoryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryCategoryScalarFieldEnumSchema,InventoryCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryCategoryFindFirstOrThrowArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryCategoryOrderByWithRelationInputSchema.array(),InventoryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryCategoryScalarFieldEnumSchema,InventoryCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryCategoryFindManyArgsSchema: z.ZodType<Prisma.InventoryCategoryFindManyArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryCategoryOrderByWithRelationInputSchema.array(),InventoryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryCategoryScalarFieldEnumSchema,InventoryCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryCategoryAggregateArgsSchema: z.ZodType<Prisma.InventoryCategoryAggregateArgs> = z.object({
  where: InventoryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryCategoryOrderByWithRelationInputSchema.array(),InventoryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryCategoryGroupByArgsSchema: z.ZodType<Prisma.InventoryCategoryGroupByArgs> = z.object({
  where: InventoryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryCategoryOrderByWithAggregationInputSchema.array(),InventoryCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryCategoryScalarFieldEnumSchema.array(),
  having: InventoryCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryCategoryFindUniqueArgsSchema: z.ZodType<Prisma.InventoryCategoryFindUniqueArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryCategoryFindUniqueOrThrowArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereUniqueInputSchema,
}).strict() ;

export const QuantityUnitFindFirstArgsSchema: z.ZodType<Prisma.QuantityUnitFindFirstArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereInputSchema.optional(),
  orderBy: z.union([ QuantityUnitOrderByWithRelationInputSchema.array(),QuantityUnitOrderByWithRelationInputSchema ]).optional(),
  cursor: QuantityUnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuantityUnitScalarFieldEnumSchema,QuantityUnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuantityUnitFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuantityUnitFindFirstOrThrowArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereInputSchema.optional(),
  orderBy: z.union([ QuantityUnitOrderByWithRelationInputSchema.array(),QuantityUnitOrderByWithRelationInputSchema ]).optional(),
  cursor: QuantityUnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuantityUnitScalarFieldEnumSchema,QuantityUnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuantityUnitFindManyArgsSchema: z.ZodType<Prisma.QuantityUnitFindManyArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereInputSchema.optional(),
  orderBy: z.union([ QuantityUnitOrderByWithRelationInputSchema.array(),QuantityUnitOrderByWithRelationInputSchema ]).optional(),
  cursor: QuantityUnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuantityUnitScalarFieldEnumSchema,QuantityUnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuantityUnitAggregateArgsSchema: z.ZodType<Prisma.QuantityUnitAggregateArgs> = z.object({
  where: QuantityUnitWhereInputSchema.optional(),
  orderBy: z.union([ QuantityUnitOrderByWithRelationInputSchema.array(),QuantityUnitOrderByWithRelationInputSchema ]).optional(),
  cursor: QuantityUnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuantityUnitGroupByArgsSchema: z.ZodType<Prisma.QuantityUnitGroupByArgs> = z.object({
  where: QuantityUnitWhereInputSchema.optional(),
  orderBy: z.union([ QuantityUnitOrderByWithAggregationInputSchema.array(),QuantityUnitOrderByWithAggregationInputSchema ]).optional(),
  by: QuantityUnitScalarFieldEnumSchema.array(),
  having: QuantityUnitScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuantityUnitFindUniqueArgsSchema: z.ZodType<Prisma.QuantityUnitFindUniqueArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereUniqueInputSchema,
}).strict() ;

export const QuantityUnitFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuantityUnitFindUniqueOrThrowArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereUniqueInputSchema,
}).strict() ;

export const InventoryTagFindFirstArgsSchema: z.ZodType<Prisma.InventoryTagFindFirstArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereInputSchema.optional(),
  orderBy: z.union([ InventoryTagOrderByWithRelationInputSchema.array(),InventoryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryTagScalarFieldEnumSchema,InventoryTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryTagFindFirstOrThrowArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereInputSchema.optional(),
  orderBy: z.union([ InventoryTagOrderByWithRelationInputSchema.array(),InventoryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryTagScalarFieldEnumSchema,InventoryTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryTagFindManyArgsSchema: z.ZodType<Prisma.InventoryTagFindManyArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereInputSchema.optional(),
  orderBy: z.union([ InventoryTagOrderByWithRelationInputSchema.array(),InventoryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryTagScalarFieldEnumSchema,InventoryTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryTagAggregateArgsSchema: z.ZodType<Prisma.InventoryTagAggregateArgs> = z.object({
  where: InventoryTagWhereInputSchema.optional(),
  orderBy: z.union([ InventoryTagOrderByWithRelationInputSchema.array(),InventoryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryTagGroupByArgsSchema: z.ZodType<Prisma.InventoryTagGroupByArgs> = z.object({
  where: InventoryTagWhereInputSchema.optional(),
  orderBy: z.union([ InventoryTagOrderByWithAggregationInputSchema.array(),InventoryTagOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryTagScalarFieldEnumSchema.array(),
  having: InventoryTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryTagFindUniqueArgsSchema: z.ZodType<Prisma.InventoryTagFindUniqueArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereUniqueInputSchema,
}).strict() ;

export const InventoryTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryTagFindUniqueOrThrowArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereUniqueInputSchema,
}).strict() ;

export const InventoryBrandFindFirstArgsSchema: z.ZodType<Prisma.InventoryBrandFindFirstArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereInputSchema.optional(),
  orderBy: z.union([ InventoryBrandOrderByWithRelationInputSchema.array(),InventoryBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryBrandScalarFieldEnumSchema,InventoryBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryBrandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryBrandFindFirstOrThrowArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereInputSchema.optional(),
  orderBy: z.union([ InventoryBrandOrderByWithRelationInputSchema.array(),InventoryBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryBrandScalarFieldEnumSchema,InventoryBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryBrandFindManyArgsSchema: z.ZodType<Prisma.InventoryBrandFindManyArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereInputSchema.optional(),
  orderBy: z.union([ InventoryBrandOrderByWithRelationInputSchema.array(),InventoryBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryBrandScalarFieldEnumSchema,InventoryBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryBrandAggregateArgsSchema: z.ZodType<Prisma.InventoryBrandAggregateArgs> = z.object({
  where: InventoryBrandWhereInputSchema.optional(),
  orderBy: z.union([ InventoryBrandOrderByWithRelationInputSchema.array(),InventoryBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryBrandGroupByArgsSchema: z.ZodType<Prisma.InventoryBrandGroupByArgs> = z.object({
  where: InventoryBrandWhereInputSchema.optional(),
  orderBy: z.union([ InventoryBrandOrderByWithAggregationInputSchema.array(),InventoryBrandOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryBrandScalarFieldEnumSchema.array(),
  having: InventoryBrandScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryBrandFindUniqueArgsSchema: z.ZodType<Prisma.InventoryBrandFindUniqueArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereUniqueInputSchema,
}).strict() ;

export const InventoryBrandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryBrandFindUniqueOrThrowArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereUniqueInputSchema,
}).strict() ;

export const InventoryLinkFindFirstArgsSchema: z.ZodType<Prisma.InventoryLinkFindFirstArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereInputSchema.optional(),
  orderBy: z.union([ InventoryLinkOrderByWithRelationInputSchema.array(),InventoryLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryLinkScalarFieldEnumSchema,InventoryLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryLinkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryLinkFindFirstOrThrowArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereInputSchema.optional(),
  orderBy: z.union([ InventoryLinkOrderByWithRelationInputSchema.array(),InventoryLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryLinkScalarFieldEnumSchema,InventoryLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryLinkFindManyArgsSchema: z.ZodType<Prisma.InventoryLinkFindManyArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereInputSchema.optional(),
  orderBy: z.union([ InventoryLinkOrderByWithRelationInputSchema.array(),InventoryLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InventoryLinkScalarFieldEnumSchema,InventoryLinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InventoryLinkAggregateArgsSchema: z.ZodType<Prisma.InventoryLinkAggregateArgs> = z.object({
  where: InventoryLinkWhereInputSchema.optional(),
  orderBy: z.union([ InventoryLinkOrderByWithRelationInputSchema.array(),InventoryLinkOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryLinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryLinkGroupByArgsSchema: z.ZodType<Prisma.InventoryLinkGroupByArgs> = z.object({
  where: InventoryLinkWhereInputSchema.optional(),
  orderBy: z.union([ InventoryLinkOrderByWithAggregationInputSchema.array(),InventoryLinkOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryLinkScalarFieldEnumSchema.array(),
  having: InventoryLinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InventoryLinkFindUniqueArgsSchema: z.ZodType<Prisma.InventoryLinkFindUniqueArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereUniqueInputSchema,
}).strict() ;

export const InventoryLinkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryLinkFindUniqueOrThrowArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereUniqueInputSchema,
}).strict() ;

export const UserRoleFindFirstArgsSchema: z.ZodType<Prisma.UserRoleFindFirstArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindFirstOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleFindManyArgsSchema: z.ZodType<Prisma.UserRoleFindManyArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema,UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserRoleAggregateArgsSchema: z.ZodType<Prisma.UserRoleAggregateArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(),UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserRoleGroupByArgsSchema: z.ZodType<Prisma.UserRoleGroupByArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  orderBy: z.union([ UserRoleOrderByWithAggregationInputSchema.array(),UserRoleOrderByWithAggregationInputSchema ]).optional(),
  by: UserRoleScalarFieldEnumSchema.array(),
  having: UserRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserRoleFindUniqueArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserTypeFindFirstArgsSchema: z.ZodType<Prisma.UserTypeFindFirstArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereInputSchema.optional(),
  orderBy: z.union([ UserTypeOrderByWithRelationInputSchema.array(),UserTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTypeScalarFieldEnumSchema,UserTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserTypeFindFirstOrThrowArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereInputSchema.optional(),
  orderBy: z.union([ UserTypeOrderByWithRelationInputSchema.array(),UserTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTypeScalarFieldEnumSchema,UserTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTypeFindManyArgsSchema: z.ZodType<Prisma.UserTypeFindManyArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereInputSchema.optional(),
  orderBy: z.union([ UserTypeOrderByWithRelationInputSchema.array(),UserTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserTypeScalarFieldEnumSchema,UserTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserTypeAggregateArgsSchema: z.ZodType<Prisma.UserTypeAggregateArgs> = z.object({
  where: UserTypeWhereInputSchema.optional(),
  orderBy: z.union([ UserTypeOrderByWithRelationInputSchema.array(),UserTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: UserTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserTypeGroupByArgsSchema: z.ZodType<Prisma.UserTypeGroupByArgs> = z.object({
  where: UserTypeWhereInputSchema.optional(),
  orderBy: z.union([ UserTypeOrderByWithAggregationInputSchema.array(),UserTypeOrderByWithAggregationInputSchema ]).optional(),
  by: UserTypeScalarFieldEnumSchema.array(),
  having: UserTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserTypeFindUniqueArgsSchema: z.ZodType<Prisma.UserTypeFindUniqueArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereUniqueInputSchema,
}).strict() ;

export const UserTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserTypeFindUniqueOrThrowArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereUniqueInputSchema,
}).strict() ;

export const OfficerRoleFindFirstArgsSchema: z.ZodType<Prisma.OfficerRoleFindFirstArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OfficerRoleOrderByWithRelationInputSchema.array(),OfficerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerRoleScalarFieldEnumSchema,OfficerRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OfficerRoleFindFirstOrThrowArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OfficerRoleOrderByWithRelationInputSchema.array(),OfficerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerRoleScalarFieldEnumSchema,OfficerRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerRoleFindManyArgsSchema: z.ZodType<Prisma.OfficerRoleFindManyArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OfficerRoleOrderByWithRelationInputSchema.array(),OfficerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerRoleScalarFieldEnumSchema,OfficerRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerRoleAggregateArgsSchema: z.ZodType<Prisma.OfficerRoleAggregateArgs> = z.object({
  where: OfficerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OfficerRoleOrderByWithRelationInputSchema.array(),OfficerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OfficerRoleGroupByArgsSchema: z.ZodType<Prisma.OfficerRoleGroupByArgs> = z.object({
  where: OfficerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OfficerRoleOrderByWithAggregationInputSchema.array(),OfficerRoleOrderByWithAggregationInputSchema ]).optional(),
  by: OfficerRoleScalarFieldEnumSchema.array(),
  having: OfficerRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OfficerRoleFindUniqueArgsSchema: z.ZodType<Prisma.OfficerRoleFindUniqueArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereUniqueInputSchema,
}).strict() ;

export const OfficerRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OfficerRoleFindUniqueOrThrowArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereUniqueInputSchema,
}).strict() ;

export const EventCreateArgsSchema: z.ZodType<Prisma.EventCreateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
}).strict() ;

export const EventUpsertArgsSchema: z.ZodType<Prisma.EventUpsertArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
  create: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
  update: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventCreateManyArgsSchema: z.ZodType<Prisma.EventCreateManyArgs> = z.object({
  data: z.union([ EventCreateManyInputSchema,EventCreateManyInputSchema.array() ]),
}).strict() ;

export const EventDeleteArgsSchema: z.ZodType<Prisma.EventDeleteArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateArgsSchema: z.ZodType<Prisma.EventUpdateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateManyArgsSchema: z.ZodType<Prisma.EventUpdateManyArgs> = z.object({
  data: z.union([ EventUpdateManyMutationInputSchema,EventUncheckedUpdateManyInputSchema ]),
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const EventDeleteManyArgsSchema: z.ZodType<Prisma.EventDeleteManyArgs> = z.object({
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const EventTemplateCreateArgsSchema: z.ZodType<Prisma.EventTemplateCreateArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  data: z.union([ EventTemplateCreateInputSchema,EventTemplateUncheckedCreateInputSchema ]),
}).strict() ;

export const EventTemplateUpsertArgsSchema: z.ZodType<Prisma.EventTemplateUpsertArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereUniqueInputSchema,
  create: z.union([ EventTemplateCreateInputSchema,EventTemplateUncheckedCreateInputSchema ]),
  update: z.union([ EventTemplateUpdateInputSchema,EventTemplateUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventTemplateCreateManyArgsSchema: z.ZodType<Prisma.EventTemplateCreateManyArgs> = z.object({
  data: z.union([ EventTemplateCreateManyInputSchema,EventTemplateCreateManyInputSchema.array() ]),
}).strict() ;

export const EventTemplateDeleteArgsSchema: z.ZodType<Prisma.EventTemplateDeleteArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  where: EventTemplateWhereUniqueInputSchema,
}).strict() ;

export const EventTemplateUpdateArgsSchema: z.ZodType<Prisma.EventTemplateUpdateArgs> = z.object({
  select: EventTemplateSelectSchema.optional(),
  include: EventTemplateIncludeSchema.optional(),
  data: z.union([ EventTemplateUpdateInputSchema,EventTemplateUncheckedUpdateInputSchema ]),
  where: EventTemplateWhereUniqueInputSchema,
}).strict() ;

export const EventTemplateUpdateManyArgsSchema: z.ZodType<Prisma.EventTemplateUpdateManyArgs> = z.object({
  data: z.union([ EventTemplateUpdateManyMutationInputSchema,EventTemplateUncheckedUpdateManyInputSchema ]),
  where: EventTemplateWhereInputSchema.optional(),
}).strict() ;

export const EventTemplateDeleteManyArgsSchema: z.ZodType<Prisma.EventTemplateDeleteManyArgs> = z.object({
  where: EventTemplateWhereInputSchema.optional(),
}).strict() ;

export const EventPositionCreateArgsSchema: z.ZodType<Prisma.EventPositionCreateArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  data: z.union([ EventPositionCreateInputSchema,EventPositionUncheckedCreateInputSchema ]),
}).strict() ;

export const EventPositionUpsertArgsSchema: z.ZodType<Prisma.EventPositionUpsertArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
  create: z.union([ EventPositionCreateInputSchema,EventPositionUncheckedCreateInputSchema ]),
  update: z.union([ EventPositionUpdateInputSchema,EventPositionUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventPositionCreateManyArgsSchema: z.ZodType<Prisma.EventPositionCreateManyArgs> = z.object({
  data: z.union([ EventPositionCreateManyInputSchema,EventPositionCreateManyInputSchema.array() ]),
}).strict() ;

export const EventPositionDeleteArgsSchema: z.ZodType<Prisma.EventPositionDeleteArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionUpdateArgsSchema: z.ZodType<Prisma.EventPositionUpdateArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  data: z.union([ EventPositionUpdateInputSchema,EventPositionUncheckedUpdateInputSchema ]),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionUpdateManyArgsSchema: z.ZodType<Prisma.EventPositionUpdateManyArgs> = z.object({
  data: z.union([ EventPositionUpdateManyMutationInputSchema,EventPositionUncheckedUpdateManyInputSchema ]),
  where: EventPositionWhereInputSchema.optional(),
}).strict() ;

export const EventPositionDeleteManyArgsSchema: z.ZodType<Prisma.EventPositionDeleteManyArgs> = z.object({
  where: EventPositionWhereInputSchema.optional(),
}).strict() ;

export const InventoryCreateArgsSchema: z.ZodType<Prisma.InventoryCreateArgs> = z.object({
  select: InventorySelectSchema.optional(),
  data: z.union([ InventoryCreateInputSchema,InventoryUncheckedCreateInputSchema ]),
}).strict() ;

export const InventoryUpsertArgsSchema: z.ZodType<Prisma.InventoryUpsertArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
  create: z.union([ InventoryCreateInputSchema,InventoryUncheckedCreateInputSchema ]),
  update: z.union([ InventoryUpdateInputSchema,InventoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const InventoryCreateManyArgsSchema: z.ZodType<Prisma.InventoryCreateManyArgs> = z.object({
  data: z.union([ InventoryCreateManyInputSchema,InventoryCreateManyInputSchema.array() ]),
}).strict() ;

export const InventoryDeleteArgsSchema: z.ZodType<Prisma.InventoryDeleteArgs> = z.object({
  select: InventorySelectSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryUpdateArgsSchema: z.ZodType<Prisma.InventoryUpdateArgs> = z.object({
  select: InventorySelectSchema.optional(),
  data: z.union([ InventoryUpdateInputSchema,InventoryUncheckedUpdateInputSchema ]),
  where: InventoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryUpdateManyArgsSchema: z.ZodType<Prisma.InventoryUpdateManyArgs> = z.object({
  data: z.union([ InventoryUpdateManyMutationInputSchema,InventoryUncheckedUpdateManyInputSchema ]),
  where: InventoryWhereInputSchema.optional(),
}).strict() ;

export const InventoryDeleteManyArgsSchema: z.ZodType<Prisma.InventoryDeleteManyArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
}).strict() ;

export const InventoryCategoryCreateArgsSchema: z.ZodType<Prisma.InventoryCategoryCreateArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  data: z.union([ InventoryCategoryCreateInputSchema,InventoryCategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const InventoryCategoryUpsertArgsSchema: z.ZodType<Prisma.InventoryCategoryUpsertArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereUniqueInputSchema,
  create: z.union([ InventoryCategoryCreateInputSchema,InventoryCategoryUncheckedCreateInputSchema ]),
  update: z.union([ InventoryCategoryUpdateInputSchema,InventoryCategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const InventoryCategoryCreateManyArgsSchema: z.ZodType<Prisma.InventoryCategoryCreateManyArgs> = z.object({
  data: z.union([ InventoryCategoryCreateManyInputSchema,InventoryCategoryCreateManyInputSchema.array() ]),
}).strict() ;

export const InventoryCategoryDeleteArgsSchema: z.ZodType<Prisma.InventoryCategoryDeleteArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  where: InventoryCategoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryCategoryUpdateArgsSchema: z.ZodType<Prisma.InventoryCategoryUpdateArgs> = z.object({
  select: InventoryCategorySelectSchema.optional(),
  data: z.union([ InventoryCategoryUpdateInputSchema,InventoryCategoryUncheckedUpdateInputSchema ]),
  where: InventoryCategoryWhereUniqueInputSchema,
}).strict() ;

export const InventoryCategoryUpdateManyArgsSchema: z.ZodType<Prisma.InventoryCategoryUpdateManyArgs> = z.object({
  data: z.union([ InventoryCategoryUpdateManyMutationInputSchema,InventoryCategoryUncheckedUpdateManyInputSchema ]),
  where: InventoryCategoryWhereInputSchema.optional(),
}).strict() ;

export const InventoryCategoryDeleteManyArgsSchema: z.ZodType<Prisma.InventoryCategoryDeleteManyArgs> = z.object({
  where: InventoryCategoryWhereInputSchema.optional(),
}).strict() ;

export const QuantityUnitCreateArgsSchema: z.ZodType<Prisma.QuantityUnitCreateArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  data: z.union([ QuantityUnitCreateInputSchema,QuantityUnitUncheckedCreateInputSchema ]),
}).strict() ;

export const QuantityUnitUpsertArgsSchema: z.ZodType<Prisma.QuantityUnitUpsertArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereUniqueInputSchema,
  create: z.union([ QuantityUnitCreateInputSchema,QuantityUnitUncheckedCreateInputSchema ]),
  update: z.union([ QuantityUnitUpdateInputSchema,QuantityUnitUncheckedUpdateInputSchema ]),
}).strict() ;

export const QuantityUnitCreateManyArgsSchema: z.ZodType<Prisma.QuantityUnitCreateManyArgs> = z.object({
  data: z.union([ QuantityUnitCreateManyInputSchema,QuantityUnitCreateManyInputSchema.array() ]),
}).strict() ;

export const QuantityUnitDeleteArgsSchema: z.ZodType<Prisma.QuantityUnitDeleteArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  where: QuantityUnitWhereUniqueInputSchema,
}).strict() ;

export const QuantityUnitUpdateArgsSchema: z.ZodType<Prisma.QuantityUnitUpdateArgs> = z.object({
  select: QuantityUnitSelectSchema.optional(),
  data: z.union([ QuantityUnitUpdateInputSchema,QuantityUnitUncheckedUpdateInputSchema ]),
  where: QuantityUnitWhereUniqueInputSchema,
}).strict() ;

export const QuantityUnitUpdateManyArgsSchema: z.ZodType<Prisma.QuantityUnitUpdateManyArgs> = z.object({
  data: z.union([ QuantityUnitUpdateManyMutationInputSchema,QuantityUnitUncheckedUpdateManyInputSchema ]),
  where: QuantityUnitWhereInputSchema.optional(),
}).strict() ;

export const QuantityUnitDeleteManyArgsSchema: z.ZodType<Prisma.QuantityUnitDeleteManyArgs> = z.object({
  where: QuantityUnitWhereInputSchema.optional(),
}).strict() ;

export const InventoryTagCreateArgsSchema: z.ZodType<Prisma.InventoryTagCreateArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  data: z.union([ InventoryTagCreateInputSchema,InventoryTagUncheckedCreateInputSchema ]),
}).strict() ;

export const InventoryTagUpsertArgsSchema: z.ZodType<Prisma.InventoryTagUpsertArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereUniqueInputSchema,
  create: z.union([ InventoryTagCreateInputSchema,InventoryTagUncheckedCreateInputSchema ]),
  update: z.union([ InventoryTagUpdateInputSchema,InventoryTagUncheckedUpdateInputSchema ]),
}).strict() ;

export const InventoryTagCreateManyArgsSchema: z.ZodType<Prisma.InventoryTagCreateManyArgs> = z.object({
  data: z.union([ InventoryTagCreateManyInputSchema,InventoryTagCreateManyInputSchema.array() ]),
}).strict() ;

export const InventoryTagDeleteArgsSchema: z.ZodType<Prisma.InventoryTagDeleteArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  where: InventoryTagWhereUniqueInputSchema,
}).strict() ;

export const InventoryTagUpdateArgsSchema: z.ZodType<Prisma.InventoryTagUpdateArgs> = z.object({
  select: InventoryTagSelectSchema.optional(),
  data: z.union([ InventoryTagUpdateInputSchema,InventoryTagUncheckedUpdateInputSchema ]),
  where: InventoryTagWhereUniqueInputSchema,
}).strict() ;

export const InventoryTagUpdateManyArgsSchema: z.ZodType<Prisma.InventoryTagUpdateManyArgs> = z.object({
  data: z.union([ InventoryTagUpdateManyMutationInputSchema,InventoryTagUncheckedUpdateManyInputSchema ]),
  where: InventoryTagWhereInputSchema.optional(),
}).strict() ;

export const InventoryTagDeleteManyArgsSchema: z.ZodType<Prisma.InventoryTagDeleteManyArgs> = z.object({
  where: InventoryTagWhereInputSchema.optional(),
}).strict() ;

export const InventoryBrandCreateArgsSchema: z.ZodType<Prisma.InventoryBrandCreateArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  data: z.union([ InventoryBrandCreateInputSchema,InventoryBrandUncheckedCreateInputSchema ]),
}).strict() ;

export const InventoryBrandUpsertArgsSchema: z.ZodType<Prisma.InventoryBrandUpsertArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereUniqueInputSchema,
  create: z.union([ InventoryBrandCreateInputSchema,InventoryBrandUncheckedCreateInputSchema ]),
  update: z.union([ InventoryBrandUpdateInputSchema,InventoryBrandUncheckedUpdateInputSchema ]),
}).strict() ;

export const InventoryBrandCreateManyArgsSchema: z.ZodType<Prisma.InventoryBrandCreateManyArgs> = z.object({
  data: z.union([ InventoryBrandCreateManyInputSchema,InventoryBrandCreateManyInputSchema.array() ]),
}).strict() ;

export const InventoryBrandDeleteArgsSchema: z.ZodType<Prisma.InventoryBrandDeleteArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  where: InventoryBrandWhereUniqueInputSchema,
}).strict() ;

export const InventoryBrandUpdateArgsSchema: z.ZodType<Prisma.InventoryBrandUpdateArgs> = z.object({
  select: InventoryBrandSelectSchema.optional(),
  data: z.union([ InventoryBrandUpdateInputSchema,InventoryBrandUncheckedUpdateInputSchema ]),
  where: InventoryBrandWhereUniqueInputSchema,
}).strict() ;

export const InventoryBrandUpdateManyArgsSchema: z.ZodType<Prisma.InventoryBrandUpdateManyArgs> = z.object({
  data: z.union([ InventoryBrandUpdateManyMutationInputSchema,InventoryBrandUncheckedUpdateManyInputSchema ]),
  where: InventoryBrandWhereInputSchema.optional(),
}).strict() ;

export const InventoryBrandDeleteManyArgsSchema: z.ZodType<Prisma.InventoryBrandDeleteManyArgs> = z.object({
  where: InventoryBrandWhereInputSchema.optional(),
}).strict() ;

export const InventoryLinkCreateArgsSchema: z.ZodType<Prisma.InventoryLinkCreateArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  data: z.union([ InventoryLinkCreateInputSchema,InventoryLinkUncheckedCreateInputSchema ]),
}).strict() ;

export const InventoryLinkUpsertArgsSchema: z.ZodType<Prisma.InventoryLinkUpsertArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereUniqueInputSchema,
  create: z.union([ InventoryLinkCreateInputSchema,InventoryLinkUncheckedCreateInputSchema ]),
  update: z.union([ InventoryLinkUpdateInputSchema,InventoryLinkUncheckedUpdateInputSchema ]),
}).strict() ;

export const InventoryLinkCreateManyArgsSchema: z.ZodType<Prisma.InventoryLinkCreateManyArgs> = z.object({
  data: z.union([ InventoryLinkCreateManyInputSchema,InventoryLinkCreateManyInputSchema.array() ]),
}).strict() ;

export const InventoryLinkDeleteArgsSchema: z.ZodType<Prisma.InventoryLinkDeleteArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  where: InventoryLinkWhereUniqueInputSchema,
}).strict() ;

export const InventoryLinkUpdateArgsSchema: z.ZodType<Prisma.InventoryLinkUpdateArgs> = z.object({
  select: InventoryLinkSelectSchema.optional(),
  data: z.union([ InventoryLinkUpdateInputSchema,InventoryLinkUncheckedUpdateInputSchema ]),
  where: InventoryLinkWhereUniqueInputSchema,
}).strict() ;

export const InventoryLinkUpdateManyArgsSchema: z.ZodType<Prisma.InventoryLinkUpdateManyArgs> = z.object({
  data: z.union([ InventoryLinkUpdateManyMutationInputSchema,InventoryLinkUncheckedUpdateManyInputSchema ]),
  where: InventoryLinkWhereInputSchema.optional(),
}).strict() ;

export const InventoryLinkDeleteManyArgsSchema: z.ZodType<Prisma.InventoryLinkDeleteManyArgs> = z.object({
  where: InventoryLinkWhereInputSchema.optional(),
}).strict() ;

export const UserRoleCreateArgsSchema: z.ZodType<Prisma.UserRoleCreateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  data: z.union([ UserRoleCreateInputSchema,UserRoleUncheckedCreateInputSchema ]),
}).strict() ;

export const UserRoleUpsertArgsSchema: z.ZodType<Prisma.UserRoleUpsertArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
  create: z.union([ UserRoleCreateInputSchema,UserRoleUncheckedCreateInputSchema ]),
  update: z.union([ UserRoleUpdateInputSchema,UserRoleUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserRoleCreateManyArgsSchema: z.ZodType<Prisma.UserRoleCreateManyArgs> = z.object({
  data: z.union([ UserRoleCreateManyInputSchema,UserRoleCreateManyInputSchema.array() ]),
}).strict() ;

export const UserRoleDeleteArgsSchema: z.ZodType<Prisma.UserRoleDeleteArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleUpdateArgsSchema: z.ZodType<Prisma.UserRoleUpdateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  data: z.union([ UserRoleUpdateInputSchema,UserRoleUncheckedUpdateInputSchema ]),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export const UserRoleUpdateManyArgsSchema: z.ZodType<Prisma.UserRoleUpdateManyArgs> = z.object({
  data: z.union([ UserRoleUpdateManyMutationInputSchema,UserRoleUncheckedUpdateManyInputSchema ]),
  where: UserRoleWhereInputSchema.optional(),
}).strict() ;

export const UserRoleDeleteManyArgsSchema: z.ZodType<Prisma.UserRoleDeleteManyArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
}).strict() ;

export const UserTypeCreateArgsSchema: z.ZodType<Prisma.UserTypeCreateArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  data: z.union([ UserTypeCreateInputSchema,UserTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const UserTypeUpsertArgsSchema: z.ZodType<Prisma.UserTypeUpsertArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereUniqueInputSchema,
  create: z.union([ UserTypeCreateInputSchema,UserTypeUncheckedCreateInputSchema ]),
  update: z.union([ UserTypeUpdateInputSchema,UserTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserTypeCreateManyArgsSchema: z.ZodType<Prisma.UserTypeCreateManyArgs> = z.object({
  data: z.union([ UserTypeCreateManyInputSchema,UserTypeCreateManyInputSchema.array() ]),
}).strict() ;

export const UserTypeDeleteArgsSchema: z.ZodType<Prisma.UserTypeDeleteArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  where: UserTypeWhereUniqueInputSchema,
}).strict() ;

export const UserTypeUpdateArgsSchema: z.ZodType<Prisma.UserTypeUpdateArgs> = z.object({
  select: UserTypeSelectSchema.optional(),
  data: z.union([ UserTypeUpdateInputSchema,UserTypeUncheckedUpdateInputSchema ]),
  where: UserTypeWhereUniqueInputSchema,
}).strict() ;

export const UserTypeUpdateManyArgsSchema: z.ZodType<Prisma.UserTypeUpdateManyArgs> = z.object({
  data: z.union([ UserTypeUpdateManyMutationInputSchema,UserTypeUncheckedUpdateManyInputSchema ]),
  where: UserTypeWhereInputSchema.optional(),
}).strict() ;

export const UserTypeDeleteManyArgsSchema: z.ZodType<Prisma.UserTypeDeleteManyArgs> = z.object({
  where: UserTypeWhereInputSchema.optional(),
}).strict() ;

export const OfficerRoleCreateArgsSchema: z.ZodType<Prisma.OfficerRoleCreateArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  data: z.union([ OfficerRoleCreateInputSchema,OfficerRoleUncheckedCreateInputSchema ]),
}).strict() ;

export const OfficerRoleUpsertArgsSchema: z.ZodType<Prisma.OfficerRoleUpsertArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereUniqueInputSchema,
  create: z.union([ OfficerRoleCreateInputSchema,OfficerRoleUncheckedCreateInputSchema ]),
  update: z.union([ OfficerRoleUpdateInputSchema,OfficerRoleUncheckedUpdateInputSchema ]),
}).strict() ;

export const OfficerRoleCreateManyArgsSchema: z.ZodType<Prisma.OfficerRoleCreateManyArgs> = z.object({
  data: z.union([ OfficerRoleCreateManyInputSchema,OfficerRoleCreateManyInputSchema.array() ]),
}).strict() ;

export const OfficerRoleDeleteArgsSchema: z.ZodType<Prisma.OfficerRoleDeleteArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  where: OfficerRoleWhereUniqueInputSchema,
}).strict() ;

export const OfficerRoleUpdateArgsSchema: z.ZodType<Prisma.OfficerRoleUpdateArgs> = z.object({
  select: OfficerRoleSelectSchema.optional(),
  data: z.union([ OfficerRoleUpdateInputSchema,OfficerRoleUncheckedUpdateInputSchema ]),
  where: OfficerRoleWhereUniqueInputSchema,
}).strict() ;

export const OfficerRoleUpdateManyArgsSchema: z.ZodType<Prisma.OfficerRoleUpdateManyArgs> = z.object({
  data: z.union([ OfficerRoleUpdateManyMutationInputSchema,OfficerRoleUncheckedUpdateManyInputSchema ]),
  where: OfficerRoleWhereInputSchema.optional(),
}).strict() ;

export const OfficerRoleDeleteManyArgsSchema: z.ZodType<Prisma.OfficerRoleDeleteManyArgs> = z.object({
  where: OfficerRoleWhereInputSchema.optional(),
}).strict() ;