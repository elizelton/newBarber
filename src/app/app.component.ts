import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./services/auth/auth.service";
import {LoginComponent} from "./pages/login/login.component";
import {TwSideNavComponent} from "./components/tw-side-nav/tw-side-nav.component";
import {TwNavBarComponent} from "./components/tw-nav-bar/tw-nav-bar.component";
import {BreadCrumbComponent} from "./components/bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, TwSideNavComponent, TwNavBarComponent, BreadCrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  hideMenu = false;
  title = 'newBarber';
  private _authService: AuthService;
  isAuthenticated= true;

  constructor(authService: AuthService) {
    this._authService = authService;
  }

  ngOnInit(): void {
   this._authService.isAuthenticated$.subscribe(
     (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    this._authService.logout();
  }

  changeMenuState() {
    this.hideMenu = !this.hideMenu;
  }
}
