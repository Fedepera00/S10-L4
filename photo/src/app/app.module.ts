import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    HeaderComponent,
    PhotoCardComponent,
    FavoritePhotosComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
