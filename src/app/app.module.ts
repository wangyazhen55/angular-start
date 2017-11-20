import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({ 
  declarations: [ 
    NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent,
    AppComponent 

  ],
  // 导入辅助模块
  imports: [
    BrowserModule
  ],
  // 依赖注入
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
