import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
url="http://localhost:3000/quize"
  constructor(private http:HttpClient) { }

  getQuise(){
    return this.http.get(this.url);
  }
}
