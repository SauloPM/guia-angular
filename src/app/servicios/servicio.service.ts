import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http: HttpClient ) { }

  getSaludo() {
    return this.http.get('https://api.github.com/users/hadley/orgs');
  }

}
