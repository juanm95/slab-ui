import { Component, Input } from '@angular/core';
import { SlabService } from '../slab.service';
import { SlabAction } from '../actions';
import { CommonModule } from '@angular/common';

export interface ButtonData {
  label: string;
  id: string;
  selectedAction: SlabAction;
  actions: SlabAction[];
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonData: ButtonData | undefined;
  @Input() rotated = false;
  labelChanged(event: Event) {
    const selectElement = event?.target as HTMLSelectElement;
    console.log(selectElement.value);
  }
  constructor(private slabService: SlabService) {}
}
