import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtclientService {

  constructor(private http:HttpClient) { }

  public generateToken(request:string){
    return this.http.post("http://localhost:8082/authenticate",request,{responseType:'text' as 'json'});
  }
  public welcome(token:string){
    let tokenStr='bearer'
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    return this.http.get("http://localhost:8082/",{headers,responseType:'text' as 'json'} )
  }
}
