import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenoteComponent } from './takenote.component';

describe('TakenoteComponent', () => {
  let component: TakenoteComponent;
  let fixture: ComponentFixture<TakenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
