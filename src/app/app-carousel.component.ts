import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppCarouselComponent {
  @Output()
  imageChanged = new EventEmitter<string>();

  @Input()
  get images(): string[] {
    return this._images;
  }

  set images(value: string[]) {
    console.log('CCR==========> images', value);

    if (typeof value === 'string') {
      const normalizedImages = (value as string).replace(/'/g, '"');
      this._images = JSON.parse(normalizedImages);
      console.log('CCR==========> PARSED this.images', this._images);
    } else {
      this._images = value;
    }
  }

  private _images: string[] = [
    // '/assets/images/img1.png',
    // '/assets/images/img2.png'
  ];

  public prevImage(ctrl: { prev: Function, next: Function }): void {
    const newImage = ctrl.prev();
    this.imageChanged.emit(newImage);
  }

  public nextImage(ctrl: { prev: Function, next: Function }): void {
    const newImage = ctrl.next();
    this.imageChanged.emit(newImage);
  }
}
