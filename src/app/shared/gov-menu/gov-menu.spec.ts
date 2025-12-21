import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GovMenuComponent } from './gov-menu';

describe('GovMenuComponent', () => {
  let component: GovMenuComponent;
  let fixture: ComponentFixture<GovMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
