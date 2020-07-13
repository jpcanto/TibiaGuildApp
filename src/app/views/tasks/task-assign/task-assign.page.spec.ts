import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskAssignPage } from './task-assign.page';

describe('TaskAssignPage', () => {
  let component: TaskAssignPage;
  let fixture: ComponentFixture<TaskAssignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAssignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAssignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});