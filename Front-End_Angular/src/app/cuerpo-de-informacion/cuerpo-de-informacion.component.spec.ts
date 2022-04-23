import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDeInformacionComponent } from './cuerpo-de-informacion.component';

describe('CuerpoDeInformacionComponent', () => {
  let component: CuerpoDeInformacionComponent;
  let fixture: ComponentFixture<CuerpoDeInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoDeInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoDeInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
