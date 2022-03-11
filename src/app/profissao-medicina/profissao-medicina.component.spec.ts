import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissaoMedicinaComponent } from './profissao-medicina.component';

describe('ProfissaoMedicinaComponent', () => {
  let component: ProfissaoMedicinaComponent;
  let fixture: ComponentFixture<ProfissaoMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissaoMedicinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissaoMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
