import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SharedModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'], // Fixed typo
})
export class SignupComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService // Injected AuthService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.register(this.validateForm.value).subscribe(
        (res) => {
          this.message.success('Signup Successful', { nzDuration: 5000 });
          this.router.navigateByUrl('/login');
        },
        (error) => {
          this.message.error(error.error, { nzDuration: 5000 });
        }
      );
    } else {
      this.message.error('Please fill out the form correctly.', {
        nzDuration: 5000,
      });
    }
  }
}
