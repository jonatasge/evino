import { Component, Input } from '@angular/core';
import { IBarNote } from './bar-note.interface';

@Component({
  selector: 'ev-bar-note',
  templateUrl: './bar-note.component.html',
  styleUrls: ['./bar-note.component.scss'],
})
export class BarNoteComponent {
  @Input() note: IBarNote;
  @Input() primaryColor = 'black';
<<<<<<< HEAD
=======
  @Input() backgroundColor = '#f0f0f0';
>>>>>>> parent of b00eff0... Auto-generated commit

  constructor() {}

  repeat(n: number): any[] {
    return Array(n);
  }
<<<<<<< HEAD

  c(x) {
    console.log(x);
    return x;
  }
=======
>>>>>>> parent of b00eff0... Auto-generated commit
}
