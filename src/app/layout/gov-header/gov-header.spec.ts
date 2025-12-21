import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GovHeaderComponent } from './gov-header';

describe('GovHeader', () => {
  let component: GovHeaderComponent;
  let fixture: ComponentFixture<GovHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovHeaderComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
