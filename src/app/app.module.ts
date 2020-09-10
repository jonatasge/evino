import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppCommonModule } from 'src/common/common.module';
import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import {
  ListProductsComponent,
  NotFoundComponent,
  ProductDetailsComponent,
} from './pages';
import { DataSheetComponent } from './pages/product-details/data-sheet/data-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    ListProductsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    DataSheetComponent,
  ],
  imports: [
    AppCommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
