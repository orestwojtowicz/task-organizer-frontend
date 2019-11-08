import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notes} from '../model/notebook';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Notes;

  @Output() noteUpdated: EventEmitter<Notes> = new EventEmitter<Notes>();
  @Output() noteDeleted: EventEmitter<Notes> = new EventEmitter<Notes>();

  constructor() { }

  ngOnInit() {
  }


  updateNote() {
    this.noteUpdated.emit(this.note);

  }

  deleteNote() {
    this.noteDeleted.emit(this.note);

  }


}




