import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './login/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  isLoggedIn = false;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

  ngOnInit() {
    console.log('Hello');
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  } 

  handleLogout() {
    this.authenticationService.logout();
  }
}