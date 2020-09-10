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
<<<<<<< HEAD
import { DataSheetComponent } from './pages/product-details/data-sheet/data-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
=======
import {
  AboutComponent,
  DataSheetComponent,
  ShortDataSheetComponent,
} from './pages/product-details/components';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BodyComponent,
    DataSheetComponent,
>>>>>>> parent of b00eff0... Auto-generated commit
    FooterComponent,
    HeaderComponent,
    ListProductsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
<<<<<<< HEAD
    DataSheetComponent,
=======
    ShortDataSheetComponent,
>>>>>>> parent of b00eff0... Auto-generated commit
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
