import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendercomponentComponent } from './rendercomponent.component';

describe('RendercomponentComponent', () => {
  let component: RendercomponentComponent;
  let fixture: ComponentFixture<RendercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
