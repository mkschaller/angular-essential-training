import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false; // handles adding and removing css class on hover events
  @HostListener('mouseenter') onMouseEnter() {
      this.hovering = true;
  } // use native events without the 'on'
  @HostListener('mouseleave') onMouseLeave() {
      this.hovering = false;
  } // use native events without the 'on'
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
