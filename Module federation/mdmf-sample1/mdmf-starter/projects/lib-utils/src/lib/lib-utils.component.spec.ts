import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUtilsComponent } from './lib-utils.component';

describe('LibUtilsComponent', () => {
  let component: LibUtilsComponent;
  let fixture: ComponentFixture<LibUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
