import { z } from 'zod';
import type { Prisma } from '../client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const EventScalarFieldEnumSchema = z.enum(['id','date','name','description','location','time_start','time_end','created_at','created_by']);

export const EventShiftScalarFieldEnumSchema = z.enum(['id','eventId','positionId','user']);

export const EventTemplateScalarFieldEnumSchema = z.enum(['id','name','description','location','time_start','time_end']);

export const EventPositionScalarFieldEnumSchema = z.enum(['id','name','label','description','allowed_user_types','officer_only']);

export const InventoryScalarFieldEnumSchema = z.enum(['id','item','brand','category','location','qty','qty_unit','pkg_size','pkg_size_unit','upc','ndc','expiration','lot','comments','link_id']);

export const InventoryCategoryScalarFieldEnumSchema = z.enum(['id','label','description']);

export const QuantityUnitScalarFieldEnumSchema = z.enum(['id','label']);

export const InventoryTagScalarFieldEnumSchema = z.enum(['id','label']);

export const InventoryBrandScalarFieldEnumSchema = z.enum(['id','name']);

export const InventoryLinkScalarFieldEnumSchema = z.enum(['id','name','description','category','comments','items']);

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
  name: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  time_start: z.coerce.date().nullable(),
  time_end: z.coerce.date().nullable(),
  created_at: z.coerce.date(),
  created_by: z.string(),
})

export type Event = z.infer<typeof EventSchema>

/////////////////////////////////////////
// EVENT SHIFT SCHEMA
/////////////////////////////////////////

export const EventShiftSchema = z.object({
  id: z.string(),
  eventId: z.string(),
  positionId: z.string(),
  user: z.string().nullable(),
})

export type EventShift = z.infer<typeof EventShiftSchema>

/////////////////////////////////////////
// EVENT TEMPLATE SCHEMA
/////////////////////////////////////////

export const EventTemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  time_start: z.coerce.date().nullable(),
  time_end: z.coerce.date().nullable(),
})

export type EventTemplate = z.infer<typeof EventTemplateSchema>

/////////////////////////////////////////
// EVENT POSITION SCHEMA
/////////////////////////////////////////

export const EventPositionSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string().nullable(),
  description: z.string().nullable(),
  allowed_user_types: z.string().array(),
  officer_only: z.boolean().nullable(),
})

export type EventPosition = z.infer<typeof EventPositionSchema>

/////////////////////////////////////////
// INVENTORY SCHEMA
/////////////////////////////////////////

export const InventorySchema = z.object({
  id: z.string(),
  item: z.string(),
  brand: z.string().nullable(),
  category: z.string().nullable(),
  location: z.string().nullable(),
  qty: z.number().int(),
  qty_unit: z.string().nullable(),
  pkg_size: z.number().int().nullable(),
  pkg_size_unit: z.string().nullable(),
  upc: z.string().nullable(),
  ndc: z.string().nullable(),
  expiration: z.coerce.date().nullable(),
  lot: z.string().nullable(),
  comments: z.string().nullable(),
  link_id: z.string().nullable(),
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
  name: z.string(),
})

export type InventoryBrand = z.infer<typeof InventoryBrandSchema>

/////////////////////////////////////////
// INVENTORY LINK SCHEMA
/////////////////////////////////////////

export const InventoryLinkSchema = z.object({
  id: z.string(),
  name: z.string(),
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
// COMPOSITE TYPES
/////////////////////////////////////////
// POSITIONS FOR TEMPLATES
//------------------------------------------------------


/////////////////////////////////////////
// POSITIONS FOR TEMPLATES SCHEMA
/////////////////////////////////////////

export const PositionsForTemplatesSchema = z.object({
  positionId: z.string(),
  quantity: z.number().int(),
})

export type PositionsForTemplates = z.infer<typeof PositionsForTemplatesSchema>

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

export const EventCountOutputTypeArgsSchema: z.ZodType<Prisma.EventCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EventCountOutputTypeSelectSchema).nullish(),
}).strict();

export const EventCountOutputTypeSelectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = z.object({
  shifts: z.boolean().optional(),
}).strict();

export const EventSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  time_start: z.boolean().optional(),
  time_end: z.boolean().optional(),
  created_at: z.boolean().optional(),
  created_by: z.boolean().optional(),
  shifts: z.union([z.boolean(),z.lazy(() => EventShiftArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EVENT SHIFT
//------------------------------------------------------

export const EventShiftIncludeSchema: z.ZodType<Prisma.EventShiftInclude> = z.object({
}).strict()

export const EventShiftArgsSchema: z.ZodType<Prisma.EventShiftDefaultArgs> = z.object({
  select: z.lazy(() => EventShiftSelectSchema).optional(),
  include: z.lazy(() => EventShiftIncludeSchema).optional(),
}).strict();

export const EventShiftSelectSchema: z.ZodType<Prisma.EventShiftSelect> = z.object({
  id: z.boolean().optional(),
  eventId: z.boolean().optional(),
  positionId: z.boolean().optional(),
  user: z.boolean().optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
  position: z.union([z.boolean(),z.lazy(() => EventPositionArgsSchema)]).optional(),
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
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  time_start: z.boolean().optional(),
  time_end: z.boolean().optional(),
  positions: z.union([z.boolean(),z.lazy(() => PositionsForTemplatesArgsSchema)]).optional(),
}).strict()

// EVENT POSITION
//------------------------------------------------------

export const EventPositionIncludeSchema: z.ZodType<Prisma.EventPositionInclude> = z.object({
}).strict()

export const EventPositionArgsSchema: z.ZodType<Prisma.EventPositionDefaultArgs> = z.object({
  select: z.lazy(() => EventPositionSelectSchema).optional(),
  include: z.lazy(() => EventPositionIncludeSchema).optional(),
}).strict();

export const EventPositionCountOutputTypeArgsSchema: z.ZodType<Prisma.EventPositionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EventPositionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const EventPositionCountOutputTypeSelectSchema: z.ZodType<Prisma.EventPositionCountOutputTypeSelect> = z.object({
  EventShift: z.boolean().optional(),
}).strict();

export const EventPositionSelectSchema: z.ZodType<Prisma.EventPositionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  allowed_user_types: z.boolean().optional(),
  officer_only: z.boolean().optional(),
  EventShift: z.union([z.boolean(),z.lazy(() => EventShiftArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventPositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVENTORY
//------------------------------------------------------

export const InventoryArgsSchema: z.ZodType<Prisma.InventoryDefaultArgs> = z.object({
  select: z.lazy(() => InventorySelectSchema).optional(),
}).strict();

export const InventorySelectSchema: z.ZodType<Prisma.InventorySelect> = z.object({
  id: z.boolean().optional(),
  item: z.boolean().optional(),
  brand: z.boolean().optional(),
  category: z.boolean().optional(),
  location: z.boolean().optional(),
  qty: z.boolean().optional(),
  qty_unit: z.boolean().optional(),
  pkg_size: z.boolean().optional(),
  pkg_size_unit: z.boolean().optional(),
  upc: z.boolean().optional(),
  ndc: z.boolean().optional(),
  expiration: z.boolean().optional(),
  lot: z.boolean().optional(),
  comments: z.boolean().optional(),
  link_id: z.boolean().optional(),
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
  name: z.boolean().optional(),
}).strict()

// INVENTORY LINK
//------------------------------------------------------

export const InventoryLinkArgsSchema: z.ZodType<Prisma.InventoryLinkDefaultArgs> = z.object({
  select: z.lazy(() => InventoryLinkSelectSchema).optional(),
}).strict();

export const InventoryLinkSelectSchema: z.ZodType<Prisma.InventoryLinkSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
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

// POSITIONS FOR TEMPLATES
//------------------------------------------------------

export const PositionsForTemplatesArgsSchema: z.ZodType<Prisma.PositionsForTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PositionsForTemplatesSelectSchema).optional(),
}).strict();

export const PositionsForTemplatesSelectSchema: z.ZodType<Prisma.PositionsForTemplatesSelect> = z.object({
  positionId: z.boolean().optional(),
  quantity: z.boolean().optional(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_by: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.lazy(() => EventShiftListRelationFilterSchema).optional()
}).strict();

export const EventOrderByWithRelationInputSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional(),
  shifts: z.lazy(() => EventShiftOrderByRelationAggregateInputSchema).optional()
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_by: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.lazy(() => EventShiftListRelationFilterSchema).optional()
}).strict());

export const EventOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  created_by: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventShiftWhereInputSchema: z.ZodType<Prisma.EventShiftWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  event: z.union([ z.lazy(() => EventScalarRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => EventPositionScalarRelationFilterSchema),z.lazy(() => EventPositionWhereInputSchema) ]).optional(),
}).strict();

export const EventShiftOrderByWithRelationInputSchema: z.ZodType<Prisma.EventShiftOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  positionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => SortOrderSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional(),
  position: z.lazy(() => EventPositionOrderByWithRelationInputSchema).optional()
}).strict();

export const EventShiftWhereUniqueInputSchema: z.ZodType<Prisma.EventShiftWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventShiftWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventShiftWhereInputSchema),z.lazy(() => EventShiftWhereInputSchema).array() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  event: z.union([ z.lazy(() => EventScalarRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => EventPositionScalarRelationFilterSchema),z.lazy(() => EventPositionWhereInputSchema) ]).optional(),
}).strict());

export const EventShiftOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventShiftOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  positionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventShiftCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventShiftMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventShiftMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventShiftScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventShiftScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventShiftScalarWhereWithAggregatesInputSchema),z.lazy(() => EventShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventShiftScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventShiftScalarWhereWithAggregatesInputSchema),z.lazy(() => EventShiftScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  positionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const EventTemplateWhereInputSchema: z.ZodType<Prisma.EventTemplateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesCompositeListFilterSchema),z.lazy(() => PositionsForTemplatesObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  positions: z.lazy(() => PositionsForTemplatesOrderByCompositeAggregateInputSchema).optional()
}).strict();

export const EventTemplateWhereUniqueInputSchema: z.ZodType<Prisma.EventTemplateWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateWhereInputSchema),z.lazy(() => EventTemplateWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesCompositeListFilterSchema),z.lazy(() => PositionsForTemplatesObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const EventTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventTemplateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => EventTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  time_start: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  time_end: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const EventPositionWhereInputSchema: z.ZodType<Prisma.EventPositionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowed_user_types: z.lazy(() => StringNullableListFilterSchema).optional(),
  officer_only: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  EventShift: z.lazy(() => EventShiftListRelationFilterSchema).optional()
}).strict();

export const EventPositionOrderByWithRelationInputSchema: z.ZodType<Prisma.EventPositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowed_user_types: z.lazy(() => SortOrderSchema).optional(),
  officer_only: z.lazy(() => SortOrderSchema).optional(),
  EventShift: z.lazy(() => EventShiftOrderByRelationAggregateInputSchema).optional()
}).strict();

export const EventPositionWhereUniqueInputSchema: z.ZodType<Prisma.EventPositionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionWhereInputSchema),z.lazy(() => EventPositionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowed_user_types: z.lazy(() => StringNullableListFilterSchema).optional(),
  officer_only: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  EventShift: z.lazy(() => EventShiftListRelationFilterSchema).optional()
}).strict());

export const EventPositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventPositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowed_user_types: z.lazy(() => SortOrderSchema).optional(),
  officer_only: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventPositionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventPositionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventPositionMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventPositionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventPositionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema),z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema),z.lazy(() => EventPositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  allowed_user_types: z.lazy(() => StringNullableListFilterSchema).optional(),
  officer_only: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const InventoryWhereInputSchema: z.ZodType<Prisma.InventoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  item: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  qty: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  qty_unit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pkg_size: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  pkg_size_unit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  link_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InventoryOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  qty: z.lazy(() => SortOrderSchema).optional(),
  qty_unit: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional(),
  pkg_size_unit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  link_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryWhereUniqueInputSchema: z.ZodType<Prisma.InventoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  item: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  qty: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  qty_unit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pkg_size: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  pkg_size_unit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  link_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const InventoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  qty: z.lazy(() => SortOrderSchema).optional(),
  qty_unit: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional(),
  pkg_size_unit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  link_id: z.lazy(() => SortOrderSchema).optional(),
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
  item: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  qty: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  qty_unit: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pkg_size: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  pkg_size_unit: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  link_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryBrandOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryBrandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandWhereUniqueInputSchema: z.ZodType<Prisma.InventoryBrandWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryBrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryBrandWhereInputSchema),z.lazy(() => InventoryBrandWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const InventoryBrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryBrandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryBrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryBrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryBrandMinOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryBrandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryBrandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryLinkWhereInputSchema: z.ZodType<Prisma.InventoryLinkWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryLinkWhereInputSchema),z.lazy(() => InventoryLinkWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const InventoryLinkOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryLinkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  items: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict());

export const InventoryLinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryLinkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  created_by: z.string(),
  shifts: z.lazy(() => EventShiftCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  created_by: z.string(),
  shifts: z.lazy(() => EventShiftUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.lazy(() => EventShiftUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.lazy(() => EventShiftUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  created_by: z.string()
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventShiftCreateInputSchema: z.ZodType<Prisma.EventShiftCreateInput> = z.object({
  id: z.string().optional(),
  user: z.string().optional().nullable(),
  event: z.lazy(() => EventCreateNestedOneWithoutShiftsInputSchema),
  position: z.lazy(() => EventPositionCreateNestedOneWithoutEventShiftInputSchema)
}).strict();

export const EventShiftUncheckedCreateInputSchema: z.ZodType<Prisma.EventShiftUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  positionId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftUpdateInputSchema: z.ZodType<Prisma.EventShiftUpdateInput> = z.object({
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutShiftsNestedInputSchema).optional(),
  position: z.lazy(() => EventPositionUpdateOneRequiredWithoutEventShiftNestedInputSchema).optional()
}).strict();

export const EventShiftUncheckedUpdateInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateInput> = z.object({
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventShiftCreateManyInputSchema: z.ZodType<Prisma.EventShiftCreateManyInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  positionId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftUpdateManyMutationInputSchema: z.ZodType<Prisma.EventShiftUpdateManyMutationInput> = z.object({
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventShiftUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateManyInput> = z.object({
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventTemplateCreateInputSchema: z.ZodType<Prisma.EventTemplateCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListCreateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListCreateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateInputSchema: z.ZodType<Prisma.EventTemplateUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListUpdateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListUpdateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateManyInputSchema: z.ZodType<Prisma.EventTemplateCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListCreateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateManyMutationInputSchema: z.ZodType<Prisma.EventTemplateUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListUpdateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  positions: z.union([ z.lazy(() => PositionsForTemplatesListUpdateEnvelopeInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const EventPositionCreateInputSchema: z.ZodType<Prisma.EventPositionCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionCreateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.boolean().optional().nullable(),
  EventShift: z.lazy(() => EventShiftCreateNestedManyWithoutPositionInputSchema).optional()
}).strict();

export const EventPositionUncheckedCreateInputSchema: z.ZodType<Prisma.EventPositionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionCreateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.boolean().optional().nullable(),
  EventShift: z.lazy(() => EventShiftUncheckedCreateNestedManyWithoutPositionInputSchema).optional()
}).strict();

export const EventPositionUpdateInputSchema: z.ZodType<Prisma.EventPositionUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EventShift: z.lazy(() => EventShiftUpdateManyWithoutPositionNestedInputSchema).optional()
}).strict();

export const EventPositionUncheckedUpdateInputSchema: z.ZodType<Prisma.EventPositionUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EventShift: z.lazy(() => EventShiftUncheckedUpdateManyWithoutPositionNestedInputSchema).optional()
}).strict();

export const EventPositionCreateManyInputSchema: z.ZodType<Prisma.EventPositionCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionCreateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.boolean().optional().nullable()
}).strict();

export const EventPositionUpdateManyMutationInputSchema: z.ZodType<Prisma.EventPositionUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventPositionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventPositionUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCreateInputSchema: z.ZodType<Prisma.InventoryCreateInput> = z.object({
  id: z.string().optional(),
  item: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  qty: z.number().int(),
  qty_unit: z.string().optional().nullable(),
  pkg_size: z.number().int().optional().nullable(),
  pkg_size_unit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  link_id: z.string().optional().nullable()
}).strict();

export const InventoryUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  item: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  qty: z.number().int(),
  qty_unit: z.string().optional().nullable(),
  pkg_size: z.number().int().optional().nullable(),
  pkg_size_unit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  link_id: z.string().optional().nullable()
}).strict();

export const InventoryUpdateInputSchema: z.ZodType<Prisma.InventoryUpdateInput> = z.object({
  item: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qty_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  link_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateInput> = z.object({
  item: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qty_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  link_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryCreateManyInputSchema: z.ZodType<Prisma.InventoryCreateManyInput> = z.object({
  id: z.string().optional(),
  item: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  qty: z.number().int(),
  qty_unit: z.string().optional().nullable(),
  pkg_size: z.number().int().optional().nullable(),
  pkg_size_unit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  link_id: z.string().optional().nullable()
}).strict();

export const InventoryUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryUpdateManyMutationInput> = z.object({
  item: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qty_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  link_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InventoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyInput> = z.object({
  item: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  qty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qty_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pkg_size_unit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  link_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  name: z.string()
}).strict();

export const InventoryBrandUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const InventoryBrandUpdateInputSchema: z.ZodType<Prisma.InventoryBrandUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandCreateManyInputSchema: z.ZodType<Prisma.InventoryBrandCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const InventoryBrandUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryBrandUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryBrandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryBrandUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryLinkCreateInputSchema: z.ZodType<Prisma.InventoryLinkCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUpdateInputSchema: z.ZodType<Prisma.InventoryLinkUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkCreateManyInputSchema: z.ZodType<Prisma.InventoryLinkCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkCreateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryLinkUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.union([ z.lazy(() => InventoryLinkUpdateitemsInputSchema),z.string().array() ]).optional(),
}).strict();

export const InventoryLinkUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryLinkUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const EventShiftListRelationFilterSchema: z.ZodType<Prisma.EventShiftListRelationFilter> = z.object({
  every: z.lazy(() => EventShiftWhereInputSchema).optional(),
  some: z.lazy(() => EventShiftWhereInputSchema).optional(),
  none: z.lazy(() => EventShiftWhereInputSchema).optional()
}).strict();

export const EventShiftOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventShiftOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  created_by: z.lazy(() => SortOrderSchema).optional()
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

export const EventScalarRelationFilterSchema: z.ZodType<Prisma.EventScalarRelationFilter> = z.object({
  is: z.lazy(() => EventWhereInputSchema).optional(),
  isNot: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventPositionScalarRelationFilterSchema: z.ZodType<Prisma.EventPositionScalarRelationFilter> = z.object({
  is: z.lazy(() => EventPositionWhereInputSchema).optional(),
  isNot: z.lazy(() => EventPositionWhereInputSchema).optional()
}).strict();

export const EventShiftCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventShiftCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  positionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventShiftMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventShiftMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  positionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventShiftMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventShiftMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  positionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionsForTemplatesCompositeListFilterSchema: z.ZodType<Prisma.PositionsForTemplatesCompositeListFilter> = z.object({
  equals: z.lazy(() => PositionsForTemplatesObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => PositionsForTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => PositionsForTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => PositionsForTemplatesWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const PositionsForTemplatesObjectEqualityInputSchema: z.ZodType<Prisma.PositionsForTemplatesObjectEqualityInput> = z.object({
  positionId: z.string(),
  quantity: z.number()
}).strict();

export const PositionsForTemplatesOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.PositionsForTemplatesOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  time_start: z.lazy(() => SortOrderSchema).optional(),
  time_end: z.lazy(() => SortOrderSchema).optional()
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
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowed_user_types: z.lazy(() => SortOrderSchema).optional(),
  officer_only: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventPositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventPositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  officer_only: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventPositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventPositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  officer_only: z.lazy(() => SortOrderSchema).optional()
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
  item: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  qty: z.lazy(() => SortOrderSchema).optional(),
  qty_unit: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional(),
  pkg_size_unit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  link_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryAvgOrderByAggregateInput> = z.object({
  qty: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  qty: z.lazy(() => SortOrderSchema).optional(),
  qty_unit: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional(),
  pkg_size_unit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  link_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  qty: z.lazy(() => SortOrderSchema).optional(),
  qty_unit: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional(),
  pkg_size_unit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  link_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventorySumOrderByAggregateInputSchema: z.ZodType<Prisma.InventorySumOrderByAggregateInput> = z.object({
  qty: z.lazy(() => SortOrderSchema).optional(),
  pkg_size: z.lazy(() => SortOrderSchema).optional()
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
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryBrandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryBrandMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryBrandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryLinkMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryLinkMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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

export const EventShiftCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.EventShiftCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftCreateWithoutEventInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventShiftUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftCreateWithoutEventInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
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

export const EventShiftUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.EventShiftUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftCreateWithoutEventInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventShiftUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => EventShiftUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventShiftUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftCreateWithoutEventInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventShiftUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => EventShiftUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventCreateNestedOneWithoutShiftsInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutShiftsInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const EventPositionCreateNestedOneWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionCreateNestedOneWithoutEventShiftInput> = z.object({
  create: z.union([ z.lazy(() => EventPositionCreateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedCreateWithoutEventShiftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventPositionCreateOrConnectWithoutEventShiftInputSchema).optional(),
  connect: z.lazy(() => EventPositionWhereUniqueInputSchema).optional()
}).strict();

export const EventUpdateOneRequiredWithoutShiftsNestedInputSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutShiftsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedCreateWithoutShiftsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutShiftsInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutShiftsInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutShiftsInputSchema),z.lazy(() => EventUpdateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutShiftsInputSchema) ]).optional(),
}).strict();

export const EventPositionUpdateOneRequiredWithoutEventShiftNestedInputSchema: z.ZodType<Prisma.EventPositionUpdateOneRequiredWithoutEventShiftNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventPositionCreateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedCreateWithoutEventShiftInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventPositionCreateOrConnectWithoutEventShiftInputSchema).optional(),
  upsert: z.lazy(() => EventPositionUpsertWithoutEventShiftInputSchema).optional(),
  connect: z.lazy(() => EventPositionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventPositionUpdateToOneWithWhereWithoutEventShiftInputSchema),z.lazy(() => EventPositionUpdateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedUpdateWithoutEventShiftInputSchema) ]).optional(),
}).strict();

export const PositionsForTemplatesListCreateEnvelopeInputSchema: z.ZodType<Prisma.PositionsForTemplatesListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
}).strict();

export const PositionsForTemplatesCreateInputSchema: z.ZodType<Prisma.PositionsForTemplatesCreateInput> = z.object({
  positionId: z.string(),
  quantity: z.number()
}).strict();

export const PositionsForTemplatesListUpdateEnvelopeInputSchema: z.ZodType<Prisma.PositionsForTemplatesListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => PositionsForTemplatesCreateInputSchema),z.lazy(() => PositionsForTemplatesCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => PositionsForTemplatesUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => PositionsForTemplatesDeleteManyInputSchema).optional()
}).strict();

export const EventPositionCreateallowed_user_typesInputSchema: z.ZodType<Prisma.EventPositionCreateallowed_user_typesInput> = z.object({
  set: z.string().array()
}).strict();

export const EventShiftCreateNestedManyWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftCreateNestedManyWithoutPositionInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftCreateWithoutPositionInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyPositionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventShiftUncheckedCreateNestedManyWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUncheckedCreateNestedManyWithoutPositionInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftCreateWithoutPositionInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyPositionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventPositionUpdateallowed_user_typesInputSchema: z.ZodType<Prisma.EventPositionUpdateallowed_user_typesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const EventShiftUpdateManyWithoutPositionNestedInputSchema: z.ZodType<Prisma.EventShiftUpdateManyWithoutPositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftCreateWithoutPositionInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutPositionInputSchema),z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutPositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyPositionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutPositionInputSchema),z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutPositionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventShiftUpdateManyWithWhereWithoutPositionInputSchema),z.lazy(() => EventShiftUpdateManyWithWhereWithoutPositionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventShiftUncheckedUpdateManyWithoutPositionNestedInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateManyWithoutPositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftCreateWithoutPositionInputSchema).array(),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema),z.lazy(() => EventShiftCreateOrConnectWithoutPositionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutPositionInputSchema),z.lazy(() => EventShiftUpsertWithWhereUniqueWithoutPositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventShiftCreateManyPositionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventShiftWhereUniqueInputSchema),z.lazy(() => EventShiftWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutPositionInputSchema),z.lazy(() => EventShiftUpdateWithWhereUniqueWithoutPositionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventShiftUpdateManyWithWhereWithoutPositionInputSchema),z.lazy(() => EventShiftUpdateManyWithWhereWithoutPositionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
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

export const PositionsForTemplatesWhereInputSchema: z.ZodType<Prisma.PositionsForTemplatesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PositionsForTemplatesWhereInputSchema),z.lazy(() => PositionsForTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PositionsForTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PositionsForTemplatesWhereInputSchema),z.lazy(() => PositionsForTemplatesWhereInputSchema).array() ]).optional(),
  positionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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

export const EventShiftCreateWithoutEventInputSchema: z.ZodType<Prisma.EventShiftCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  user: z.string().optional().nullable(),
  position: z.lazy(() => EventPositionCreateNestedOneWithoutEventShiftInputSchema)
}).strict();

export const EventShiftUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUncheckedCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  positionId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.EventShiftCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const EventShiftCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.EventShiftCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventShiftCreateManyEventInputSchema),z.lazy(() => EventShiftCreateManyEventInputSchema).array() ]),
}).strict();

export const EventShiftUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventShiftUpdateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => EventShiftCreateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const EventShiftUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventShiftUpdateWithoutEventInputSchema),z.lazy(() => EventShiftUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const EventShiftUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => EventShiftScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventShiftUpdateManyMutationInputSchema),z.lazy(() => EventShiftUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const EventShiftScalarWhereInputSchema: z.ZodType<Prisma.EventShiftScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventShiftScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventShiftScalarWhereInputSchema),z.lazy(() => EventShiftScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  positionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const EventCreateWithoutShiftsInputSchema: z.ZodType<Prisma.EventCreateWithoutShiftsInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  created_by: z.string()
}).strict();

export const EventUncheckedCreateWithoutShiftsInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutShiftsInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  time_start: z.coerce.date().optional().nullable(),
  time_end: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional(),
  created_by: z.string()
}).strict();

export const EventCreateOrConnectWithoutShiftsInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutShiftsInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedCreateWithoutShiftsInputSchema) ]),
}).strict();

export const EventPositionCreateWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionCreateWithoutEventShiftInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionCreateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.boolean().optional().nullable()
}).strict();

export const EventPositionUncheckedCreateWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionUncheckedCreateWithoutEventShiftInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionCreateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.boolean().optional().nullable()
}).strict();

export const EventPositionCreateOrConnectWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionCreateOrConnectWithoutEventShiftInput> = z.object({
  where: z.lazy(() => EventPositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventPositionCreateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedCreateWithoutEventShiftInputSchema) ]),
}).strict();

export const EventUpsertWithoutShiftsInputSchema: z.ZodType<Prisma.EventUpsertWithoutShiftsInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutShiftsInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedCreateWithoutShiftsInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutShiftsInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutShiftsInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutShiftsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutShiftsInputSchema) ]),
}).strict();

export const EventUpdateWithoutShiftsInputSchema: z.ZodType<Prisma.EventUpdateWithoutShiftsInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUncheckedUpdateWithoutShiftsInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutShiftsInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_start: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  time_end: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  created_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventPositionUpsertWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionUpsertWithoutEventShiftInput> = z.object({
  update: z.union([ z.lazy(() => EventPositionUpdateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedUpdateWithoutEventShiftInputSchema) ]),
  create: z.union([ z.lazy(() => EventPositionCreateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedCreateWithoutEventShiftInputSchema) ]),
  where: z.lazy(() => EventPositionWhereInputSchema).optional()
}).strict();

export const EventPositionUpdateToOneWithWhereWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionUpdateToOneWithWhereWithoutEventShiftInput> = z.object({
  where: z.lazy(() => EventPositionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventPositionUpdateWithoutEventShiftInputSchema),z.lazy(() => EventPositionUncheckedUpdateWithoutEventShiftInputSchema) ]),
}).strict();

export const EventPositionUpdateWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionUpdateWithoutEventShiftInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventPositionUncheckedUpdateWithoutEventShiftInputSchema: z.ZodType<Prisma.EventPositionUncheckedUpdateWithoutEventShiftInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowed_user_types: z.union([ z.lazy(() => EventPositionUpdateallowed_user_typesInputSchema),z.string().array() ]).optional(),
  officer_only: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionsForTemplatesUpdateManyInputSchema: z.ZodType<Prisma.PositionsForTemplatesUpdateManyInput> = z.object({
  where: z.lazy(() => PositionsForTemplatesWhereInputSchema),
  data: z.lazy(() => PositionsForTemplatesUpdateInputSchema)
}).strict();

export const PositionsForTemplatesDeleteManyInputSchema: z.ZodType<Prisma.PositionsForTemplatesDeleteManyInput> = z.object({
  where: z.lazy(() => PositionsForTemplatesWhereInputSchema)
}).strict();

export const EventShiftCreateWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftCreateWithoutPositionInput> = z.object({
  id: z.string().optional(),
  user: z.string().optional().nullable(),
  event: z.lazy(() => EventCreateNestedOneWithoutShiftsInputSchema)
}).strict();

export const EventShiftUncheckedCreateWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUncheckedCreateWithoutPositionInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftCreateOrConnectWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftCreateOrConnectWithoutPositionInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema) ]),
}).strict();

export const EventShiftCreateManyPositionInputEnvelopeSchema: z.ZodType<Prisma.EventShiftCreateManyPositionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventShiftCreateManyPositionInputSchema),z.lazy(() => EventShiftCreateManyPositionInputSchema).array() ]),
}).strict();

export const EventShiftUpsertWithWhereUniqueWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUpsertWithWhereUniqueWithoutPositionInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventShiftUpdateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedUpdateWithoutPositionInputSchema) ]),
  create: z.union([ z.lazy(() => EventShiftCreateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedCreateWithoutPositionInputSchema) ]),
}).strict();

export const EventShiftUpdateWithWhereUniqueWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUpdateWithWhereUniqueWithoutPositionInput> = z.object({
  where: z.lazy(() => EventShiftWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventShiftUpdateWithoutPositionInputSchema),z.lazy(() => EventShiftUncheckedUpdateWithoutPositionInputSchema) ]),
}).strict();

export const EventShiftUpdateManyWithWhereWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUpdateManyWithWhereWithoutPositionInput> = z.object({
  where: z.lazy(() => EventShiftScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventShiftUpdateManyMutationInputSchema),z.lazy(() => EventShiftUncheckedUpdateManyWithoutPositionInputSchema) ]),
}).strict();

export const EventShiftCreateManyEventInputSchema: z.ZodType<Prisma.EventShiftCreateManyEventInput> = z.object({
  id: z.string().optional(),
  positionId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftUpdateWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUpdateWithoutEventInput> = z.object({
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.lazy(() => EventPositionUpdateOneRequiredWithoutEventShiftNestedInputSchema).optional()
}).strict();

export const EventShiftUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateWithoutEventInput> = z.object({
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventShiftUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateManyWithoutEventInput> = z.object({
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionsForTemplatesUpdateInputSchema: z.ZodType<Prisma.PositionsForTemplatesUpdateInput> = z.object({
  positionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventShiftCreateManyPositionInputSchema: z.ZodType<Prisma.EventShiftCreateManyPositionInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  user: z.string().optional().nullable()
}).strict();

export const EventShiftUpdateWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUpdateWithoutPositionInput> = z.object({
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutShiftsNestedInputSchema).optional()
}).strict();

export const EventShiftUncheckedUpdateWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateWithoutPositionInput> = z.object({
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EventShiftUncheckedUpdateManyWithoutPositionInputSchema: z.ZodType<Prisma.EventShiftUncheckedUpdateManyWithoutPositionInput> = z.object({
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const EventShiftFindFirstArgsSchema: z.ZodType<Prisma.EventShiftFindFirstArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereInputSchema.optional(),
  orderBy: z.union([ EventShiftOrderByWithRelationInputSchema.array(),EventShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: EventShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventShiftScalarFieldEnumSchema,EventShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventShiftFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventShiftFindFirstOrThrowArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereInputSchema.optional(),
  orderBy: z.union([ EventShiftOrderByWithRelationInputSchema.array(),EventShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: EventShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventShiftScalarFieldEnumSchema,EventShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventShiftFindManyArgsSchema: z.ZodType<Prisma.EventShiftFindManyArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereInputSchema.optional(),
  orderBy: z.union([ EventShiftOrderByWithRelationInputSchema.array(),EventShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: EventShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventShiftScalarFieldEnumSchema,EventShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventShiftAggregateArgsSchema: z.ZodType<Prisma.EventShiftAggregateArgs> = z.object({
  where: EventShiftWhereInputSchema.optional(),
  orderBy: z.union([ EventShiftOrderByWithRelationInputSchema.array(),EventShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: EventShiftWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventShiftGroupByArgsSchema: z.ZodType<Prisma.EventShiftGroupByArgs> = z.object({
  where: EventShiftWhereInputSchema.optional(),
  orderBy: z.union([ EventShiftOrderByWithAggregationInputSchema.array(),EventShiftOrderByWithAggregationInputSchema ]).optional(),
  by: EventShiftScalarFieldEnumSchema.array(),
  having: EventShiftScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventShiftFindUniqueArgsSchema: z.ZodType<Prisma.EventShiftFindUniqueArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereUniqueInputSchema,
}).strict() ;

export const EventShiftFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventShiftFindUniqueOrThrowArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereUniqueInputSchema,
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
  include: EventPositionIncludeSchema.optional(),
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventPositionScalarFieldEnumSchema,EventPositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventPositionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventPositionFindFirstOrThrowArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
  where: EventPositionWhereInputSchema.optional(),
  orderBy: z.union([ EventPositionOrderByWithRelationInputSchema.array(),EventPositionOrderByWithRelationInputSchema ]).optional(),
  cursor: EventPositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventPositionScalarFieldEnumSchema,EventPositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventPositionFindManyArgsSchema: z.ZodType<Prisma.EventPositionFindManyArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
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
  include: EventPositionIncludeSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventPositionFindUniqueOrThrowArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const EventDeleteManyArgsSchema: z.ZodType<Prisma.EventDeleteManyArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EventShiftCreateArgsSchema: z.ZodType<Prisma.EventShiftCreateArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  data: z.union([ EventShiftCreateInputSchema,EventShiftUncheckedCreateInputSchema ]),
}).strict() ;

export const EventShiftUpsertArgsSchema: z.ZodType<Prisma.EventShiftUpsertArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereUniqueInputSchema,
  create: z.union([ EventShiftCreateInputSchema,EventShiftUncheckedCreateInputSchema ]),
  update: z.union([ EventShiftUpdateInputSchema,EventShiftUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventShiftCreateManyArgsSchema: z.ZodType<Prisma.EventShiftCreateManyArgs> = z.object({
  data: z.union([ EventShiftCreateManyInputSchema,EventShiftCreateManyInputSchema.array() ]),
}).strict() ;

export const EventShiftDeleteArgsSchema: z.ZodType<Prisma.EventShiftDeleteArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  where: EventShiftWhereUniqueInputSchema,
}).strict() ;

export const EventShiftUpdateArgsSchema: z.ZodType<Prisma.EventShiftUpdateArgs> = z.object({
  select: EventShiftSelectSchema.optional(),
  include: EventShiftIncludeSchema.optional(),
  data: z.union([ EventShiftUpdateInputSchema,EventShiftUncheckedUpdateInputSchema ]),
  where: EventShiftWhereUniqueInputSchema,
}).strict() ;

export const EventShiftUpdateManyArgsSchema: z.ZodType<Prisma.EventShiftUpdateManyArgs> = z.object({
  data: z.union([ EventShiftUpdateManyMutationInputSchema,EventShiftUncheckedUpdateManyInputSchema ]),
  where: EventShiftWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EventShiftDeleteManyArgsSchema: z.ZodType<Prisma.EventShiftDeleteManyArgs> = z.object({
  where: EventShiftWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const EventTemplateDeleteManyArgsSchema: z.ZodType<Prisma.EventTemplateDeleteManyArgs> = z.object({
  where: EventTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EventPositionCreateArgsSchema: z.ZodType<Prisma.EventPositionCreateArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
  data: z.union([ EventPositionCreateInputSchema,EventPositionUncheckedCreateInputSchema ]),
}).strict() ;

export const EventPositionUpsertArgsSchema: z.ZodType<Prisma.EventPositionUpsertArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
  create: z.union([ EventPositionCreateInputSchema,EventPositionUncheckedCreateInputSchema ]),
  update: z.union([ EventPositionUpdateInputSchema,EventPositionUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventPositionCreateManyArgsSchema: z.ZodType<Prisma.EventPositionCreateManyArgs> = z.object({
  data: z.union([ EventPositionCreateManyInputSchema,EventPositionCreateManyInputSchema.array() ]),
}).strict() ;

export const EventPositionDeleteArgsSchema: z.ZodType<Prisma.EventPositionDeleteArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionUpdateArgsSchema: z.ZodType<Prisma.EventPositionUpdateArgs> = z.object({
  select: EventPositionSelectSchema.optional(),
  include: EventPositionIncludeSchema.optional(),
  data: z.union([ EventPositionUpdateInputSchema,EventPositionUncheckedUpdateInputSchema ]),
  where: EventPositionWhereUniqueInputSchema,
}).strict() ;

export const EventPositionUpdateManyArgsSchema: z.ZodType<Prisma.EventPositionUpdateManyArgs> = z.object({
  data: z.union([ EventPositionUpdateManyMutationInputSchema,EventPositionUncheckedUpdateManyInputSchema ]),
  where: EventPositionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EventPositionDeleteManyArgsSchema: z.ZodType<Prisma.EventPositionDeleteManyArgs> = z.object({
  where: EventPositionWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const InventoryDeleteManyArgsSchema: z.ZodType<Prisma.InventoryDeleteManyArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const InventoryCategoryDeleteManyArgsSchema: z.ZodType<Prisma.InventoryCategoryDeleteManyArgs> = z.object({
  where: InventoryCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const QuantityUnitDeleteManyArgsSchema: z.ZodType<Prisma.QuantityUnitDeleteManyArgs> = z.object({
  where: QuantityUnitWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const InventoryTagDeleteManyArgsSchema: z.ZodType<Prisma.InventoryTagDeleteManyArgs> = z.object({
  where: InventoryTagWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const InventoryBrandDeleteManyArgsSchema: z.ZodType<Prisma.InventoryBrandDeleteManyArgs> = z.object({
  where: InventoryBrandWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const InventoryLinkDeleteManyArgsSchema: z.ZodType<Prisma.InventoryLinkDeleteManyArgs> = z.object({
  where: InventoryLinkWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const UserRoleDeleteManyArgsSchema: z.ZodType<Prisma.UserRoleDeleteManyArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const UserTypeDeleteManyArgsSchema: z.ZodType<Prisma.UserTypeDeleteManyArgs> = z.object({
  where: UserTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
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
  limit: z.number().optional(),
}).strict() ;

export const OfficerRoleDeleteManyArgsSchema: z.ZodType<Prisma.OfficerRoleDeleteManyArgs> = z.object({
  where: OfficerRoleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;