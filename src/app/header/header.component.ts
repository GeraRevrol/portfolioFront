import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

declare const showSideNav: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

  showSideNav() {
    this.showSideNav();
  }

}
