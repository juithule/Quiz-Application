import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/user-storage.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, NzButtonModule, NzFormModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
     constructor(private fb: FormBuilder,
      private authService: AuthService,
      private message : NzMessageService,
      private router : Router, 
     ){
      
     }
     validateForm!: FormGroup;

     ngOnInit(){
      this.validateForm = this.fb.group({
        email: [null, Validators.required],
        password: [null, Validators.required]
      })
     }

     submitForm(){
      this.authService.login(this.validateForm.value).subscribe(res=>{
      this.message
      .success(
        'Login Success.',
        { nzDuration: 5000}
      );
      const user = {
        id: res.id,
        role: res.role
      }
      UserStorageService.saveUser(user);
      if(UserStorageService.isAdminLoggedIn()){
        this.router.navigateByUrl('admin/dashboard')
      }else if(UserStorageService.isUserLoggedIn()){
        this.router.navigateByUrl('user/dashboard')
      }
      console.log(res);
      }, error=>{
        this.message
        .error(
          'Bad credentials',
          {nzDuration: 5000}
        )
      })
     }
}
