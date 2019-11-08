export interface Notebook {

  id:string;
  name:string;
  nbNotes:number;

}

export interface Notes {
  id:string;
  title:string;
  text:string;
  notebookId:String;
  lastModif:Date;
}
