import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivenoteComponent } from './archivenote.component';

describe('ArchivenoteComponent', () => {
  let component: ArchivenoteComponent;
  let fixture: ComponentFixture<ArchivenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivenoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
