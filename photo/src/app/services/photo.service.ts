import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://api.pexels.com/v1/curated';
  private apiKey = 'O9ev9qascg5vL5DL1TUyP1tr8PTYVxws9cMWHBYZkZF6GrJWsiOHI6fy';
  private favoritePhotos: Photo[] = [];

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey,
    });
    return this.http.get<any>(`${this.apiUrl}?per_page=30`, { headers });
  }

  addFavoritePhoto(photo: Photo) {
    if (!this.favoritePhotos.find((fav) => fav.id === photo.id)) {
      this.favoritePhotos.push(photo);
    }
  }

  removeFavoritePhoto(photoId: number) {
    this.favoritePhotos = this.favoritePhotos.filter(
      (photo) => photo.id !== photoId
    );
  }

  getFavoritePhotos(): Photo[] {
    return this.favoritePhotos;
  }
}
