import { Component } from '@angular/core';
import { DisplayDirective } from '../../shared/directives/display.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-home',
  imports: [DisplayDirective, CapitalizePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
