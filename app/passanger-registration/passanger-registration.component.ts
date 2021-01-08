import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PassangerDetails } from '../models/passanger-details';

@Component({
  selector: 'app-passanger-registration',
  templateUrl: './passanger-registration.component.html',
  styleUrls: ['./passanger-registration.component.css']
})
export class PassangerRegistrationComponent implements OnInit {

  hide = true;
  passangerDetails:PassangerDetails= new PassangerDetails();

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    dob:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    idnumber:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
   
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  doSubmitForm(){
    
  }

}