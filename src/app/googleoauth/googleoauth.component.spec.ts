import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleoauthComponent } from './googleoauth.component';

describe('GoogleoauthComponent', () => {
  let component: GoogleoauthComponent;
  let fixture: ComponentFixture<GoogleoauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleoauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleoauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
