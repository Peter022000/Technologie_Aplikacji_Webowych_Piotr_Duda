import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

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

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  create() {
    if(this.singUpForm.valid) {
      this.authService.createOrUpdate(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }
}

