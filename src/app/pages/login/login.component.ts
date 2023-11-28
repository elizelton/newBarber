import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TwbuttonComponent} from "../../components/twbutton/twbutton.component";
import {Color} from "../../components/color.enum";
import {Size} from "../../components/size.enum";
import {AuthService} from '../../services/auth/auth.service';
import {TwinputComponent} from "../../components/twinput/twinput.component";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TwbuttonComponent, TwinputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  loginForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toast: HotToastService)
  {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit()
  {
    this.loading = true;
    if (this.loginForm.valid)
    {

      const {username, password} = this.loginForm.value;

      this.authService.login(username, password)
        .subscribe((isAuthenticated) =>
        {
          if (isAuthenticated) {
            this.router.navigate(['home']).finally(() => {
              this.toast.success('Bem vindo!', {position: 'bottom-right'});
            });
          }else{
            this.toast.error('Usuário ou senha inválidos!', {position: 'bottom-right'});
            this.loading = false;
            this.username.setErrors({invalid: true});
            this.password.setErrors({invalid: true});
          }
        });
    }
     else {
      this.loginForm.markAllAsTouched();
      this.toast.error('Informe seu dados de acesso corretamente!', {position: 'bottom-right'});
    }
    this.loading = false;
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  protected readonly Color = Color;
  protected readonly Size = Size;
  protected readonly FormControl = FormControl;
}
