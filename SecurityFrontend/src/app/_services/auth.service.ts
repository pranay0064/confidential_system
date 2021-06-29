import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const AUTH_API = 'http://localhost:8084/putdoctors';
const AUTH_API2 = 'http://localhost:8084/addStudent';
const AUTH_API3 = 'http://localhost:8084/updateForm';
const AUTH_API4 = 'http://localhost:8084/addpres';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  
  Name:string | undefined;
  Logstatus:Boolean = false 
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  public email: string | undefined;
  public password: string | undefined;
  
  
  pid : any;
  did:any;
  pemail : string | undefined;
  phone : string | undefined;
 


  login(emailid: string, password: string){
    this.Name = emailid
    this.Logstatus = true
    console.log(emailid+""+password);
    return this.http.post(`http://localhost:8084/loginUser`, {
      emailid,
      password
    }, httpOptions);
  }

  
  login2(emailid: string, password: string){
    this.Name = emailid
    this.Logstatus = true
    console.log(emailid+""+password);
    return this.http.post(`http://localhost:8084/loginUser`, {
      emailid,
      password
    }, httpOptions);
  }




  userprofile(data :{pid:number}){
    console.log(data);
    this.pid = data}


    


  authenticationService(email: string, password: string) {
    console.log("hello");
    return this.http.get(`http://localhost:8084/users`,
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
        this.email = email;
        this.email = password;
        this.registerSuccessfulLogin(email, password);
      }));
  }

  createBasicAuthToken(email: String, password: String) {
    return 'Basic ' + window.btoa(email + ":" + password)
  }

  registerSuccessfulLogin(email:string, password:string) {
    console.log(email);
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
  }


  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)

    if (user === null) return false

    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }






  register(pname: string, emailid: string, password: string): Observable<any> {
    return this.http.post(AUTH_API2, {
      pname,
      emailid,
      password
    }, httpOptions);
  }
  
  setavail(id:any){
    return this.http.post(`http://localhost:8084/setavail?id=`+id, {
    }, httpOptions);
  }
 



  setDoctors(id:number | undefined,pid:number|undefined){
    pid = this.pid
     console.log(pid)
    return this.http.post(`http://localhost:8084/setDoctor?did=`+id, {
      pid
    }, httpOptions);
  }

  setDoctors2(id:number | undefined , pid: number | undefined){
     pid = this.pid
     console.log(pid)
    return this.http.post(`http://localhost:8084/setDoctor2?did=`+id, {
     pid 
    }, httpOptions);
  }

  updateDonor(id: number, name: string, phonenumber:string, email : string, bloodgroup:string,date: string){
    return this.http.post(AUTH_API3, {
      id,
      name,
      email,
      phonenumber,
      bloodgroup,
      date
    }, httpOptions);
  }

  
   
   store(pid:number,
    pname:string,
    emailid:string,
    password:string,
    department:string,
    course:string,classmssg:string): Observable<any> {
      
    return this.http.post(AUTH_API, {
      pid,
      pname,
      emailid,
      password,
      department,
      course,
      classmssg
    }, httpOptions);
  }

 





  store2(uid:number,
    uname:string,
    emailid:string,
    bankName:string,
    ifsc:string,
    accountno:string,
    branch:string): Observable<any> {
     
    return this.http.post('http://localhost:8084/putusers', {
      uid,
      uname,
      emailid,
      bankName,
      ifsc,
      accountno,
      branch
    }, {responseType: 'text'});
  }



  store3(uid:number,
    uname:string,
    emailid:string,
    password:string,
    bankName:string,
    ifsc:string,
    accountno:string,
    branch:string): Observable<any> {
     
    return this.http.post('http://localhost:8084/putusers', {
      uid,
      uname,
      emailid,
      password,
      bankName, 
      ifsc,
      accountno,
      branch
    }, {responseType: 'text'});
  }


}
