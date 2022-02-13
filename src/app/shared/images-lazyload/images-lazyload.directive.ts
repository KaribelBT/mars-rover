import { Injector, Directive, ElementRef } from '@angular/core';
import { ImagesLazyloadService } from './images-lazyload.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[loading]',
})
export class ImagesLazyloadDirective {

  constructor(
    private injector: Injector,
    private el: ElementRef,
  ) {
    const img = this.el.nativeElement;

    if ('loading' in HTMLImageElement.prototype && img.tagName.toLowerCase() === 'img') {
      img.src = img.dataset?.src;
    } else {
      const lazyService = this.injector.get(ImagesLazyloadService);
      lazyService.observe(img);
    }
  }
}