import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notebook, Notes} from '../../notes/model/notebook';

@Injectable({
  providedIn: 'root'
})





export class NotesServiceService {


  private BASE_URL = "http://localhost:8080";
  private NOTES_ALL = `${this.BASE_URL}\\notes\\all`;
  private NOTES_BY_NOTEBOOK_URL = `${this.BASE_URL}\\notes\\notebook`; // id
  private NOTES_BY_ID_URL = `${this.BASE_URL}\\notes\\byid`; // id


  constructor(private http: HttpClient) { }

  getNotesByNotebook(notebookId: string): Observable<Notes[]> {
      return this.http.get<Notes[]>(this.NOTES_BY_ID_URL + notebookId);
  }
  getAllNotes(): Observable<Notes[]> {
    console.log('NOTE SERVICE ' + this.NOTES_ALL);
    return this.http.get<Notes[]>(this.NOTES_ALL);
  }

/*getAllNotebooks() : Observable<Notebook[]> {
  console.log('URL ' + this.ALL_NOTEBOOKS);
return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS);
}*/

}
/*
getAllNotebooks() : Observable<Notebook[]> {
  console.log('URL ' + this.ALL_NOTEBOOKS);
return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS);
}*/
