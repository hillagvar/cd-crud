import { Component } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-add-new-record',
  standalone: true,
  imports: [FormsModule, LoadingComponent, CommonModule, ErrorComponent],
  templateUrl: './add-new-record.component.html',
  styleUrl: './add-new-record.component.css'
})
export class AddNewRecordComponent {
  public artist: string | null = null;
  public album: string | null = null;
  public year: number | null = null;
  public genre : string | null = null;

  public isLoading = false;
  public isError = false;

  public constructor(private recordService: RecordService) {
  
  }
    
  public addRecord() {
    if (this.artist != null && this.album != null && this.year != null && this.genre != null) {
    this.isLoading = true;
    this.recordService.addRecord({
      artist: this.artist,
      album: this.album,
      year: this.year,
      genre: this.genre,
      id: null,
      }).subscribe({
        next: () => {
        this.artist = null;
        this.album = null;
        this.year = null;
        this.genre = null;
        this.isLoading = false;
      },
      error: () => {
        this.isError = true;
        this.isLoading = false;
        }
      });
    }
  }
}
