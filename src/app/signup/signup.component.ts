import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { HttpService } from '../http.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signUpForm: FormGroup;
 constructor(private http: HttpService){}
  ngOnInit(){
    this.signUpForm = new FormGroup({
      'name': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
      }),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      're_password': new FormControl(null , Validators.required),
      'terms': new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    //console.log(this.signUpForm.value);
    this.http.post(this.signUpForm.value.email, this.signUpForm.value.password).subscribe(
      (responseData)=>{
        console.log(responseData);
        this.signUpForm.reset();
      }
    );
  }

}