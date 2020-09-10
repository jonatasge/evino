import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { hexToRgb } from 'src/common/helpers';
=======
import { getBiggerImage, getSmallerImage, hexToRgb } from 'src/common/helpers';
>>>>>>> parent of b00eff0... Auto-generated commit
import { IImageSlideshow } from './image-slideshow.interface';

@Component({
  selector: 'ev-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss'],
})
export class ImageSlideshowComponent {
<<<<<<< HEAD
  @Input() images: IImageSlideshow[] = [];
  @Input() showImage = 0;
  @Input() primaryColor = 'black';
  @Input() imageBackgroundColor = 'white';
=======
  @Input() height = '200px';
  @Input() imageBackgroundColor = 'white';
  @Input() images: IImageSlideshow[] = [];
  @Input() primaryColor = 'black';
  @Input() showImage = 0;
  @Input() showThumbnails = true;
>>>>>>> parent of b00eff0... Auto-generated commit
  private sizes = ['extralarge', 'large', 'medium', 'small'];
  fullScreenMode = false;

  constructor() {}

<<<<<<< HEAD
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
=======
  getBiggerImage(item: IImageSlideshow, sizes: string[] = this.sizes): string {
    return getBiggerImage(item, sizes);
  }

  getSmallerImage(item: IImageSlideshow, sizes: string[] = this.sizes): string {
    return getSmallerImage(item, sizes);
>>>>>>> parent of b00eff0... Auto-generated commit
  }

  handleThumbnailBackgroundColor(color: string): string {
    const rgb = hexToRgb(color);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.075)`;
  }
}
