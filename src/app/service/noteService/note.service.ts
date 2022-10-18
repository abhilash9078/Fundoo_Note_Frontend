import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
    constructor(private httpService:HttpService) { 
      this.token= localStorage.getItem('token')
    }
     
    createnote(data:any){
  
     let header ={
       headers: new HttpHeaders({
         'Content-type': 'application/json',
          'Authorization': 'Bearer '+this.token 
       })
     }
     return this.httpService.postservice('/note/create_notes/',data,true,header)
    }

    getallnotes(){
  
     let header ={
       headers: new HttpHeaders({
         'Content-type': 'application/json',
         'Authorization': 'Bearer '+this.token 
       })
     }
     return this.httpService.getservice('/note/get_notes/',true,header)
  
    }
    updateNote(data:any,noteId:any) {
    
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization':'Bearer ' + this.token
        })
      }
      return this.httpService.putservice(`/note/update_notes/${noteId}/`,data, true, header)
    }
    

    trashNote(data: any) {
      console.log(data);
      
      let header = {
        headers: new HttpHeaders({
          
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+ this.token,
    
        }),
      };
      return this.httpService.putservice(`/note/trash_notes/${data.noteId}`, data, true,header );
    }
    gettrashnotes(){
  
      let header ={
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': 'Bearer '+this.token 
        })
      }
      return this.httpService.getservice('/note/get_trash_notes/',true,header)
   
     }
    
    archiveNote(data: any) {
      let header = {
        headers: new HttpHeaders({
          
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+ this.token,
    
        }),
      };
      return this.httpService.putservice(`/note/archive_notes/${data.noteId}`, data, true,header );
    }

    pinNote(data: any) {
      let header = {
        headers: new HttpHeaders({
          
          'Content-type': 'application/json',
          'Authorization' : 'Bearer '+ this.token,
    
        }),
      };
      return this.httpService.putservice(`/note/pin_notes/${data.noteId}`, data, true,header );
    }

    getarchivenotes(){
      let header ={
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': 'Bearer '+this.token 
        })
      }
      return this.httpService.getservice('/note/get_archive_notes/',true,header)
     }

     ChangeColor(data:any) {
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization':'Bearer ' + this.token
        })
      }
      return this.httpService.putservice(`/note/color_notes/${data.noteId}`,data,true, header)
    }
    
}
