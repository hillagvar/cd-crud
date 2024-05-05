import { Component } from '@angular/core';
import { Record } from '../../models/record';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../services/record.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {

  public records: Record[] = [];

  public constructor(private recordService: RecordService) {
    this.loadData();
  }

  private loadData() {
    this.recordService.loadData().subscribe((data) => {
      this.records = [];
      for (let z in data) {
        this.records.push({...data[z], id: z});
      }
    });
  }

  public deleteRecord(id: string | null) {
    if (id != null) {
      this.recordService.deleteRecord(id).subscribe(() => {
        this.loadData();
      })
    }
  }


  
}


