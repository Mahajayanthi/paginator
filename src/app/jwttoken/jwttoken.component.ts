import { Component, OnInit } from '@angular/core';
import { JwtclientService } from '../jwtclient.service';

@Component({
  selector: 'app-jwttoken',
  templateUrl: './jwttoken.component.html',
  styleUrls: ['./jwttoken.component.scss']
})
export class JwttokenComponent implements OnInit{

  authRequest:any={
    "userName":"maha",
    "password":"maha@3211"
  };
response:any;
constructor(private service:JwtclientService){}
ngOnInit(){
this.getAccessToken(this.authRequest);
}
public getAccessToken(authRequest: string){
  let resp=this.service.generateToken(authRequest);
   resp.subscribe(data=>console.log("Token :"+data))
  //resp.subscribe(data=>this.accessApi(data));
}
public accessApi(token:any){
let response=this.service.welcome(token);
response.subscribe(data=>this.response=data);
}
}
