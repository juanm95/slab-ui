import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlabComponent } from './slab/slab.component';
import { SlabService } from './slab.service';

@Component({
  selector: '#angular-app',
  standalone: true,
  imports: [RouterOutlet, SlabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'slab-ui';

  constructor() {
  }
}
