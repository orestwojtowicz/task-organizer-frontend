import { NoteTextFilterPipe } from './note-text-filter.pipe';
import {Notes} from '../../notes/model/notebook';
import {NoteComponent} from '../../notes/note/note.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('NoteTextFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new NoteTextFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should not filter notes if search is empty', function() {
      // arrange
      let pipe = new NoteTextFilterPipe();
      let emptySearchText = "";
      let notes:Notes[] = [
        {id: '1', title:'title1', text:'text1', notebookId: '10', lastModif: new Date()},
        {id: '2', title:'title2', text:'text2', notebookId: '10', lastModif: new Date()}
      ];

      // act
        let filteredNotes = pipe.transform(notes, emptySearchText);

      // assert expect 2 notes not to be filtered
      expect(filteredNotes.length).toBe(2);

  });

  it('should filter notes base on search text', ()=> {
    // arrange
    let pipe = new NoteTextFilterPipe();
    let searchText = "Dog";
    let notes:Notes[] = [
      {id: '1', title:'Dog', text:'text1', notebookId: '10', lastModif: new Date()},
      {id: '2', title:'title2', text:'text2', notebookId: '10', lastModif: new Date()}
    ];

    // act
    let filteredNotes = pipe.transform(notes, searchText);
    // assert
    expect(filteredNotes.length).toBe(1);
    expect(filteredNotes[0].id).toBe('1');
  })








});

















