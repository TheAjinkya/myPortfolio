import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects :any[] = []

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe(res=>{
      console.log(res)
      this.projects = res as any;
    })
  }

}
