import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AddreaderComponent } from './components/addreader/addreader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'addreader', component: AddreaderComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
