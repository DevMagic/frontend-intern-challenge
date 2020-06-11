import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoaterComponent } from './foater.component';

describe('FoaterComponent', () => {
  let component: FoaterComponent;
  let fixture: ComponentFixture<FoaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
