
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.EventScalarFieldEnum = {
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

exports.Prisma.EventTemplateScalarFieldEnum = {
  id: 'id',
  templateName: 'templateName',
  description: 'description',
  location: 'location',
  timeStart: 'timeStart',
  timeEnd: 'timeEnd'
};

exports.Prisma.EventPositionScalarFieldEnum = {
  id: 'id',
  positionName: 'positionName',
  label: 'label',
  description: 'description',
  allowedUserTypes: 'allowedUserTypes',
  officerOnly: 'officerOnly'
};

exports.Prisma.InventoryScalarFieldEnum = {
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

exports.Prisma.InventoryCategoryScalarFieldEnum = {
  id: 'id',
  label: 'label',
  description: 'description'
};

exports.Prisma.QuantityUnitScalarFieldEnum = {
  id: 'id',
  label: 'label'
};

exports.Prisma.InventoryTagScalarFieldEnum = {
  id: 'id',
  label: 'label'
};

exports.Prisma.InventoryBrandScalarFieldEnum = {
  id: 'id',
  brandName: 'brandName'
};

exports.Prisma.InventoryLinkScalarFieldEnum = {
  id: 'id',
  linkName: 'linkName',
  description: 'description',
  category: 'category',
  comments: 'comments',
  items: 'items'
};

exports.Prisma.UserRoleScalarFieldEnum = {
  id: 'id',
  label: 'label',
  description: 'description'
};

exports.Prisma.UserTypeScalarFieldEnum = {
  id: 'id',
  label: 'label',
  description: 'description'
};

exports.Prisma.OfficerRoleScalarFieldEnum = {
  id: 'id',
  label: 'label',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
