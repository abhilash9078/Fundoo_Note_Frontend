import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  notelist:any=[];

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes(){
    this.note.getallnotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res.data;
      this.notelist.reverse();
      console.log(this.notelist);
    })
  }
  recieveEvent($event:any){
    this.getallnotes()
  }
  updatedData(value: any) {

    this.getallnotes();
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("inside get all notes");
    this.getallnotes()
  }
  receivedEvent(event:any){
    console.log(event); 
  }
}