import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import { TrashnoteComponent } from '../trashnote/trashnote.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteobj:any;
  @Output() iconstodisplay=new EventEmitter<string>()
  is_trash:boolean=false;
  is_archive:boolean=false;
  noteId:any;
  color:any;
  notes:any;

  colorArray=[
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}]

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    console.log(this.noteobj)
  }
  Trash() {
    let reqdata = {
      noteId: [this.noteobj.id],
      is_trash: true,
      isTrash: true,
    }
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
    })
  }

  Archive() {
    let reqdata = {
      noteId: [this.noteobj.id],
      is_archive: true,
      // isArchive: true,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.iconstodisplay.emit(response);
    })
  }

  UnArchive() {
    let reqdata = {
      noteId: [this.noteobj.id],
      is_archive: true,
      // isArchive: true,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.iconstodisplay.emit(response);
    })
  }

  changeColor(color:any){
    let data={
      noteId:[this.noteobj.id],
      color:color,
    }
    console.log(this.noteobj);
    this.note.ChangeColor(data).subscribe((response:any)=>{
      console.log('Note color changed',response);
      this.iconstodisplay.emit(response);
    })
  }
}
