import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniandinosComponent } from './uniandinos.component';

describe('UniandinosComponent', () => {
  let component: UniandinosComponent;
  let fixture: ComponentFixture<UniandinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniandinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniandinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
