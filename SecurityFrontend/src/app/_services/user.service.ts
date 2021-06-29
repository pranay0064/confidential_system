import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from '../common/donor';
import { map } from 'rxjs/operators';
import { User } from '../common/user';

const API_URL = 'http://localhost:8084/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:8084/users';
  private baseUrl2='http://localhost:8084/students';
  did:any;
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response)
    );
  }


  
  api='http://localhost:8084';
  public getFiles(){
    return this.http.get(this.api+'/files');
  }


  getPublicContent5(): Observable<any> {
    console.log("hi  "+ this.did);
    return this.http.get<GetResponse>(this.baseUrl+"/"+this.did).pipe(
      map(response=>response)
    );
  }


  getPublicContent2(id:any): Observable<any> {
    id = this.did 
    console.log(id);
    return this.http.get<GetResponse>(`http://localhost:8084/getPats?did=`+id).pipe(
      map(response=>response)
    );
  }


  doctorprofile(data :{did:number}){
    console.log(data);
    this.did = data}


  getUserBoard(): Observable<any> {
    return this.http.get<GetResponse>(this.baseUrl2).pipe(
      map(response=>response)
    );
  }

  getAdmin(): Observable<any> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response)
    );
  }



  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(id:number | undefined){
    this.http.delete(this.baseUrl2+"/"+id).subscribe(data => {
      console.log(data);
     
    });
  }

  delete(id:number | undefined){
    this.http.delete(this.baseUrl+"/"+id).subscribe(data => {
      console.log(data);
      
    });
  }



}


interface GetResponse{
  _embedded:{
    donors:Donor[],
    users:User[];
  }
}

