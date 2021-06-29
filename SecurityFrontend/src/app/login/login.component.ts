import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../_services/share-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null
  };
  
  form2: any = {
    name: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage2 = '';


  




  errorMessage = 'Invalid Credentials';
  successMessage: string | undefined;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService, private route: ActivatedRoute,
    private router: Router, private s : ShareService) { }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      (data) => {
        if(data != -1){
          
          var data2 = JSON.stringify(data);
          const obj = JSON.parse(data2);
          console.log(obj.pid);
          this.authService.userprofile(obj);  
           


        this.invalidLogin = false;
        this.loginSuccess = true;
        this.s.set(true)
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/profile']);
        }
        else{
          
            this.invalidLogin = true;
         this.loginSuccess = false;
         
        }
      },
  
    );

    //this.authService.authenticationService(email,password); 


  }




  reloadPage(): void {
    window.location.reload();
  }


  onSubmit2(): void {
    const { name, email, password } = this.form;

    this.authService.register(name, email, password).subscribe(
     
      
      data => {
        console.log(name);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  
}
