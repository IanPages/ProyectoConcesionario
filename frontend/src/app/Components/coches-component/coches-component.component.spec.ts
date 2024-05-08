import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesComponentComponent } from './coches-component.component';

describe('CochesComponentComponent', () => {
  let component: CochesComponentComponent;
  let fixture: ComponentFixture<CochesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CochesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CochesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
