import { Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})


export class ShareService {
 _check:Boolean | undefined;
 _check2:Boolean | undefined;
 public get(){
     return this._check;
 }
 

 public get2(){
    return this._check2;
}

 public set(_check:Boolean){
     this._check = _check;
 }


 public set2(_check:Boolean){
    this._check2 = _check;
}

 

 constructor(){}

}
