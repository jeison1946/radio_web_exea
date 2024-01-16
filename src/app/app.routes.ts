import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { UniandinosComponent } from './pages/uniandinos/uniandinos.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'uniandinos',
    component: UniandinosComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
