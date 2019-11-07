import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: FeedBackViewModel = {
    name: '',
    email: '',
    content: ''
  };


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    let url = "http://localhost:8080/feedback";
    this.http.post(url, this.model).subscribe(
      rest => {
        location.reload();
      },
      error => {
        alert("An error has occured while sending feedback")
      }
    );
  }

}


export interface FeedBackViewModel {
  name: string;
  email: string;
  content: string;
}
