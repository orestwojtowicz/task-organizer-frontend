import {getTestBed, TestBed} from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Notebook} from '../../notes/model/notebook';

describe('ApiService', () => {

  let httpMock: HttpTestingController;
  let apiService: ApiService;



  beforeEach(() => TestBed.configureTestingModule({

   imports:[HttpClientTestingModule],
    providers: [ApiService]


  }));

  httpMock = getTestBed().get(HttpTestingController);
  apiService = getTestBed().get(ApiService);

  // czy sie zrobi serwis
  it('it is created', ()=> {
    expect(apiService).toBeTruthy();
  });

  it('should get all notebooks from http', ()=> {
    // arrange
      let notebooks: Notebook[] = [
        {id: '1', name:'default', nbNotes:0}
      ];
    // act
      apiService.getAllNotebooks().subscribe(
        res => {
          expect(res.length).toBe(1);
          expect(res).toEqual(notebooks);
         }


      );
    // assert
    let req = httpMock.expectOne(apiService.ALL_NOTEBOOKS);
    expect(req.request.method).toBe("GET");
    req.flush(notebooks);
  });


});


// w imports mowimy, jakie injection leci do providers w konstruktorze
























