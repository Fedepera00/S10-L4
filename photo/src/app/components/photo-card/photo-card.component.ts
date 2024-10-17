import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<Photo>();

  onDelete() {
    this.delete.emit(this.photo.id);
  }

  onLike() {
    this.like.emit(this.photo);
  }
}
