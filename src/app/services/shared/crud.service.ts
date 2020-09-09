import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpClientOptions } from 'src/app/interfaces/shared';

export abstract class CrudService<T, ID> {
  constructor(
    protected url: string,
    protected http: HttpClient,
  ) {}

  create(t: T, options?: IHttpClientOptions): Observable<T> {
    return this.http.post<T>(this.url, t, options);
  }

  read(options?: IHttpClientOptions): Observable<T> {
    return this.http.get<T>(this.url, options);
  }

  update(id: ID, t: T, options?: IHttpClientOptions): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, t, options);
  }

  delete(id: ID, options?: IHttpClientOptions): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`, options);
  }
}
