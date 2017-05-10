import { Component, Input } from '@angular/core';

/*
  Generated class for the CustomHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

  @Input() title:string;

  constructor() {
    
  }

}
