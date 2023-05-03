import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private service:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.service.isloggedin()) {
        if (route.url.length > 0) {
          let menu = route.url[0].path;
          if (menu == 'user') {
            if (this.service.getrole() == 'admin') {
              return true;
            } else {
              this.router.navigate(['']);
                alert('You dont have access.')
              return false;
            }
          }else{
            return true;
          }
        } else {
          return true;
        }
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    }
  }
  

