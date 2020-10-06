import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=66e453fb77b0c0100e8fc74440c56668";
    // let url = "https://jsonplaceholder.typicode.com/todos/";
    // console.log("url:", url);
    return this.http.get(url);
  }
}
