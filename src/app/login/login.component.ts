import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../common/service/auth.service';
interface RespData {
  code: number;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    // 调接口登陆 to-do
    console.log('loginForm', this.validateForm);
    // 接口返回后，更改登陆状态
    const loginFrom: object = this.validateForm.value;
    this.authService.loginIn(loginFrom).subscribe((val: RespData) => {
      console.log('login val', val);
      if (val.code === 1) {
        return false;
      }
      const redirectUrl = this.authService.redirectUrl || '/layout';
      this.router.navigate([redirectUrl]);
    });
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      pwd: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
