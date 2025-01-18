import { Component, Input } from '@angular/core';
import { ButtonComponent, ButtonData } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent {
  @Input() buttonRows: ButtonData[][] = [];
  @Input() rotated = false;
}
