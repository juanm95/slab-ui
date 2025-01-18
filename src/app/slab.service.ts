import { Injectable } from '@angular/core';
import { Buttons } from './buttons';

@Injectable({
  providedIn: 'root',
})
export class SlabService {
  configuration: { [key: string]: string } = {};
  constructor() {}

  updateCurrentConfiguration(id: string, value: string) {
    this.configuration[id] = value;
    console.log(this.configuration);
  }
}
