import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabComponent } from './slab.component';

describe('SlabComponent', () => {
  let component: SlabComponent;
  let fixture: ComponentFixture<SlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
