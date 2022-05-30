import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, DoCheck {

  isUserLogged: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngDoCheck(): void {
    this.isUserLogged = this.authService.isUserLogged();;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
