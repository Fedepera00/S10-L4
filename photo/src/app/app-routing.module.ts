import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';

const routes: Routes = [
  { path: '', component: PhotoListComponent },
  { path: 'favorites', component: FavoritePhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
