import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBmwComponent } from './project-bmw.component';

describe('ProjectBmwComponent', () => {
  let component: ProjectBmwComponent;
  let fixture: ComponentFixture<ProjectBmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProjectBmwComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
