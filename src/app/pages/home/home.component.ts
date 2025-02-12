import { Component } from '@angular/core';
import { DisplayDirective } from '../../shared/directives/display.directive';

@Component({
  selector: 'app-home',
  imports: [DisplayDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
