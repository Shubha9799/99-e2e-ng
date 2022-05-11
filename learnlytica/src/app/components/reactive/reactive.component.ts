import { Component, OnInit } from '@angular/core';
import { from, interval, map, Observable, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myobs!: Observable<number>;
  myobs$: any;
  constructor() { }

  ngOnInit(): void {
   // interval(1000).subscribe(val=>console.log(`I am observable stream value--> ${val}`));
  
  this.myobs$=of(1,2,4,5,10,100);
  this.myobs$.subscribe(
    (val:Number)=>console.log(`I am observable stream value--> ${val}`)
  )
  from ([1,2,10,20]).subscribe((val:Number)=>console.log(`I am from-->obs stream value-->${val}`)
  )
  

  //using take operator
  const obsT1=interval(1000)
  const only6val=obsT1.pipe(
    take(6)   , //only first 10 values
    map(val=> val * 10 )  ,
    skip(2)  //skips first 2 values i.e, 0 and 10
     
  );
  only6val.subscribe((val:Number)=>console.log(`operation using take-->${val}`))
}


  ngOnDestroy():void{
    console.log('from destroy');
    this.myobs$?.unscribe();
    this.myobs$.unscribe();
  }

}
