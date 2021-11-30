import { RoutesInterface } from '../interfaces/routes.interface';

export const PAGE_NOT_FOUND: RoutesInterface = {
  path: 'not-found',
  get fullUrl() {
    return `/not-found`;
  },
};

export const HOME: RoutesInterface = {
  path: 'home',
  get fullUrl() {
    return `/${this.path}`;
  },
};

export const PRODUCT: RoutesInterface = {
  path: 'products',
  get fullUrl() {
    return `/${this.path}`;
  },
};
export const COUNT_DOWN: RoutesInterface = {
  path: 'count-down',
  get fullUrl() {
    return `/${this.path}`;
  },
};

export const COUNT_DOWN_SUB: RoutesInterface = {
  path: 'count-down/subject',
  get fullUrl() {
    return `/${this.path}`;
  },
};
export const TABLE: RoutesInterface = {
  path: 'table',
  get fullUrl() {
    return `/${this.path}`;
  },
};
export const DYNAMICALLY_DIV: RoutesInterface = {
  path: 'create-dynamically-div',
  get fullUrl() {
    return `/${this.path}`;
  },
};
