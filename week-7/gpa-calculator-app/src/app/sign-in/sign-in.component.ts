import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

signinForm: FormGroup;
errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ' '
    });
  }

  // to make the button submit to a signin form
  // tslint:disable-next-line:typedef
  onSubmit() {
    const formValues = this.signinForm.value;
    // tslint:disable-next-line:radix
    const studentId = parseInt(formValues.studentId);


    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }

}
