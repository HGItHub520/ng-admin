import { Injectable } from '@angular/core';
import qs from 'qs';
import {
  HttpClient,
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class AuthInterceptors implements  HttpInterceptor {
  constructor(private authService: AuthService, private message: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken() || '';
    const authReq = req.clone({setHeaders: { token}});
    let postAuthReq: HttpRequest<Object>;
    // 拦截请求
    if (req.method === 'POST') {
      postAuthReq = authReq.clone({
        body: qs.stringify(authReq.body),
        setHeaders: { 'Content-Type': 'application/x-www-form-urlencoded'}
      });
    }
    return next.handle(postAuthReq || authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const code = event.body.code;
          // 成功
          if (code === 0) { }
          // token 过期
          if (code === 1001) {
            this.authService.loginOut();
          }
          // 请求有错
          if (code === 1) {
            this.message.error(event.body.msg);
          }
        }
      }, error => {
        this.message.error(error.msg);
      })
    );
  }
}
