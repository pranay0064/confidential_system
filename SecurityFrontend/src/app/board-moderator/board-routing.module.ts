import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorMgComponent } from '../donor-mg/donor-mg.component';
import { UserMgComponent} from '../user-mg/user-mg.component';

const routes: Routes = [
  { path: 'donormg', component: DonorMgComponent },
  { path: 'usermg', component: UserMgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
