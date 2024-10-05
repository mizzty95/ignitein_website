import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-project-tabs',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './project-tabs.component.html',
  styleUrl: './project-tabs.component.css',
})
export class ProjectTabsComponent {}
