import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
