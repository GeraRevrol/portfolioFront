import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router, private tokenService: TokenService) {}
  isLogged = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        } else {
        this.router.navigate(['/login'])
        this.isLogged = false;
      }
    return this.isLogged;
    }
  

}