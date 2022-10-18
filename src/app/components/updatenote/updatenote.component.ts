import { Component,OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;
  label:any = [];
  collaborator:any = [];

  constructor(private noteService: NoteService, public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      console.log(data);
      this.title = data.title
      this.description = data.description
      this.noteId = data.id }

  ngOnInit(): void {
  }
  onClick(): void {
    let data={
      title: this.title,
      description: this.description,
      label: this.label,
      collaborator: this.collaborator,
    }
    this.noteService.updateNote(data,this.noteId).subscribe((result:any)=>{
      console.log(result);
    })

  }

}
