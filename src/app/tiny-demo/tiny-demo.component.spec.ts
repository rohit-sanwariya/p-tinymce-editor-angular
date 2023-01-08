import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyDemoComponent } from './tiny-demo.component';

describe('TinyDemoComponent', () => {
  let component: TinyDemoComponent;
  let fixture: ComponentFixture<TinyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
