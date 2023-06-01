import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public credentials = {
    name: '',
    email: '',
    password: '',
  };

  @ViewChild('singUpForm') singUpForm!: NgForm;

  constructor(private authService: AuthService, public router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  create() {
    if(this.singUpForm.valid) {
      this.authService.createOrUpdate(this.credentials).subscribe((result) => {
          this.snackBar.open('Zarejestrowano', 'OK', {
            duration: 3000,
            verticalPosition: 'top'
          });
          this.router.navigate(['/']);
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

