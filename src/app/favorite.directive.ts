import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true; // Adds class is-favorite to the element because it is true by default
}
