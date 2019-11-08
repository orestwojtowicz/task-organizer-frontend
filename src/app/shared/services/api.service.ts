import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notebook} from '../../notes/model/notebook';
import {FeedBackViewModel} from '../../feedback/feedback.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080";

  public ALL_NOTEBOOKS = `${this.BASE_URL}\\notebooks\\all`;
  private SEND_FEEDBACK_URL = `${this.BASE_URL}\\feedback`;
  private SAVE_UPDATE_NOTEBOOK = `${this.BASE_URL}\\notebooks`;
  private DELETE_NOTEBOOK_URL = `${this.BASE_URL}\\notebooks\\`;

  constructor(private http: HttpClient) {

  }



  getAllNotebooks() : Observable<Notebook[]> {
    console.log('URL ' + this.ALL_NOTEBOOKS);
      return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS);
}

  postFeedback(feedback: FeedBackViewModel) : Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }
    // we have any, cuz Observable return Object object
  postNewNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(this.SAVE_UPDATE_NOTEBOOK, notebook);
  }

  deleteNotebook(id:string):Observable<any> {
    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
  }



}




























