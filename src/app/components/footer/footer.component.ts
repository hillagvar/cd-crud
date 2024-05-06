import { Component } from '@angular/core';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public count: number = 0;

  constructor(private recordService: RecordService) {
    this.loadCount();
    this.recordService.onRecordCountChange.subscribe(() => this.loadCount());
  }

  private loadCount() {
    this.recordService.loadData().subscribe((data) => {
      this.count = data.length;
  });
}

}
