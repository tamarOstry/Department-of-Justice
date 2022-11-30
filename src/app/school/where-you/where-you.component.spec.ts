import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouComponent } from './where-you.component';

describe('WhereYouComponent', () => {
  let component: WhereYouComponent;
  let fixture: ComponentFixture<WhereYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
