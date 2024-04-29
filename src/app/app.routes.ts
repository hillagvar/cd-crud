import { Routes } from '@angular/router';
import { RecordListComponent } from './components/record-list/record-list.component';
import { AddNewRecordComponent } from './components/add-new-record/add-new-record.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    {path: "list", component: RecordListComponent},
    {path: "addnew", component: AddNewRecordComponent},
    {path: "account", component: AccountComponent},
];
