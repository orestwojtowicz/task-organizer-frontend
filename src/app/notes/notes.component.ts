import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notebook} from './model/notebook';
import {ApiService} from '../shared/services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notebooks: Notebook[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotebooks();
  }

  public getAllNotebooks() {
  this.apiService.getAllNotebooks().subscribe(
    res => {
    },
    error => {
      alert("Error ")
    }
  )



  }


}


