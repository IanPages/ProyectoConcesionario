import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosComponentComponent } from './sobre-nosotros-component.component';

describe('SobreNosotrosComponentComponent', () => {
  let component: SobreNosotrosComponentComponent;
  let fixture: ComponentFixture<SobreNosotrosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreNosotrosComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreNosotrosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
