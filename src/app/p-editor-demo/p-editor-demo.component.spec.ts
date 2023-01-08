import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEditorDemoComponent } from './p-editor-demo.component';

describe('PEditorDemoComponent', () => {
  let component: PEditorDemoComponent;
  let fixture: ComponentFixture<PEditorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEditorDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PEditorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
