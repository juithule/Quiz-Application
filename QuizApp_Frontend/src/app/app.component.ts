import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { UserStorageService } from './modules/auth/services/user-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, NzLayoutModule, NzButtonModule, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quizWeb';

  isUserLogedIn: boolean = UserStorageService.isUserLoggedIn();
  isAdminLogedIn: boolean = UserStorageService.isAdminLoggedIn();
  isAdminLoggedIn: boolean = false;
  isUserLoggedIn: boolean = false; 

  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      this.isUserLogedIn = UserStorageService.isUserLoggedIn();
      this.isAdminLogedIn = UserStorageService.isAdminLoggedIn();
    })
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
  }

