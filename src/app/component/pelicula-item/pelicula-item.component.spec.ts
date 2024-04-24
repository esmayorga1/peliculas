import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaItemComponent } from './pelicula-item.component';

describe('PeliculaItemComponent', () => {
  let component: PeliculaItemComponent;
  let fixture: ComponentFixture<PeliculaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
