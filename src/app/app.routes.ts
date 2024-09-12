import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserComponent
  }
];