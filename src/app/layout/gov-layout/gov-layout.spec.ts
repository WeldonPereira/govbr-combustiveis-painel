import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovLayoutComponent } from './gov-layout';

describe('GovLayoutComponent', () => {
  let component: GovLayoutComponent;
  let fixture: ComponentFixture<GovLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
