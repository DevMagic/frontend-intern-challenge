import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsComponent } from './hits.component';

describe('HitsComponent', () => {
  let component: HitsComponent;
  let fixture: ComponentFixture<HitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
