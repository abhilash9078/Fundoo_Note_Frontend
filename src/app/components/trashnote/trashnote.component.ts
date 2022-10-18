import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  notelist:any;
  trashArray=[];

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getTrash();
  }
  getTrash(){
    this.note.gettrashnotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res.data;
      this.notelist.reverse();
      console.log(this.notelist);
    })
  }

}
