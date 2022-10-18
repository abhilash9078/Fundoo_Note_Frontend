import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() createtodisplay = new EventEmitter<any>()
  takenote!: NgForm;

  public show: boolean = false;

  title:any;
  body:any;
  label:any = [];
  collaborator:any = [];


  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  noteClick() {

    this.show = true

  }
  noteClose() {

    this.show = false
    console.log(this.title, this.body);
    if ((this.title == null || this.title == "") && (this.body == null || this.body == "")) {
      console.log("values are null");
    }
    else {
      let data = {
        title: this.title,
        description: this.body,
        label: this.label,
        collaborator: this.collaborator,
      }
      this.noteService.createnote(data).subscribe((res: any) => {
        console.log(res);
        this.createtodisplay.emit(res);
      })
    
  }
}
}
