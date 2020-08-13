import {Injectable, isDevMode} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TofiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('interceptor');

    // обработчик для разработчиков
    if (isDevMode()) {
      console.log('dev mode!');
      request = request.clone({
        url: 'http://192.168.1.23:8080/nit/a/platform/' + request.url
      });
      console.log('request', request);
    }

    return next.handle(request);
  }
}
