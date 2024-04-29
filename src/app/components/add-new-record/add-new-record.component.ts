import { Component } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { CommonModule } from '@angular/common';
import { Record } from '../../models/record';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-record',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-record.component.html',
  styleUrl: './add-new-record.component.css'
})
export class AddNewRecordComponent {
  public artist: string | null = null;
  public album: string | null = null;
  public year: number | null = null;
  public genre : string | null = null;

  public constructor(private recordService: RecordService) {
  
  }
    
  public addRecord() {
    if (this.artist != null && this.album != null && this.year != null && this.genre != null) {
    this.recordService.addRecord({
      artist: this.artist,
      album: this.album,
      year: this.year,
      genre: this.genre
      }) 
    this.artist = null;
    this.album = null;
    this.year = null;
    this.genre = null;
    }
  }

}
