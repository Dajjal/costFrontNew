import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  selectedLanguage: string;
  languages: { id: string, title: string }[] = [];

  public loginForm: FormGroup = new FormGroup({
    loginFld: new FormControl('', Validators.required),
    passwordFld: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              /*private translateService: TranslateService*/) {
    console.log('auth component');
  }

  ngOnInit(): void {
    /*const lang = this.translateService.getDefaultLang();
    this.translateService.use(lang);
    this.selectedLanguage = lang;
    this.languages = environment.locales.map(x => {
      return {
        id: x,
        title: `LANGUAGES.${x.toUpperCase()}`,
      };
    });*/
  }

  changeLocale(): void {
    /*this.translateService.use(this.selectedLanguage);
    this.translateService.setDefaultLang(this.selectedLanguage);
    localStorage.setItem('sync_lang', this.selectedLanguage);*/
  }

  public login(login: string, password: string): void {
    this.loginForm.markAllAsTouched();
    console.log('login clicked');
    console.log('valid', this.loginForm.valid);
    if (this.loginForm.valid) {
      this.authService.login(login, password).subscribe((canLoad) => {
        console.log('canLoad', canLoad);
        if (canLoad) {
          this.router.navigate(['/site']);
        }
      });
    }
  }

  public clearForm(): void {
    this.loginForm.reset();
  }

}
