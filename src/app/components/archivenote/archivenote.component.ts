import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchive()
  }
  getArchive(){
    this.note.getarchivenotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res.data;
      this.notelist.reverse();
      console.log(this.notelist);
    })
  }

}
