import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Song} from "../models/song";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:3001";

  constructor(private http: HttpClient) {
  }

  getAllByUser(userId: string) {
    const params = new HttpParams().set('userId', userId);
    return this.http.get(this.url + '/api/music/getByUser', {params});
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/music/' + id);
  }

  addMusic(credentials: any) {
    return this.http.post(this.url + '/api/music', credentials);
  }

  deleteMusic(id: string) {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.url + '/api/music/', {params});
  }

  updateMusic(song: Song) {
    return this.http.put(this.url + '/api/music/', song);
  }

}
