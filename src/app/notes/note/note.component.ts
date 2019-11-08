import {Component, Input, OnInit} from '@angular/core';
import {Notes} from '../model/notebook';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Notes;


  constructor() { }

  ngOnInit() {
  }


  updateNote() {

  }

  deleteNote() {

  }


}




