import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovMenu } from './gov-menu';

describe('GovMenu', () => {
  let component: GovMenu;
  let fixture: ComponentFixture<GovMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
