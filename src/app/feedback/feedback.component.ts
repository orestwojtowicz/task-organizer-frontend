import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/services/api.service';

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


  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {

    this.apiService.postFeedback(this.model).subscribe(
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
