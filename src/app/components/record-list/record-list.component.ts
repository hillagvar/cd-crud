import { Component } from '@angular/core';
import { Record } from '../../models/record';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {

  public records: Record[] = [];


  public constructor(private recordService: RecordService) {
    this.recordService.loadData().subscribe((data) => {
      for (let x in data) {
        this.records.push(data[x]);  
}

    });
  }

}
