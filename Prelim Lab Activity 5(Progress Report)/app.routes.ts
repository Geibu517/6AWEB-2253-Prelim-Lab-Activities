import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Emplist } from './emplist/emplist';
import { Product } from './product/product';
import { About } from './about/about';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'employees', component: Emplist },
  { path: 'products', component: Product },
  { path: 'about', component: About },
  { path: '**', component: Pagenotfound }
];
