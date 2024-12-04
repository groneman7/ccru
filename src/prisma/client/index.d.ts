
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EventShift
 * 
 */
export type EventShift = $Result.DefaultSelection<Prisma.$EventShiftPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventTemplate
 * 
 */
export type EventTemplate = $Result.DefaultSelection<Prisma.$EventTemplatePayload>
/**
 * Model EventPosition
 * 
 */
export type EventPosition = $Result.DefaultSelection<Prisma.$EventPositionPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryCategory
 * 
 */
export type InventoryCategory = $Result.DefaultSelection<Prisma.$InventoryCategoryPayload>
/**
 * Model QuantityUnit
 * 
 */
export type QuantityUnit = $Result.DefaultSelection<Prisma.$QuantityUnitPayload>
/**
 * Model InventoryTag
 * 
 */
export type InventoryTag = $Result.DefaultSelection<Prisma.$InventoryTagPayload>
/**
 * Model InventoryBrand
 * 
 */
export type InventoryBrand = $Result.DefaultSelection<Prisma.$InventoryBrandPayload>
/**
 * Model InventoryLink
 * 
 */
export type InventoryLink = $Result.DefaultSelection<Prisma.$InventoryLinkPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model UserType
 * 
 */
export type UserType = $Result.DefaultSelection<Prisma.$UserTypePayload>
/**
 * Model OfficerRole
 * 
 */
export type OfficerRole = $Result.DefaultSelection<Prisma.$OfficerRolePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.eventTemplate`: Exposes CRUD operations for the **EventTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTemplates
    * const eventTemplates = await prisma.eventTemplate.findMany()
    * ```
    */
  get eventTemplate(): Prisma.EventTemplateDelegate<ExtArgs>;

  /**
   * `prisma.eventPosition`: Exposes CRUD operations for the **EventPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventPositions
    * const eventPositions = await prisma.eventPosition.findMany()
    * ```
    */
  get eventPosition(): Prisma.EventPositionDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;

  /**
   * `prisma.inventoryCategory`: Exposes CRUD operations for the **InventoryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryCategories
    * const inventoryCategories = await prisma.inventoryCategory.findMany()
    * ```
    */
  get inventoryCategory(): Prisma.InventoryCategoryDelegate<ExtArgs>;

  /**
   * `prisma.quantityUnit`: Exposes CRUD operations for the **QuantityUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuantityUnits
    * const quantityUnits = await prisma.quantityUnit.findMany()
    * ```
    */
  get quantityUnit(): Prisma.QuantityUnitDelegate<ExtArgs>;

  /**
   * `prisma.inventoryTag`: Exposes CRUD operations for the **InventoryTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTags
    * const inventoryTags = await prisma.inventoryTag.findMany()
    * ```
    */
  get inventoryTag(): Prisma.InventoryTagDelegate<ExtArgs>;

  /**
   * `prisma.inventoryBrand`: Exposes CRUD operations for the **InventoryBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryBrands
    * const inventoryBrands = await prisma.inventoryBrand.findMany()
    * ```
    */
  get inventoryBrand(): Prisma.InventoryBrandDelegate<ExtArgs>;

  /**
   * `prisma.inventoryLink`: Exposes CRUD operations for the **InventoryLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLinks
    * const inventoryLinks = await prisma.inventoryLink.findMany()
    * ```
    */
  get inventoryLink(): Prisma.InventoryLinkDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.userType`: Exposes CRUD operations for the **UserType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTypes
    * const userTypes = await prisma.userType.findMany()
    * ```
    */
  get userType(): Prisma.UserTypeDelegate<ExtArgs>;

  /**
   * `prisma.officerRole`: Exposes CRUD operations for the **OfficerRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficerRoles
    * const officerRoles = await prisma.officerRole.findMany()
    * ```
    */
  get officerRole(): Prisma.OfficerRoleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    EventTemplate: 'EventTemplate',
    EventPosition: 'EventPosition',
    Inventory: 'Inventory',
    InventoryCategory: 'InventoryCategory',
    QuantityUnit: 'QuantityUnit',
    InventoryTag: 'InventoryTag',
    InventoryBrand: 'InventoryBrand',
    InventoryLink: 'InventoryLink',
    UserRole: 'UserRole',
    UserType: 'UserType',
    OfficerRole: 'OfficerRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "event" | "eventTemplate" | "eventPosition" | "inventory" | "inventoryCategory" | "quantityUnit" | "inventoryTag" | "inventoryBrand" | "inventoryLink" | "userRole" | "userType" | "officerRole"
      txIsolationLevel: never
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventTemplate: {
        payload: Prisma.$EventTemplatePayload<ExtArgs>
        fields: Prisma.EventTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          findFirst: {
            args: Prisma.EventTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          findMany: {
            args: Prisma.EventTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>[]
          }
          create: {
            args: Prisma.EventTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          createMany: {
            args: Prisma.EventTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          update: {
            args: Prisma.EventTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          deleteMany: {
            args: Prisma.EventTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          aggregate: {
            args: Prisma.EventTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTemplate>
          }
          groupBy: {
            args: Prisma.EventTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTemplateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventTemplateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventTemplateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<EventTemplateCountAggregateOutputType> | number
          }
        }
      }
      EventPosition: {
        payload: Prisma.$EventPositionPayload<ExtArgs>
        fields: Prisma.EventPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          findFirst: {
            args: Prisma.EventPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          findMany: {
            args: Prisma.EventPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>[]
          }
          create: {
            args: Prisma.EventPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          createMany: {
            args: Prisma.EventPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          update: {
            args: Prisma.EventPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          deleteMany: {
            args: Prisma.EventPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPositionPayload>
          }
          aggregate: {
            args: Prisma.EventPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventPosition>
          }
          groupBy: {
            args: Prisma.EventPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventPositionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventPositionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventPositionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventPositionCountArgs<ExtArgs>
            result: $Utils.Optional<EventPositionCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryCategory: {
        payload: Prisma.$InventoryCategoryPayload<ExtArgs>
        fields: Prisma.InventoryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          findMany: {
            args: Prisma.InventoryCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          update: {
            args: Prisma.InventoryCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryCategory>
          }
          groupBy: {
            args: Prisma.InventoryCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCategoryCountAggregateOutputType> | number
          }
        }
      }
      QuantityUnit: {
        payload: Prisma.$QuantityUnitPayload<ExtArgs>
        fields: Prisma.QuantityUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuantityUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuantityUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          findFirst: {
            args: Prisma.QuantityUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuantityUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          findMany: {
            args: Prisma.QuantityUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>[]
          }
          create: {
            args: Prisma.QuantityUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          createMany: {
            args: Prisma.QuantityUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuantityUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          update: {
            args: Prisma.QuantityUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          deleteMany: {
            args: Prisma.QuantityUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuantityUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuantityUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuantityUnitPayload>
          }
          aggregate: {
            args: Prisma.QuantityUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuantityUnit>
          }
          groupBy: {
            args: Prisma.QuantityUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuantityUnitGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuantityUnitFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuantityUnitAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuantityUnitCountArgs<ExtArgs>
            result: $Utils.Optional<QuantityUnitCountAggregateOutputType> | number
          }
        }
      }
      InventoryTag: {
        payload: Prisma.$InventoryTagPayload<ExtArgs>
        fields: Prisma.InventoryTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          findFirst: {
            args: Prisma.InventoryTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          findMany: {
            args: Prisma.InventoryTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>[]
          }
          create: {
            args: Prisma.InventoryTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          createMany: {
            args: Prisma.InventoryTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          update: {
            args: Prisma.InventoryTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTagPayload>
          }
          aggregate: {
            args: Prisma.InventoryTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTag>
          }
          groupBy: {
            args: Prisma.InventoryTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTagGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryTagFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryTagAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryTagCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTagCountAggregateOutputType> | number
          }
        }
      }
      InventoryBrand: {
        payload: Prisma.$InventoryBrandPayload<ExtArgs>
        fields: Prisma.InventoryBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          findFirst: {
            args: Prisma.InventoryBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          findMany: {
            args: Prisma.InventoryBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>[]
          }
          create: {
            args: Prisma.InventoryBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          createMany: {
            args: Prisma.InventoryBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          update: {
            args: Prisma.InventoryBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          deleteMany: {
            args: Prisma.InventoryBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBrandPayload>
          }
          aggregate: {
            args: Prisma.InventoryBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryBrand>
          }
          groupBy: {
            args: Prisma.InventoryBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryBrandGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryBrandFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryBrandAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryBrandCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryBrandCountAggregateOutputType> | number
          }
        }
      }
      InventoryLink: {
        payload: Prisma.$InventoryLinkPayload<ExtArgs>
        fields: Prisma.InventoryLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          findFirst: {
            args: Prisma.InventoryLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          findMany: {
            args: Prisma.InventoryLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>[]
          }
          create: {
            args: Prisma.InventoryLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          createMany: {
            args: Prisma.InventoryLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          update: {
            args: Prisma.InventoryLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLinkPayload>
          }
          aggregate: {
            args: Prisma.InventoryLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLink>
          }
          groupBy: {
            args: Prisma.InventoryLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLinkGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InventoryLinkFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InventoryLinkAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InventoryLinkCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLinkCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserRoleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserRoleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      UserType: {
        payload: Prisma.$UserTypePayload<ExtArgs>
        fields: Prisma.UserTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          findFirst: {
            args: Prisma.UserTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          findMany: {
            args: Prisma.UserTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>[]
          }
          create: {
            args: Prisma.UserTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          createMany: {
            args: Prisma.UserTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          update: {
            args: Prisma.UserTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          deleteMany: {
            args: Prisma.UserTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTypePayload>
          }
          aggregate: {
            args: Prisma.UserTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserType>
          }
          groupBy: {
            args: Prisma.UserTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserTypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserTypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UserTypeCountAggregateOutputType> | number
          }
        }
      }
      OfficerRole: {
        payload: Prisma.$OfficerRolePayload<ExtArgs>
        fields: Prisma.OfficerRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          findFirst: {
            args: Prisma.OfficerRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          findMany: {
            args: Prisma.OfficerRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>[]
          }
          create: {
            args: Prisma.OfficerRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          createMany: {
            args: Prisma.OfficerRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfficerRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          update: {
            args: Prisma.OfficerRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          deleteMany: {
            args: Prisma.OfficerRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfficerRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerRolePayload>
          }
          aggregate: {
            args: Prisma.OfficerRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficerRole>
          }
          groupBy: {
            args: Prisma.OfficerRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerRoleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OfficerRoleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OfficerRoleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OfficerRoleCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model EventShift
   */





  export type EventShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["eventShift"]>


  export type EventShiftSelectScalar = {
    positionId?: boolean
    userId?: boolean
  }


  export type $EventShiftPayload = {
    name: "EventShift"
    objects: {}
    scalars: {
      positionId: string
      userId: string | null
    }
    composites: {}
  }

  type EventShiftGetPayload<S extends boolean | null | undefined | EventShiftDefaultArgs> = $Result.GetResult<Prisma.$EventShiftPayload, S>





  /**
   * Fields of the EventShift model
   */ 
  interface EventShiftFieldRefs {
    readonly positionId: FieldRef<"EventShift", 'String'>
    readonly userId: FieldRef<"EventShift", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventShift without action
   */
  export type EventShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShift
     */
    select?: EventShiftSelect<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    date: Date | null
    eventName: string | null
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    eventName: string | null
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    date: number
    eventName: number
    description: number
    location: number
    timeStart: number
    timeEnd: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    date?: true
    eventName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
    createdAt?: true
    createdBy?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    date?: true
    eventName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
    createdAt?: true
    createdBy?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    date?: true
    eventName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    date: Date
    eventName: string
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
    createdAt: Date
    createdBy: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    eventName?: boolean
    description?: boolean
    location?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    createdAt?: boolean
    createdBy?: boolean
    shifts?: boolean | EventShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>


  export type EventSelectScalar = {
    id?: boolean
    date?: boolean
    eventName?: boolean
    description?: boolean
    location?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      eventName: string
      description: string | null
      location: string | null
      timeStart: Date | null
      timeEnd: Date | null
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["event"]>
    composites: {
      shifts: Prisma.$EventShiftPayload[]
    }
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly eventName: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly timeStart: FieldRef<"Event", 'DateTime'>
    readonly timeEnd: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly createdBy: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventTemplate
   */

  export type AggregateEventTemplate = {
    _count: EventTemplateCountAggregateOutputType | null
    _min: EventTemplateMinAggregateOutputType | null
    _max: EventTemplateMaxAggregateOutputType | null
  }

  export type EventTemplateMinAggregateOutputType = {
    id: string | null
    templateName: string | null
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
  }

  export type EventTemplateMaxAggregateOutputType = {
    id: string | null
    templateName: string | null
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
  }

  export type EventTemplateCountAggregateOutputType = {
    id: number
    templateName: number
    description: number
    location: number
    timeStart: number
    timeEnd: number
    _all: number
  }


  export type EventTemplateMinAggregateInputType = {
    id?: true
    templateName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
  }

  export type EventTemplateMaxAggregateInputType = {
    id?: true
    templateName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
  }

  export type EventTemplateCountAggregateInputType = {
    id?: true
    templateName?: true
    description?: true
    location?: true
    timeStart?: true
    timeEnd?: true
    _all?: true
  }

  export type EventTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTemplate to aggregate.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTemplates
    **/
    _count?: true | EventTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTemplateMaxAggregateInputType
  }

  export type GetEventTemplateAggregateType<T extends EventTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTemplate[P]>
      : GetScalarType<T[P], AggregateEventTemplate[P]>
  }




  export type EventTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTemplateWhereInput
    orderBy?: EventTemplateOrderByWithAggregationInput | EventTemplateOrderByWithAggregationInput[]
    by: EventTemplateScalarFieldEnum[] | EventTemplateScalarFieldEnum
    having?: EventTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTemplateCountAggregateInputType | true
    _min?: EventTemplateMinAggregateInputType
    _max?: EventTemplateMaxAggregateInputType
  }

  export type EventTemplateGroupByOutputType = {
    id: string
    templateName: string
    description: string | null
    location: string | null
    timeStart: Date | null
    timeEnd: Date | null
    _count: EventTemplateCountAggregateOutputType | null
    _min: EventTemplateMinAggregateOutputType | null
    _max: EventTemplateMaxAggregateOutputType | null
  }

  type GetEventTemplateGroupByPayload<T extends EventTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], EventTemplateGroupByOutputType[P]>
        }
      >
    >


  export type EventTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateName?: boolean
    description?: boolean
    location?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    shifts?: boolean | EventShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTemplate"]>


  export type EventTemplateSelectScalar = {
    id?: boolean
    templateName?: boolean
    description?: boolean
    location?: boolean
    timeStart?: boolean
    timeEnd?: boolean
  }

  export type EventTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateName: string
      description: string | null
      location: string | null
      timeStart: Date | null
      timeEnd: Date | null
    }, ExtArgs["result"]["eventTemplate"]>
    composites: {
      shifts: Prisma.$EventShiftPayload[]
    }
  }

  type EventTemplateGetPayload<S extends boolean | null | undefined | EventTemplateDefaultArgs> = $Result.GetResult<Prisma.$EventTemplatePayload, S>

  type EventTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventTemplateCountAggregateInputType | true
    }

  export interface EventTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTemplate'], meta: { name: 'EventTemplate' } }
    /**
     * Find zero or one EventTemplate that matches the filter.
     * @param {EventTemplateFindUniqueArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTemplateFindUniqueArgs>(args: SelectSubset<T, EventTemplateFindUniqueArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventTemplateFindUniqueOrThrowArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindFirstArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTemplateFindFirstArgs>(args?: SelectSubset<T, EventTemplateFindFirstArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindFirstOrThrowArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTemplates
     * const eventTemplates = await prisma.eventTemplate.findMany()
     * 
     * // Get first 10 EventTemplates
     * const eventTemplates = await prisma.eventTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTemplateWithIdOnly = await prisma.eventTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTemplateFindManyArgs>(args?: SelectSubset<T, EventTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventTemplate.
     * @param {EventTemplateCreateArgs} args - Arguments to create a EventTemplate.
     * @example
     * // Create one EventTemplate
     * const EventTemplate = await prisma.eventTemplate.create({
     *   data: {
     *     // ... data to create a EventTemplate
     *   }
     * })
     * 
     */
    create<T extends EventTemplateCreateArgs>(args: SelectSubset<T, EventTemplateCreateArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventTemplates.
     * @param {EventTemplateCreateManyArgs} args - Arguments to create many EventTemplates.
     * @example
     * // Create many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTemplateCreateManyArgs>(args?: SelectSubset<T, EventTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventTemplate.
     * @param {EventTemplateDeleteArgs} args - Arguments to delete one EventTemplate.
     * @example
     * // Delete one EventTemplate
     * const EventTemplate = await prisma.eventTemplate.delete({
     *   where: {
     *     // ... filter to delete one EventTemplate
     *   }
     * })
     * 
     */
    delete<T extends EventTemplateDeleteArgs>(args: SelectSubset<T, EventTemplateDeleteArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventTemplate.
     * @param {EventTemplateUpdateArgs} args - Arguments to update one EventTemplate.
     * @example
     * // Update one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTemplateUpdateArgs>(args: SelectSubset<T, EventTemplateUpdateArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventTemplates.
     * @param {EventTemplateDeleteManyArgs} args - Arguments to filter EventTemplates to delete.
     * @example
     * // Delete a few EventTemplates
     * const { count } = await prisma.eventTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTemplateDeleteManyArgs>(args?: SelectSubset<T, EventTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTemplateUpdateManyArgs>(args: SelectSubset<T, EventTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventTemplate.
     * @param {EventTemplateUpsertArgs} args - Arguments to update or create a EventTemplate.
     * @example
     * // Update or create a EventTemplate
     * const eventTemplate = await prisma.eventTemplate.upsert({
     *   create: {
     *     // ... data to create a EventTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTemplate we want to update
     *   }
     * })
     */
    upsert<T extends EventTemplateUpsertArgs>(args: SelectSubset<T, EventTemplateUpsertArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more EventTemplates that matches the filter.
     * @param {EventTemplateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventTemplate = await prisma.eventTemplate.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EventTemplateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventTemplate.
     * @param {EventTemplateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventTemplate = await prisma.eventTemplate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventTemplateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateCountArgs} args - Arguments to filter EventTemplates to count.
     * @example
     * // Count the number of EventTemplates
     * const count = await prisma.eventTemplate.count({
     *   where: {
     *     // ... the filter for the EventTemplates we want to count
     *   }
     * })
    **/
    count<T extends EventTemplateCountArgs>(
      args?: Subset<T, EventTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventTemplateAggregateArgs>(args: Subset<T, EventTemplateAggregateArgs>): Prisma.PrismaPromise<GetEventTemplateAggregateType<T>>

    /**
     * Group by EventTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTemplateGroupByArgs['orderBy'] }
        : { orderBy?: EventTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTemplate model
   */
  readonly fields: EventTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventTemplate model
   */ 
  interface EventTemplateFieldRefs {
    readonly id: FieldRef<"EventTemplate", 'String'>
    readonly templateName: FieldRef<"EventTemplate", 'String'>
    readonly description: FieldRef<"EventTemplate", 'String'>
    readonly location: FieldRef<"EventTemplate", 'String'>
    readonly timeStart: FieldRef<"EventTemplate", 'DateTime'>
    readonly timeEnd: FieldRef<"EventTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventTemplate findUnique
   */
  export type EventTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate findUniqueOrThrow
   */
  export type EventTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate findFirst
   */
  export type EventTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTemplates.
     */
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate findFirstOrThrow
   */
  export type EventTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTemplates.
     */
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate findMany
   */
  export type EventTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplates to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate create
   */
  export type EventTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTemplate.
     */
    data: XOR<EventTemplateCreateInput, EventTemplateUncheckedCreateInput>
  }

  /**
   * EventTemplate createMany
   */
  export type EventTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTemplates.
     */
    data: EventTemplateCreateManyInput | EventTemplateCreateManyInput[]
  }

  /**
   * EventTemplate update
   */
  export type EventTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTemplate.
     */
    data: XOR<EventTemplateUpdateInput, EventTemplateUncheckedUpdateInput>
    /**
     * Choose, which EventTemplate to update.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate updateMany
   */
  export type EventTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTemplates.
     */
    data: XOR<EventTemplateUpdateManyMutationInput, EventTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EventTemplates to update
     */
    where?: EventTemplateWhereInput
  }

  /**
   * EventTemplate upsert
   */
  export type EventTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTemplate to update in case it exists.
     */
    where: EventTemplateWhereUniqueInput
    /**
     * In case the EventTemplate found by the `where` argument doesn't exist, create a new EventTemplate with this data.
     */
    create: XOR<EventTemplateCreateInput, EventTemplateUncheckedCreateInput>
    /**
     * In case the EventTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTemplateUpdateInput, EventTemplateUncheckedUpdateInput>
  }

  /**
   * EventTemplate delete
   */
  export type EventTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter which EventTemplate to delete.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate deleteMany
   */
  export type EventTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTemplates to delete
     */
    where?: EventTemplateWhereInput
  }

  /**
   * EventTemplate findRaw
   */
  export type EventTemplateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventTemplate aggregateRaw
   */
  export type EventTemplateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventTemplate without action
   */
  export type EventTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
  }


  /**
   * Model EventPosition
   */

  export type AggregateEventPosition = {
    _count: EventPositionCountAggregateOutputType | null
    _min: EventPositionMinAggregateOutputType | null
    _max: EventPositionMaxAggregateOutputType | null
  }

  export type EventPositionMinAggregateOutputType = {
    id: string | null
    positionName: string | null
    label: string | null
    description: string | null
    officerOnly: boolean | null
  }

  export type EventPositionMaxAggregateOutputType = {
    id: string | null
    positionName: string | null
    label: string | null
    description: string | null
    officerOnly: boolean | null
  }

  export type EventPositionCountAggregateOutputType = {
    id: number
    positionName: number
    label: number
    description: number
    allowedUserTypes: number
    officerOnly: number
    _all: number
  }


  export type EventPositionMinAggregateInputType = {
    id?: true
    positionName?: true
    label?: true
    description?: true
    officerOnly?: true
  }

  export type EventPositionMaxAggregateInputType = {
    id?: true
    positionName?: true
    label?: true
    description?: true
    officerOnly?: true
  }

  export type EventPositionCountAggregateInputType = {
    id?: true
    positionName?: true
    label?: true
    description?: true
    allowedUserTypes?: true
    officerOnly?: true
    _all?: true
  }

  export type EventPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPosition to aggregate.
     */
    where?: EventPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPositions to fetch.
     */
    orderBy?: EventPositionOrderByWithRelationInput | EventPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventPositions
    **/
    _count?: true | EventPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventPositionMaxAggregateInputType
  }

  export type GetEventPositionAggregateType<T extends EventPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventPosition[P]>
      : GetScalarType<T[P], AggregateEventPosition[P]>
  }




  export type EventPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventPositionWhereInput
    orderBy?: EventPositionOrderByWithAggregationInput | EventPositionOrderByWithAggregationInput[]
    by: EventPositionScalarFieldEnum[] | EventPositionScalarFieldEnum
    having?: EventPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventPositionCountAggregateInputType | true
    _min?: EventPositionMinAggregateInputType
    _max?: EventPositionMaxAggregateInputType
  }

  export type EventPositionGroupByOutputType = {
    id: string
    positionName: string
    label: string | null
    description: string | null
    allowedUserTypes: string[]
    officerOnly: boolean | null
    _count: EventPositionCountAggregateOutputType | null
    _min: EventPositionMinAggregateOutputType | null
    _max: EventPositionMaxAggregateOutputType | null
  }

  type GetEventPositionGroupByPayload<T extends EventPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventPositionGroupByOutputType[P]>
            : GetScalarType<T[P], EventPositionGroupByOutputType[P]>
        }
      >
    >


  export type EventPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionName?: boolean
    label?: boolean
    description?: boolean
    allowedUserTypes?: boolean
    officerOnly?: boolean
  }, ExtArgs["result"]["eventPosition"]>


  export type EventPositionSelectScalar = {
    id?: boolean
    positionName?: boolean
    label?: boolean
    description?: boolean
    allowedUserTypes?: boolean
    officerOnly?: boolean
  }


  export type $EventPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventPosition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      positionName: string
      label: string | null
      description: string | null
      allowedUserTypes: string[]
      officerOnly: boolean | null
    }, ExtArgs["result"]["eventPosition"]>
    composites: {}
  }

  type EventPositionGetPayload<S extends boolean | null | undefined | EventPositionDefaultArgs> = $Result.GetResult<Prisma.$EventPositionPayload, S>

  type EventPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventPositionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventPositionCountAggregateInputType | true
    }

  export interface EventPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventPosition'], meta: { name: 'EventPosition' } }
    /**
     * Find zero or one EventPosition that matches the filter.
     * @param {EventPositionFindUniqueArgs} args - Arguments to find a EventPosition
     * @example
     * // Get one EventPosition
     * const eventPosition = await prisma.eventPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventPositionFindUniqueArgs>(args: SelectSubset<T, EventPositionFindUniqueArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventPosition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventPositionFindUniqueOrThrowArgs} args - Arguments to find a EventPosition
     * @example
     * // Get one EventPosition
     * const eventPosition = await prisma.eventPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionFindFirstArgs} args - Arguments to find a EventPosition
     * @example
     * // Get one EventPosition
     * const eventPosition = await prisma.eventPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventPositionFindFirstArgs>(args?: SelectSubset<T, EventPositionFindFirstArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionFindFirstOrThrowArgs} args - Arguments to find a EventPosition
     * @example
     * // Get one EventPosition
     * const eventPosition = await prisma.eventPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventPositions
     * const eventPositions = await prisma.eventPosition.findMany()
     * 
     * // Get first 10 EventPositions
     * const eventPositions = await prisma.eventPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventPositionWithIdOnly = await prisma.eventPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventPositionFindManyArgs>(args?: SelectSubset<T, EventPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventPosition.
     * @param {EventPositionCreateArgs} args - Arguments to create a EventPosition.
     * @example
     * // Create one EventPosition
     * const EventPosition = await prisma.eventPosition.create({
     *   data: {
     *     // ... data to create a EventPosition
     *   }
     * })
     * 
     */
    create<T extends EventPositionCreateArgs>(args: SelectSubset<T, EventPositionCreateArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventPositions.
     * @param {EventPositionCreateManyArgs} args - Arguments to create many EventPositions.
     * @example
     * // Create many EventPositions
     * const eventPosition = await prisma.eventPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventPositionCreateManyArgs>(args?: SelectSubset<T, EventPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventPosition.
     * @param {EventPositionDeleteArgs} args - Arguments to delete one EventPosition.
     * @example
     * // Delete one EventPosition
     * const EventPosition = await prisma.eventPosition.delete({
     *   where: {
     *     // ... filter to delete one EventPosition
     *   }
     * })
     * 
     */
    delete<T extends EventPositionDeleteArgs>(args: SelectSubset<T, EventPositionDeleteArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventPosition.
     * @param {EventPositionUpdateArgs} args - Arguments to update one EventPosition.
     * @example
     * // Update one EventPosition
     * const eventPosition = await prisma.eventPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventPositionUpdateArgs>(args: SelectSubset<T, EventPositionUpdateArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventPositions.
     * @param {EventPositionDeleteManyArgs} args - Arguments to filter EventPositions to delete.
     * @example
     * // Delete a few EventPositions
     * const { count } = await prisma.eventPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventPositionDeleteManyArgs>(args?: SelectSubset<T, EventPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventPositions
     * const eventPosition = await prisma.eventPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventPositionUpdateManyArgs>(args: SelectSubset<T, EventPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventPosition.
     * @param {EventPositionUpsertArgs} args - Arguments to update or create a EventPosition.
     * @example
     * // Update or create a EventPosition
     * const eventPosition = await prisma.eventPosition.upsert({
     *   create: {
     *     // ... data to create a EventPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventPosition we want to update
     *   }
     * })
     */
    upsert<T extends EventPositionUpsertArgs>(args: SelectSubset<T, EventPositionUpsertArgs<ExtArgs>>): Prisma__EventPositionClient<$Result.GetResult<Prisma.$EventPositionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more EventPositions that matches the filter.
     * @param {EventPositionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const eventPosition = await prisma.eventPosition.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: EventPositionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EventPosition.
     * @param {EventPositionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const eventPosition = await prisma.eventPosition.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventPositionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EventPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionCountArgs} args - Arguments to filter EventPositions to count.
     * @example
     * // Count the number of EventPositions
     * const count = await prisma.eventPosition.count({
     *   where: {
     *     // ... the filter for the EventPositions we want to count
     *   }
     * })
    **/
    count<T extends EventPositionCountArgs>(
      args?: Subset<T, EventPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventPositionAggregateArgs>(args: Subset<T, EventPositionAggregateArgs>): Prisma.PrismaPromise<GetEventPositionAggregateType<T>>

    /**
     * Group by EventPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventPositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventPositionGroupByArgs['orderBy'] }
        : { orderBy?: EventPositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventPosition model
   */
  readonly fields: EventPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventPosition model
   */ 
  interface EventPositionFieldRefs {
    readonly id: FieldRef<"EventPosition", 'String'>
    readonly positionName: FieldRef<"EventPosition", 'String'>
    readonly label: FieldRef<"EventPosition", 'String'>
    readonly description: FieldRef<"EventPosition", 'String'>
    readonly allowedUserTypes: FieldRef<"EventPosition", 'String[]'>
    readonly officerOnly: FieldRef<"EventPosition", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EventPosition findUnique
   */
  export type EventPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter, which EventPosition to fetch.
     */
    where: EventPositionWhereUniqueInput
  }

  /**
   * EventPosition findUniqueOrThrow
   */
  export type EventPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter, which EventPosition to fetch.
     */
    where: EventPositionWhereUniqueInput
  }

  /**
   * EventPosition findFirst
   */
  export type EventPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter, which EventPosition to fetch.
     */
    where?: EventPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPositions to fetch.
     */
    orderBy?: EventPositionOrderByWithRelationInput | EventPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPositions.
     */
    cursor?: EventPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPositions.
     */
    distinct?: EventPositionScalarFieldEnum | EventPositionScalarFieldEnum[]
  }

  /**
   * EventPosition findFirstOrThrow
   */
  export type EventPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter, which EventPosition to fetch.
     */
    where?: EventPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPositions to fetch.
     */
    orderBy?: EventPositionOrderByWithRelationInput | EventPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventPositions.
     */
    cursor?: EventPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventPositions.
     */
    distinct?: EventPositionScalarFieldEnum | EventPositionScalarFieldEnum[]
  }

  /**
   * EventPosition findMany
   */
  export type EventPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter, which EventPositions to fetch.
     */
    where?: EventPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventPositions to fetch.
     */
    orderBy?: EventPositionOrderByWithRelationInput | EventPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventPositions.
     */
    cursor?: EventPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventPositions.
     */
    skip?: number
    distinct?: EventPositionScalarFieldEnum | EventPositionScalarFieldEnum[]
  }

  /**
   * EventPosition create
   */
  export type EventPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * The data needed to create a EventPosition.
     */
    data: XOR<EventPositionCreateInput, EventPositionUncheckedCreateInput>
  }

  /**
   * EventPosition createMany
   */
  export type EventPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventPositions.
     */
    data: EventPositionCreateManyInput | EventPositionCreateManyInput[]
  }

  /**
   * EventPosition update
   */
  export type EventPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * The data needed to update a EventPosition.
     */
    data: XOR<EventPositionUpdateInput, EventPositionUncheckedUpdateInput>
    /**
     * Choose, which EventPosition to update.
     */
    where: EventPositionWhereUniqueInput
  }

  /**
   * EventPosition updateMany
   */
  export type EventPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventPositions.
     */
    data: XOR<EventPositionUpdateManyMutationInput, EventPositionUncheckedUpdateManyInput>
    /**
     * Filter which EventPositions to update
     */
    where?: EventPositionWhereInput
  }

  /**
   * EventPosition upsert
   */
  export type EventPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * The filter to search for the EventPosition to update in case it exists.
     */
    where: EventPositionWhereUniqueInput
    /**
     * In case the EventPosition found by the `where` argument doesn't exist, create a new EventPosition with this data.
     */
    create: XOR<EventPositionCreateInput, EventPositionUncheckedCreateInput>
    /**
     * In case the EventPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventPositionUpdateInput, EventPositionUncheckedUpdateInput>
  }

  /**
   * EventPosition delete
   */
  export type EventPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
    /**
     * Filter which EventPosition to delete.
     */
    where: EventPositionWhereUniqueInput
  }

  /**
   * EventPosition deleteMany
   */
  export type EventPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventPositions to delete
     */
    where?: EventPositionWhereInput
  }

  /**
   * EventPosition findRaw
   */
  export type EventPositionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventPosition aggregateRaw
   */
  export type EventPositionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EventPosition without action
   */
  export type EventPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventPosition
     */
    select?: EventPositionSelect<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
    packageSize: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
    packageSize: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    itemName: string | null
    brandId: string | null
    categoryId: string | null
    location: string | null
    quantity: number | null
    quantityUnitId: string | null
    packageSize: number | null
    packageSizeUnitId: string | null
    upc: string | null
    ndc: string | null
    expiration: Date | null
    lot: string | null
    comments: string | null
    linkId: string | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    itemName: string | null
    brandId: string | null
    categoryId: string | null
    location: string | null
    quantity: number | null
    quantityUnitId: string | null
    packageSize: number | null
    packageSizeUnitId: string | null
    upc: string | null
    ndc: string | null
    expiration: Date | null
    lot: string | null
    comments: string | null
    linkId: string | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    itemName: number
    brandId: number
    categoryId: number
    location: number
    quantity: number
    quantityUnitId: number
    packageSize: number
    packageSizeUnitId: number
    upc: number
    ndc: number
    expiration: number
    lot: number
    comments: number
    linkId: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
    packageSize?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
    packageSize?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    itemName?: true
    brandId?: true
    categoryId?: true
    location?: true
    quantity?: true
    quantityUnitId?: true
    packageSize?: true
    packageSizeUnitId?: true
    upc?: true
    ndc?: true
    expiration?: true
    lot?: true
    comments?: true
    linkId?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    itemName?: true
    brandId?: true
    categoryId?: true
    location?: true
    quantity?: true
    quantityUnitId?: true
    packageSize?: true
    packageSizeUnitId?: true
    upc?: true
    ndc?: true
    expiration?: true
    lot?: true
    comments?: true
    linkId?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    itemName?: true
    brandId?: true
    categoryId?: true
    location?: true
    quantity?: true
    quantityUnitId?: true
    packageSize?: true
    packageSizeUnitId?: true
    upc?: true
    ndc?: true
    expiration?: true
    lot?: true
    comments?: true
    linkId?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    itemName: string
    brandId: string | null
    categoryId: string | null
    location: string | null
    quantity: number
    quantityUnitId: string | null
    packageSize: number | null
    packageSizeUnitId: string | null
    upc: string | null
    ndc: string | null
    expiration: Date | null
    lot: string | null
    comments: string | null
    linkId: string | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    brandId?: boolean
    categoryId?: boolean
    location?: boolean
    quantity?: boolean
    quantityUnitId?: boolean
    packageSize?: boolean
    packageSizeUnitId?: boolean
    upc?: boolean
    ndc?: boolean
    expiration?: boolean
    lot?: boolean
    comments?: boolean
    linkId?: boolean
  }, ExtArgs["result"]["inventory"]>


  export type InventorySelectScalar = {
    id?: boolean
    itemName?: boolean
    brandId?: boolean
    categoryId?: boolean
    location?: boolean
    quantity?: boolean
    quantityUnitId?: boolean
    packageSize?: boolean
    packageSizeUnitId?: boolean
    upc?: boolean
    ndc?: boolean
    expiration?: boolean
    lot?: boolean
    comments?: boolean
    linkId?: boolean
  }


  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemName: string
      brandId: string | null
      categoryId: string | null
      location: string | null
      quantity: number
      quantityUnitId: string | null
      packageSize: number | null
      packageSizeUnitId: string | null
      upc: string | null
      ndc: string | null
      expiration: Date | null
      lot: string | null
      comments: string | null
      linkId: string | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * @param {InventoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventory = await prisma.inventory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InventoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Inventory.
     * @param {InventoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventory = await prisma.inventory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly itemName: FieldRef<"Inventory", 'String'>
    readonly brandId: FieldRef<"Inventory", 'String'>
    readonly categoryId: FieldRef<"Inventory", 'String'>
    readonly location: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly quantityUnitId: FieldRef<"Inventory", 'String'>
    readonly packageSize: FieldRef<"Inventory", 'Int'>
    readonly packageSizeUnitId: FieldRef<"Inventory", 'String'>
    readonly upc: FieldRef<"Inventory", 'String'>
    readonly ndc: FieldRef<"Inventory", 'String'>
    readonly expiration: FieldRef<"Inventory", 'DateTime'>
    readonly lot: FieldRef<"Inventory", 'String'>
    readonly comments: FieldRef<"Inventory", 'String'>
    readonly linkId: FieldRef<"Inventory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory findRaw
   */
  export type InventoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inventory aggregateRaw
   */
  export type InventoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
  }


  /**
   * Model InventoryCategory
   */

  export type AggregateInventoryCategory = {
    _count: InventoryCategoryCountAggregateOutputType | null
    _min: InventoryCategoryMinAggregateOutputType | null
    _max: InventoryCategoryMaxAggregateOutputType | null
  }

  export type InventoryCategoryMinAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type InventoryCategoryMaxAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type InventoryCategoryCountAggregateOutputType = {
    id: number
    label: number
    description: number
    _all: number
  }


  export type InventoryCategoryMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type InventoryCategoryMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type InventoryCategoryCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    _all?: true
  }

  export type InventoryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCategory to aggregate.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryCategories
    **/
    _count?: true | InventoryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryCategoryMaxAggregateInputType
  }

  export type GetInventoryCategoryAggregateType<T extends InventoryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryCategory[P]>
      : GetScalarType<T[P], AggregateInventoryCategory[P]>
  }




  export type InventoryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCategoryWhereInput
    orderBy?: InventoryCategoryOrderByWithAggregationInput | InventoryCategoryOrderByWithAggregationInput[]
    by: InventoryCategoryScalarFieldEnum[] | InventoryCategoryScalarFieldEnum
    having?: InventoryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCategoryCountAggregateInputType | true
    _min?: InventoryCategoryMinAggregateInputType
    _max?: InventoryCategoryMaxAggregateInputType
  }

  export type InventoryCategoryGroupByOutputType = {
    id: string
    label: string
    description: string | null
    _count: InventoryCategoryCountAggregateOutputType | null
    _min: InventoryCategoryMinAggregateOutputType | null
    _max: InventoryCategoryMaxAggregateOutputType | null
  }

  type GetInventoryCategoryGroupByPayload<T extends InventoryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type InventoryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
  }, ExtArgs["result"]["inventoryCategory"]>


  export type InventoryCategorySelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
  }


  export type $InventoryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      description: string | null
    }, ExtArgs["result"]["inventoryCategory"]>
    composites: {}
  }

  type InventoryCategoryGetPayload<S extends boolean | null | undefined | InventoryCategoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryCategoryPayload, S>

  type InventoryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCategoryCountAggregateInputType | true
    }

  export interface InventoryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryCategory'], meta: { name: 'InventoryCategory' } }
    /**
     * Find zero or one InventoryCategory that matches the filter.
     * @param {InventoryCategoryFindUniqueArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryCategoryFindUniqueArgs>(args: SelectSubset<T, InventoryCategoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryCategoryFindUniqueOrThrowArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindFirstArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryCategoryFindFirstArgs>(args?: SelectSubset<T, InventoryCategoryFindFirstArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindFirstOrThrowArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryCategories
     * const inventoryCategories = await prisma.inventoryCategory.findMany()
     * 
     * // Get first 10 InventoryCategories
     * const inventoryCategories = await prisma.inventoryCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryCategoryWithIdOnly = await prisma.inventoryCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryCategoryFindManyArgs>(args?: SelectSubset<T, InventoryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryCategory.
     * @param {InventoryCategoryCreateArgs} args - Arguments to create a InventoryCategory.
     * @example
     * // Create one InventoryCategory
     * const InventoryCategory = await prisma.inventoryCategory.create({
     *   data: {
     *     // ... data to create a InventoryCategory
     *   }
     * })
     * 
     */
    create<T extends InventoryCategoryCreateArgs>(args: SelectSubset<T, InventoryCategoryCreateArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryCategories.
     * @param {InventoryCategoryCreateManyArgs} args - Arguments to create many InventoryCategories.
     * @example
     * // Create many InventoryCategories
     * const inventoryCategory = await prisma.inventoryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCategoryCreateManyArgs>(args?: SelectSubset<T, InventoryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryCategory.
     * @param {InventoryCategoryDeleteArgs} args - Arguments to delete one InventoryCategory.
     * @example
     * // Delete one InventoryCategory
     * const InventoryCategory = await prisma.inventoryCategory.delete({
     *   where: {
     *     // ... filter to delete one InventoryCategory
     *   }
     * })
     * 
     */
    delete<T extends InventoryCategoryDeleteArgs>(args: SelectSubset<T, InventoryCategoryDeleteArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryCategory.
     * @param {InventoryCategoryUpdateArgs} args - Arguments to update one InventoryCategory.
     * @example
     * // Update one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryCategoryUpdateArgs>(args: SelectSubset<T, InventoryCategoryUpdateArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryCategories.
     * @param {InventoryCategoryDeleteManyArgs} args - Arguments to filter InventoryCategories to delete.
     * @example
     * // Delete a few InventoryCategories
     * const { count } = await prisma.inventoryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryCategoryDeleteManyArgs>(args?: SelectSubset<T, InventoryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryCategories
     * const inventoryCategory = await prisma.inventoryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryCategoryUpdateManyArgs>(args: SelectSubset<T, InventoryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryCategory.
     * @param {InventoryCategoryUpsertArgs} args - Arguments to update or create a InventoryCategory.
     * @example
     * // Update or create a InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.upsert({
     *   create: {
     *     // ... data to create a InventoryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryCategory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryCategoryUpsertArgs>(args: SelectSubset<T, InventoryCategoryUpsertArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more InventoryCategories that matches the filter.
     * @param {InventoryCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventoryCategory = await prisma.inventoryCategory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InventoryCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InventoryCategory.
     * @param {InventoryCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventoryCategory = await prisma.inventoryCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InventoryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryCountArgs} args - Arguments to filter InventoryCategories to count.
     * @example
     * // Count the number of InventoryCategories
     * const count = await prisma.inventoryCategory.count({
     *   where: {
     *     // ... the filter for the InventoryCategories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCategoryCountArgs>(
      args?: Subset<T, InventoryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryCategoryAggregateArgs>(args: Subset<T, InventoryCategoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryCategoryAggregateType<T>>

    /**
     * Group by InventoryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryCategory model
   */
  readonly fields: InventoryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryCategory model
   */ 
  interface InventoryCategoryFieldRefs {
    readonly id: FieldRef<"InventoryCategory", 'String'>
    readonly label: FieldRef<"InventoryCategory", 'String'>
    readonly description: FieldRef<"InventoryCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryCategory findUnique
   */
  export type InventoryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory findUniqueOrThrow
   */
  export type InventoryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory findFirst
   */
  export type InventoryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCategories.
     */
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory findFirstOrThrow
   */
  export type InventoryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCategories.
     */
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory findMany
   */
  export type InventoryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter, which InventoryCategories to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory create
   */
  export type InventoryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryCategory.
     */
    data: XOR<InventoryCategoryCreateInput, InventoryCategoryUncheckedCreateInput>
  }

  /**
   * InventoryCategory createMany
   */
  export type InventoryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryCategories.
     */
    data: InventoryCategoryCreateManyInput | InventoryCategoryCreateManyInput[]
  }

  /**
   * InventoryCategory update
   */
  export type InventoryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryCategory.
     */
    data: XOR<InventoryCategoryUpdateInput, InventoryCategoryUncheckedUpdateInput>
    /**
     * Choose, which InventoryCategory to update.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory updateMany
   */
  export type InventoryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryCategories.
     */
    data: XOR<InventoryCategoryUpdateManyMutationInput, InventoryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which InventoryCategories to update
     */
    where?: InventoryCategoryWhereInput
  }

  /**
   * InventoryCategory upsert
   */
  export type InventoryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryCategory to update in case it exists.
     */
    where: InventoryCategoryWhereUniqueInput
    /**
     * In case the InventoryCategory found by the `where` argument doesn't exist, create a new InventoryCategory with this data.
     */
    create: XOR<InventoryCategoryCreateInput, InventoryCategoryUncheckedCreateInput>
    /**
     * In case the InventoryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryCategoryUpdateInput, InventoryCategoryUncheckedUpdateInput>
  }

  /**
   * InventoryCategory delete
   */
  export type InventoryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Filter which InventoryCategory to delete.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory deleteMany
   */
  export type InventoryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCategories to delete
     */
    where?: InventoryCategoryWhereInput
  }

  /**
   * InventoryCategory findRaw
   */
  export type InventoryCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryCategory aggregateRaw
   */
  export type InventoryCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryCategory without action
   */
  export type InventoryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
  }


  /**
   * Model QuantityUnit
   */

  export type AggregateQuantityUnit = {
    _count: QuantityUnitCountAggregateOutputType | null
    _min: QuantityUnitMinAggregateOutputType | null
    _max: QuantityUnitMaxAggregateOutputType | null
  }

  export type QuantityUnitMinAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type QuantityUnitMaxAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type QuantityUnitCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type QuantityUnitMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type QuantityUnitMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type QuantityUnitCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type QuantityUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuantityUnit to aggregate.
     */
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     */
    orderBy?: QuantityUnitOrderByWithRelationInput | QuantityUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuantityUnits
    **/
    _count?: true | QuantityUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuantityUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuantityUnitMaxAggregateInputType
  }

  export type GetQuantityUnitAggregateType<T extends QuantityUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateQuantityUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuantityUnit[P]>
      : GetScalarType<T[P], AggregateQuantityUnit[P]>
  }




  export type QuantityUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuantityUnitWhereInput
    orderBy?: QuantityUnitOrderByWithAggregationInput | QuantityUnitOrderByWithAggregationInput[]
    by: QuantityUnitScalarFieldEnum[] | QuantityUnitScalarFieldEnum
    having?: QuantityUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuantityUnitCountAggregateInputType | true
    _min?: QuantityUnitMinAggregateInputType
    _max?: QuantityUnitMaxAggregateInputType
  }

  export type QuantityUnitGroupByOutputType = {
    id: string
    label: string
    _count: QuantityUnitCountAggregateOutputType | null
    _min: QuantityUnitMinAggregateOutputType | null
    _max: QuantityUnitMaxAggregateOutputType | null
  }

  type GetQuantityUnitGroupByPayload<T extends QuantityUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuantityUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuantityUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuantityUnitGroupByOutputType[P]>
            : GetScalarType<T[P], QuantityUnitGroupByOutputType[P]>
        }
      >
    >


  export type QuantityUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["quantityUnit"]>


  export type QuantityUnitSelectScalar = {
    id?: boolean
    label?: boolean
  }


  export type $QuantityUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuantityUnit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
    }, ExtArgs["result"]["quantityUnit"]>
    composites: {}
  }

  type QuantityUnitGetPayload<S extends boolean | null | undefined | QuantityUnitDefaultArgs> = $Result.GetResult<Prisma.$QuantityUnitPayload, S>

  type QuantityUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuantityUnitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuantityUnitCountAggregateInputType | true
    }

  export interface QuantityUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuantityUnit'], meta: { name: 'QuantityUnit' } }
    /**
     * Find zero or one QuantityUnit that matches the filter.
     * @param {QuantityUnitFindUniqueArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuantityUnitFindUniqueArgs>(args: SelectSubset<T, QuantityUnitFindUniqueArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuantityUnit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuantityUnitFindUniqueOrThrowArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuantityUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, QuantityUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuantityUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitFindFirstArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuantityUnitFindFirstArgs>(args?: SelectSubset<T, QuantityUnitFindFirstArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuantityUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitFindFirstOrThrowArgs} args - Arguments to find a QuantityUnit
     * @example
     * // Get one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuantityUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, QuantityUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuantityUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuantityUnits
     * const quantityUnits = await prisma.quantityUnit.findMany()
     * 
     * // Get first 10 QuantityUnits
     * const quantityUnits = await prisma.quantityUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quantityUnitWithIdOnly = await prisma.quantityUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuantityUnitFindManyArgs>(args?: SelectSubset<T, QuantityUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuantityUnit.
     * @param {QuantityUnitCreateArgs} args - Arguments to create a QuantityUnit.
     * @example
     * // Create one QuantityUnit
     * const QuantityUnit = await prisma.quantityUnit.create({
     *   data: {
     *     // ... data to create a QuantityUnit
     *   }
     * })
     * 
     */
    create<T extends QuantityUnitCreateArgs>(args: SelectSubset<T, QuantityUnitCreateArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuantityUnits.
     * @param {QuantityUnitCreateManyArgs} args - Arguments to create many QuantityUnits.
     * @example
     * // Create many QuantityUnits
     * const quantityUnit = await prisma.quantityUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuantityUnitCreateManyArgs>(args?: SelectSubset<T, QuantityUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuantityUnit.
     * @param {QuantityUnitDeleteArgs} args - Arguments to delete one QuantityUnit.
     * @example
     * // Delete one QuantityUnit
     * const QuantityUnit = await prisma.quantityUnit.delete({
     *   where: {
     *     // ... filter to delete one QuantityUnit
     *   }
     * })
     * 
     */
    delete<T extends QuantityUnitDeleteArgs>(args: SelectSubset<T, QuantityUnitDeleteArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuantityUnit.
     * @param {QuantityUnitUpdateArgs} args - Arguments to update one QuantityUnit.
     * @example
     * // Update one QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuantityUnitUpdateArgs>(args: SelectSubset<T, QuantityUnitUpdateArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuantityUnits.
     * @param {QuantityUnitDeleteManyArgs} args - Arguments to filter QuantityUnits to delete.
     * @example
     * // Delete a few QuantityUnits
     * const { count } = await prisma.quantityUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuantityUnitDeleteManyArgs>(args?: SelectSubset<T, QuantityUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuantityUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuantityUnits
     * const quantityUnit = await prisma.quantityUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuantityUnitUpdateManyArgs>(args: SelectSubset<T, QuantityUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuantityUnit.
     * @param {QuantityUnitUpsertArgs} args - Arguments to update or create a QuantityUnit.
     * @example
     * // Update or create a QuantityUnit
     * const quantityUnit = await prisma.quantityUnit.upsert({
     *   create: {
     *     // ... data to create a QuantityUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuantityUnit we want to update
     *   }
     * })
     */
    upsert<T extends QuantityUnitUpsertArgs>(args: SelectSubset<T, QuantityUnitUpsertArgs<ExtArgs>>): Prisma__QuantityUnitClient<$Result.GetResult<Prisma.$QuantityUnitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more QuantityUnits that matches the filter.
     * @param {QuantityUnitFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const quantityUnit = await prisma.quantityUnit.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: QuantityUnitFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a QuantityUnit.
     * @param {QuantityUnitAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const quantityUnit = await prisma.quantityUnit.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuantityUnitAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of QuantityUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitCountArgs} args - Arguments to filter QuantityUnits to count.
     * @example
     * // Count the number of QuantityUnits
     * const count = await prisma.quantityUnit.count({
     *   where: {
     *     // ... the filter for the QuantityUnits we want to count
     *   }
     * })
    **/
    count<T extends QuantityUnitCountArgs>(
      args?: Subset<T, QuantityUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuantityUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuantityUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuantityUnitAggregateArgs>(args: Subset<T, QuantityUnitAggregateArgs>): Prisma.PrismaPromise<GetQuantityUnitAggregateType<T>>

    /**
     * Group by QuantityUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantityUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuantityUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuantityUnitGroupByArgs['orderBy'] }
        : { orderBy?: QuantityUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuantityUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuantityUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuantityUnit model
   */
  readonly fields: QuantityUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuantityUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuantityUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuantityUnit model
   */ 
  interface QuantityUnitFieldRefs {
    readonly id: FieldRef<"QuantityUnit", 'String'>
    readonly label: FieldRef<"QuantityUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuantityUnit findUnique
   */
  export type QuantityUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter, which QuantityUnit to fetch.
     */
    where: QuantityUnitWhereUniqueInput
  }

  /**
   * QuantityUnit findUniqueOrThrow
   */
  export type QuantityUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter, which QuantityUnit to fetch.
     */
    where: QuantityUnitWhereUniqueInput
  }

  /**
   * QuantityUnit findFirst
   */
  export type QuantityUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter, which QuantityUnit to fetch.
     */
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     */
    orderBy?: QuantityUnitOrderByWithRelationInput | QuantityUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuantityUnits.
     */
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuantityUnits.
     */
    distinct?: QuantityUnitScalarFieldEnum | QuantityUnitScalarFieldEnum[]
  }

  /**
   * QuantityUnit findFirstOrThrow
   */
  export type QuantityUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter, which QuantityUnit to fetch.
     */
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     */
    orderBy?: QuantityUnitOrderByWithRelationInput | QuantityUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuantityUnits.
     */
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuantityUnits.
     */
    distinct?: QuantityUnitScalarFieldEnum | QuantityUnitScalarFieldEnum[]
  }

  /**
   * QuantityUnit findMany
   */
  export type QuantityUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter, which QuantityUnits to fetch.
     */
    where?: QuantityUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuantityUnits to fetch.
     */
    orderBy?: QuantityUnitOrderByWithRelationInput | QuantityUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuantityUnits.
     */
    cursor?: QuantityUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuantityUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuantityUnits.
     */
    skip?: number
    distinct?: QuantityUnitScalarFieldEnum | QuantityUnitScalarFieldEnum[]
  }

  /**
   * QuantityUnit create
   */
  export type QuantityUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * The data needed to create a QuantityUnit.
     */
    data: XOR<QuantityUnitCreateInput, QuantityUnitUncheckedCreateInput>
  }

  /**
   * QuantityUnit createMany
   */
  export type QuantityUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuantityUnits.
     */
    data: QuantityUnitCreateManyInput | QuantityUnitCreateManyInput[]
  }

  /**
   * QuantityUnit update
   */
  export type QuantityUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * The data needed to update a QuantityUnit.
     */
    data: XOR<QuantityUnitUpdateInput, QuantityUnitUncheckedUpdateInput>
    /**
     * Choose, which QuantityUnit to update.
     */
    where: QuantityUnitWhereUniqueInput
  }

  /**
   * QuantityUnit updateMany
   */
  export type QuantityUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuantityUnits.
     */
    data: XOR<QuantityUnitUpdateManyMutationInput, QuantityUnitUncheckedUpdateManyInput>
    /**
     * Filter which QuantityUnits to update
     */
    where?: QuantityUnitWhereInput
  }

  /**
   * QuantityUnit upsert
   */
  export type QuantityUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * The filter to search for the QuantityUnit to update in case it exists.
     */
    where: QuantityUnitWhereUniqueInput
    /**
     * In case the QuantityUnit found by the `where` argument doesn't exist, create a new QuantityUnit with this data.
     */
    create: XOR<QuantityUnitCreateInput, QuantityUnitUncheckedCreateInput>
    /**
     * In case the QuantityUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuantityUnitUpdateInput, QuantityUnitUncheckedUpdateInput>
  }

  /**
   * QuantityUnit delete
   */
  export type QuantityUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
    /**
     * Filter which QuantityUnit to delete.
     */
    where: QuantityUnitWhereUniqueInput
  }

  /**
   * QuantityUnit deleteMany
   */
  export type QuantityUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuantityUnits to delete
     */
    where?: QuantityUnitWhereInput
  }

  /**
   * QuantityUnit findRaw
   */
  export type QuantityUnitFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QuantityUnit aggregateRaw
   */
  export type QuantityUnitAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QuantityUnit without action
   */
  export type QuantityUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuantityUnit
     */
    select?: QuantityUnitSelect<ExtArgs> | null
  }


  /**
   * Model InventoryTag
   */

  export type AggregateInventoryTag = {
    _count: InventoryTagCountAggregateOutputType | null
    _min: InventoryTagMinAggregateOutputType | null
    _max: InventoryTagMaxAggregateOutputType | null
  }

  export type InventoryTagMinAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type InventoryTagMaxAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type InventoryTagCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type InventoryTagMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type InventoryTagMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type InventoryTagCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type InventoryTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTag to aggregate.
     */
    where?: InventoryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTags to fetch.
     */
    orderBy?: InventoryTagOrderByWithRelationInput | InventoryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTags
    **/
    _count?: true | InventoryTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTagMaxAggregateInputType
  }

  export type GetInventoryTagAggregateType<T extends InventoryTagAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTag[P]>
      : GetScalarType<T[P], AggregateInventoryTag[P]>
  }




  export type InventoryTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTagWhereInput
    orderBy?: InventoryTagOrderByWithAggregationInput | InventoryTagOrderByWithAggregationInput[]
    by: InventoryTagScalarFieldEnum[] | InventoryTagScalarFieldEnum
    having?: InventoryTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTagCountAggregateInputType | true
    _min?: InventoryTagMinAggregateInputType
    _max?: InventoryTagMaxAggregateInputType
  }

  export type InventoryTagGroupByOutputType = {
    id: string
    label: string
    _count: InventoryTagCountAggregateOutputType | null
    _min: InventoryTagMinAggregateOutputType | null
    _max: InventoryTagMaxAggregateOutputType | null
  }

  type GetInventoryTagGroupByPayload<T extends InventoryTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTagGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTagGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["inventoryTag"]>


  export type InventoryTagSelectScalar = {
    id?: boolean
    label?: boolean
  }


  export type $InventoryTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
    }, ExtArgs["result"]["inventoryTag"]>
    composites: {}
  }

  type InventoryTagGetPayload<S extends boolean | null | undefined | InventoryTagDefaultArgs> = $Result.GetResult<Prisma.$InventoryTagPayload, S>

  type InventoryTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryTagCountAggregateInputType | true
    }

  export interface InventoryTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTag'], meta: { name: 'InventoryTag' } }
    /**
     * Find zero or one InventoryTag that matches the filter.
     * @param {InventoryTagFindUniqueArgs} args - Arguments to find a InventoryTag
     * @example
     * // Get one InventoryTag
     * const inventoryTag = await prisma.inventoryTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTagFindUniqueArgs>(args: SelectSubset<T, InventoryTagFindUniqueArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryTagFindUniqueOrThrowArgs} args - Arguments to find a InventoryTag
     * @example
     * // Get one InventoryTag
     * const inventoryTag = await prisma.inventoryTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTagFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagFindFirstArgs} args - Arguments to find a InventoryTag
     * @example
     * // Get one InventoryTag
     * const inventoryTag = await prisma.inventoryTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTagFindFirstArgs>(args?: SelectSubset<T, InventoryTagFindFirstArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagFindFirstOrThrowArgs} args - Arguments to find a InventoryTag
     * @example
     * // Get one InventoryTag
     * const inventoryTag = await prisma.inventoryTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTagFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTags
     * const inventoryTags = await prisma.inventoryTag.findMany()
     * 
     * // Get first 10 InventoryTags
     * const inventoryTags = await prisma.inventoryTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTagWithIdOnly = await prisma.inventoryTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTagFindManyArgs>(args?: SelectSubset<T, InventoryTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryTag.
     * @param {InventoryTagCreateArgs} args - Arguments to create a InventoryTag.
     * @example
     * // Create one InventoryTag
     * const InventoryTag = await prisma.inventoryTag.create({
     *   data: {
     *     // ... data to create a InventoryTag
     *   }
     * })
     * 
     */
    create<T extends InventoryTagCreateArgs>(args: SelectSubset<T, InventoryTagCreateArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryTags.
     * @param {InventoryTagCreateManyArgs} args - Arguments to create many InventoryTags.
     * @example
     * // Create many InventoryTags
     * const inventoryTag = await prisma.inventoryTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTagCreateManyArgs>(args?: SelectSubset<T, InventoryTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTag.
     * @param {InventoryTagDeleteArgs} args - Arguments to delete one InventoryTag.
     * @example
     * // Delete one InventoryTag
     * const InventoryTag = await prisma.inventoryTag.delete({
     *   where: {
     *     // ... filter to delete one InventoryTag
     *   }
     * })
     * 
     */
    delete<T extends InventoryTagDeleteArgs>(args: SelectSubset<T, InventoryTagDeleteArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryTag.
     * @param {InventoryTagUpdateArgs} args - Arguments to update one InventoryTag.
     * @example
     * // Update one InventoryTag
     * const inventoryTag = await prisma.inventoryTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTagUpdateArgs>(args: SelectSubset<T, InventoryTagUpdateArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryTags.
     * @param {InventoryTagDeleteManyArgs} args - Arguments to filter InventoryTags to delete.
     * @example
     * // Delete a few InventoryTags
     * const { count } = await prisma.inventoryTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTagDeleteManyArgs>(args?: SelectSubset<T, InventoryTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTags
     * const inventoryTag = await prisma.inventoryTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTagUpdateManyArgs>(args: SelectSubset<T, InventoryTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTag.
     * @param {InventoryTagUpsertArgs} args - Arguments to update or create a InventoryTag.
     * @example
     * // Update or create a InventoryTag
     * const inventoryTag = await prisma.inventoryTag.upsert({
     *   create: {
     *     // ... data to create a InventoryTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTag we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTagUpsertArgs>(args: SelectSubset<T, InventoryTagUpsertArgs<ExtArgs>>): Prisma__InventoryTagClient<$Result.GetResult<Prisma.$InventoryTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more InventoryTags that matches the filter.
     * @param {InventoryTagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventoryTag = await prisma.inventoryTag.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InventoryTagFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InventoryTag.
     * @param {InventoryTagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventoryTag = await prisma.inventoryTag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryTagAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InventoryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagCountArgs} args - Arguments to filter InventoryTags to count.
     * @example
     * // Count the number of InventoryTags
     * const count = await prisma.inventoryTag.count({
     *   where: {
     *     // ... the filter for the InventoryTags we want to count
     *   }
     * })
    **/
    count<T extends InventoryTagCountArgs>(
      args?: Subset<T, InventoryTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryTagAggregateArgs>(args: Subset<T, InventoryTagAggregateArgs>): Prisma.PrismaPromise<GetInventoryTagAggregateType<T>>

    /**
     * Group by InventoryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTagGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTag model
   */
  readonly fields: InventoryTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryTag model
   */ 
  interface InventoryTagFieldRefs {
    readonly id: FieldRef<"InventoryTag", 'String'>
    readonly label: FieldRef<"InventoryTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTag findUnique
   */
  export type InventoryTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTag to fetch.
     */
    where: InventoryTagWhereUniqueInput
  }

  /**
   * InventoryTag findUniqueOrThrow
   */
  export type InventoryTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTag to fetch.
     */
    where: InventoryTagWhereUniqueInput
  }

  /**
   * InventoryTag findFirst
   */
  export type InventoryTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTag to fetch.
     */
    where?: InventoryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTags to fetch.
     */
    orderBy?: InventoryTagOrderByWithRelationInput | InventoryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTags.
     */
    cursor?: InventoryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTags.
     */
    distinct?: InventoryTagScalarFieldEnum | InventoryTagScalarFieldEnum[]
  }

  /**
   * InventoryTag findFirstOrThrow
   */
  export type InventoryTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTag to fetch.
     */
    where?: InventoryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTags to fetch.
     */
    orderBy?: InventoryTagOrderByWithRelationInput | InventoryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTags.
     */
    cursor?: InventoryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTags.
     */
    distinct?: InventoryTagScalarFieldEnum | InventoryTagScalarFieldEnum[]
  }

  /**
   * InventoryTag findMany
   */
  export type InventoryTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTags to fetch.
     */
    where?: InventoryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTags to fetch.
     */
    orderBy?: InventoryTagOrderByWithRelationInput | InventoryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTags.
     */
    cursor?: InventoryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTags.
     */
    skip?: number
    distinct?: InventoryTagScalarFieldEnum | InventoryTagScalarFieldEnum[]
  }

  /**
   * InventoryTag create
   */
  export type InventoryTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryTag.
     */
    data: XOR<InventoryTagCreateInput, InventoryTagUncheckedCreateInput>
  }

  /**
   * InventoryTag createMany
   */
  export type InventoryTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTags.
     */
    data: InventoryTagCreateManyInput | InventoryTagCreateManyInput[]
  }

  /**
   * InventoryTag update
   */
  export type InventoryTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryTag.
     */
    data: XOR<InventoryTagUpdateInput, InventoryTagUncheckedUpdateInput>
    /**
     * Choose, which InventoryTag to update.
     */
    where: InventoryTagWhereUniqueInput
  }

  /**
   * InventoryTag updateMany
   */
  export type InventoryTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTags.
     */
    data: XOR<InventoryTagUpdateManyMutationInput, InventoryTagUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTags to update
     */
    where?: InventoryTagWhereInput
  }

  /**
   * InventoryTag upsert
   */
  export type InventoryTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryTag to update in case it exists.
     */
    where: InventoryTagWhereUniqueInput
    /**
     * In case the InventoryTag found by the `where` argument doesn't exist, create a new InventoryTag with this data.
     */
    create: XOR<InventoryTagCreateInput, InventoryTagUncheckedCreateInput>
    /**
     * In case the InventoryTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTagUpdateInput, InventoryTagUncheckedUpdateInput>
  }

  /**
   * InventoryTag delete
   */
  export type InventoryTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
    /**
     * Filter which InventoryTag to delete.
     */
    where: InventoryTagWhereUniqueInput
  }

  /**
   * InventoryTag deleteMany
   */
  export type InventoryTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTags to delete
     */
    where?: InventoryTagWhereInput
  }

  /**
   * InventoryTag findRaw
   */
  export type InventoryTagFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryTag aggregateRaw
   */
  export type InventoryTagAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryTag without action
   */
  export type InventoryTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTag
     */
    select?: InventoryTagSelect<ExtArgs> | null
  }


  /**
   * Model InventoryBrand
   */

  export type AggregateInventoryBrand = {
    _count: InventoryBrandCountAggregateOutputType | null
    _min: InventoryBrandMinAggregateOutputType | null
    _max: InventoryBrandMaxAggregateOutputType | null
  }

  export type InventoryBrandMinAggregateOutputType = {
    id: string | null
    brandName: string | null
  }

  export type InventoryBrandMaxAggregateOutputType = {
    id: string | null
    brandName: string | null
  }

  export type InventoryBrandCountAggregateOutputType = {
    id: number
    brandName: number
    _all: number
  }


  export type InventoryBrandMinAggregateInputType = {
    id?: true
    brandName?: true
  }

  export type InventoryBrandMaxAggregateInputType = {
    id?: true
    brandName?: true
  }

  export type InventoryBrandCountAggregateInputType = {
    id?: true
    brandName?: true
    _all?: true
  }

  export type InventoryBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBrand to aggregate.
     */
    where?: InventoryBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBrands to fetch.
     */
    orderBy?: InventoryBrandOrderByWithRelationInput | InventoryBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryBrands
    **/
    _count?: true | InventoryBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryBrandMaxAggregateInputType
  }

  export type GetInventoryBrandAggregateType<T extends InventoryBrandAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryBrand[P]>
      : GetScalarType<T[P], AggregateInventoryBrand[P]>
  }




  export type InventoryBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBrandWhereInput
    orderBy?: InventoryBrandOrderByWithAggregationInput | InventoryBrandOrderByWithAggregationInput[]
    by: InventoryBrandScalarFieldEnum[] | InventoryBrandScalarFieldEnum
    having?: InventoryBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryBrandCountAggregateInputType | true
    _min?: InventoryBrandMinAggregateInputType
    _max?: InventoryBrandMaxAggregateInputType
  }

  export type InventoryBrandGroupByOutputType = {
    id: string
    brandName: string
    _count: InventoryBrandCountAggregateOutputType | null
    _min: InventoryBrandMinAggregateOutputType | null
    _max: InventoryBrandMaxAggregateOutputType | null
  }

  type GetInventoryBrandGroupByPayload<T extends InventoryBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryBrandGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryBrandGroupByOutputType[P]>
        }
      >
    >


  export type InventoryBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
  }, ExtArgs["result"]["inventoryBrand"]>


  export type InventoryBrandSelectScalar = {
    id?: boolean
    brandName?: boolean
  }


  export type $InventoryBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryBrand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandName: string
    }, ExtArgs["result"]["inventoryBrand"]>
    composites: {}
  }

  type InventoryBrandGetPayload<S extends boolean | null | undefined | InventoryBrandDefaultArgs> = $Result.GetResult<Prisma.$InventoryBrandPayload, S>

  type InventoryBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryBrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryBrandCountAggregateInputType | true
    }

  export interface InventoryBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryBrand'], meta: { name: 'InventoryBrand' } }
    /**
     * Find zero or one InventoryBrand that matches the filter.
     * @param {InventoryBrandFindUniqueArgs} args - Arguments to find a InventoryBrand
     * @example
     * // Get one InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryBrandFindUniqueArgs>(args: SelectSubset<T, InventoryBrandFindUniqueArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryBrand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryBrandFindUniqueOrThrowArgs} args - Arguments to find a InventoryBrand
     * @example
     * // Get one InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandFindFirstArgs} args - Arguments to find a InventoryBrand
     * @example
     * // Get one InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryBrandFindFirstArgs>(args?: SelectSubset<T, InventoryBrandFindFirstArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandFindFirstOrThrowArgs} args - Arguments to find a InventoryBrand
     * @example
     * // Get one InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryBrands
     * const inventoryBrands = await prisma.inventoryBrand.findMany()
     * 
     * // Get first 10 InventoryBrands
     * const inventoryBrands = await prisma.inventoryBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryBrandWithIdOnly = await prisma.inventoryBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryBrandFindManyArgs>(args?: SelectSubset<T, InventoryBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryBrand.
     * @param {InventoryBrandCreateArgs} args - Arguments to create a InventoryBrand.
     * @example
     * // Create one InventoryBrand
     * const InventoryBrand = await prisma.inventoryBrand.create({
     *   data: {
     *     // ... data to create a InventoryBrand
     *   }
     * })
     * 
     */
    create<T extends InventoryBrandCreateArgs>(args: SelectSubset<T, InventoryBrandCreateArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryBrands.
     * @param {InventoryBrandCreateManyArgs} args - Arguments to create many InventoryBrands.
     * @example
     * // Create many InventoryBrands
     * const inventoryBrand = await prisma.inventoryBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryBrandCreateManyArgs>(args?: SelectSubset<T, InventoryBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryBrand.
     * @param {InventoryBrandDeleteArgs} args - Arguments to delete one InventoryBrand.
     * @example
     * // Delete one InventoryBrand
     * const InventoryBrand = await prisma.inventoryBrand.delete({
     *   where: {
     *     // ... filter to delete one InventoryBrand
     *   }
     * })
     * 
     */
    delete<T extends InventoryBrandDeleteArgs>(args: SelectSubset<T, InventoryBrandDeleteArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryBrand.
     * @param {InventoryBrandUpdateArgs} args - Arguments to update one InventoryBrand.
     * @example
     * // Update one InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryBrandUpdateArgs>(args: SelectSubset<T, InventoryBrandUpdateArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryBrands.
     * @param {InventoryBrandDeleteManyArgs} args - Arguments to filter InventoryBrands to delete.
     * @example
     * // Delete a few InventoryBrands
     * const { count } = await prisma.inventoryBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryBrandDeleteManyArgs>(args?: SelectSubset<T, InventoryBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryBrands
     * const inventoryBrand = await prisma.inventoryBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryBrandUpdateManyArgs>(args: SelectSubset<T, InventoryBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryBrand.
     * @param {InventoryBrandUpsertArgs} args - Arguments to update or create a InventoryBrand.
     * @example
     * // Update or create a InventoryBrand
     * const inventoryBrand = await prisma.inventoryBrand.upsert({
     *   create: {
     *     // ... data to create a InventoryBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryBrand we want to update
     *   }
     * })
     */
    upsert<T extends InventoryBrandUpsertArgs>(args: SelectSubset<T, InventoryBrandUpsertArgs<ExtArgs>>): Prisma__InventoryBrandClient<$Result.GetResult<Prisma.$InventoryBrandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more InventoryBrands that matches the filter.
     * @param {InventoryBrandFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventoryBrand = await prisma.inventoryBrand.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InventoryBrandFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InventoryBrand.
     * @param {InventoryBrandAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventoryBrand = await prisma.inventoryBrand.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryBrandAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InventoryBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandCountArgs} args - Arguments to filter InventoryBrands to count.
     * @example
     * // Count the number of InventoryBrands
     * const count = await prisma.inventoryBrand.count({
     *   where: {
     *     // ... the filter for the InventoryBrands we want to count
     *   }
     * })
    **/
    count<T extends InventoryBrandCountArgs>(
      args?: Subset<T, InventoryBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryBrandAggregateArgs>(args: Subset<T, InventoryBrandAggregateArgs>): Prisma.PrismaPromise<GetInventoryBrandAggregateType<T>>

    /**
     * Group by InventoryBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryBrandGroupByArgs['orderBy'] }
        : { orderBy?: InventoryBrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryBrand model
   */
  readonly fields: InventoryBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryBrand model
   */ 
  interface InventoryBrandFieldRefs {
    readonly id: FieldRef<"InventoryBrand", 'String'>
    readonly brandName: FieldRef<"InventoryBrand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryBrand findUnique
   */
  export type InventoryBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter, which InventoryBrand to fetch.
     */
    where: InventoryBrandWhereUniqueInput
  }

  /**
   * InventoryBrand findUniqueOrThrow
   */
  export type InventoryBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter, which InventoryBrand to fetch.
     */
    where: InventoryBrandWhereUniqueInput
  }

  /**
   * InventoryBrand findFirst
   */
  export type InventoryBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter, which InventoryBrand to fetch.
     */
    where?: InventoryBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBrands to fetch.
     */
    orderBy?: InventoryBrandOrderByWithRelationInput | InventoryBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBrands.
     */
    cursor?: InventoryBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBrands.
     */
    distinct?: InventoryBrandScalarFieldEnum | InventoryBrandScalarFieldEnum[]
  }

  /**
   * InventoryBrand findFirstOrThrow
   */
  export type InventoryBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter, which InventoryBrand to fetch.
     */
    where?: InventoryBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBrands to fetch.
     */
    orderBy?: InventoryBrandOrderByWithRelationInput | InventoryBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBrands.
     */
    cursor?: InventoryBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBrands.
     */
    distinct?: InventoryBrandScalarFieldEnum | InventoryBrandScalarFieldEnum[]
  }

  /**
   * InventoryBrand findMany
   */
  export type InventoryBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter, which InventoryBrands to fetch.
     */
    where?: InventoryBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBrands to fetch.
     */
    orderBy?: InventoryBrandOrderByWithRelationInput | InventoryBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryBrands.
     */
    cursor?: InventoryBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBrands.
     */
    skip?: number
    distinct?: InventoryBrandScalarFieldEnum | InventoryBrandScalarFieldEnum[]
  }

  /**
   * InventoryBrand create
   */
  export type InventoryBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryBrand.
     */
    data: XOR<InventoryBrandCreateInput, InventoryBrandUncheckedCreateInput>
  }

  /**
   * InventoryBrand createMany
   */
  export type InventoryBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryBrands.
     */
    data: InventoryBrandCreateManyInput | InventoryBrandCreateManyInput[]
  }

  /**
   * InventoryBrand update
   */
  export type InventoryBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryBrand.
     */
    data: XOR<InventoryBrandUpdateInput, InventoryBrandUncheckedUpdateInput>
    /**
     * Choose, which InventoryBrand to update.
     */
    where: InventoryBrandWhereUniqueInput
  }

  /**
   * InventoryBrand updateMany
   */
  export type InventoryBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryBrands.
     */
    data: XOR<InventoryBrandUpdateManyMutationInput, InventoryBrandUncheckedUpdateManyInput>
    /**
     * Filter which InventoryBrands to update
     */
    where?: InventoryBrandWhereInput
  }

  /**
   * InventoryBrand upsert
   */
  export type InventoryBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryBrand to update in case it exists.
     */
    where: InventoryBrandWhereUniqueInput
    /**
     * In case the InventoryBrand found by the `where` argument doesn't exist, create a new InventoryBrand with this data.
     */
    create: XOR<InventoryBrandCreateInput, InventoryBrandUncheckedCreateInput>
    /**
     * In case the InventoryBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryBrandUpdateInput, InventoryBrandUncheckedUpdateInput>
  }

  /**
   * InventoryBrand delete
   */
  export type InventoryBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
    /**
     * Filter which InventoryBrand to delete.
     */
    where: InventoryBrandWhereUniqueInput
  }

  /**
   * InventoryBrand deleteMany
   */
  export type InventoryBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBrands to delete
     */
    where?: InventoryBrandWhereInput
  }

  /**
   * InventoryBrand findRaw
   */
  export type InventoryBrandFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryBrand aggregateRaw
   */
  export type InventoryBrandAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryBrand without action
   */
  export type InventoryBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBrand
     */
    select?: InventoryBrandSelect<ExtArgs> | null
  }


  /**
   * Model InventoryLink
   */

  export type AggregateInventoryLink = {
    _count: InventoryLinkCountAggregateOutputType | null
    _min: InventoryLinkMinAggregateOutputType | null
    _max: InventoryLinkMaxAggregateOutputType | null
  }

  export type InventoryLinkMinAggregateOutputType = {
    id: string | null
    linkName: string | null
    description: string | null
    category: string | null
    comments: string | null
  }

  export type InventoryLinkMaxAggregateOutputType = {
    id: string | null
    linkName: string | null
    description: string | null
    category: string | null
    comments: string | null
  }

  export type InventoryLinkCountAggregateOutputType = {
    id: number
    linkName: number
    description: number
    category: number
    comments: number
    items: number
    _all: number
  }


  export type InventoryLinkMinAggregateInputType = {
    id?: true
    linkName?: true
    description?: true
    category?: true
    comments?: true
  }

  export type InventoryLinkMaxAggregateInputType = {
    id?: true
    linkName?: true
    description?: true
    category?: true
    comments?: true
  }

  export type InventoryLinkCountAggregateInputType = {
    id?: true
    linkName?: true
    description?: true
    category?: true
    comments?: true
    items?: true
    _all?: true
  }

  export type InventoryLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLink to aggregate.
     */
    where?: InventoryLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLinks to fetch.
     */
    orderBy?: InventoryLinkOrderByWithRelationInput | InventoryLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLinks
    **/
    _count?: true | InventoryLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLinkMaxAggregateInputType
  }

  export type GetInventoryLinkAggregateType<T extends InventoryLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLink[P]>
      : GetScalarType<T[P], AggregateInventoryLink[P]>
  }




  export type InventoryLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLinkWhereInput
    orderBy?: InventoryLinkOrderByWithAggregationInput | InventoryLinkOrderByWithAggregationInput[]
    by: InventoryLinkScalarFieldEnum[] | InventoryLinkScalarFieldEnum
    having?: InventoryLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLinkCountAggregateInputType | true
    _min?: InventoryLinkMinAggregateInputType
    _max?: InventoryLinkMaxAggregateInputType
  }

  export type InventoryLinkGroupByOutputType = {
    id: string
    linkName: string
    description: string | null
    category: string | null
    comments: string | null
    items: string[]
    _count: InventoryLinkCountAggregateOutputType | null
    _min: InventoryLinkMinAggregateOutputType | null
    _max: InventoryLinkMaxAggregateOutputType | null
  }

  type GetInventoryLinkGroupByPayload<T extends InventoryLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLinkGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLinkGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkName?: boolean
    description?: boolean
    category?: boolean
    comments?: boolean
    items?: boolean
  }, ExtArgs["result"]["inventoryLink"]>


  export type InventoryLinkSelectScalar = {
    id?: boolean
    linkName?: boolean
    description?: boolean
    category?: boolean
    comments?: boolean
    items?: boolean
  }


  export type $InventoryLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      linkName: string
      description: string | null
      category: string | null
      comments: string | null
      items: string[]
    }, ExtArgs["result"]["inventoryLink"]>
    composites: {}
  }

  type InventoryLinkGetPayload<S extends boolean | null | undefined | InventoryLinkDefaultArgs> = $Result.GetResult<Prisma.$InventoryLinkPayload, S>

  type InventoryLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryLinkCountAggregateInputType | true
    }

  export interface InventoryLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLink'], meta: { name: 'InventoryLink' } }
    /**
     * Find zero or one InventoryLink that matches the filter.
     * @param {InventoryLinkFindUniqueArgs} args - Arguments to find a InventoryLink
     * @example
     * // Get one InventoryLink
     * const inventoryLink = await prisma.inventoryLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLinkFindUniqueArgs>(args: SelectSubset<T, InventoryLinkFindUniqueArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryLinkFindUniqueOrThrowArgs} args - Arguments to find a InventoryLink
     * @example
     * // Get one InventoryLink
     * const inventoryLink = await prisma.inventoryLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkFindFirstArgs} args - Arguments to find a InventoryLink
     * @example
     * // Get one InventoryLink
     * const inventoryLink = await prisma.inventoryLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLinkFindFirstArgs>(args?: SelectSubset<T, InventoryLinkFindFirstArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkFindFirstOrThrowArgs} args - Arguments to find a InventoryLink
     * @example
     * // Get one InventoryLink
     * const inventoryLink = await prisma.inventoryLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLinks
     * const inventoryLinks = await prisma.inventoryLink.findMany()
     * 
     * // Get first 10 InventoryLinks
     * const inventoryLinks = await prisma.inventoryLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLinkWithIdOnly = await prisma.inventoryLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLinkFindManyArgs>(args?: SelectSubset<T, InventoryLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryLink.
     * @param {InventoryLinkCreateArgs} args - Arguments to create a InventoryLink.
     * @example
     * // Create one InventoryLink
     * const InventoryLink = await prisma.inventoryLink.create({
     *   data: {
     *     // ... data to create a InventoryLink
     *   }
     * })
     * 
     */
    create<T extends InventoryLinkCreateArgs>(args: SelectSubset<T, InventoryLinkCreateArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryLinks.
     * @param {InventoryLinkCreateManyArgs} args - Arguments to create many InventoryLinks.
     * @example
     * // Create many InventoryLinks
     * const inventoryLink = await prisma.inventoryLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLinkCreateManyArgs>(args?: SelectSubset<T, InventoryLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryLink.
     * @param {InventoryLinkDeleteArgs} args - Arguments to delete one InventoryLink.
     * @example
     * // Delete one InventoryLink
     * const InventoryLink = await prisma.inventoryLink.delete({
     *   where: {
     *     // ... filter to delete one InventoryLink
     *   }
     * })
     * 
     */
    delete<T extends InventoryLinkDeleteArgs>(args: SelectSubset<T, InventoryLinkDeleteArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryLink.
     * @param {InventoryLinkUpdateArgs} args - Arguments to update one InventoryLink.
     * @example
     * // Update one InventoryLink
     * const inventoryLink = await prisma.inventoryLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLinkUpdateArgs>(args: SelectSubset<T, InventoryLinkUpdateArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryLinks.
     * @param {InventoryLinkDeleteManyArgs} args - Arguments to filter InventoryLinks to delete.
     * @example
     * // Delete a few InventoryLinks
     * const { count } = await prisma.inventoryLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLinkDeleteManyArgs>(args?: SelectSubset<T, InventoryLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLinks
     * const inventoryLink = await prisma.inventoryLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLinkUpdateManyArgs>(args: SelectSubset<T, InventoryLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryLink.
     * @param {InventoryLinkUpsertArgs} args - Arguments to update or create a InventoryLink.
     * @example
     * // Update or create a InventoryLink
     * const inventoryLink = await prisma.inventoryLink.upsert({
     *   create: {
     *     // ... data to create a InventoryLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLink we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLinkUpsertArgs>(args: SelectSubset<T, InventoryLinkUpsertArgs<ExtArgs>>): Prisma__InventoryLinkClient<$Result.GetResult<Prisma.$InventoryLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more InventoryLinks that matches the filter.
     * @param {InventoryLinkFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inventoryLink = await prisma.inventoryLink.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InventoryLinkFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InventoryLink.
     * @param {InventoryLinkAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inventoryLink = await prisma.inventoryLink.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InventoryLinkAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InventoryLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkCountArgs} args - Arguments to filter InventoryLinks to count.
     * @example
     * // Count the number of InventoryLinks
     * const count = await prisma.inventoryLink.count({
     *   where: {
     *     // ... the filter for the InventoryLinks we want to count
     *   }
     * })
    **/
    count<T extends InventoryLinkCountArgs>(
      args?: Subset<T, InventoryLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLinkAggregateArgs>(args: Subset<T, InventoryLinkAggregateArgs>): Prisma.PrismaPromise<GetInventoryLinkAggregateType<T>>

    /**
     * Group by InventoryLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLinkGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLink model
   */
  readonly fields: InventoryLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLink model
   */ 
  interface InventoryLinkFieldRefs {
    readonly id: FieldRef<"InventoryLink", 'String'>
    readonly linkName: FieldRef<"InventoryLink", 'String'>
    readonly description: FieldRef<"InventoryLink", 'String'>
    readonly category: FieldRef<"InventoryLink", 'String'>
    readonly comments: FieldRef<"InventoryLink", 'String'>
    readonly items: FieldRef<"InventoryLink", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLink findUnique
   */
  export type InventoryLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter, which InventoryLink to fetch.
     */
    where: InventoryLinkWhereUniqueInput
  }

  /**
   * InventoryLink findUniqueOrThrow
   */
  export type InventoryLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter, which InventoryLink to fetch.
     */
    where: InventoryLinkWhereUniqueInput
  }

  /**
   * InventoryLink findFirst
   */
  export type InventoryLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter, which InventoryLink to fetch.
     */
    where?: InventoryLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLinks to fetch.
     */
    orderBy?: InventoryLinkOrderByWithRelationInput | InventoryLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLinks.
     */
    cursor?: InventoryLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLinks.
     */
    distinct?: InventoryLinkScalarFieldEnum | InventoryLinkScalarFieldEnum[]
  }

  /**
   * InventoryLink findFirstOrThrow
   */
  export type InventoryLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter, which InventoryLink to fetch.
     */
    where?: InventoryLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLinks to fetch.
     */
    orderBy?: InventoryLinkOrderByWithRelationInput | InventoryLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLinks.
     */
    cursor?: InventoryLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLinks.
     */
    distinct?: InventoryLinkScalarFieldEnum | InventoryLinkScalarFieldEnum[]
  }

  /**
   * InventoryLink findMany
   */
  export type InventoryLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter, which InventoryLinks to fetch.
     */
    where?: InventoryLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLinks to fetch.
     */
    orderBy?: InventoryLinkOrderByWithRelationInput | InventoryLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLinks.
     */
    cursor?: InventoryLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLinks.
     */
    skip?: number
    distinct?: InventoryLinkScalarFieldEnum | InventoryLinkScalarFieldEnum[]
  }

  /**
   * InventoryLink create
   */
  export type InventoryLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryLink.
     */
    data: XOR<InventoryLinkCreateInput, InventoryLinkUncheckedCreateInput>
  }

  /**
   * InventoryLink createMany
   */
  export type InventoryLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLinks.
     */
    data: InventoryLinkCreateManyInput | InventoryLinkCreateManyInput[]
  }

  /**
   * InventoryLink update
   */
  export type InventoryLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryLink.
     */
    data: XOR<InventoryLinkUpdateInput, InventoryLinkUncheckedUpdateInput>
    /**
     * Choose, which InventoryLink to update.
     */
    where: InventoryLinkWhereUniqueInput
  }

  /**
   * InventoryLink updateMany
   */
  export type InventoryLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLinks.
     */
    data: XOR<InventoryLinkUpdateManyMutationInput, InventoryLinkUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLinks to update
     */
    where?: InventoryLinkWhereInput
  }

  /**
   * InventoryLink upsert
   */
  export type InventoryLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryLink to update in case it exists.
     */
    where: InventoryLinkWhereUniqueInput
    /**
     * In case the InventoryLink found by the `where` argument doesn't exist, create a new InventoryLink with this data.
     */
    create: XOR<InventoryLinkCreateInput, InventoryLinkUncheckedCreateInput>
    /**
     * In case the InventoryLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLinkUpdateInput, InventoryLinkUncheckedUpdateInput>
  }

  /**
   * InventoryLink delete
   */
  export type InventoryLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
    /**
     * Filter which InventoryLink to delete.
     */
    where: InventoryLinkWhereUniqueInput
  }

  /**
   * InventoryLink deleteMany
   */
  export type InventoryLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLinks to delete
     */
    where?: InventoryLinkWhereInput
  }

  /**
   * InventoryLink findRaw
   */
  export type InventoryLinkFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryLink aggregateRaw
   */
  export type InventoryLinkAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InventoryLink without action
   */
  export type InventoryLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLink
     */
    select?: InventoryLinkSelect<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    label: number
    description: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    label: string
    description: string | null
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
  }, ExtArgs["result"]["userRole"]>


  export type UserRoleSelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
  }


  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      description: string | null
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * @param {UserRoleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userRole = await prisma.userRole.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserRoleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserRole.
     * @param {UserRoleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userRole = await prisma.userRole.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserRoleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly label: FieldRef<"UserRole", 'String'>
    readonly description: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole findRaw
   */
  export type UserRoleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRole aggregateRaw
   */
  export type UserRoleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
  }


  /**
   * Model UserType
   */

  export type AggregateUserType = {
    _count: UserTypeCountAggregateOutputType | null
    _min: UserTypeMinAggregateOutputType | null
    _max: UserTypeMaxAggregateOutputType | null
  }

  export type UserTypeMinAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type UserTypeMaxAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type UserTypeCountAggregateOutputType = {
    id: number
    label: number
    description: number
    _all: number
  }


  export type UserTypeMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type UserTypeMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type UserTypeCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    _all?: true
  }

  export type UserTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserType to aggregate.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: UserTypeOrderByWithRelationInput | UserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTypes
    **/
    _count?: true | UserTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTypeMaxAggregateInputType
  }

  export type GetUserTypeAggregateType<T extends UserTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserType[P]>
      : GetScalarType<T[P], AggregateUserType[P]>
  }




  export type UserTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTypeWhereInput
    orderBy?: UserTypeOrderByWithAggregationInput | UserTypeOrderByWithAggregationInput[]
    by: UserTypeScalarFieldEnum[] | UserTypeScalarFieldEnum
    having?: UserTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTypeCountAggregateInputType | true
    _min?: UserTypeMinAggregateInputType
    _max?: UserTypeMaxAggregateInputType
  }

  export type UserTypeGroupByOutputType = {
    id: string
    label: string
    description: string | null
    _count: UserTypeCountAggregateOutputType | null
    _min: UserTypeMinAggregateOutputType | null
    _max: UserTypeMaxAggregateOutputType | null
  }

  type GetUserTypeGroupByPayload<T extends UserTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UserTypeGroupByOutputType[P]>
        }
      >
    >


  export type UserTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
  }, ExtArgs["result"]["userType"]>


  export type UserTypeSelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
  }


  export type $UserTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      description: string | null
    }, ExtArgs["result"]["userType"]>
    composites: {}
  }

  type UserTypeGetPayload<S extends boolean | null | undefined | UserTypeDefaultArgs> = $Result.GetResult<Prisma.$UserTypePayload, S>

  type UserTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserTypeCountAggregateInputType | true
    }

  export interface UserTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserType'], meta: { name: 'UserType' } }
    /**
     * Find zero or one UserType that matches the filter.
     * @param {UserTypeFindUniqueArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTypeFindUniqueArgs>(args: SelectSubset<T, UserTypeFindUniqueArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserTypeFindUniqueOrThrowArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindFirstArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTypeFindFirstArgs>(args?: SelectSubset<T, UserTypeFindFirstArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindFirstOrThrowArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTypes
     * const userTypes = await prisma.userType.findMany()
     * 
     * // Get first 10 UserTypes
     * const userTypes = await prisma.userType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTypeWithIdOnly = await prisma.userType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTypeFindManyArgs>(args?: SelectSubset<T, UserTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserType.
     * @param {UserTypeCreateArgs} args - Arguments to create a UserType.
     * @example
     * // Create one UserType
     * const UserType = await prisma.userType.create({
     *   data: {
     *     // ... data to create a UserType
     *   }
     * })
     * 
     */
    create<T extends UserTypeCreateArgs>(args: SelectSubset<T, UserTypeCreateArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserTypes.
     * @param {UserTypeCreateManyArgs} args - Arguments to create many UserTypes.
     * @example
     * // Create many UserTypes
     * const userType = await prisma.userType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTypeCreateManyArgs>(args?: SelectSubset<T, UserTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserType.
     * @param {UserTypeDeleteArgs} args - Arguments to delete one UserType.
     * @example
     * // Delete one UserType
     * const UserType = await prisma.userType.delete({
     *   where: {
     *     // ... filter to delete one UserType
     *   }
     * })
     * 
     */
    delete<T extends UserTypeDeleteArgs>(args: SelectSubset<T, UserTypeDeleteArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserType.
     * @param {UserTypeUpdateArgs} args - Arguments to update one UserType.
     * @example
     * // Update one UserType
     * const userType = await prisma.userType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTypeUpdateArgs>(args: SelectSubset<T, UserTypeUpdateArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserTypes.
     * @param {UserTypeDeleteManyArgs} args - Arguments to filter UserTypes to delete.
     * @example
     * // Delete a few UserTypes
     * const { count } = await prisma.userType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTypeDeleteManyArgs>(args?: SelectSubset<T, UserTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTypes
     * const userType = await prisma.userType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTypeUpdateManyArgs>(args: SelectSubset<T, UserTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserType.
     * @param {UserTypeUpsertArgs} args - Arguments to update or create a UserType.
     * @example
     * // Update or create a UserType
     * const userType = await prisma.userType.upsert({
     *   create: {
     *     // ... data to create a UserType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserType we want to update
     *   }
     * })
     */
    upsert<T extends UserTypeUpsertArgs>(args: SelectSubset<T, UserTypeUpsertArgs<ExtArgs>>): Prisma__UserTypeClient<$Result.GetResult<Prisma.$UserTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UserTypes that matches the filter.
     * @param {UserTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userType = await prisma.userType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserTypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserType.
     * @param {UserTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userType = await prisma.userType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserTypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeCountArgs} args - Arguments to filter UserTypes to count.
     * @example
     * // Count the number of UserTypes
     * const count = await prisma.userType.count({
     *   where: {
     *     // ... the filter for the UserTypes we want to count
     *   }
     * })
    **/
    count<T extends UserTypeCountArgs>(
      args?: Subset<T, UserTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTypeAggregateArgs>(args: Subset<T, UserTypeAggregateArgs>): Prisma.PrismaPromise<GetUserTypeAggregateType<T>>

    /**
     * Group by UserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTypeGroupByArgs['orderBy'] }
        : { orderBy?: UserTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserType model
   */
  readonly fields: UserTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserType model
   */ 
  interface UserTypeFieldRefs {
    readonly id: FieldRef<"UserType", 'String'>
    readonly label: FieldRef<"UserType", 'String'>
    readonly description: FieldRef<"UserType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserType findUnique
   */
  export type UserTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter, which UserType to fetch.
     */
    where: UserTypeWhereUniqueInput
  }

  /**
   * UserType findUniqueOrThrow
   */
  export type UserTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter, which UserType to fetch.
     */
    where: UserTypeWhereUniqueInput
  }

  /**
   * UserType findFirst
   */
  export type UserTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter, which UserType to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: UserTypeOrderByWithRelationInput | UserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTypes.
     */
    distinct?: UserTypeScalarFieldEnum | UserTypeScalarFieldEnum[]
  }

  /**
   * UserType findFirstOrThrow
   */
  export type UserTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter, which UserType to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: UserTypeOrderByWithRelationInput | UserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTypes.
     */
    distinct?: UserTypeScalarFieldEnum | UserTypeScalarFieldEnum[]
  }

  /**
   * UserType findMany
   */
  export type UserTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter, which UserTypes to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: UserTypeOrderByWithRelationInput | UserTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    distinct?: UserTypeScalarFieldEnum | UserTypeScalarFieldEnum[]
  }

  /**
   * UserType create
   */
  export type UserTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a UserType.
     */
    data: XOR<UserTypeCreateInput, UserTypeUncheckedCreateInput>
  }

  /**
   * UserType createMany
   */
  export type UserTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTypes.
     */
    data: UserTypeCreateManyInput | UserTypeCreateManyInput[]
  }

  /**
   * UserType update
   */
  export type UserTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a UserType.
     */
    data: XOR<UserTypeUpdateInput, UserTypeUncheckedUpdateInput>
    /**
     * Choose, which UserType to update.
     */
    where: UserTypeWhereUniqueInput
  }

  /**
   * UserType updateMany
   */
  export type UserTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTypes.
     */
    data: XOR<UserTypeUpdateManyMutationInput, UserTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserTypes to update
     */
    where?: UserTypeWhereInput
  }

  /**
   * UserType upsert
   */
  export type UserTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the UserType to update in case it exists.
     */
    where: UserTypeWhereUniqueInput
    /**
     * In case the UserType found by the `where` argument doesn't exist, create a new UserType with this data.
     */
    create: XOR<UserTypeCreateInput, UserTypeUncheckedCreateInput>
    /**
     * In case the UserType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTypeUpdateInput, UserTypeUncheckedUpdateInput>
  }

  /**
   * UserType delete
   */
  export type UserTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
    /**
     * Filter which UserType to delete.
     */
    where: UserTypeWhereUniqueInput
  }

  /**
   * UserType deleteMany
   */
  export type UserTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTypes to delete
     */
    where?: UserTypeWhereInput
  }

  /**
   * UserType findRaw
   */
  export type UserTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserType aggregateRaw
   */
  export type UserTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserType without action
   */
  export type UserTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect<ExtArgs> | null
  }


  /**
   * Model OfficerRole
   */

  export type AggregateOfficerRole = {
    _count: OfficerRoleCountAggregateOutputType | null
    _min: OfficerRoleMinAggregateOutputType | null
    _max: OfficerRoleMaxAggregateOutputType | null
  }

  export type OfficerRoleMinAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type OfficerRoleMaxAggregateOutputType = {
    id: string | null
    label: string | null
    description: string | null
  }

  export type OfficerRoleCountAggregateOutputType = {
    id: number
    label: number
    description: number
    _all: number
  }


  export type OfficerRoleMinAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type OfficerRoleMaxAggregateInputType = {
    id?: true
    label?: true
    description?: true
  }

  export type OfficerRoleCountAggregateInputType = {
    id?: true
    label?: true
    description?: true
    _all?: true
  }

  export type OfficerRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerRole to aggregate.
     */
    where?: OfficerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerRoles to fetch.
     */
    orderBy?: OfficerRoleOrderByWithRelationInput | OfficerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficerRoles
    **/
    _count?: true | OfficerRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerRoleMaxAggregateInputType
  }

  export type GetOfficerRoleAggregateType<T extends OfficerRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficerRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficerRole[P]>
      : GetScalarType<T[P], AggregateOfficerRole[P]>
  }




  export type OfficerRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerRoleWhereInput
    orderBy?: OfficerRoleOrderByWithAggregationInput | OfficerRoleOrderByWithAggregationInput[]
    by: OfficerRoleScalarFieldEnum[] | OfficerRoleScalarFieldEnum
    having?: OfficerRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerRoleCountAggregateInputType | true
    _min?: OfficerRoleMinAggregateInputType
    _max?: OfficerRoleMaxAggregateInputType
  }

  export type OfficerRoleGroupByOutputType = {
    id: string
    label: string
    description: string | null
    _count: OfficerRoleCountAggregateOutputType | null
    _min: OfficerRoleMinAggregateOutputType | null
    _max: OfficerRoleMaxAggregateOutputType | null
  }

  type GetOfficerRoleGroupByPayload<T extends OfficerRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerRoleGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerRoleGroupByOutputType[P]>
        }
      >
    >


  export type OfficerRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    description?: boolean
  }, ExtArgs["result"]["officerRole"]>


  export type OfficerRoleSelectScalar = {
    id?: boolean
    label?: boolean
    description?: boolean
  }


  export type $OfficerRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfficerRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      description: string | null
    }, ExtArgs["result"]["officerRole"]>
    composites: {}
  }

  type OfficerRoleGetPayload<S extends boolean | null | undefined | OfficerRoleDefaultArgs> = $Result.GetResult<Prisma.$OfficerRolePayload, S>

  type OfficerRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfficerRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfficerRoleCountAggregateInputType | true
    }

  export interface OfficerRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfficerRole'], meta: { name: 'OfficerRole' } }
    /**
     * Find zero or one OfficerRole that matches the filter.
     * @param {OfficerRoleFindUniqueArgs} args - Arguments to find a OfficerRole
     * @example
     * // Get one OfficerRole
     * const officerRole = await prisma.officerRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerRoleFindUniqueArgs>(args: SelectSubset<T, OfficerRoleFindUniqueArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OfficerRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfficerRoleFindUniqueOrThrowArgs} args - Arguments to find a OfficerRole
     * @example
     * // Get one OfficerRole
     * const officerRole = await prisma.officerRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OfficerRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleFindFirstArgs} args - Arguments to find a OfficerRole
     * @example
     * // Get one OfficerRole
     * const officerRole = await prisma.officerRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerRoleFindFirstArgs>(args?: SelectSubset<T, OfficerRoleFindFirstArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OfficerRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleFindFirstOrThrowArgs} args - Arguments to find a OfficerRole
     * @example
     * // Get one OfficerRole
     * const officerRole = await prisma.officerRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OfficerRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficerRoles
     * const officerRoles = await prisma.officerRole.findMany()
     * 
     * // Get first 10 OfficerRoles
     * const officerRoles = await prisma.officerRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerRoleWithIdOnly = await prisma.officerRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerRoleFindManyArgs>(args?: SelectSubset<T, OfficerRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OfficerRole.
     * @param {OfficerRoleCreateArgs} args - Arguments to create a OfficerRole.
     * @example
     * // Create one OfficerRole
     * const OfficerRole = await prisma.officerRole.create({
     *   data: {
     *     // ... data to create a OfficerRole
     *   }
     * })
     * 
     */
    create<T extends OfficerRoleCreateArgs>(args: SelectSubset<T, OfficerRoleCreateArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OfficerRoles.
     * @param {OfficerRoleCreateManyArgs} args - Arguments to create many OfficerRoles.
     * @example
     * // Create many OfficerRoles
     * const officerRole = await prisma.officerRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerRoleCreateManyArgs>(args?: SelectSubset<T, OfficerRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfficerRole.
     * @param {OfficerRoleDeleteArgs} args - Arguments to delete one OfficerRole.
     * @example
     * // Delete one OfficerRole
     * const OfficerRole = await prisma.officerRole.delete({
     *   where: {
     *     // ... filter to delete one OfficerRole
     *   }
     * })
     * 
     */
    delete<T extends OfficerRoleDeleteArgs>(args: SelectSubset<T, OfficerRoleDeleteArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OfficerRole.
     * @param {OfficerRoleUpdateArgs} args - Arguments to update one OfficerRole.
     * @example
     * // Update one OfficerRole
     * const officerRole = await prisma.officerRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerRoleUpdateArgs>(args: SelectSubset<T, OfficerRoleUpdateArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OfficerRoles.
     * @param {OfficerRoleDeleteManyArgs} args - Arguments to filter OfficerRoles to delete.
     * @example
     * // Delete a few OfficerRoles
     * const { count } = await prisma.officerRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerRoleDeleteManyArgs>(args?: SelectSubset<T, OfficerRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficerRoles
     * const officerRole = await prisma.officerRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerRoleUpdateManyArgs>(args: SelectSubset<T, OfficerRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfficerRole.
     * @param {OfficerRoleUpsertArgs} args - Arguments to update or create a OfficerRole.
     * @example
     * // Update or create a OfficerRole
     * const officerRole = await prisma.officerRole.upsert({
     *   create: {
     *     // ... data to create a OfficerRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficerRole we want to update
     *   }
     * })
     */
    upsert<T extends OfficerRoleUpsertArgs>(args: SelectSubset<T, OfficerRoleUpsertArgs<ExtArgs>>): Prisma__OfficerRoleClient<$Result.GetResult<Prisma.$OfficerRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more OfficerRoles that matches the filter.
     * @param {OfficerRoleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const officerRole = await prisma.officerRole.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: OfficerRoleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OfficerRole.
     * @param {OfficerRoleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const officerRole = await prisma.officerRole.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OfficerRoleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OfficerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleCountArgs} args - Arguments to filter OfficerRoles to count.
     * @example
     * // Count the number of OfficerRoles
     * const count = await prisma.officerRole.count({
     *   where: {
     *     // ... the filter for the OfficerRoles we want to count
     *   }
     * })
    **/
    count<T extends OfficerRoleCountArgs>(
      args?: Subset<T, OfficerRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfficerRoleAggregateArgs>(args: Subset<T, OfficerRoleAggregateArgs>): Prisma.PrismaPromise<GetOfficerRoleAggregateType<T>>

    /**
     * Group by OfficerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfficerRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerRoleGroupByArgs['orderBy'] }
        : { orderBy?: OfficerRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfficerRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfficerRole model
   */
  readonly fields: OfficerRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficerRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OfficerRole model
   */ 
  interface OfficerRoleFieldRefs {
    readonly id: FieldRef<"OfficerRole", 'String'>
    readonly label: FieldRef<"OfficerRole", 'String'>
    readonly description: FieldRef<"OfficerRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OfficerRole findUnique
   */
  export type OfficerRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter, which OfficerRole to fetch.
     */
    where: OfficerRoleWhereUniqueInput
  }

  /**
   * OfficerRole findUniqueOrThrow
   */
  export type OfficerRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter, which OfficerRole to fetch.
     */
    where: OfficerRoleWhereUniqueInput
  }

  /**
   * OfficerRole findFirst
   */
  export type OfficerRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter, which OfficerRole to fetch.
     */
    where?: OfficerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerRoles to fetch.
     */
    orderBy?: OfficerRoleOrderByWithRelationInput | OfficerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerRoles.
     */
    cursor?: OfficerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerRoles.
     */
    distinct?: OfficerRoleScalarFieldEnum | OfficerRoleScalarFieldEnum[]
  }

  /**
   * OfficerRole findFirstOrThrow
   */
  export type OfficerRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter, which OfficerRole to fetch.
     */
    where?: OfficerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerRoles to fetch.
     */
    orderBy?: OfficerRoleOrderByWithRelationInput | OfficerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficerRoles.
     */
    cursor?: OfficerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficerRoles.
     */
    distinct?: OfficerRoleScalarFieldEnum | OfficerRoleScalarFieldEnum[]
  }

  /**
   * OfficerRole findMany
   */
  export type OfficerRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter, which OfficerRoles to fetch.
     */
    where?: OfficerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficerRoles to fetch.
     */
    orderBy?: OfficerRoleOrderByWithRelationInput | OfficerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficerRoles.
     */
    cursor?: OfficerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficerRoles.
     */
    skip?: number
    distinct?: OfficerRoleScalarFieldEnum | OfficerRoleScalarFieldEnum[]
  }

  /**
   * OfficerRole create
   */
  export type OfficerRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * The data needed to create a OfficerRole.
     */
    data: XOR<OfficerRoleCreateInput, OfficerRoleUncheckedCreateInput>
  }

  /**
   * OfficerRole createMany
   */
  export type OfficerRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfficerRoles.
     */
    data: OfficerRoleCreateManyInput | OfficerRoleCreateManyInput[]
  }

  /**
   * OfficerRole update
   */
  export type OfficerRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * The data needed to update a OfficerRole.
     */
    data: XOR<OfficerRoleUpdateInput, OfficerRoleUncheckedUpdateInput>
    /**
     * Choose, which OfficerRole to update.
     */
    where: OfficerRoleWhereUniqueInput
  }

  /**
   * OfficerRole updateMany
   */
  export type OfficerRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfficerRoles.
     */
    data: XOR<OfficerRoleUpdateManyMutationInput, OfficerRoleUncheckedUpdateManyInput>
    /**
     * Filter which OfficerRoles to update
     */
    where?: OfficerRoleWhereInput
  }

  /**
   * OfficerRole upsert
   */
  export type OfficerRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * The filter to search for the OfficerRole to update in case it exists.
     */
    where: OfficerRoleWhereUniqueInput
    /**
     * In case the OfficerRole found by the `where` argument doesn't exist, create a new OfficerRole with this data.
     */
    create: XOR<OfficerRoleCreateInput, OfficerRoleUncheckedCreateInput>
    /**
     * In case the OfficerRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerRoleUpdateInput, OfficerRoleUncheckedUpdateInput>
  }

  /**
   * OfficerRole delete
   */
  export type OfficerRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
    /**
     * Filter which OfficerRole to delete.
     */
    where: OfficerRoleWhereUniqueInput
  }

  /**
   * OfficerRole deleteMany
   */
  export type OfficerRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficerRoles to delete
     */
    where?: OfficerRoleWhereInput
  }

  /**
   * OfficerRole findRaw
   */
  export type OfficerRoleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OfficerRole aggregateRaw
   */
  export type OfficerRoleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OfficerRole without action
   */
  export type OfficerRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerRole
     */
    select?: OfficerRoleSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const EventScalarFieldEnum: {
    id: 'id',
    date: 'date',
    eventName: 'eventName',
    description: 'description',
    location: 'location',
    timeStart: 'timeStart',
    timeEnd: 'timeEnd',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventTemplateScalarFieldEnum: {
    id: 'id',
    templateName: 'templateName',
    description: 'description',
    location: 'location',
    timeStart: 'timeStart',
    timeEnd: 'timeEnd'
  };

  export type EventTemplateScalarFieldEnum = (typeof EventTemplateScalarFieldEnum)[keyof typeof EventTemplateScalarFieldEnum]


  export const EventPositionScalarFieldEnum: {
    id: 'id',
    positionName: 'positionName',
    label: 'label',
    description: 'description',
    allowedUserTypes: 'allowedUserTypes',
    officerOnly: 'officerOnly'
  };

  export type EventPositionScalarFieldEnum = (typeof EventPositionScalarFieldEnum)[keyof typeof EventPositionScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    itemName: 'itemName',
    brandId: 'brandId',
    categoryId: 'categoryId',
    location: 'location',
    quantity: 'quantity',
    quantityUnitId: 'quantityUnitId',
    packageSize: 'packageSize',
    packageSizeUnitId: 'packageSizeUnitId',
    upc: 'upc',
    ndc: 'ndc',
    expiration: 'expiration',
    lot: 'lot',
    comments: 'comments',
    linkId: 'linkId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryCategoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description'
  };

  export type InventoryCategoryScalarFieldEnum = (typeof InventoryCategoryScalarFieldEnum)[keyof typeof InventoryCategoryScalarFieldEnum]


  export const QuantityUnitScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type QuantityUnitScalarFieldEnum = (typeof QuantityUnitScalarFieldEnum)[keyof typeof QuantityUnitScalarFieldEnum]


  export const InventoryTagScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type InventoryTagScalarFieldEnum = (typeof InventoryTagScalarFieldEnum)[keyof typeof InventoryTagScalarFieldEnum]


  export const InventoryBrandScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName'
  };

  export type InventoryBrandScalarFieldEnum = (typeof InventoryBrandScalarFieldEnum)[keyof typeof InventoryBrandScalarFieldEnum]


  export const InventoryLinkScalarFieldEnum: {
    id: 'id',
    linkName: 'linkName',
    description: 'description',
    category: 'category',
    comments: 'comments',
    items: 'items'
  };

  export type InventoryLinkScalarFieldEnum = (typeof InventoryLinkScalarFieldEnum)[keyof typeof InventoryLinkScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const UserTypeScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description'
  };

  export type UserTypeScalarFieldEnum = (typeof UserTypeScalarFieldEnum)[keyof typeof UserTypeScalarFieldEnum]


  export const OfficerRoleScalarFieldEnum: {
    id: 'id',
    label: 'label',
    description: 'description'
  };

  export type OfficerRoleScalarFieldEnum = (typeof OfficerRoleScalarFieldEnum)[keyof typeof OfficerRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    eventName?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    timeStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    timeEnd?: DateTimeNullableFilter<"Event"> | Date | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    createdBy?: StringFilter<"Event"> | string
    shifts?: EventShiftCompositeListFilter | EventShiftObjectEqualityInput[]
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    shifts?: EventShiftOrderByCompositeAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    date?: DateTimeFilter<"Event"> | Date | string
    eventName?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    timeStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    timeEnd?: DateTimeNullableFilter<"Event"> | Date | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    createdBy?: StringFilter<"Event"> | string
    shifts?: EventShiftCompositeListFilter | EventShiftObjectEqualityInput[]
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventName?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    timeStart?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    timeEnd?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Event"> | string
  }

  export type EventTemplateWhereInput = {
    AND?: EventTemplateWhereInput | EventTemplateWhereInput[]
    OR?: EventTemplateWhereInput[]
    NOT?: EventTemplateWhereInput | EventTemplateWhereInput[]
    id?: StringFilter<"EventTemplate"> | string
    templateName?: StringFilter<"EventTemplate"> | string
    description?: StringNullableFilter<"EventTemplate"> | string | null
    location?: StringNullableFilter<"EventTemplate"> | string | null
    timeStart?: DateTimeNullableFilter<"EventTemplate"> | Date | string | null
    timeEnd?: DateTimeNullableFilter<"EventTemplate"> | Date | string | null
    shifts?: EventShiftCompositeListFilter | EventShiftObjectEqualityInput[]
  }

  export type EventTemplateOrderByWithRelationInput = {
    id?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    shifts?: EventShiftOrderByCompositeAggregateInput
  }

  export type EventTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventTemplateWhereInput | EventTemplateWhereInput[]
    OR?: EventTemplateWhereInput[]
    NOT?: EventTemplateWhereInput | EventTemplateWhereInput[]
    templateName?: StringFilter<"EventTemplate"> | string
    description?: StringNullableFilter<"EventTemplate"> | string | null
    location?: StringNullableFilter<"EventTemplate"> | string | null
    timeStart?: DateTimeNullableFilter<"EventTemplate"> | Date | string | null
    timeEnd?: DateTimeNullableFilter<"EventTemplate"> | Date | string | null
    shifts?: EventShiftCompositeListFilter | EventShiftObjectEqualityInput[]
  }, "id">

  export type EventTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    _count?: EventTemplateCountOrderByAggregateInput
    _max?: EventTemplateMaxOrderByAggregateInput
    _min?: EventTemplateMinOrderByAggregateInput
  }

  export type EventTemplateScalarWhereWithAggregatesInput = {
    AND?: EventTemplateScalarWhereWithAggregatesInput | EventTemplateScalarWhereWithAggregatesInput[]
    OR?: EventTemplateScalarWhereWithAggregatesInput[]
    NOT?: EventTemplateScalarWhereWithAggregatesInput | EventTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventTemplate"> | string
    templateName?: StringWithAggregatesFilter<"EventTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"EventTemplate"> | string | null
    location?: StringNullableWithAggregatesFilter<"EventTemplate"> | string | null
    timeStart?: DateTimeNullableWithAggregatesFilter<"EventTemplate"> | Date | string | null
    timeEnd?: DateTimeNullableWithAggregatesFilter<"EventTemplate"> | Date | string | null
  }

  export type EventPositionWhereInput = {
    AND?: EventPositionWhereInput | EventPositionWhereInput[]
    OR?: EventPositionWhereInput[]
    NOT?: EventPositionWhereInput | EventPositionWhereInput[]
    id?: StringFilter<"EventPosition"> | string
    positionName?: StringFilter<"EventPosition"> | string
    label?: StringNullableFilter<"EventPosition"> | string | null
    description?: StringNullableFilter<"EventPosition"> | string | null
    allowedUserTypes?: StringNullableListFilter<"EventPosition">
    officerOnly?: BoolNullableFilter<"EventPosition"> | boolean | null
  }

  export type EventPositionOrderByWithRelationInput = {
    id?: SortOrder
    positionName?: SortOrder
    label?: SortOrder
    description?: SortOrder
    allowedUserTypes?: SortOrder
    officerOnly?: SortOrder
  }

  export type EventPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventPositionWhereInput | EventPositionWhereInput[]
    OR?: EventPositionWhereInput[]
    NOT?: EventPositionWhereInput | EventPositionWhereInput[]
    positionName?: StringFilter<"EventPosition"> | string
    label?: StringNullableFilter<"EventPosition"> | string | null
    description?: StringNullableFilter<"EventPosition"> | string | null
    allowedUserTypes?: StringNullableListFilter<"EventPosition">
    officerOnly?: BoolNullableFilter<"EventPosition"> | boolean | null
  }, "id">

  export type EventPositionOrderByWithAggregationInput = {
    id?: SortOrder
    positionName?: SortOrder
    label?: SortOrder
    description?: SortOrder
    allowedUserTypes?: SortOrder
    officerOnly?: SortOrder
    _count?: EventPositionCountOrderByAggregateInput
    _max?: EventPositionMaxOrderByAggregateInput
    _min?: EventPositionMinOrderByAggregateInput
  }

  export type EventPositionScalarWhereWithAggregatesInput = {
    AND?: EventPositionScalarWhereWithAggregatesInput | EventPositionScalarWhereWithAggregatesInput[]
    OR?: EventPositionScalarWhereWithAggregatesInput[]
    NOT?: EventPositionScalarWhereWithAggregatesInput | EventPositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventPosition"> | string
    positionName?: StringWithAggregatesFilter<"EventPosition"> | string
    label?: StringNullableWithAggregatesFilter<"EventPosition"> | string | null
    description?: StringNullableWithAggregatesFilter<"EventPosition"> | string | null
    allowedUserTypes?: StringNullableListFilter<"EventPosition">
    officerOnly?: BoolNullableWithAggregatesFilter<"EventPosition"> | boolean | null
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    itemName?: StringFilter<"Inventory"> | string
    brandId?: StringNullableFilter<"Inventory"> | string | null
    categoryId?: StringNullableFilter<"Inventory"> | string | null
    location?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntFilter<"Inventory"> | number
    quantityUnitId?: StringNullableFilter<"Inventory"> | string | null
    packageSize?: IntNullableFilter<"Inventory"> | number | null
    packageSizeUnitId?: StringNullableFilter<"Inventory"> | string | null
    upc?: StringNullableFilter<"Inventory"> | string | null
    ndc?: StringNullableFilter<"Inventory"> | string | null
    expiration?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    lot?: StringNullableFilter<"Inventory"> | string | null
    comments?: StringNullableFilter<"Inventory"> | string | null
    linkId?: StringNullableFilter<"Inventory"> | string | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    itemName?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    quantity?: SortOrder
    quantityUnitId?: SortOrder
    packageSize?: SortOrder
    packageSizeUnitId?: SortOrder
    upc?: SortOrder
    ndc?: SortOrder
    expiration?: SortOrder
    lot?: SortOrder
    comments?: SortOrder
    linkId?: SortOrder
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    itemName?: StringFilter<"Inventory"> | string
    brandId?: StringNullableFilter<"Inventory"> | string | null
    categoryId?: StringNullableFilter<"Inventory"> | string | null
    location?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntFilter<"Inventory"> | number
    quantityUnitId?: StringNullableFilter<"Inventory"> | string | null
    packageSize?: IntNullableFilter<"Inventory"> | number | null
    packageSizeUnitId?: StringNullableFilter<"Inventory"> | string | null
    upc?: StringNullableFilter<"Inventory"> | string | null
    ndc?: StringNullableFilter<"Inventory"> | string | null
    expiration?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    lot?: StringNullableFilter<"Inventory"> | string | null
    comments?: StringNullableFilter<"Inventory"> | string | null
    linkId?: StringNullableFilter<"Inventory"> | string | null
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    itemName?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    quantity?: SortOrder
    quantityUnitId?: SortOrder
    packageSize?: SortOrder
    packageSizeUnitId?: SortOrder
    upc?: SortOrder
    ndc?: SortOrder
    expiration?: SortOrder
    lot?: SortOrder
    comments?: SortOrder
    linkId?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    itemName?: StringWithAggregatesFilter<"Inventory"> | string
    brandId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    location?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    quantityUnitId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    packageSize?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
    packageSizeUnitId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    upc?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    ndc?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    expiration?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    lot?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    comments?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    linkId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
  }

  export type InventoryCategoryWhereInput = {
    AND?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    OR?: InventoryCategoryWhereInput[]
    NOT?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    id?: StringFilter<"InventoryCategory"> | string
    label?: StringFilter<"InventoryCategory"> | string
    description?: StringNullableFilter<"InventoryCategory"> | string | null
  }

  export type InventoryCategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    OR?: InventoryCategoryWhereInput[]
    NOT?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    label?: StringFilter<"InventoryCategory"> | string
    description?: StringNullableFilter<"InventoryCategory"> | string | null
  }, "id">

  export type InventoryCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    _count?: InventoryCategoryCountOrderByAggregateInput
    _max?: InventoryCategoryMaxOrderByAggregateInput
    _min?: InventoryCategoryMinOrderByAggregateInput
  }

  export type InventoryCategoryScalarWhereWithAggregatesInput = {
    AND?: InventoryCategoryScalarWhereWithAggregatesInput | InventoryCategoryScalarWhereWithAggregatesInput[]
    OR?: InventoryCategoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryCategoryScalarWhereWithAggregatesInput | InventoryCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryCategory"> | string
    label?: StringWithAggregatesFilter<"InventoryCategory"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryCategory"> | string | null
  }

  export type QuantityUnitWhereInput = {
    AND?: QuantityUnitWhereInput | QuantityUnitWhereInput[]
    OR?: QuantityUnitWhereInput[]
    NOT?: QuantityUnitWhereInput | QuantityUnitWhereInput[]
    id?: StringFilter<"QuantityUnit"> | string
    label?: StringFilter<"QuantityUnit"> | string
  }

  export type QuantityUnitOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type QuantityUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuantityUnitWhereInput | QuantityUnitWhereInput[]
    OR?: QuantityUnitWhereInput[]
    NOT?: QuantityUnitWhereInput | QuantityUnitWhereInput[]
    label?: StringFilter<"QuantityUnit"> | string
  }, "id">

  export type QuantityUnitOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: QuantityUnitCountOrderByAggregateInput
    _max?: QuantityUnitMaxOrderByAggregateInput
    _min?: QuantityUnitMinOrderByAggregateInput
  }

  export type QuantityUnitScalarWhereWithAggregatesInput = {
    AND?: QuantityUnitScalarWhereWithAggregatesInput | QuantityUnitScalarWhereWithAggregatesInput[]
    OR?: QuantityUnitScalarWhereWithAggregatesInput[]
    NOT?: QuantityUnitScalarWhereWithAggregatesInput | QuantityUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuantityUnit"> | string
    label?: StringWithAggregatesFilter<"QuantityUnit"> | string
  }

  export type InventoryTagWhereInput = {
    AND?: InventoryTagWhereInput | InventoryTagWhereInput[]
    OR?: InventoryTagWhereInput[]
    NOT?: InventoryTagWhereInput | InventoryTagWhereInput[]
    id?: StringFilter<"InventoryTag"> | string
    label?: StringFilter<"InventoryTag"> | string
  }

  export type InventoryTagOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type InventoryTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryTagWhereInput | InventoryTagWhereInput[]
    OR?: InventoryTagWhereInput[]
    NOT?: InventoryTagWhereInput | InventoryTagWhereInput[]
    label?: StringFilter<"InventoryTag"> | string
  }, "id">

  export type InventoryTagOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: InventoryTagCountOrderByAggregateInput
    _max?: InventoryTagMaxOrderByAggregateInput
    _min?: InventoryTagMinOrderByAggregateInput
  }

  export type InventoryTagScalarWhereWithAggregatesInput = {
    AND?: InventoryTagScalarWhereWithAggregatesInput | InventoryTagScalarWhereWithAggregatesInput[]
    OR?: InventoryTagScalarWhereWithAggregatesInput[]
    NOT?: InventoryTagScalarWhereWithAggregatesInput | InventoryTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryTag"> | string
    label?: StringWithAggregatesFilter<"InventoryTag"> | string
  }

  export type InventoryBrandWhereInput = {
    AND?: InventoryBrandWhereInput | InventoryBrandWhereInput[]
    OR?: InventoryBrandWhereInput[]
    NOT?: InventoryBrandWhereInput | InventoryBrandWhereInput[]
    id?: StringFilter<"InventoryBrand"> | string
    brandName?: StringFilter<"InventoryBrand"> | string
  }

  export type InventoryBrandOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
  }

  export type InventoryBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryBrandWhereInput | InventoryBrandWhereInput[]
    OR?: InventoryBrandWhereInput[]
    NOT?: InventoryBrandWhereInput | InventoryBrandWhereInput[]
    brandName?: StringFilter<"InventoryBrand"> | string
  }, "id">

  export type InventoryBrandOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    _count?: InventoryBrandCountOrderByAggregateInput
    _max?: InventoryBrandMaxOrderByAggregateInput
    _min?: InventoryBrandMinOrderByAggregateInput
  }

  export type InventoryBrandScalarWhereWithAggregatesInput = {
    AND?: InventoryBrandScalarWhereWithAggregatesInput | InventoryBrandScalarWhereWithAggregatesInput[]
    OR?: InventoryBrandScalarWhereWithAggregatesInput[]
    NOT?: InventoryBrandScalarWhereWithAggregatesInput | InventoryBrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryBrand"> | string
    brandName?: StringWithAggregatesFilter<"InventoryBrand"> | string
  }

  export type InventoryLinkWhereInput = {
    AND?: InventoryLinkWhereInput | InventoryLinkWhereInput[]
    OR?: InventoryLinkWhereInput[]
    NOT?: InventoryLinkWhereInput | InventoryLinkWhereInput[]
    id?: StringFilter<"InventoryLink"> | string
    linkName?: StringFilter<"InventoryLink"> | string
    description?: StringNullableFilter<"InventoryLink"> | string | null
    category?: StringNullableFilter<"InventoryLink"> | string | null
    comments?: StringNullableFilter<"InventoryLink"> | string | null
    items?: StringNullableListFilter<"InventoryLink">
  }

  export type InventoryLinkOrderByWithRelationInput = {
    id?: SortOrder
    linkName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    comments?: SortOrder
    items?: SortOrder
  }

  export type InventoryLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryLinkWhereInput | InventoryLinkWhereInput[]
    OR?: InventoryLinkWhereInput[]
    NOT?: InventoryLinkWhereInput | InventoryLinkWhereInput[]
    linkName?: StringFilter<"InventoryLink"> | string
    description?: StringNullableFilter<"InventoryLink"> | string | null
    category?: StringNullableFilter<"InventoryLink"> | string | null
    comments?: StringNullableFilter<"InventoryLink"> | string | null
    items?: StringNullableListFilter<"InventoryLink">
  }, "id">

  export type InventoryLinkOrderByWithAggregationInput = {
    id?: SortOrder
    linkName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    comments?: SortOrder
    items?: SortOrder
    _count?: InventoryLinkCountOrderByAggregateInput
    _max?: InventoryLinkMaxOrderByAggregateInput
    _min?: InventoryLinkMinOrderByAggregateInput
  }

  export type InventoryLinkScalarWhereWithAggregatesInput = {
    AND?: InventoryLinkScalarWhereWithAggregatesInput | InventoryLinkScalarWhereWithAggregatesInput[]
    OR?: InventoryLinkScalarWhereWithAggregatesInput[]
    NOT?: InventoryLinkScalarWhereWithAggregatesInput | InventoryLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryLink"> | string
    linkName?: StringWithAggregatesFilter<"InventoryLink"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryLink"> | string | null
    category?: StringNullableWithAggregatesFilter<"InventoryLink"> | string | null
    comments?: StringNullableWithAggregatesFilter<"InventoryLink"> | string | null
    items?: StringNullableListFilter<"InventoryLink">
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    label?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    label?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
  }, "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    label?: StringWithAggregatesFilter<"UserRole"> | string
    description?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
  }

  export type UserTypeWhereInput = {
    AND?: UserTypeWhereInput | UserTypeWhereInput[]
    OR?: UserTypeWhereInput[]
    NOT?: UserTypeWhereInput | UserTypeWhereInput[]
    id?: StringFilter<"UserType"> | string
    label?: StringFilter<"UserType"> | string
    description?: StringNullableFilter<"UserType"> | string | null
  }

  export type UserTypeOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTypeWhereInput | UserTypeWhereInput[]
    OR?: UserTypeWhereInput[]
    NOT?: UserTypeWhereInput | UserTypeWhereInput[]
    label?: StringFilter<"UserType"> | string
    description?: StringNullableFilter<"UserType"> | string | null
  }, "id">

  export type UserTypeOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    _count?: UserTypeCountOrderByAggregateInput
    _max?: UserTypeMaxOrderByAggregateInput
    _min?: UserTypeMinOrderByAggregateInput
  }

  export type UserTypeScalarWhereWithAggregatesInput = {
    AND?: UserTypeScalarWhereWithAggregatesInput | UserTypeScalarWhereWithAggregatesInput[]
    OR?: UserTypeScalarWhereWithAggregatesInput[]
    NOT?: UserTypeScalarWhereWithAggregatesInput | UserTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserType"> | string
    label?: StringWithAggregatesFilter<"UserType"> | string
    description?: StringNullableWithAggregatesFilter<"UserType"> | string | null
  }

  export type OfficerRoleWhereInput = {
    AND?: OfficerRoleWhereInput | OfficerRoleWhereInput[]
    OR?: OfficerRoleWhereInput[]
    NOT?: OfficerRoleWhereInput | OfficerRoleWhereInput[]
    id?: StringFilter<"OfficerRole"> | string
    label?: StringFilter<"OfficerRole"> | string
    description?: StringNullableFilter<"OfficerRole"> | string | null
  }

  export type OfficerRoleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type OfficerRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfficerRoleWhereInput | OfficerRoleWhereInput[]
    OR?: OfficerRoleWhereInput[]
    NOT?: OfficerRoleWhereInput | OfficerRoleWhereInput[]
    label?: StringFilter<"OfficerRole"> | string
    description?: StringNullableFilter<"OfficerRole"> | string | null
  }, "id">

  export type OfficerRoleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
    _count?: OfficerRoleCountOrderByAggregateInput
    _max?: OfficerRoleMaxOrderByAggregateInput
    _min?: OfficerRoleMinOrderByAggregateInput
  }

  export type OfficerRoleScalarWhereWithAggregatesInput = {
    AND?: OfficerRoleScalarWhereWithAggregatesInput | OfficerRoleScalarWhereWithAggregatesInput[]
    OR?: OfficerRoleScalarWhereWithAggregatesInput[]
    NOT?: OfficerRoleScalarWhereWithAggregatesInput | OfficerRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfficerRole"> | string
    label?: StringWithAggregatesFilter<"OfficerRole"> | string
    description?: StringNullableWithAggregatesFilter<"OfficerRole"> | string | null
  }

  export type EventCreateInput = {
    id?: string
    date: Date | string
    eventName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    createdAt?: Date | string
    createdBy: string
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventUncheckedCreateInput = {
    id?: string
    date: Date | string
    eventName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    createdAt?: Date | string
    createdBy: string
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventCreateManyInput = {
    id?: string
    date: Date | string
    eventName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    createdAt?: Date | string
    createdBy: string
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateCreateInput = {
    id?: string
    templateName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateUncheckedCreateInput = {
    id?: string
    templateName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateUpdateInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateUncheckedUpdateInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateCreateManyInput = {
    id?: string
    templateName: string
    description?: string | null
    location?: string | null
    timeStart?: Date | string | null
    timeEnd?: Date | string | null
    shifts?: XOR<EventShiftListCreateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateUpdateManyMutationInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventTemplateUncheckedUpdateManyInput = {
    templateName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timeStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shifts?: XOR<EventShiftListUpdateEnvelopeInput, EventShiftCreateInput> | EventShiftCreateInput[]
  }

  export type EventPositionCreateInput = {
    id?: string
    positionName: string
    label?: string | null
    description?: string | null
    allowedUserTypes?: EventPositionCreateallowedUserTypesInput | string[]
    officerOnly?: boolean | null
  }

  export type EventPositionUncheckedCreateInput = {
    id?: string
    positionName: string
    label?: string | null
    description?: string | null
    allowedUserTypes?: EventPositionCreateallowedUserTypesInput | string[]
    officerOnly?: boolean | null
  }

  export type EventPositionUpdateInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    allowedUserTypes?: EventPositionUpdateallowedUserTypesInput | string[]
    officerOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EventPositionUncheckedUpdateInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    allowedUserTypes?: EventPositionUpdateallowedUserTypesInput | string[]
    officerOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EventPositionCreateManyInput = {
    id?: string
    positionName: string
    label?: string | null
    description?: string | null
    allowedUserTypes?: EventPositionCreateallowedUserTypesInput | string[]
    officerOnly?: boolean | null
  }

  export type EventPositionUpdateManyMutationInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    allowedUserTypes?: EventPositionUpdateallowedUserTypesInput | string[]
    officerOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EventPositionUncheckedUpdateManyInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    allowedUserTypes?: EventPositionUpdateallowedUserTypesInput | string[]
    officerOnly?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type InventoryCreateInput = {
    id?: string
    itemName: string
    brandId?: string | null
    categoryId?: string | null
    location?: string | null
    quantity: number
    quantityUnitId?: string | null
    packageSize?: number | null
    packageSizeUnitId?: string | null
    upc?: string | null
    ndc?: string | null
    expiration?: Date | string | null
    lot?: string | null
    comments?: string | null
    linkId?: string | null
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    itemName: string
    brandId?: string | null
    categoryId?: string | null
    location?: string | null
    quantity: number
    quantityUnitId?: string | null
    packageSize?: number | null
    packageSizeUnitId?: string | null
    upc?: string | null
    ndc?: string | null
    expiration?: Date | string | null
    lot?: string | null
    comments?: string | null
    linkId?: string | null
  }

  export type InventoryUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    packageSize?: NullableIntFieldUpdateOperationsInput | number | null
    packageSizeUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUncheckedUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    packageSize?: NullableIntFieldUpdateOperationsInput | number | null
    packageSizeUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCreateManyInput = {
    id?: string
    itemName: string
    brandId?: string | null
    categoryId?: string | null
    location?: string | null
    quantity: number
    quantityUnitId?: string | null
    packageSize?: number | null
    packageSizeUnitId?: string | null
    upc?: string | null
    ndc?: string | null
    expiration?: Date | string | null
    lot?: string | null
    comments?: string | null
    linkId?: string | null
  }

  export type InventoryUpdateManyMutationInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    packageSize?: NullableIntFieldUpdateOperationsInput | number | null
    packageSizeUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    packageSize?: NullableIntFieldUpdateOperationsInput | number | null
    packageSizeUnitId?: NullableStringFieldUpdateOperationsInput | string | null
    upc?: NullableStringFieldUpdateOperationsInput | string | null
    ndc?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    linkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type InventoryCategoryUncheckedCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type InventoryCategoryUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryCreateManyInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type InventoryCategoryUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuantityUnitCreateInput = {
    id?: string
    label: string
  }

  export type QuantityUnitUncheckedCreateInput = {
    id?: string
    label: string
  }

  export type QuantityUnitUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type QuantityUnitUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type QuantityUnitCreateManyInput = {
    id?: string
    label: string
  }

  export type QuantityUnitUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type QuantityUnitUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTagCreateInput = {
    id?: string
    label: string
  }

  export type InventoryTagUncheckedCreateInput = {
    id?: string
    label: string
  }

  export type InventoryTagUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTagUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTagCreateManyInput = {
    id?: string
    label: string
  }

  export type InventoryTagUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTagUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryBrandCreateInput = {
    id?: string
    brandName: string
  }

  export type InventoryBrandUncheckedCreateInput = {
    id?: string
    brandName: string
  }

  export type InventoryBrandUpdateInput = {
    brandName?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryBrandUncheckedUpdateInput = {
    brandName?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryBrandCreateManyInput = {
    id?: string
    brandName: string
  }

  export type InventoryBrandUpdateManyMutationInput = {
    brandName?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryBrandUncheckedUpdateManyInput = {
    brandName?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryLinkCreateInput = {
    id?: string
    linkName: string
    description?: string | null
    category?: string | null
    comments?: string | null
    items?: InventoryLinkCreateitemsInput | string[]
  }

  export type InventoryLinkUncheckedCreateInput = {
    id?: string
    linkName: string
    description?: string | null
    category?: string | null
    comments?: string | null
    items?: InventoryLinkCreateitemsInput | string[]
  }

  export type InventoryLinkUpdateInput = {
    linkName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InventoryLinkUpdateitemsInput | string[]
  }

  export type InventoryLinkUncheckedUpdateInput = {
    linkName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InventoryLinkUpdateitemsInput | string[]
  }

  export type InventoryLinkCreateManyInput = {
    id?: string
    linkName: string
    description?: string | null
    category?: string | null
    comments?: string | null
    items?: InventoryLinkCreateitemsInput | string[]
  }

  export type InventoryLinkUpdateManyMutationInput = {
    linkName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InventoryLinkUpdateitemsInput | string[]
  }

  export type InventoryLinkUncheckedUpdateManyInput = {
    linkName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    items?: InventoryLinkUpdateitemsInput | string[]
  }

  export type UserRoleCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserRoleUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleCreateManyInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserRoleUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserTypeUncheckedCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserTypeUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeCreateManyInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type UserTypeUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfficerRoleCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type OfficerRoleUncheckedCreateInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type OfficerRoleUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfficerRoleUncheckedUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfficerRoleCreateManyInput = {
    id?: string
    label: string
    description?: string | null
  }

  export type OfficerRoleUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfficerRoleUncheckedUpdateManyInput = {
    label?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EventShiftCompositeListFilter = {
    equals?: EventShiftObjectEqualityInput[]
    every?: EventShiftWhereInput
    some?: EventShiftWhereInput
    none?: EventShiftWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type EventShiftObjectEqualityInput = {
    positionId: string
    userId?: string | null
  }

  export type EventShiftOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eventName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EventTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
  }

  export type EventTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
  }

  export type EventTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type EventPositionCountOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
    label?: SortOrder
    description?: SortOrder
    allowedUserTypes?: SortOrder
    officerOnly?: SortOrder
  }

  export type EventPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
    label?: SortOrder
    description?: SortOrder
    officerOnly?: SortOrder
  }

  export type EventPositionMinOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
    label?: SortOrder
    description?: SortOrder
    officerOnly?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    quantity?: SortOrder
    quantityUnitId?: SortOrder
    packageSize?: SortOrder
    packageSizeUnitId?: SortOrder
    upc?: SortOrder
    ndc?: SortOrder
    expiration?: SortOrder
    lot?: SortOrder
    comments?: SortOrder
    linkId?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    packageSize?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    quantity?: SortOrder
    quantityUnitId?: SortOrder
    packageSize?: SortOrder
    packageSizeUnitId?: SortOrder
    upc?: SortOrder
    ndc?: SortOrder
    expiration?: SortOrder
    lot?: SortOrder
    comments?: SortOrder
    linkId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    brandId?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    quantity?: SortOrder
    quantityUnitId?: SortOrder
    packageSize?: SortOrder
    packageSizeUnitId?: SortOrder
    upc?: SortOrder
    ndc?: SortOrder
    expiration?: SortOrder
    lot?: SortOrder
    comments?: SortOrder
    linkId?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    packageSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type InventoryCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type QuantityUnitCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type QuantityUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type QuantityUnitMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type InventoryTagCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type InventoryTagMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type InventoryTagMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type InventoryBrandCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
  }

  export type InventoryBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
  }

  export type InventoryBrandMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
  }

  export type InventoryLinkCountOrderByAggregateInput = {
    id?: SortOrder
    linkName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    comments?: SortOrder
    items?: SortOrder
  }

  export type InventoryLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    linkName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    comments?: SortOrder
  }

  export type InventoryLinkMinOrderByAggregateInput = {
    id?: SortOrder
    linkName?: SortOrder
    description?: SortOrder
    category?: SortOrder
    comments?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserTypeCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type UserTypeMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type OfficerRoleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type OfficerRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type OfficerRoleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    description?: SortOrder
  }

  export type EventShiftListCreateEnvelopeInput = {
    set?: EventShiftCreateInput | EventShiftCreateInput[]
  }

  export type EventShiftCreateInput = {
    positionId: string
    userId?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type EventShiftListUpdateEnvelopeInput = {
    set?: EventShiftCreateInput | EventShiftCreateInput[]
    push?: EventShiftCreateInput | EventShiftCreateInput[]
    updateMany?: EventShiftUpdateManyInput
    deleteMany?: EventShiftDeleteManyInput
  }

  export type EventPositionCreateallowedUserTypesInput = {
    set: string[]
  }

  export type EventPositionUpdateallowedUserTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type InventoryLinkCreateitemsInput = {
    set: string[]
  }

  export type InventoryLinkUpdateitemsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EventShiftWhereInput = {
    AND?: EventShiftWhereInput | EventShiftWhereInput[]
    OR?: EventShiftWhereInput[]
    NOT?: EventShiftWhereInput | EventShiftWhereInput[]
    positionId?: StringFilter<"EventShift"> | string
    userId?: StringNullableFilter<"EventShift"> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type EventShiftUpdateManyInput = {
    where: EventShiftWhereInput
    data: EventShiftUpdateInput
  }

  export type EventShiftDeleteManyInput = {
    where: EventShiftWhereInput
  }

  export type EventShiftUpdateInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventShiftDefaultArgs instead
     */
    export type EventShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventShiftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventTemplateDefaultArgs instead
     */
    export type EventTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventPositionDefaultArgs instead
     */
    export type EventPositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventPositionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDefaultArgs instead
     */
    export type InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryCategoryDefaultArgs instead
     */
    export type InventoryCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuantityUnitDefaultArgs instead
     */
    export type QuantityUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuantityUnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryTagDefaultArgs instead
     */
    export type InventoryTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryBrandDefaultArgs instead
     */
    export type InventoryBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryBrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryLinkDefaultArgs instead
     */
    export type InventoryLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserTypeDefaultArgs instead
     */
    export type UserTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfficerRoleDefaultArgs instead
     */
    export type OfficerRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficerRoleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}