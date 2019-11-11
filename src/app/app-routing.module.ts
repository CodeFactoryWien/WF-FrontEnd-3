import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { NewsComponent } from './pages/news/news.component';
import { InformationComponent } from './pages/information/information.component';


const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'news', component: NewsComponent},
  {path:'information', component: InformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
