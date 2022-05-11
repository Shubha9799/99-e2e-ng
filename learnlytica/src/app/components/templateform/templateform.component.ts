import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
listLangs:string[]=['English','Hindi','Kannada','Telugu'];

  constructor() { }

  ngOnInit(): void {
  }
  getFormsValue(fval:any){
    console.log(fval)
 

  }

}
