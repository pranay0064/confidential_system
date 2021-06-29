import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Donor } from '../common/donor';
import { UserService } from '../_services/user.service';
import { ShareService } from '../_services/share-service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  NgForm=NgForm;
  
   

  form2: any = {
    uid: "",
    uname: "",
    emailid: "",
    bankName: "",
    ifsc: "",
    accountno: "",
    branch: ""
  };


  form: any = {
      uid: "",
     uname: "",
     emailid: "",
     bankName: "",
     ifsc: "",
     accountno: "",
     branch: ""
  };

  donors:any;
  prof :any;


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  did:any;

  constructor(private s : ShareService,private authService: AuthService, private userService: UserService,private router: Router
    ) { }

  ngOnInit(): void {


    
    this.userService.getPublicContent5().subscribe(
      data => {
        this.donors = data;
        var str = JSON.stringify(this.donors);
        const obj = JSON.parse(str);
        this.prof = obj;
      }
    );
    


  }

  edit(prof: any){
    this.form=prof;
  }
 

  clear(){
    this.form=this.form2;
  }


  onDelete(id:number | undefined): void {
    this.userService.delete(id);
    console.log("Hello");
  }


  onSubmit(): void {
    const { uid,
    uname,
    emailid,
    bankName,
    ifsc,
    accountno,
    branch} = this.form;

    this.authService.store2(uid,
      uname,
      emailid,
      bankName,
      ifsc,
      accountno,
      branch).subscribe(
      data => {
        console.log(data);
        this.userService.getPublicContent5().subscribe(
          data => {
            this.donors = data;
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  logout():void{
    console.log("Hello")
   this.s.set2(true);
   this.router.navigate(['/doclogin']);
  }



   navigate():void{
     console.log("Hello")
    this.s.set2(true);
    this.router.navigate(['/admin/usermg']);
   }
  
   nav():void{
    console.log("Hello")
   this.s.set2(true);
   this.router.navigate(['/profile']);
  }
  

}
