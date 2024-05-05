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

   public addRecord(record: Record) {
    // this.records.push(record);
    return this.http.post("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json", record);
   }

   public loadData() {
    return this.http.get<{[key: string] : Record}>("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json");
   }

   public loadRecord(id: string) {
    return this.http.get<Record>("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+id+".json");
   }

    public editRecord(item: Record) {
    return this.http.patch("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+item.id+".json", item);
   }

    public deleteRecord(id: string) {
    return this.http.delete("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+id+".json");
   }


}
