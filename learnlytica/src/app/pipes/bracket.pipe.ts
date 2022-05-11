import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bracket'
})
export class BracketPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value,args)
   if(args[0])
{
  return "("+value+"$"+")"
} 
else {
return "("+value+"$"+")"
}
  }
}
