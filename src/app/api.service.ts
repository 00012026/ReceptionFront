import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Visitor } from './Visitor';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<Visitor[]>(
      'http://localhost:35510/api/VisitorCtrl/GetAll'
    );
  }

  getByID(Id: number) {
    return this.httpClient.get<Visitor>(
      'http://localhost:35510/api/VisitorCtrl/GetByID/' + Id
    );
  }
  edit(item: Visitor) {
    return this.httpClient.put(
      'http://localhost:35510/api/VisitorCtrl/Update',
      item
    );
  }
  delete(Id: number) {
    return this.httpClient.delete(
      'http://localhost:35510/api/VisitorCtrl/Delete/' + Id
    );
  }
  create(item: Visitor) {
    return this.httpClient.post<Visitor>(
      'http://localhost:35510/api/VisitorCtrl/Create',
      item
    );
  }
}
