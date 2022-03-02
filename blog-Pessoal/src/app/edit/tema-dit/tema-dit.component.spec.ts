import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaDitComponent } from './tema-dit.component';

describe('TemaDitComponent', () => {
  let component: TemaDitComponent;
  let fixture: ComponentFixture<TemaDitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaDitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaDitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
