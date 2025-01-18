import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { Actions, SlabAction } from '../actions';
import { ButtonData } from '../button/button.component';

const allActions = Object.values(Actions);

@Component({
  selector: 'app-slab',
  standalone: true,
  imports: [CommonModule, ButtonGroupComponent],
  templateUrl: './slab.component.html',
  styleUrl: './slab.component.css',
})
export class SlabComponent {

  leftButtonGroup: ButtonData[][][] = [
    [
      [
        { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
        { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
        { label: 'A3', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
        { label: 'A4', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
      ],
    ],
    [
      [
        { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
        { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
        { label: 'A3', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
      ],
    ],
  ];

  rightButtonGroups: ButtonData[][][] = [
  [
    [
      { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A3', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A4', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
    ],
    [
      { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A3', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A4', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
    ],
  ],
  [
    [
      { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
    ],
    [
      { label: 'A1', id: '1', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A2', id: '2', selectedAction: Actions.LeftStickLeft, actions: allActions},
      { label: 'A3', id: '3', selectedAction: Actions.LeftStickLeft, actions: allActions},
    ],
  ],
]
}
