import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display home works! text in a p tag', () => {
    const homeWorksText = fixture.nativeElement.querySelector(
      'p'
    ) as HTMLParagraphElement;
    expect(homeWorksText.innerText).toBe('home works!');
  });
});
