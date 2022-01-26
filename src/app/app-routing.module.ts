import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentEditItemComponent } from './components/continent/continent-edit-item/continent-edit-item.component';
import { ContinentListComponent } from './components/continent/continent-list/continent-list.component';
import { ContinentComponent } from './components/continent/continent.component';
import { CountryDetailViewComponent } from './components/country/country-detail-view/country-detail-view.component';
import { CountryEditItemComponent } from './components/country/country-edit-item/country-edit-item.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: CountryListComponent },
      { path: 'edit-item', component: CountryEditItemComponent },
      { path: 'detail-item', component: CountryDetailViewComponent },
      { path: '**', component: CountryComponent },
    ],
  },
  {
    path: 'continent',
    component: ContinentComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ContinentListComponent },
      { path: 'edit-item', component: ContinentEditItemComponent },
      { path: '**', component: ContinentComponent },
    ],
  },
  { path: '', redirectTo: 'country', pathMatch: 'full' },
  { path: '**', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
