import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { ShareService } from '../_services/share-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Donor } from '../common/donor';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fileName = '';
  constructor(private userService:UserService,private http: HttpClient,private s : ShareService,private router: Router) { }

  ngOnInit(): void {
    this.getFiles();
  }
  doctorDetails:any;
  getFiles(){
    this.userService.getFiles().subscribe(
      (resp)=>{
        console.log(resp);
        this.doctorDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  selectedFile:string | Blob | undefined;
  onFileSelected(event: { target: { files: File[]; }; }) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("http://localhost:8084/upload", formData);

            upload$.subscribe();
        }
    }
    onFSelec(event: { target: { files: (string | Blob | undefined)[]; }; }){
      //console.log(event);
      this.selectedFile=event.target.files[0];
    }
    onUpload(){
      const fd=new FormData();
      fd.append('file',this.selectedFile,this.selectedFile.name);
      this.http.post('http://localhost:8084/upload',fd).subscribe(
        (resp)=>{
          console.log(resp);
          //this.doctorDetails=resp;
        },
        (err)=>{
          console.log(err);
        }
      );
    }


    nav():void{
      console.log("Hello")
     this.s.set2(true);
     this.router.navigate(['/dochome']);
    }

    nav2():void{
      console.log("Hello")
     this.s.set2(true);
     this.router.navigate(['/userlogin']);
    }
   
}
