import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  tableData: any[] = [];
  project: any = {};
  projectIdToUpdate: number = -1;

  constructor(private http: HttpClient) { 
    this.getProjects();
  }

  getProjects() {
    this.http.get("http://localhost:8080/api/projects").subscribe(data => {
      console.log(data);
      this.tableData = data as any[];
    });
  }

  createProject() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("http://localhost:8080/api/projects/new", this.project, httpOptions).subscribe(data => {
      console.log(data);
      this.getProjects();
      this.project = {};
    });
  }

  updateProject() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put("http://localhost:8080/api/projects/"+5+"/update", this.project, httpOptions).subscribe(data => {
      console.log(data);
      this.getProjects();
      this.project = {};
      this.projectIdToUpdate = -1;
    });
  }

  setProjectToUpdate(projectId: number) {
    this.projectIdToUpdate = projectId;
    this.http.get(`http://localhost:8080/api/projects/${projectId}`).subscribe(data => {
      console.log(data);
      this.project = data;
    });
  }

  cancelUpdate() {
    this.project = {};
    this.projectIdToUpdate = -1;
  }
}