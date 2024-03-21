import { Routes } from '@angular/router';
import { HomeComponent } from './Reception/home/home.component';
import { CreateComponent } from './Reception/create/create.component';
import { EditComponent } from './Reception/edit/edit.component';
import { DeleteComponent } from './Reception/delete/delete.component';
import { DetailsComponent } from './Reception/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:Id',
    component: EditComponent,
  },
  {
    path: 'delete/:Id',
    component: DeleteComponent,
  },
  {
    path: 'details/:Id',
    component: DetailsComponent,
  },
];
