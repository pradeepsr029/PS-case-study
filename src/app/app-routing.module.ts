import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COUNT_DOWN, COUNT_DOWN_SUB, DYNAMICALLY_DIV, HOME, PRODUCT, TABLE } from './constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: HOME.path,
    pathMatch: 'full',
  },
  {
    path: HOME.path,
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: PRODUCT.path,
    loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: COUNT_DOWN.path,
    loadChildren: () => import('./modules/count-down/count-down.module').then((m) => m.CountDownModule)
  },
  {
    path: COUNT_DOWN_SUB.path,
    loadChildren: () => import('./modules/count-down/count-down.module').then((m) => m.CountDownModule)
  },
  {
    path: TABLE.path,
    loadChildren: () => import('./modules/table/table.module').then((m) => m.TableModule)
  },
  {
    path: DYNAMICALLY_DIV.path,
    loadChildren: () => import('./modules/create-dynamically-div/create-dynamically-div.module').then((m) => m.CreateDynamicallyDivModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
