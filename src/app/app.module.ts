import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basic/header/header.component';
import { LandingComponent } from './basic/landing/landing.component';
import { FooterComponent } from './basic/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { InformationComponent } from './pages/information/information.component';
import { NewsadminComponent } from './pages/news/newsadmin/newsadmin.component';
import { ProductsadminComponent } from './pages/products/productsadmin/productsadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    NewsComponent,
    ProductsComponent,
    InformationComponent,
    NewsadminComponent,
    ProductsadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
