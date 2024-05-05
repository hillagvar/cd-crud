import { Routes } from '@angular/router';
import { RecordListComponent } from './components/record-list/record-list.component';
import { AddNewRecordComponent } from './components/add-new-record/add-new-record.component';
import { AccountComponent } from './components/account/account.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';


export const routes: Routes = [
    {path: "list", component: RecordListComponent},
    {path: "addnew", component: AddNewRecordComponent},
    {path: "account", component: AccountComponent},
    {path: "edit/:id", component: EditRecordComponent},
    {path: "", component: RecordListComponent},
];
