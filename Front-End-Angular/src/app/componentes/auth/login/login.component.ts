import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorLogin: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
                
    this.form = this.formBuilder.group(
      {
        usuario:['', [Validators.required, Validators.minLength(5)]],
        password:['', [Validators.required, Validators.minLength(5)]]
      }
    )
   }

  ngOnInit(): void {
  }

  get Usuario() {
    return this.form.get('usuario');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event): void {
    event.preventDefault;
    this.authService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response) {
          this.router.navigate(['/home']);
        } else {
          this.errorLogin = true;
        }
      }
    );
  }

}


