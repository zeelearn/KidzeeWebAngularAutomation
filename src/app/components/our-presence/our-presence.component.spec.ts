import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPresenceComponent } from './our-presence.component';

describe('OurPresenceComponent', () => {
  let component: OurPresenceComponent;
  let fixture: ComponentFixture<OurPresenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPresenceComponent]
    });
    fixture = TestBed.createComponent(OurPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
