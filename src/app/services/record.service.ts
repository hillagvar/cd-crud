import { Injectable } from '@angular/core';
import { Record } from '../models/record';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  public records: Record[] = [];

  constructor(private http: HttpClient) {
   }

   private addToDatabase(record: Record) {
    this.http.post("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json", record)
    .subscribe(() => {});
   }

   public addRecord(record: Record) {
    this.records.push(record);
    this.addToDatabase(record);
   }

   public loadData() {
    return this.http.get<{[key: string] : Record}>("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json"
);
   }
}
