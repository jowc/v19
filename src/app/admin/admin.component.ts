import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: `
    .container{
        display: flex;
        align-items: top;
        column-gap: 12px;
    }
  `,
  imports: [RouterOutlet],
})
export class AdminComponent {}
