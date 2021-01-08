import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../auth-admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authAdminService: AuthAdminService,private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.router.navigate(['/authAdminService']);
  }
}
