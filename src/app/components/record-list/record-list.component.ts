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
    this.recordService.loadData().subscribe((data) => {

      Object.keys(data).forEach((k) => {
        data[k].id = k;
        this.records.push(data[k]);  
      }); 
      console.log(this.records);
  })
  }


  //test
  editRecord(id: string | undefined) {
    console.log(id);
  }
}


