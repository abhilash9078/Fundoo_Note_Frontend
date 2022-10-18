import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  @Input() childMessage: any;
  @Output() displaytogetallnotes=new EventEmitter<string>();
  @Output() noteUpdated = new EventEmitter<any>();

  sentmsg:any;
  noteId:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
     width: '400px',
     data:note
     });
     dialogRef.afterClosed().subscribe((result:any) => {
     console.log('The dialog was closed'); 
     this.noteUpdated.emit(result);
     });
  }
  operation(value: any) {
    this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }

}