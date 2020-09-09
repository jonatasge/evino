import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/services/shared';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<any, number> {
  constructor(protected http: HttpClient) {
    super(`${environment.api}/product`, http);
  }
}
