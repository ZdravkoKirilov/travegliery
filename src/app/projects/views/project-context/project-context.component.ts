import { Component, OnInit } from '@angular/core';

import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-project-context',
  templateUrl: './project-context.component.html',
  styleUrls: ['./project-context.component.scss'],
  providers: [ProjectDataService],
})
export class ProjectContextComponent {}
