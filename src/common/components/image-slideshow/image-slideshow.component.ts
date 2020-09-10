import { Component, Input } from '@angular/core';
import { hexToRgb } from 'src/common/helpers';
import { IImageSlideshow } from './image-slideshow.interface';

@Component({
  selector: 'ev-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss'],
})
export class ImageSlideshowComponent {
  @Input() images: IImageSlideshow[] = [];
  @Input() showImage = 0;
  @Input() primaryColor = 'black';
  @Input() imageBackgroundColor = 'white';
  private sizes = ['extralarge', 'large', 'medium', 'small'];
  fullScreenMode = false;

  constructor() {}

  getBiggerImage(item: IImageSlideshow): string {
    return this.sizes
      .map((size: string) => (item[size] ? item[size] : 0))
      .filter((value: string) => value)[0];
  }

  getSmallerImage(item: IImageSlideshow): string {
    return [...this.sizes]
      .reverse()
      .map((size: string) => (item[size] ? item[size] : 0))
      .filter((value: string) => value)[0];
  }

  handleThumbnailBackgroundColor(color: string): string {
    const rgb = hexToRgb(color);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.075)`;
  }
}
