import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposcomponentComponent } from './aproposcomponent.component';

describe('AProposcomponentComponent', () => {
  let component: AProposcomponentComponent;
  let fixture: ComponentFixture<AProposcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposcomponentComponent]
    });
    fixture = TestBed.createComponent(AProposcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
