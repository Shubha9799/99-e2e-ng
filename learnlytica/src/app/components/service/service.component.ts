import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  items=[{
    title:'1.Business Owner',
    img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/5x5Mi01.png'
  },
 {
  title:'2. Subject matter expert',
  img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/Y0WqL02.png'
 },
 {
   title:'3. Learning Designer',
   img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/lZvYg0302.png'
 },
 {
   title:'4. Authoring/Production',
   img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/hR86b0402.png'
 },
 {
   title:'5.Platform support',
   img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/pJrBF0502.png'
 },
 {
   title:'6. Quality control',
   img:'https://dz8fbjd9gwp2s.cloudfront.net/orgData/617bc0bb0cf2d8ee2a3bbba4/pages/assets/images/3prbS0602.png'
 }
 
 
];
  constructor() { }

  ngOnInit(): void {
  }

}

//------Angular Lifecycle hooks-----

// export class ServiceComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy  {
//   data='THBS';
//   constructor() { 
//     console.log(`new data is ${this.data}`);
//   }

//   ngOnInit() {
//     console.log(`ngOnInit  - data is ${this.data}`);
//   }

//   ngDoCheck() {
//     console.log("ngDoCheck");
//   }

//   ngAfterContentInit() {
//     console.log("ngAfterContentInit");
//   }

//   ngAfterContentChecked() {
//     console.log("ngAfterContentChecked");
//   }

//   ngAfterViewInit() {
//     console.log("ngAfterViewInit");
//   }

//   ngAfterViewChecked() {
//     console.log("ngAfterViewChecked");
//   }

//   ngOnDestroy() {
//     console.log("ngOnDestroy");
//   }

// }
