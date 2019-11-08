import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notebook, Notes} from './model/notebook';
import {ApiService} from '../shared/services/api.service';
import {NotesServiceService} from '../shared/services/notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notebooks: Notebook[] = []; // tutaj sa wszystkie notebooks z bazy danych

  notes: Notes[] = [];// all notes from database

  constructor(private apiService: ApiService, private noteService: NotesServiceService) { }

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();
    console.log('ALL NOTEBOOKS ' + this.getAllNotebooks());
    console.log('ALL NOTES ' + this.getAllNotes());
  }

  public getAllNotes() {
    this.noteService.getAllNotes().subscribe(
      res => {
         this.notes = res;
      }, error => {
        alert("Error fetching data")
      }
    );
  }


  public getAllNotebooks() {
  this.apiService.getAllNotebooks().subscribe(
    res => {
      this.notebooks = res;

    },
    error => {
      alert("Error ")
    }
  )

  }

// resultat z subscribe to sa wartosci z BAZY DANYCH
  createNotebook() {
    let newNotebook: Notebook = {
      name: 'New notebook',
      id: null,
      nbNotes: 0
    };
    this.apiService.postNewNotebook(newNotebook).subscribe (
      res => {
          newNotebook.id = res.id;
          this.notebooks.push(newNotebook);
      },
      error => {
        alert('Cant add new notebook');
      }
    );
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNewNotebook(updatedNotebook).subscribe (
      res => {
        /*updatedNotebook.name = res.name;*/

      },
      error => {
        alert('Cant add new notebook');
      }
    );
  }

  // biore index z tablicy notebooks
  // nastepnie usuwam poprzez splice i podaje index i ile pozycji ma usunac

  deleteNotebook(notebook: Notebook) {
      if(confirm("Are you sure to delete :(?")) {
          this.apiService.deleteNotebook(notebook.id).subscribe(
            res => {
              let indexOfNotebook = this.notebooks.indexOf(notebook);
              this.notebooks.splice(indexOfNotebook, 1);
            },
            error => {
              alert("Could not delete notebook");
            }
          );
      }
  }
}




















