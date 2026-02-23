import { Component, input, Input } from '@angular/core';
import { Rslt } from '../rslt/rslt';

@Component({
  selector: 'app-chs-btn',
  imports: [Rslt],
  templateUrl: './chs-btn.html',
  styleUrl: './chs-btn.scss',
})
export class ChsBtn {
  @Input()
  ansColors: string[][] =[];
  @Input()
  circleChange: string = "";
  @Input()
  res:string[][]=[];

  ngOnInit() {
  }
  ngOnChanges(){

  }

}
