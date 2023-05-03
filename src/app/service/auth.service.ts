import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  GetTicketbyCode(id:any){
    return this.http.get("http://localhost:3000/ticket"+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  postTicket(data:any){
    return this.http.post<any>("http://localhost:3000/ticket/",data);
  }
  getTicket(){
    return this.http.get<any>("http://localhost:3000/ticket");
  }
  updateTicket(id:any,data:any){
    return this.http.put("http://localhost:3000/ticket"+'/'+id,data);
  }

  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  isloggedin(){
    return sessionStorage.getItem('id')!=null;
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
}
