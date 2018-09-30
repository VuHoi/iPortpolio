import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerResumeComponent } from './container-resume.component';

describe('ContainerResumeComponent', () => {
  let component: ContainerResumeComponent;
  let fixture: ComponentFixture<ContainerResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
