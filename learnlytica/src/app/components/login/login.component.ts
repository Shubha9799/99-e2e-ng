import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform1 : FormGroup = new FormGroup(
    {
    Uname: new FormControl('',Validators.required),  
    password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform1);
  }

}
