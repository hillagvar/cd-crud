import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../../services/record.service';
import { Record } from '../../models/record';

@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css'
})
export class EditRecordComponent {
  public id: string;
  public artist: string | null = null;
  public album: string | null = null;
  public year: number | null = null;
  public genre: string | null = null;

  constructor (private route: ActivatedRoute, private router: Router, private recordService: RecordService) {
    this.id = this.route.snapshot.params["id"];

    this.recordService.loadRecord(this.id).subscribe((data) => {
      this.artist = data.artist;
      this.album = data.album;
      this.year = data.year;
      this.genre = data.genre;
    });
  }

  public editRecord() {
    if (this.artist != null && this.album != null && this.year != null && this.genre != null) {
      const editedRecord: Record = {
        id: this.id,
        artist: this.artist,
        album: this.album,
        year: this.year,
        genre: this.genre,
      }
      this.recordService.editRecord(editedRecord).subscribe(() => {
        this.router.navigate(["list"]);
      });
    }
  }
}
