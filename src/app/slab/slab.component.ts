import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { Actions, SlabAction, allActions } from '../actions';
import { ButtonData } from '../button/button.component';
import { ButtonMapping, SlabService } from '../slab.service';


@Component({
  selector: 'app-slab',
  standalone: true,
  imports: [CommonModule, ButtonGroupComponent],
  templateUrl: './slab.component.html',
  styleUrl: './slab.component.css',
})
export class SlabComponent {
  leftButtonGroups: ButtonData[][][] = [];
  rightButtonGroups: ButtonData[][][] = [];

  constructor(private slabService: SlabService) {
    this.slabService.setCurrentConfiguration().then((rawMapping) => {
      this.mapButtonMappingToGroups(rawMapping);
    });
  }

  refresh() {
    this.slabService.setCurrentConfiguration().then((rawMapping) => {
      this.mapButtonMappingToGroups(rawMapping);
    });
  }

  commit() {
    this.slabService.commitChanges();
  }

  copy() {
    this.slabService.copy();
  }

  paste() {
    this.slabService.paste();
    this.mapButtonMappingToGroups(this.slabService.buttonMapping);
  }

  mapButtonMappingToGroups(rawMapping: ButtonMapping) {
    this.leftButtonGroups = [
      [
        [
          this.slabService.getButtonData(1),
          this.slabService.getButtonData(2),
          this.slabService.getButtonData(3),
          this.slabService.getButtonData(4),
        ],
      ],
      [
        [
          this.slabService.getButtonData(5),
          this.slabService.getButtonData(6),
          this.slabService.getButtonData(7),
        ],
      ],
    ];
  
    this.rightButtonGroups = [
      [
        [
          this.slabService.getButtonData(8),
          this.slabService.getButtonData(9),
          this.slabService.getButtonData(10),
          this.slabService.getButtonData(11),
        ],
        [
          this.slabService.getButtonData(12),
          this.slabService.getButtonData(13),
          this.slabService.getButtonData(14),
          this.slabService.getButtonData(15),
        ],
      ],
      [
        [
          this.slabService.getButtonData(16),
          this.slabService.getButtonData(17),
        ],
        [
          this.slabService.getButtonData(18),
          this.slabService.getButtonData(19),
          this.slabService.getButtonData(20),
        ],
      ],
    ]
  }
}
