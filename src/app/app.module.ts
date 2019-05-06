import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppCarouselComponent} from './app-carousel.component';
import {CarouselDirective} from './directives/carousel/carousel.directive';

@NgModule({
  declarations: [
    AppCarouselComponent,
    CarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppCarouselComponent],
  // bootstrap: [AppCarouselComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const carouselCustomElement = createCustomElement(AppCarouselComponent, {injector});
    customElements.define('custom-carousel', carouselCustomElement);
  }

  ngDoBootstrap() {
  }
}
