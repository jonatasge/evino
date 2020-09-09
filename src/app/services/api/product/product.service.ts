import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IResponse } from 'src/app/interfaces/api';
import { CrudService } from 'src/app/services/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<IResponse<IProduct>, number> {
  constructor(protected http: HttpClient) {
    super(`${environment.api}/product`, http);
  }
}
