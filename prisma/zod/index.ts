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

export const PositionScalarFieldEnumSchema = z.enum(['id','label','name','allowedRoleIds','officerOnly']);

export const OfficerScalarFieldEnumSchema = z.enum(['id','label','description']);

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
  date: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  timeStart: z.string().nullable(),
  timeEnd: z.string().nullable(),
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
  timeStart: z.string().nullable(),
  timeEnd: z.string().nullable(),
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
  label: z.string().nullable(),
  name: z.string(),
  allowedRoleIds: z.string().array(),
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
  label: z.boolean().optional(),
  name: z.boolean().optional(),
  allowedRoleIds: z.boolean().optional(),
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
  date: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  date: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  date: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeStart: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  timeStart: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  timeStart: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
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
  timeStart: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timeEnd: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
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
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  allowedRoleIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict();

export const PositionOrderByWithRelationInputSchema: z.ZodType<Prisma.PositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  allowedRoleIds: z.lazy(() => SortOrderSchema).optional(),
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
  label: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  allowedRoleIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  officerOnly: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict());

export const PositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  allowedRoleIds: z.lazy(() => SortOrderSchema).optional(),
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
  label: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  allowedRoleIds: z.lazy(() => StringNullableListFilterSchema).optional(),
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

export const EventCreateInputSchema: z.ZodType<Prisma.EventCreateInput> = z.object({
  id: z.string().optional(),
  date: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  date: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  date: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  date: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.string().optional(),
  date: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  date: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  date: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateInputSchema: z.ZodType<Prisma.EventTemplateCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateInputSchema: z.ZodType<Prisma.EventTemplateUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateCreateManyInputSchema: z.ZodType<Prisma.EventTemplateCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  timeStart: z.string().optional().nullable(),
  timeEnd: z.string().optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListCreateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUpdateManyMutationInputSchema: z.ZodType<Prisma.EventTemplateUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shifts: z.union([ z.lazy(() => shiftTypeListUpdateEnvelopeInputSchema),z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const EventTemplateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventTemplateUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeStart: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeEnd: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  label: z.string().optional().nullable(),
  name: z.string(),
  allowedRoleIds: z.union([ z.lazy(() => PositionCreateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUncheckedCreateInputSchema: z.ZodType<Prisma.PositionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  label: z.string().optional().nullable(),
  name: z.string(),
  allowedRoleIds: z.union([ z.lazy(() => PositionCreateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUpdateInputSchema: z.ZodType<Prisma.PositionUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowedRoleIds: z.union([ z.lazy(() => PositionUpdateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionUncheckedUpdateInputSchema: z.ZodType<Prisma.PositionUncheckedUpdateInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowedRoleIds: z.union([ z.lazy(() => PositionUpdateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionCreateManyInputSchema: z.ZodType<Prisma.PositionCreateManyInput> = z.object({
  id: z.string().optional(),
  label: z.string().optional().nullable(),
  name: z.string(),
  allowedRoleIds: z.union([ z.lazy(() => PositionCreateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.boolean().optional().nullable()
}).strict();

export const PositionUpdateManyMutationInputSchema: z.ZodType<Prisma.PositionUpdateManyMutationInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowedRoleIds: z.union([ z.lazy(() => PositionUpdateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
  officerOnly: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PositionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PositionUncheckedUpdateManyInput> = z.object({
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  allowedRoleIds: z.union([ z.lazy(() => PositionUpdateallowedRoleIdsInputSchema),z.string().array() ]).optional(),
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
  label: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  allowedRoleIds: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  officerOnly: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.PositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
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

export const shiftTypeListCreateEnvelopeInputSchema: z.ZodType<Prisma.shiftTypeListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
}).strict();

export const shiftTypeCreateInputSchema: z.ZodType<Prisma.shiftTypeCreateInput> = z.object({
  positionId: z.string(),
  userId: z.string().optional().nullable()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const shiftTypeListUpdateEnvelopeInputSchema: z.ZodType<Prisma.shiftTypeListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => shiftTypeCreateInputSchema),z.lazy(() => shiftTypeCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => shiftTypeUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => shiftTypeDeleteManyInputSchema).optional()
}).strict();

export const PositionCreateallowedRoleIdsInputSchema: z.ZodType<Prisma.PositionCreateallowedRoleIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const PositionUpdateallowedRoleIdsInputSchema: z.ZodType<Prisma.PositionUpdateallowedRoleIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable(),
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