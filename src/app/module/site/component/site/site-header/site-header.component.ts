import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {SiteNavigationService} from '../../../../../service/site-navigation.service';
import {FileRestrictions, FileState} from '@progress/kendo-angular-upload';
import {AuthService} from '../../../../../service/auth.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {

  @ViewChild('navBar') navBar: ElementRef;

  @ViewChild('profileBtn') profileBtn: ElementRef;
  @ViewChild('profilePopup', {read: ElementRef}) profilePopup: ElementRef;

  showHomeBtn = false;
  showProfile = false;
  userProfileState = false;

  get animatePopup(): any {
    return {
      type: 'slide',
      direction: 'down',
      duration: '200'
    };
  }

  profilePhotoRules: FileRestrictions = {
    allowedExtensions: ['.jpg', '.png']
  };

  constructor(private router: Router,
              private authService: AuthService,
              private nav: SiteNavigationService) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      const compArr: string[] = evt.urlAfterRedirects.split('/');
      const comp = compArr[compArr.length - 1];
      this.showHomeBtn = comp !== 'main';
      this.nav.navigationEnd();
    });
  }

  uploadSaveUrl = '/save/profileImg';

  ngOnInit(): void {
    window.onscroll = () => this.onScroll();
  }

  goMain = () => this.nav.navigate('/site');

  onScroll() {
    if (window.pageYOffset >= 20) {
      this.navBar.nativeElement.style.backgroundColor = '#EBECF0';
    } else {
      this.navBar.nativeElement.style.backgroundColor = 'transparent';
    }
  }

  onButtonClick(): void {
    console.log('asd');
  }

  toggleProfile(show?: boolean): void {
    this.showProfile = show !== undefined ? show : !this.showProfile;
  }

  @HostListener('keydown', ['$event'])
  public keydown(event: any): void {
    if (event.code.toLowerCase() === 'escape') {
      this.toggleProfile(false);
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: any): void {
    if (!this.profileContains(event.target)) {
      this.toggleProfile(false);
    }
  }

  private profileContains(target: any): boolean {
    return this.profileBtn.nativeElement.contains(target) ||
      (this.profilePopup ? this.profilePopup.nativeElement.contains(target) : false);
  }

  public closeUserProfile(status) {
    console.log(`Dialog result: ${status}`);
    this.userProfileState = false;
  }

  public openUserProfile() {
    this.showProfile = false;
    this.userProfileState = true;
  }

  logout = () => {
    this.showProfile = false;
    this.nav.logout();
  };
}
