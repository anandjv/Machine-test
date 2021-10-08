import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCompComponent } from './email-comp.component';

describe('EmailCompComponent', () => {
  let component: EmailCompComponent;
  let fixture: ComponentFixture<EmailCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
