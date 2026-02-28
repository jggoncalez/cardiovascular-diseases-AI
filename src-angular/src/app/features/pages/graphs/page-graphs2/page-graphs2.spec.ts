import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraphs2 } from './page-graphs2';

describe('PageGraphs2', () => {
  let component: PageGraphs2;
  let fixture: ComponentFixture<PageGraphs2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGraphs2],
    }).compileComponents();

    fixture = TestBed.createComponent(PageGraphs2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
