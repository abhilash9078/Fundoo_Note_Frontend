import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynoteComponent } from './displaynote.component';

describe('DisplaynoteComponent', () => {
  let component: DisplaynoteComponent;
  let fixture: ComponentFixture<DisplaynoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaynoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
