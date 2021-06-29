import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorMgComponent } from './donor-mg.component';

describe('DonorMgComponent', () => {
  let component: DonorMgComponent;
  let fixture: ComponentFixture<DonorMgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorMgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
