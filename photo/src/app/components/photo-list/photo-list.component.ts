import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  favoriteCount = 0;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data: any) => {
      this.photos = data.photos;
    });
  }

  onLikePhoto(photo: Photo) {
    this.photoService.addFavoritePhoto(photo);
    this.favoriteCount++;
  }

  onDeletePhoto(photoId: number) {
    this.photos = this.photos.filter((photo) => photo.id !== photoId);
  }
}
