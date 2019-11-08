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


  selectedNotebook: Notebook; //


  searchText: string;


  constructor(private apiService: ApiService, private noteService: NotesServiceService) { }

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();




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

  deleteNote(note: Notes) {
    if (confirm("Are you sure you want to delete this note?")) {
        this.noteService.deleteNote(note.id).subscribe(
          res => {
              let indexOfNote = this.notes.indexOf(note);
              this.notes.splice(indexOfNote, 1);
          },
          error => {
            alert('error while deleting ');
          }
        );
    }


  }

  createNote(notebookId: string) {
      let newNote: Notes = {
        id: null,
        title: "New Note",
        text: "Write some text in here",
        lastModif: null,
        notebookId: notebookId
      };
      this.noteService.saveNote(newNote).subscribe(
          res => {
            newNote.id = res.id;
            this.notes.push(newNote);
          },
        error => {
            alert("Error occured while saving the note");
        }
      );
  }


  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook; // ze jak klikne na Notebooka w menu to wybierze nam jego
    this.noteService.getNotesByNotebook(notebook.id).subscribe(
      res => {
       this.notes = res;
      },
      error => {
        alert("Error while getting all notes :(")
      }
    );
  }


  updateNote(updateNote: Notes) {

    this.noteService.saveNote(updateNote).subscribe(
        res => {

        },
      error => {
          alert("Something is wrongg");
      }
    );
  }






}




















