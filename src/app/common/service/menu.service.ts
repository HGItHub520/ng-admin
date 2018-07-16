import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MenuService {
  private url = '/loan/menu/fetch';
  constructor(private http: HttpClient) { }
  getMenu(parentId = 0): Observable<Object> {
    return this.http.get(this.url);
  }
}
