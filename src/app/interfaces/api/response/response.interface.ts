import { IFilter } from './filter.interface';
import { IMeta } from './meta.interface';

export interface IResponse<T> {
  data: {
    filter: IFilter | any;
    meta: IMeta | any;
    [key: string]: T[];
  };
}
