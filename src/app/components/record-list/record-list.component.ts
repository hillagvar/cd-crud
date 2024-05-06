import { Component } from '@angular/core';
import { Record } from '../../models/record';
import { CommonModule } from '@angular/common';
import { RecordService } from '../../services/record.service';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {

  public records: Record[] = [];

  public isLoading = false;
  public isError = false;

  public constructor(private recordService: RecordService) {
    this.loadData();
  }

  private loadData() {

    let obs = this.recordService.loadData();

    this.isLoading = true;
    this.isError = false;

    // this.recordService.loadData().subscribe((data) => {
    //   this.records = [];
    //   for (let z in data) {
    //     this.records.push({...data[z], id: z});
    //   }
    // });

    obs.subscribe({
      next: (data) => {  
        this.records = data;       
        this.isLoading = false;
        this.isError = false;
      },
      error: (err) => {
        this.isError = true;
        this.isLoading = false;
      }
    });
  }

  public deleteRecord(id: string | null) {
    if (id != null) {
      this.isLoading = true;
      this.recordService.deleteRecord(id).subscribe(() => {
        this.loadData();
      })
    }
  }

  public closeError() {
    this.loadData();
  }

}


