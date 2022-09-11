import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoratorComponent } from './favorator.component';

describe('FavoratorComponent', () => {
  let component: FavoratorComponent;
  let fixture: ComponentFixture<FavoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
