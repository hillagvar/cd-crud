import { EventEmitter, Injectable } from '@angular/core';
import { Record } from '../models/record';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  public records: Record[] = [];

  public onRecordCountChange = new EventEmitter();

  constructor(private http: HttpClient) {
   }

   public addRecord(record: Record) {
    // this.records.push(record);
    return this.http.post("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json", record)
    .pipe(
      tap(() => this.onRecordCountChange.emit())
    );
   }

   public loadData() {

    return this.http
    .get<{[key: string] : Record}>("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records.json")
   .pipe(
      map ( (data): Record[]=> {
        let records = [];
        for (let x in data) {
          records.push({...data[x], id:x });
        }
        this.records = records;
        return records;
      }),
      // tap ( (data) => {
      //   this.records = data;
      // })
      // delay(1000)
    )
  }

   public loadRecord(id: string) {
    return this.http.get<Record>("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+id+".json");
   }

    public editRecord(item: Record) {
    return this.http.patch("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+item.id+".json", item);
   }

    public deleteRecord(id: string) {
    return this.http.delete("https://cd-crud-default-rtdb.europe-west1.firebasedatabase.app/records/"+id+".json")
    .pipe(
      tap(() => this.onRecordCountChange.emit())
    );
   }


}
