import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIcsunonoveComponent } from './project-icsunonove.component';

describe('ProjectIcsunonoveComponent', () => {
  let component: ProjectIcsunonoveComponent;
  let fixture: ComponentFixture<ProjectIcsunonoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProjectIcsunonoveComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIcsunonoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
