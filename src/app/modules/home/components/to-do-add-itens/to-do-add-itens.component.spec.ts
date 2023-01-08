import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAddItensComponent } from './to-do-add-itens.component';

describe('ToDoAddItensComponent', () => {
  let component: ToDoAddItensComponent;
  let fixture: ComponentFixture<ToDoAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
