import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraphs1 } from './page-graphs1';

describe('PageGraphs1', () => {
  let component: PageGraphs1;
  let fixture: ComponentFixture<PageGraphs1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGraphs1],
    }).compileComponents();

    fixture = TestBed.createComponent(PageGraphs1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
