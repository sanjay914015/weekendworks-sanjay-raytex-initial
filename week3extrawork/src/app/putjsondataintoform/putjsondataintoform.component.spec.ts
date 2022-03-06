import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutjsondataintoformComponent } from './putjsondataintoform.component';

describe('PutjsondataintoformComponent', () => {
  let component: PutjsondataintoformComponent;
  let fixture: ComponentFixture<PutjsondataintoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutjsondataintoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutjsondataintoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
