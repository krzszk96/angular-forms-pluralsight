import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreaderComponent } from './addreader.component';

describe('AddreaderComponent', () => {
  let component: AddreaderComponent;
  let fixture: ComponentFixture<AddreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
