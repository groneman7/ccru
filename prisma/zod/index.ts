import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const EventScalarFieldEnumSchema = z.enum(['id','date','name','description','location','timeStart','timeEnd','createdAt','createdBy']);

export const EventTemplateScalarFieldEnumSchema = z.enum(['id','name','description','location','timeStart','timeEnd']);

export const UserRoleScalarFieldEnumSchema = z.enum(['id','name','description']);

export const UserTypeScalarFieldEnumSchema = z.enum(['id','name','description']);

export const PositionScalarFieldEnumSchema = z.enum(['id','name','label','description','allowedUserTypes','officerOnly']);

export const OfficerScalarFieldEnumSchema = z.enum(['id','label','description']);

export const AssetScalarFieldEnumSchema = z.enum(['id','name','brand','category','location','quantity','quantityUnit','packageSize','packageSizeUnit','upc','ndc','expiration','lot','comments']);

export const AssetCategoryScalarFieldEnumSchema = z.enum(['id','name','description']);

export const QuantityUnitScalarFieldEnumSchema = z.enum(['id','name']);

export const AssetTagScalarFieldEnumSchema = z.enum(['id','name','label']);

export const AssetBrandScalarFieldEnumSchema = z.enum(['id','name']);

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
  name: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  timeStart: z.coerce.date().nullable(),
  timeEnd: z.coerce.date().nullable(),
})

export type EventTemplate = z.infer<typeof EventTemplateSchema>

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// USER TYPE SCHEMA
/////////////////////////////////////////

export const UserTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
})

export type UserType = z.infer<typeof UserTypeSchema>

/////////////////////////////////////////
// POSITION SCHEMA
/////////////////////////////////////////

export const PositionSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string().nullable(),
  description: z.string().nullable(),
  allowedUserTypes: z.string().array(),
  officerOnly: z.boolean().nullable(),
})

export type Position = z.infer<typeof PositionSchema>

/////////////////////////////////////////
// OFFICER SCHEMA
/////////////////////////////////////////

export const OfficerSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().nullable(),
})

export type Officer = z.infer<typeof OfficerSchema>

/////////////////////////////////////////
// ASSET SCHEMA
/////////////////////////////////////////

export const AssetSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string().nullable(),
  category: z.string().nullable(),
  location: z.string().nullable(),
  quantity: z.number().int(),
  quantityUnit: z.string().nullable(),
  packageSize: z.number().int().nullable(),
  packageSizeUnit: z.string().nullable(),
  upc: z.string().nullable(),
  ndc: z.string().nullable(),
  expiration: z.coerce.date().nullable(),
  lot: z.string().nullable(),
  comments: z.string().nullable(),
})

export type Asset = z.infer<typeof AssetSchema>

/////////////////////////////////////////
// ASSET CATEGORY SCHEMA
/////////////////////////////////////////

export const AssetCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
})

export type AssetCategory = z.infer<typeof AssetCategorySchema>

/////////////////////////////////////////
// QUANTITY UNIT SCHEMA
/////////////////////////////////////////

export const QuantityUnitSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type QuantityUnit = z.infer<typeof QuantityUnitSchema>

/////////////////////////////////////////
// ASSET TAG SCHEMA
/////////////////////////////////////////

export const AssetTagSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string().nullable(),
})

export type AssetTag = z.infer<typeof AssetTagSchema>

/////////////////////////////////////////
// ASSET BRAND SCHEMA
/////////////////////////////////////////

export const AssetBrandSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type AssetBrand = z.infer<typeof AssetBrandSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////
// SHIFT TYPE
//------------------------------------------------------


/////////////////////////////////////////
// SHIFT TYPE SCHEMA
/////////////////////////////////////////

export const shiftTypeSchema = z.object({
  positionId: z.string(),
  userId: z.string().nullable(),
})

export type shiftType = z.infer<typeof shiftTypeSchema>

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
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  timeStart: z.boolean().optional(),
  timeEnd: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  shifts: z.union([z.boolean(),z.lazy(() => shiftTypeArgsSchema)]).optional(),
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
  timeStart: z.boolean().optional(),
  timeEnd: z.boolean().optional(),
  shifts: z.union([z.boolean(),z.lazy(() => shiftTypeArgsSchema)]).optional(),
}).strict()

// USER ROLE
//------------------------------------------------------

export const UserRoleArgsSchema: z.ZodType<Prisma.UserRoleDefaultArgs> = z.object({
  select: z.lazy(() => UserRoleSelectSchema).optional(),
}).strict();

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// USER TYPE
//------------------------------------------------------

export const UserTypeArgsSchema: z.ZodType<Prisma.UserTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserTypeSelectSchema).optional(),
}).strict();

export const UserTypeSelectSchema: z.ZodType<Prisma.UserTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// POSITION
//------------------------------------------------------

export const PositionArgsSchema: z.ZodType<Prisma.PositionDefaultArgs> = z.object({
  select: z.lazy(() => PositionSelectSchema).optional(),
}).strict();

export const PositionSelectSchema: z.ZodType<Prisma.PositionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  allowedUserTypes: z.boolean().optional(),
  officerOnly: z.boolean().optional(),
}).strict()

// OFFICER
//------------------------------------------------------

export const OfficerArgsSchema: z.ZodType<Prisma.OfficerDefaultArgs> = z.object({
  select: z.lazy(() => OfficerSelectSchema).optional(),
}).strict();

export const OfficerSelectSchema: z.ZodType<Prisma.OfficerSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// ASSET
//------------------------------------------------------

export const AssetArgsSchema: z.ZodType<Prisma.AssetDefaultArgs> = z.object({
  select: z.lazy(() => AssetSelectSchema).optional(),
}).strict();

export const AssetSelectSchema: z.ZodType<Prisma.AssetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  brand: z.boolean().optional(),
  category: z.boolean().optional(),
  location: z.boolean().optional(),
  quantity: z.boolean().optional(),
  quantityUnit: z.boolean().optional(),
  packageSize: z.boolean().optional(),
  packageSizeUnit: z.boolean().optional(),
  upc: z.boolean().optional(),
  ndc: z.boolean().optional(),
  expiration: z.boolean().optional(),
  lot: z.boolean().optional(),
  comments: z.boolean().optional(),
}).strict()

// ASSET CATEGORY
//------------------------------------------------------

export const AssetCategoryArgsSchema: z.ZodType<Prisma.AssetCategoryDefaultArgs> = z.object({
  select: z.lazy(() => AssetCategorySelectSchema).optional(),
}).strict();

export const AssetCategorySelectSchema: z.ZodType<Prisma.AssetCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
}).strict()

// QUANTITY UNIT
//------------------------------------------------------

export const QuantityUnitArgsSchema: z.ZodType<Prisma.QuantityUnitDefaultArgs> = z.object({
  select: z.lazy(() => QuantityUnitSelectSchema).optional(),
}).strict();

export const QuantityUnitSelectSchema: z.ZodType<Prisma.QuantityUnitSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

// ASSET TAG
//------------------------------------------------------

export const AssetTagArgsSchema: z.ZodType<Prisma.AssetTagDefaultArgs> = z.object({
  select: z.lazy(() => AssetTagSelectSchema).optional(),
}).strict();

export const AssetTagSelectSchema: z.ZodType<Prisma.AssetTagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
}).strict()

// ASSET BRAND
//------------------------------------------------------

export const AssetBrandArgsSchema: z.ZodType<Prisma.AssetBrandDefaultArgs> = z.object({
  select: z.lazy(() => AssetBrandSelectSchema).optional(),
}).strict();

export const AssetBrandSelectSchema: z.ZodType<Prisma.AssetBrandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

// SHIFT TYPE
//------------------------------------------------------

export const shiftTypeArgsSchema: z.ZodType<Prisma.shiftTypeDefaultArgs> = z.object({
  select: z.lazy(() => shiftTypeSelectSchema).optional(),
}).strict();

export const shiftTypeSelectSchema: z.ZodType<Prisma.shiftTypeSelect> = z.object({
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.union([ z.lazy(() => ShiftTypeCompositeListFilterSchema),z.lazy(() => shiftTypeObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const EventOrderByWithRelationInputSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  shifts: z.lazy(() => shiftTypeOrderByCompositeAggregateInputSchema).optional()
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
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shifts: z.union([ z.lazy(() => ShiftTypeCompositeListFilterSchema),z.lazy(() => shiftTypeObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const EventOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => ShiftTypeCompositeListFilterSchema),z.lazy(() => shiftTypeObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional(),
  shifts: z.lazy(() => shiftTypeOrderByCompositeAggregateInputSchema).optional()
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
  timeStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => ShiftTypeCompositeListFilterSchema),z.lazy(() => shiftTypeObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const EventTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserTypeWhereInputSchema: z.ZodType<Prisma.UserTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserTypeWhereInputSchema),z.lazy(() => UserTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.UserTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const UserTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PositionWhereInputSchema: z.ZodType<Prisma.PositionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PositionWhereInputSchema),z.lazy(() => PositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PositionWhereInputSchema),z.lazy(() => PositionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const PositionOrderByWithRelationInputSchema: z.ZodType<Prisma.PositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionWhereUniqueInputSchema: z.ZodType<Prisma.PositionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PositionWhereInputSchema),z.lazy(() => PositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PositionWhereInputSchema),z.lazy(() => PositionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict());

export const PositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PositionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PositionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PositionMinOrderByAggregateInputSchema).optional()
}).strict();

export const PositionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PositionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PositionScalarWhereWithAggregatesInputSchema),z.lazy(() => PositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PositionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PositionScalarWhereWithAggregatesInputSchema),z.lazy(() => PositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  allowedUserTypes: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const OfficerWhereInputSchema: z.ZodType<Prisma.OfficerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OfficerWhereInputSchema),z.lazy(() => OfficerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerWhereInputSchema),z.lazy(() => OfficerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const OfficerOrderByWithRelationInputSchema: z.ZodType<Prisma.OfficerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerWhereUniqueInputSchema: z.ZodType<Prisma.OfficerWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OfficerWhereInputSchema),z.lazy(() => OfficerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerWhereInputSchema),z.lazy(() => OfficerWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const OfficerOrderByWithAggregationInputSchema: z.ZodType<Prisma.OfficerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OfficerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OfficerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OfficerMinOrderByAggregateInputSchema).optional()
}).strict();

export const OfficerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OfficerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OfficerScalarWhereWithAggregatesInputSchema),z.lazy(() => OfficerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OfficerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OfficerScalarWhereWithAggregatesInputSchema),z.lazy(() => OfficerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetWhereInputSchema: z.ZodType<Prisma.AssetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quantityUnit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  packageSizeUnit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetOrderByWithRelationInputSchema: z.ZodType<Prisma.AssetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnit: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetWhereUniqueInputSchema: z.ZodType<Prisma.AssetWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetWhereInputSchema),z.lazy(() => AssetWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  quantityUnit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  packageSizeUnit: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const AssetOrderByWithAggregationInputSchema: z.ZodType<Prisma.AssetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnit: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AssetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AssetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AssetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AssetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AssetSumOrderByAggregateInputSchema).optional()
}).strict();

export const AssetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AssetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AssetScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brand: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  quantityUnit: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  packageSize: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  packageSizeUnit: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  upc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ndc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expiration: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  lot: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetCategoryWhereInputSchema: z.ZodType<Prisma.AssetCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AssetCategoryWhereInputSchema),z.lazy(() => AssetCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetCategoryWhereInputSchema),z.lazy(() => AssetCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.AssetCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetCategoryWhereUniqueInputSchema: z.ZodType<Prisma.AssetCategoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AssetCategoryWhereInputSchema),z.lazy(() => AssetCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetCategoryWhereInputSchema),z.lazy(() => AssetCategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const AssetCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.AssetCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AssetCategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AssetCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AssetCategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const AssetCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AssetCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AssetCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const QuantityUnitWhereInputSchema: z.ZodType<Prisma.QuantityUnitWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const QuantityUnitOrderByWithRelationInputSchema: z.ZodType<Prisma.QuantityUnitOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitWhereUniqueInputSchema: z.ZodType<Prisma.QuantityUnitWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitWhereInputSchema),z.lazy(() => QuantityUnitWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const QuantityUnitOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuantityUnitOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuantityUnitCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuantityUnitMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuantityUnitMinOrderByAggregateInputSchema).optional()
}).strict();

export const QuantityUnitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuantityUnitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema),z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema),z.lazy(() => QuantityUnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AssetTagWhereInputSchema: z.ZodType<Prisma.AssetTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AssetTagWhereInputSchema),z.lazy(() => AssetTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetTagWhereInputSchema),z.lazy(() => AssetTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetTagOrderByWithRelationInputSchema: z.ZodType<Prisma.AssetTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetTagWhereUniqueInputSchema: z.ZodType<Prisma.AssetTagWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AssetTagWhereInputSchema),z.lazy(() => AssetTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetTagWhereInputSchema),z.lazy(() => AssetTagWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const AssetTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.AssetTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AssetTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AssetTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AssetTagMinOrderByAggregateInputSchema).optional()
}).strict();

export const AssetTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AssetTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AssetTagScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetTagScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AssetBrandWhereInputSchema: z.ZodType<Prisma.AssetBrandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AssetBrandWhereInputSchema),z.lazy(() => AssetBrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetBrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetBrandWhereInputSchema),z.lazy(() => AssetBrandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const AssetBrandOrderByWithRelationInputSchema: z.ZodType<Prisma.AssetBrandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetBrandWhereUniqueInputSchema: z.ZodType<Prisma.AssetBrandWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AssetBrandWhereInputSchema),z.lazy(() => AssetBrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetBrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetBrandWhereInputSchema),z.lazy(() => AssetBrandWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const AssetBrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.AssetBrandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AssetBrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AssetBrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AssetBrandMinOrderByAggregateInputSchema).optional()
}).strict();

export const AssetBrandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AssetBrandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AssetBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AssetBrandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AssetBrandScalarWhereWithAggregatesInputSchema),z.lazy(() => AssetBrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventCreateInputSchema: z.ZodType<Prisma.EventCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateInputSchema: z.ZodType<Prisma.EventTemplateCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateInputSchema: z.ZodType<Prisma.EventTemplateUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateManyInputSchema: z.ZodType<Prisma.EventTemplateCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.coerce.date().optional().nullable(),
  timeEnd: z.coerce.date().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateManyMutationInputSchema: z.ZodType<Prisma.EventTemplateUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.UserRoleUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeCreateInputSchema: z.ZodType<Prisma.UserTypeCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUncheckedCreateInputSchema: z.ZodType<Prisma.UserTypeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUpdateInputSchema: z.ZodType<Prisma.UserTypeUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.UserTypeUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeCreateManyInputSchema: z.ZodType<Prisma.UserTypeCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const UserTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.UserTypeUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserTypeUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionCreateInputSchema: z.ZodType<Prisma.PositionCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUncheckedCreateInputSchema: z.ZodType<Prisma.PositionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUpdateInputSchema: z.ZodType<Prisma.PositionUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionUncheckedUpdateInputSchema: z.ZodType<Prisma.PositionUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionCreateManyInputSchema: z.ZodType<Prisma.PositionCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionCreateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUpdateManyMutationInputSchema: z.ZodType<Prisma.PositionUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PositionUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowedUserTypes: z.union([ z.lazy(() => PositionUpdateallowedUserTypesInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerCreateInputSchema: z.ZodType<Prisma.OfficerCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerUncheckedCreateInputSchema: z.ZodType<Prisma.OfficerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerUpdateInputSchema: z.ZodType<Prisma.OfficerUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerUncheckedUpdateInputSchema: z.ZodType<Prisma.OfficerUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerCreateManyInputSchema: z.ZodType<Prisma.OfficerCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const OfficerUpdateManyMutationInputSchema: z.ZodType<Prisma.OfficerUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OfficerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OfficerUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCreateInputSchema: z.ZodType<Prisma.AssetCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnit: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable()
}).strict();

export const AssetUncheckedCreateInputSchema: z.ZodType<Prisma.AssetUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnit: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable()
}).strict();

export const AssetUpdateInputSchema: z.ZodType<Prisma.AssetUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetUncheckedUpdateInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCreateManyInputSchema: z.ZodType<Prisma.AssetCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  brand: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  quantity: z.number().int(),
  quantityUnit: z.string().optional().nullable(),
  packageSize: z.number().int().optional().nullable(),
  packageSizeUnit: z.string().optional().nullable(),
  upc: z.string().optional().nullable(),
  ndc: z.string().optional().nullable(),
  expiration: z.coerce.date().optional().nullable(),
  lot: z.string().optional().nullable(),
  comments: z.string().optional().nullable()
}).strict();

export const AssetUpdateManyMutationInputSchema: z.ZodType<Prisma.AssetUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AssetUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantityUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  packageSizeUnit: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  upc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ndc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiration: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lot: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCategoryCreateInputSchema: z.ZodType<Prisma.AssetCategoryCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const AssetCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.AssetCategoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const AssetCategoryUpdateInputSchema: z.ZodType<Prisma.AssetCategoryUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.AssetCategoryUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCategoryCreateManyInputSchema: z.ZodType<Prisma.AssetCategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const AssetCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.AssetCategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AssetCategoryUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const QuantityUnitCreateInputSchema: z.ZodType<Prisma.QuantityUnitCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const QuantityUnitUncheckedCreateInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const QuantityUnitUpdateInputSchema: z.ZodType<Prisma.QuantityUnitUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitUncheckedUpdateInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitCreateManyInputSchema: z.ZodType<Prisma.QuantityUnitCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const QuantityUnitUpdateManyMutationInputSchema: z.ZodType<Prisma.QuantityUnitUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuantityUnitUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuantityUnitUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetTagCreateInputSchema: z.ZodType<Prisma.AssetTagCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable()
}).strict();

export const AssetTagUncheckedCreateInputSchema: z.ZodType<Prisma.AssetTagUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable()
}).strict();

export const AssetTagUpdateInputSchema: z.ZodType<Prisma.AssetTagUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetTagUncheckedUpdateInputSchema: z.ZodType<Prisma.AssetTagUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetTagCreateManyInputSchema: z.ZodType<Prisma.AssetTagCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  label: z.string().optional().nullable()
}).strict();

export const AssetTagUpdateManyMutationInputSchema: z.ZodType<Prisma.AssetTagUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetTagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AssetTagUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AssetBrandCreateInputSchema: z.ZodType<Prisma.AssetBrandCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const AssetBrandUncheckedCreateInputSchema: z.ZodType<Prisma.AssetBrandUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const AssetBrandUpdateInputSchema: z.ZodType<Prisma.AssetBrandUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetBrandUncheckedUpdateInputSchema: z.ZodType<Prisma.AssetBrandUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetBrandCreateManyInputSchema: z.ZodType<Prisma.AssetBrandCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const AssetBrandUpdateManyMutationInputSchema: z.ZodType<Prisma.AssetBrandUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AssetBrandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AssetBrandUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const ShiftTypeCompositeListFilterSchema: z.ZodType<Prisma.ShiftTypeCompositeListFilter> = z.object({
  equals: z.lazy(() => shiftTypeObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => shiftTypeWhereInputSchema).optional(),
  some: z.lazy(() => shiftTypeWhereInputSchema).optional(),
  none: z.lazy(() => shiftTypeWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const shiftTypeObjectEqualityInputSchema: z.ZodType<Prisma.shiftTypeObjectEqualityInput> = z.object({
  positionId: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const shiftTypeOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.shiftTypeOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventTemplateMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventTemplateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  timeStart: z.lazy(() => SortOrderSchema).optional(),
  timeEnd: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
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

export const PositionCountOrderByAggregateInputSchema: z.ZodType<Prisma.PositionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  allowedUserTypes: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.PositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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

export const OfficerCountOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OfficerMinOrderByAggregateInputSchema: z.ZodType<Prisma.OfficerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
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

export const AssetCountOrderByAggregateInputSchema: z.ZodType<Prisma.AssetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnit: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AssetAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AssetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnit: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetMinOrderByAggregateInputSchema: z.ZodType<Prisma.AssetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  quantityUnit: z.lazy(() => SortOrderSchema).optional(),
  packageSize: z.lazy(() => SortOrderSchema).optional(),
  packageSizeUnit: z.lazy(() => SortOrderSchema).optional(),
  upc: z.lazy(() => SortOrderSchema).optional(),
  ndc: z.lazy(() => SortOrderSchema).optional(),
  expiration: z.lazy(() => SortOrderSchema).optional(),
  lot: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetSumOrderByAggregateInputSchema: z.ZodType<Prisma.AssetSumOrderByAggregateInput> = z.object({
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

export const AssetCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.AssetCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AssetCategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.AssetCategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuantityUnitMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuantityUnitMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.AssetTagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetTagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AssetTagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetTagMinOrderByAggregateInputSchema: z.ZodType<Prisma.AssetTagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetBrandCountOrderByAggregateInputSchema: z.ZodType<Prisma.AssetBrandCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetBrandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AssetBrandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AssetBrandMinOrderByAggregateInputSchema: z.ZodType<Prisma.AssetBrandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const shiftTypeListCreateEnvelopeInputSchema: z.ZodType<Prisma.shiftTypeListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const shiftTypeCreateInputSchema: z.ZodType<Prisma.shiftTypeCreateInput> = z.object({
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

export const shiftTypeListUpdateEnvelopeInputSchema: z.ZodType<Prisma.shiftTypeListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => shiftTypeUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => shiftTypeDeleteManyInputSchema).optional()
}).strict();

export const PositionCreateallowedUserTypesInputSchema: z.ZodType<Prisma.PositionCreateallowedUserTypesInput> = z.object({
  set: z.string().array()
}).strict();

export const PositionUpdateallowedUserTypesInputSchema: z.ZodType<Prisma.PositionUpdateallowedUserTypesInput> = z.object({
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

export const shiftTypeWhereInputSchema: z.ZodType<Prisma.shiftTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => shiftTypeWhereInputSchema),z.lazy(() => shiftTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => shiftTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => shiftTypeWhereInputSchema),z.lazy(() => shiftTypeWhereInputSchema).array() ]).optional(),
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

export const shiftTypeUpdateManyInputSchema: z.ZodType<Prisma.shiftTypeUpdateManyInput> = z.object({
  where: z.lazy(() => shiftTypeWhereInputSchema),
  data: z.lazy(() => shiftTypeUpdateInputSchema)
}).strict();

export const shiftTypeDeleteManyInputSchema: z.ZodType<Prisma.shiftTypeDeleteManyInput> = z.object({
  where: z.lazy(() => shiftTypeWhereInputSchema)
}).strict();

export const shiftTypeUpdateInputSchema: z.ZodType<Prisma.shiftTypeUpdateInput> = z.object({
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

export const PositionFindFirstArgsSchema: z.ZodType<Prisma.PositionFindFirstArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereInputSchema.optional(),
  orderBy: z.union([ PositionOrderByWithRelationInputSchema.array(),PositionOrderByWithRelationInputSchema ]).optional(),
  cursor: PositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PositionScalarFieldEnumSchema,PositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PositionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PositionFindFirstOrThrowArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereInputSchema.optional(),
  orderBy: z.union([ PositionOrderByWithRelationInputSchema.array(),PositionOrderByWithRelationInputSchema ]).optional(),
  cursor: PositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PositionScalarFieldEnumSchema,PositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PositionFindManyArgsSchema: z.ZodType<Prisma.PositionFindManyArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereInputSchema.optional(),
  orderBy: z.union([ PositionOrderByWithRelationInputSchema.array(),PositionOrderByWithRelationInputSchema ]).optional(),
  cursor: PositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PositionScalarFieldEnumSchema,PositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PositionAggregateArgsSchema: z.ZodType<Prisma.PositionAggregateArgs> = z.object({
  where: PositionWhereInputSchema.optional(),
  orderBy: z.union([ PositionOrderByWithRelationInputSchema.array(),PositionOrderByWithRelationInputSchema ]).optional(),
  cursor: PositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PositionGroupByArgsSchema: z.ZodType<Prisma.PositionGroupByArgs> = z.object({
  where: PositionWhereInputSchema.optional(),
  orderBy: z.union([ PositionOrderByWithAggregationInputSchema.array(),PositionOrderByWithAggregationInputSchema ]).optional(),
  by: PositionScalarFieldEnumSchema.array(),
  having: PositionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PositionFindUniqueArgsSchema: z.ZodType<Prisma.PositionFindUniqueArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereUniqueInputSchema,
}).strict() ;

export const PositionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PositionFindUniqueOrThrowArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereUniqueInputSchema,
}).strict() ;

export const OfficerFindFirstArgsSchema: z.ZodType<Prisma.OfficerFindFirstArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereInputSchema.optional(),
  orderBy: z.union([ OfficerOrderByWithRelationInputSchema.array(),OfficerOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerScalarFieldEnumSchema,OfficerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OfficerFindFirstOrThrowArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereInputSchema.optional(),
  orderBy: z.union([ OfficerOrderByWithRelationInputSchema.array(),OfficerOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerScalarFieldEnumSchema,OfficerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerFindManyArgsSchema: z.ZodType<Prisma.OfficerFindManyArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereInputSchema.optional(),
  orderBy: z.union([ OfficerOrderByWithRelationInputSchema.array(),OfficerOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OfficerScalarFieldEnumSchema,OfficerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OfficerAggregateArgsSchema: z.ZodType<Prisma.OfficerAggregateArgs> = z.object({
  where: OfficerWhereInputSchema.optional(),
  orderBy: z.union([ OfficerOrderByWithRelationInputSchema.array(),OfficerOrderByWithRelationInputSchema ]).optional(),
  cursor: OfficerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OfficerGroupByArgsSchema: z.ZodType<Prisma.OfficerGroupByArgs> = z.object({
  where: OfficerWhereInputSchema.optional(),
  orderBy: z.union([ OfficerOrderByWithAggregationInputSchema.array(),OfficerOrderByWithAggregationInputSchema ]).optional(),
  by: OfficerScalarFieldEnumSchema.array(),
  having: OfficerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OfficerFindUniqueArgsSchema: z.ZodType<Prisma.OfficerFindUniqueArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereUniqueInputSchema,
}).strict() ;

export const OfficerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OfficerFindUniqueOrThrowArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereUniqueInputSchema,
}).strict() ;

export const AssetFindFirstArgsSchema: z.ZodType<Prisma.AssetFindFirstArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AssetFindFirstOrThrowArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetFindManyArgsSchema: z.ZodType<Prisma.AssetFindManyArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetScalarFieldEnumSchema,AssetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetAggregateArgsSchema: z.ZodType<Prisma.AssetAggregateArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithRelationInputSchema.array(),AssetOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetGroupByArgsSchema: z.ZodType<Prisma.AssetGroupByArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
  orderBy: z.union([ AssetOrderByWithAggregationInputSchema.array(),AssetOrderByWithAggregationInputSchema ]).optional(),
  by: AssetScalarFieldEnumSchema.array(),
  having: AssetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetFindUniqueArgsSchema: z.ZodType<Prisma.AssetFindUniqueArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AssetFindUniqueOrThrowArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetCategoryFindFirstArgsSchema: z.ZodType<Prisma.AssetCategoryFindFirstArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereInputSchema.optional(),
  orderBy: z.union([ AssetCategoryOrderByWithRelationInputSchema.array(),AssetCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetCategoryScalarFieldEnumSchema,AssetCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AssetCategoryFindFirstOrThrowArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereInputSchema.optional(),
  orderBy: z.union([ AssetCategoryOrderByWithRelationInputSchema.array(),AssetCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetCategoryScalarFieldEnumSchema,AssetCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetCategoryFindManyArgsSchema: z.ZodType<Prisma.AssetCategoryFindManyArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereInputSchema.optional(),
  orderBy: z.union([ AssetCategoryOrderByWithRelationInputSchema.array(),AssetCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetCategoryScalarFieldEnumSchema,AssetCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetCategoryAggregateArgsSchema: z.ZodType<Prisma.AssetCategoryAggregateArgs> = z.object({
  where: AssetCategoryWhereInputSchema.optional(),
  orderBy: z.union([ AssetCategoryOrderByWithRelationInputSchema.array(),AssetCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetCategoryGroupByArgsSchema: z.ZodType<Prisma.AssetCategoryGroupByArgs> = z.object({
  where: AssetCategoryWhereInputSchema.optional(),
  orderBy: z.union([ AssetCategoryOrderByWithAggregationInputSchema.array(),AssetCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: AssetCategoryScalarFieldEnumSchema.array(),
  having: AssetCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetCategoryFindUniqueArgsSchema: z.ZodType<Prisma.AssetCategoryFindUniqueArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereUniqueInputSchema,
}).strict() ;

export const AssetCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AssetCategoryFindUniqueOrThrowArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereUniqueInputSchema,
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

export const AssetTagFindFirstArgsSchema: z.ZodType<Prisma.AssetTagFindFirstArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereInputSchema.optional(),
  orderBy: z.union([ AssetTagOrderByWithRelationInputSchema.array(),AssetTagOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetTagScalarFieldEnumSchema,AssetTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AssetTagFindFirstOrThrowArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereInputSchema.optional(),
  orderBy: z.union([ AssetTagOrderByWithRelationInputSchema.array(),AssetTagOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetTagScalarFieldEnumSchema,AssetTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetTagFindManyArgsSchema: z.ZodType<Prisma.AssetTagFindManyArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereInputSchema.optional(),
  orderBy: z.union([ AssetTagOrderByWithRelationInputSchema.array(),AssetTagOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetTagScalarFieldEnumSchema,AssetTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetTagAggregateArgsSchema: z.ZodType<Prisma.AssetTagAggregateArgs> = z.object({
  where: AssetTagWhereInputSchema.optional(),
  orderBy: z.union([ AssetTagOrderByWithRelationInputSchema.array(),AssetTagOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetTagGroupByArgsSchema: z.ZodType<Prisma.AssetTagGroupByArgs> = z.object({
  where: AssetTagWhereInputSchema.optional(),
  orderBy: z.union([ AssetTagOrderByWithAggregationInputSchema.array(),AssetTagOrderByWithAggregationInputSchema ]).optional(),
  by: AssetTagScalarFieldEnumSchema.array(),
  having: AssetTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetTagFindUniqueArgsSchema: z.ZodType<Prisma.AssetTagFindUniqueArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereUniqueInputSchema,
}).strict() ;

export const AssetTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AssetTagFindUniqueOrThrowArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereUniqueInputSchema,
}).strict() ;

export const AssetBrandFindFirstArgsSchema: z.ZodType<Prisma.AssetBrandFindFirstArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereInputSchema.optional(),
  orderBy: z.union([ AssetBrandOrderByWithRelationInputSchema.array(),AssetBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetBrandScalarFieldEnumSchema,AssetBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetBrandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AssetBrandFindFirstOrThrowArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereInputSchema.optional(),
  orderBy: z.union([ AssetBrandOrderByWithRelationInputSchema.array(),AssetBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetBrandScalarFieldEnumSchema,AssetBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetBrandFindManyArgsSchema: z.ZodType<Prisma.AssetBrandFindManyArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereInputSchema.optional(),
  orderBy: z.union([ AssetBrandOrderByWithRelationInputSchema.array(),AssetBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AssetBrandScalarFieldEnumSchema,AssetBrandScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AssetBrandAggregateArgsSchema: z.ZodType<Prisma.AssetBrandAggregateArgs> = z.object({
  where: AssetBrandWhereInputSchema.optional(),
  orderBy: z.union([ AssetBrandOrderByWithRelationInputSchema.array(),AssetBrandOrderByWithRelationInputSchema ]).optional(),
  cursor: AssetBrandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetBrandGroupByArgsSchema: z.ZodType<Prisma.AssetBrandGroupByArgs> = z.object({
  where: AssetBrandWhereInputSchema.optional(),
  orderBy: z.union([ AssetBrandOrderByWithAggregationInputSchema.array(),AssetBrandOrderByWithAggregationInputSchema ]).optional(),
  by: AssetBrandScalarFieldEnumSchema.array(),
  having: AssetBrandScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AssetBrandFindUniqueArgsSchema: z.ZodType<Prisma.AssetBrandFindUniqueArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereUniqueInputSchema,
}).strict() ;

export const AssetBrandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AssetBrandFindUniqueOrThrowArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereUniqueInputSchema,
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

export const PositionCreateArgsSchema: z.ZodType<Prisma.PositionCreateArgs> = z.object({
  select: PositionSelectSchema.optional(),
  data: z.union([ PositionCreateInputSchema,PositionUncheckedCreateInputSchema ]),
}).strict() ;

export const PositionUpsertArgsSchema: z.ZodType<Prisma.PositionUpsertArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereUniqueInputSchema,
  create: z.union([ PositionCreateInputSchema,PositionUncheckedCreateInputSchema ]),
  update: z.union([ PositionUpdateInputSchema,PositionUncheckedUpdateInputSchema ]),
}).strict() ;

export const PositionCreateManyArgsSchema: z.ZodType<Prisma.PositionCreateManyArgs> = z.object({
  data: z.union([ PositionCreateManyInputSchema,PositionCreateManyInputSchema.array() ]),
}).strict() ;

export const PositionDeleteArgsSchema: z.ZodType<Prisma.PositionDeleteArgs> = z.object({
  select: PositionSelectSchema.optional(),
  where: PositionWhereUniqueInputSchema,
}).strict() ;

export const PositionUpdateArgsSchema: z.ZodType<Prisma.PositionUpdateArgs> = z.object({
  select: PositionSelectSchema.optional(),
  data: z.union([ PositionUpdateInputSchema,PositionUncheckedUpdateInputSchema ]),
  where: PositionWhereUniqueInputSchema,
}).strict() ;

export const PositionUpdateManyArgsSchema: z.ZodType<Prisma.PositionUpdateManyArgs> = z.object({
  data: z.union([ PositionUpdateManyMutationInputSchema,PositionUncheckedUpdateManyInputSchema ]),
  where: PositionWhereInputSchema.optional(),
}).strict() ;

export const PositionDeleteManyArgsSchema: z.ZodType<Prisma.PositionDeleteManyArgs> = z.object({
  where: PositionWhereInputSchema.optional(),
}).strict() ;

export const OfficerCreateArgsSchema: z.ZodType<Prisma.OfficerCreateArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  data: z.union([ OfficerCreateInputSchema,OfficerUncheckedCreateInputSchema ]),
}).strict() ;

export const OfficerUpsertArgsSchema: z.ZodType<Prisma.OfficerUpsertArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereUniqueInputSchema,
  create: z.union([ OfficerCreateInputSchema,OfficerUncheckedCreateInputSchema ]),
  update: z.union([ OfficerUpdateInputSchema,OfficerUncheckedUpdateInputSchema ]),
}).strict() ;

export const OfficerCreateManyArgsSchema: z.ZodType<Prisma.OfficerCreateManyArgs> = z.object({
  data: z.union([ OfficerCreateManyInputSchema,OfficerCreateManyInputSchema.array() ]),
}).strict() ;

export const OfficerDeleteArgsSchema: z.ZodType<Prisma.OfficerDeleteArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  where: OfficerWhereUniqueInputSchema,
}).strict() ;

export const OfficerUpdateArgsSchema: z.ZodType<Prisma.OfficerUpdateArgs> = z.object({
  select: OfficerSelectSchema.optional(),
  data: z.union([ OfficerUpdateInputSchema,OfficerUncheckedUpdateInputSchema ]),
  where: OfficerWhereUniqueInputSchema,
}).strict() ;

export const OfficerUpdateManyArgsSchema: z.ZodType<Prisma.OfficerUpdateManyArgs> = z.object({
  data: z.union([ OfficerUpdateManyMutationInputSchema,OfficerUncheckedUpdateManyInputSchema ]),
  where: OfficerWhereInputSchema.optional(),
}).strict() ;

export const OfficerDeleteManyArgsSchema: z.ZodType<Prisma.OfficerDeleteManyArgs> = z.object({
  where: OfficerWhereInputSchema.optional(),
}).strict() ;

export const AssetCreateArgsSchema: z.ZodType<Prisma.AssetCreateArgs> = z.object({
  select: AssetSelectSchema.optional(),
  data: z.union([ AssetCreateInputSchema,AssetUncheckedCreateInputSchema ]),
}).strict() ;

export const AssetUpsertArgsSchema: z.ZodType<Prisma.AssetUpsertArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereUniqueInputSchema,
  create: z.union([ AssetCreateInputSchema,AssetUncheckedCreateInputSchema ]),
  update: z.union([ AssetUpdateInputSchema,AssetUncheckedUpdateInputSchema ]),
}).strict() ;

export const AssetCreateManyArgsSchema: z.ZodType<Prisma.AssetCreateManyArgs> = z.object({
  data: z.union([ AssetCreateManyInputSchema,AssetCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetDeleteArgsSchema: z.ZodType<Prisma.AssetDeleteArgs> = z.object({
  select: AssetSelectSchema.optional(),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetUpdateArgsSchema: z.ZodType<Prisma.AssetUpdateArgs> = z.object({
  select: AssetSelectSchema.optional(),
  data: z.union([ AssetUpdateInputSchema,AssetUncheckedUpdateInputSchema ]),
  where: AssetWhereUniqueInputSchema,
}).strict() ;

export const AssetUpdateManyArgsSchema: z.ZodType<Prisma.AssetUpdateManyArgs> = z.object({
  data: z.union([ AssetUpdateManyMutationInputSchema,AssetUncheckedUpdateManyInputSchema ]),
  where: AssetWhereInputSchema.optional(),
}).strict() ;

export const AssetDeleteManyArgsSchema: z.ZodType<Prisma.AssetDeleteManyArgs> = z.object({
  where: AssetWhereInputSchema.optional(),
}).strict() ;

export const AssetCategoryCreateArgsSchema: z.ZodType<Prisma.AssetCategoryCreateArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  data: z.union([ AssetCategoryCreateInputSchema,AssetCategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const AssetCategoryUpsertArgsSchema: z.ZodType<Prisma.AssetCategoryUpsertArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereUniqueInputSchema,
  create: z.union([ AssetCategoryCreateInputSchema,AssetCategoryUncheckedCreateInputSchema ]),
  update: z.union([ AssetCategoryUpdateInputSchema,AssetCategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const AssetCategoryCreateManyArgsSchema: z.ZodType<Prisma.AssetCategoryCreateManyArgs> = z.object({
  data: z.union([ AssetCategoryCreateManyInputSchema,AssetCategoryCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetCategoryDeleteArgsSchema: z.ZodType<Prisma.AssetCategoryDeleteArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  where: AssetCategoryWhereUniqueInputSchema,
}).strict() ;

export const AssetCategoryUpdateArgsSchema: z.ZodType<Prisma.AssetCategoryUpdateArgs> = z.object({
  select: AssetCategorySelectSchema.optional(),
  data: z.union([ AssetCategoryUpdateInputSchema,AssetCategoryUncheckedUpdateInputSchema ]),
  where: AssetCategoryWhereUniqueInputSchema,
}).strict() ;

export const AssetCategoryUpdateManyArgsSchema: z.ZodType<Prisma.AssetCategoryUpdateManyArgs> = z.object({
  data: z.union([ AssetCategoryUpdateManyMutationInputSchema,AssetCategoryUncheckedUpdateManyInputSchema ]),
  where: AssetCategoryWhereInputSchema.optional(),
}).strict() ;

export const AssetCategoryDeleteManyArgsSchema: z.ZodType<Prisma.AssetCategoryDeleteManyArgs> = z.object({
  where: AssetCategoryWhereInputSchema.optional(),
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

export const AssetTagCreateArgsSchema: z.ZodType<Prisma.AssetTagCreateArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  data: z.union([ AssetTagCreateInputSchema,AssetTagUncheckedCreateInputSchema ]),
}).strict() ;

export const AssetTagUpsertArgsSchema: z.ZodType<Prisma.AssetTagUpsertArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereUniqueInputSchema,
  create: z.union([ AssetTagCreateInputSchema,AssetTagUncheckedCreateInputSchema ]),
  update: z.union([ AssetTagUpdateInputSchema,AssetTagUncheckedUpdateInputSchema ]),
}).strict() ;

export const AssetTagCreateManyArgsSchema: z.ZodType<Prisma.AssetTagCreateManyArgs> = z.object({
  data: z.union([ AssetTagCreateManyInputSchema,AssetTagCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetTagDeleteArgsSchema: z.ZodType<Prisma.AssetTagDeleteArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  where: AssetTagWhereUniqueInputSchema,
}).strict() ;

export const AssetTagUpdateArgsSchema: z.ZodType<Prisma.AssetTagUpdateArgs> = z.object({
  select: AssetTagSelectSchema.optional(),
  data: z.union([ AssetTagUpdateInputSchema,AssetTagUncheckedUpdateInputSchema ]),
  where: AssetTagWhereUniqueInputSchema,
}).strict() ;

export const AssetTagUpdateManyArgsSchema: z.ZodType<Prisma.AssetTagUpdateManyArgs> = z.object({
  data: z.union([ AssetTagUpdateManyMutationInputSchema,AssetTagUncheckedUpdateManyInputSchema ]),
  where: AssetTagWhereInputSchema.optional(),
}).strict() ;

export const AssetTagDeleteManyArgsSchema: z.ZodType<Prisma.AssetTagDeleteManyArgs> = z.object({
  where: AssetTagWhereInputSchema.optional(),
}).strict() ;

export const AssetBrandCreateArgsSchema: z.ZodType<Prisma.AssetBrandCreateArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  data: z.union([ AssetBrandCreateInputSchema,AssetBrandUncheckedCreateInputSchema ]),
}).strict() ;

export const AssetBrandUpsertArgsSchema: z.ZodType<Prisma.AssetBrandUpsertArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereUniqueInputSchema,
  create: z.union([ AssetBrandCreateInputSchema,AssetBrandUncheckedCreateInputSchema ]),
  update: z.union([ AssetBrandUpdateInputSchema,AssetBrandUncheckedUpdateInputSchema ]),
}).strict() ;

export const AssetBrandCreateManyArgsSchema: z.ZodType<Prisma.AssetBrandCreateManyArgs> = z.object({
  data: z.union([ AssetBrandCreateManyInputSchema,AssetBrandCreateManyInputSchema.array() ]),
}).strict() ;

export const AssetBrandDeleteArgsSchema: z.ZodType<Prisma.AssetBrandDeleteArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  where: AssetBrandWhereUniqueInputSchema,
}).strict() ;

export const AssetBrandUpdateArgsSchema: z.ZodType<Prisma.AssetBrandUpdateArgs> = z.object({
  select: AssetBrandSelectSchema.optional(),
  data: z.union([ AssetBrandUpdateInputSchema,AssetBrandUncheckedUpdateInputSchema ]),
  where: AssetBrandWhereUniqueInputSchema,
}).strict() ;

export const AssetBrandUpdateManyArgsSchema: z.ZodType<Prisma.AssetBrandUpdateManyArgs> = z.object({
  data: z.union([ AssetBrandUpdateManyMutationInputSchema,AssetBrandUncheckedUpdateManyInputSchema ]),
  where: AssetBrandWhereInputSchema.optional(),
}).strict() ;

export const AssetBrandDeleteManyArgsSchema: z.ZodType<Prisma.AssetBrandDeleteManyArgs> = z.object({
  where: AssetBrandWhereInputSchema.optional(),
}).strict() ;