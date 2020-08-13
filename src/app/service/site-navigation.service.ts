import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SiteNavigationService {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  navigate(path: string): void {
    const body = document.getElementById('app-body-container');
    if (!body) {
      return;
    }
    body.classList.remove('animate__zoomIn');
    body.classList.add('animate__zoomOut');

    setTimeout(() => {
      this.router.navigate([path]);
    }, 500);
  }

  navigationEnd(): void {
    const body = document.getElementById('app-body-container');
    body.classList.remove('animate__zoomOut');
    body.classList.add('animate__zoomIn');
  }

  logout(): void {
    const header = document.getElementById('site-header');
    header.classList.remove('animate__slideInDown');
    header.classList.add('animate__slideOutUp');

    setTimeout(() => {
      const site = document.getElementById('site-module');
      site.classList.add('animate__animated');
      site.classList.add('animate__flipOutX');

      setTimeout(() => {
        this.authService.logout();
      }, 1000);

    }, 1000);
  }
}
