import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DonorMgComponent } from './donor-mg/donor-mg.component';
import { UserMgComponent } from './user-mg/user-mg.component';
import { AuthGuardService } from './_services/auth-guard-service';
import { DoctorLoginComponent} from './doctor-login/doctor-login.component';

const routes: Routes = [
  { path: 'dochome', component: HomeComponent,canActivate:[AuthGuardService]},
  { path: 'profile', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
  { path: 'admin/donormg', component: DonorMgComponent,canActivate:[AuthGuardService]},
  { path: 'classmssg', component: UserMgComponent},
  { path: 'userlogin', component:DoctorLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
