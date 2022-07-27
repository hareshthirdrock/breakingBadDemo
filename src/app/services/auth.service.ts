import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _commonHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('https://breakingbadapi.com/api/characters',this._commonHeaders)
  }
}
