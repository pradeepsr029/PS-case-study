import { COUNT_DOWN, COUNT_DOWN_SUB, DYNAMICALLY_DIV, HOME, PRODUCT, TABLE } from "./routes.constant";

export enum COUNTER_MODULE_ROUTE_TYPE {
  DEFAULT = 'DEFAULT',
  SUBJECT = 'SUBJECT',
}
export enum SORT_ORDER_TYPE {
  DEF = 'DEF',
  ASC = 'ASC',
  DES = 'DES',
}
export enum APP_ENUM_TYPE {
  CHANGE = 'CHANGE',
  UI_CHANGE = 'UI_CHANGE',
  RELEVANCE = 'RELEVANCE',
  LOW_TO_HIGH = 'LOW_TO_HIGH',
  HIGH_TO_LOW = 'HIGH_TO_LOW',
  GRID_VIEW = 'GRID_VIEW',
  LIST_VIEW = 'LIST_VIEW',
}

export const PRODUCT_FILTER = [
  { name: 'Relevance', value: APP_ENUM_TYPE.RELEVANCE },
  { name: 'Price -- Low to High', value: APP_ENUM_TYPE.LOW_TO_HIGH },
  { name: 'Price -- High to Low', value: APP_ENUM_TYPE.HIGH_TO_LOW },
];

export const HOME_BANNER = [
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/045.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/043.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/042.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/041.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/040.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/039.jpg' },
  { name: 'Banner 1', value: 'https://jssors8.azureedge.net/demos/img/gallery/980x380/038.jpg' },
];

export const APPLICATION_ROUTES = [
  { name: 'Home', route:  HOME.fullUrl},
  { name: 'Product', route:  PRODUCT.fullUrl},
  { name: 'Count Timer', route:  COUNT_DOWN.fullUrl},
  { name: 'Count Timer with Subject', route:  COUNT_DOWN_SUB.fullUrl},
  { name: 'Table', route:  TABLE.fullUrl},
  { name: 'Dynamically Create Div', route:  DYNAMICALLY_DIV.fullUrl},
];
