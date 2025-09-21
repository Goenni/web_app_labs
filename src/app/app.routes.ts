import { Routes } from '@angular/router';
// ... existing code ...
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects-module/projects/projects.component';
import { ProjectBmwComponent } from './pages/projects-module/project-bmw/project-bmw.component';
import { ProjectDreiconComponent } from './pages/projects-module/project-dreicon/project-dreicon.component';
import { ProjectIcsunonoveComponent } from './pages/projects-module/project-icsunonove/project-icsunonove.component';
// ... existing code ...

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },

  // Projekte-Übersicht
  { path: 'projects', component: ProjectsComponent },

  // Einzelprojekte
  { path: 'projects/bmw', component: ProjectBmwComponent },
  { path: 'projects/dreicon', component: ProjectDreiconComponent },
  { path: 'projects/icsunonove', component: ProjectIcsunonoveComponent },

  // Fallback
  { path: '**', redirectTo: '' }
];
