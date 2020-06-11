import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerFormComponent } from './shortener-form.component';

describe('ShortenerFormComponent', () => {
  let component: ShortenerFormComponent;
  let fixture: ComponentFixture<ShortenerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
