import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-clr-btn',
  imports: [],
  templateUrl: './clr-btn.html',
  styleUrl: './clr-btn.scss',
})
export class ClrBtn {
  @Input()
  color: string[] = Array(6);
  @Output()
  circleClick:EventEmitter<string>=new EventEmitter<string>();

  paint(c: string) {
    this.circleClick.emit(c)
  }
}