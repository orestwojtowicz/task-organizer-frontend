import { Pipe, PipeTransform } from '@angular/core';
import {Notes} from '../notes/model/notebook';

@Pipe({
  name: 'noteTextFilter'
})
export class NoteTextFilterPipe implements PipeTransform {

  transform(notes: Notes[], text: string): Notes[] {
    if(text == null || text === "") {
      return notes;
    }
    return notes.filter(n => n.title.includes(text) || n.text.includes(text));
    // filtruje bo dwoch zmiennych title notatki i zawartosc
  }

}


// podaje co chce filtrowac notes: Notes[]
// nastepnie text ktory bedzie szukany
// na koncu ma zwrocic kolekcje Notes[]
