import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheEspecificoComponentComponent } from './coche-especifico-component.component';

describe('CocheEspecificoComponentComponent', () => {
  let component: CocheEspecificoComponentComponent;
  let fixture: ComponentFixture<CocheEspecificoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocheEspecificoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocheEspecificoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
