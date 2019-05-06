import {async, TestBed} from '@angular/core/testing';
import {AppCarouselComponent} from './app-carousel.component';

describe('AppCarouselComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppCarouselComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCarouselComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-elements-demo'`, () => {
    const fixture = TestBed.createComponent(AppCarouselComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-elements-demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppCarouselComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-elements-demo!');
  });
});
