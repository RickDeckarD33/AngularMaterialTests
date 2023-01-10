import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isLoading = false;

  constructor(private router: Router) {
  }

  public login(): void {
    setTimeout(() => {
      void this.router.navigate(['/']);
    }, 2000);
    this.isLoading = true;
  }
}
