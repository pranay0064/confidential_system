import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Donor } from '../common/donor';
import { UserService } from '../_services/user.service';
import { ShareService } from '../_services/share-service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donor-mg',
  templateUrl: './donor-mg.component.html',
  styleUrls: ['./donor-mg.component.css']
})



export class DonorMgComponent implements OnInit {
  NgForm=NgForm;
  
   

  form2: any = {
    uid: 0,
    uname: "",
    emailid: "",
    password:"",
    bankName: "",
    ifsc: "",
    accountno: "",
    branch: ""
  };


  form: any = {
     uid: 0,
     uname: "",
     emailid: "",
     password:"",
     bankName: "",
     ifsc: "",
     accountno: "",
     branch: ""
  };

  donors :any;
 


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  did:any;

  constructor(private s : ShareService,private authService: AuthService, private userService: UserService,private router: Router
    ) { }

  ngOnInit(): void {


    
    this.userService.getPublicContent().subscribe(
      data => {
        this.donors = data;
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
    password,
    bankName,
    ifsc,
    accountno,
    branch} = this.form;

    this.authService.store3(uid,
      uname,
      emailid,
      password,
      bankName,
      ifsc,
      accountno,
      branch).subscribe(
      data => {
        console.log(data);
        this.userService.getPublicContent().subscribe(
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
   this.router.navigate(['/admin']);
  }



   navigate():void{
     console.log("Hello")
    this.s.set2(true);
    this.router.navigate(['/admin/usermg']);
   }
  
}
