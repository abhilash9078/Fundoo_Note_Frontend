import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component'; 
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { AuthGuard } from './Authguard/auth.guard';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
  children:[
    {path:'notes',component:GetallnoteComponent},
    {path:'trash',component:TrashnoteComponent},
    {path:'archive',component:ArchivenoteComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
