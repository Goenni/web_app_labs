import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDreiconComponent } from './project-dreicon.component';

describe('ProjectDreiconComponent', () => {
  let component: ProjectDreiconComponent;
  let fixture: ComponentFixture<ProjectDreiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ProjectDreiconComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDreiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
