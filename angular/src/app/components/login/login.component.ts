import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {
    login: '',
    password: ''
  };

  public logged?: boolean;
  public logout?: boolean;

  @ViewChild('loginForm') loginForm!: NgForm;


  constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
  }

  signIn() {
    if(this.loginForm.valid) {
      this.authService.authenticate(this.credentials).subscribe((result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.snackBar.open('Logowanie udane', 'OK', {
            duration: 3000,
            verticalPosition: 'top'
          });
          this.logout = false;
          this.credentials = {
            login: '',
            password: ''
          };
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.snackBar.open('Logowanie nieudane', 'OK', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
      );
    }
  }
}
