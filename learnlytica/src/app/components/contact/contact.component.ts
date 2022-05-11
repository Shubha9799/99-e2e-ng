import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  langs = ['ENGLISH', "HINDI", 'TELUGU', 'KANNADA'];
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  myform : FormGroup = new FormGroup(
    {
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email,Validators.required,Validators.pattern(this.emailRegEx)]),
    password: new FormControl('',[Validators.minLength(5),Validators.maxLength(8),Validators.required]),
    lang: new FormControl('',Validators.required)
  });
  
  constructor(private usrService: UserService) { }

  ngOnInit(): void {
  }
  getValues() {
    console.log(this.myform);

    this.usrService.submitContactDetails(this.myform.value)
      .subscribe((data) => {
        console.log(data)
      })

}
}
