import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-favorite-photos',
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.scss'],
})
export class FavoritePhotosComponent implements OnInit {
  favoritePhotos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.favoritePhotos = this.photoService.getFavoritePhotos();
  }

  onDeletePhoto(photoId: number) {
    this.photoService.removeFavoritePhoto(photoId);
    this.favoritePhotos = this.photoService.getFavoritePhotos();
  }
}
