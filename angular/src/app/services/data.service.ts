import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3001";

  constructor(private http: HttpClient) {
  }

  getAll(id: any) {
    return this.http.get(this.url + '/api/music', id);
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/music/' + id);
  }

  addMusic(credentials: any) {
    return this.http.post(this.url + '/api/music', credentials);
  }
}
