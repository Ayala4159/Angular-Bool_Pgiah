import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rslt',
  imports: [],
  templateUrl: './rslt.html',
  styleUrl: './rslt.scss',
})
export class Rslt {
  // @Input({transform:(value:string[])=>{return{...value}}})
  // res: string[] = []
  @Input()
  res:string[][]=[];
}
