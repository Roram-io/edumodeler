import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissinglinkComponent } from './missinglink.component';

describe('MissinglinkComponent', () => {
  let component: MissinglinkComponent;
  let fixture: ComponentFixture<MissinglinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissinglinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissinglinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
