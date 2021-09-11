import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Item } from './item'


@Injectable({
  providedIn: 'root',
})
export class ItemService {
public url: string
    constructor(private http: HttpClient){

    }

  getItems(): Observable<Object> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/");
  }

  getDetail(): Observable<Object> {
      console.dir(this.url)
      return this.http.get(this.url);

    }

}
