import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlabComponent } from './slab/slab.component';

@Component({
  selector: '#angular-app',
  standalone: true,
  imports: [RouterOutlet, SlabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'slab-ui';

  currentConfiguration = {};

  async setCurrentConfiguration() {
    const response = await fetch('http://192.168.120.240/api/getButtonMapping');
    console.log(response);
  }
}
