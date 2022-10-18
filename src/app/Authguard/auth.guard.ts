import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from '../service/Authservice/auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private Authguardservice:AuthGuardServiceService){}
  canActivate () :boolean
  {
    if(!this.Authguardservice.gettoken()){
      this.router.navigateByUrl("/login");
    }
    return this.Authguardservice.gettoken();
    
  }
  
}
