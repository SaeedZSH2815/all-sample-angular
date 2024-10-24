import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCollapseComponent } from './accordion-collapse.component';

describe('AccordionCollapseComponent', () => {
  let component: AccordionCollapseComponent;
  let fixture: ComponentFixture<AccordionCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionCollapseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
