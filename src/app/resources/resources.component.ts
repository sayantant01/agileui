import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  tableData: any[] = [];
  resource: any = {};
  resourceIdToUpdate: number = -1;

  constructor(private http: HttpClient) { 
    this.getResources();
  }

  getResources() {
    this.http.get("http://localhost:8080/api/resources").subscribe(data => {
      console.log(data);
      this.tableData = data as any[];
    });
  }

  updateResource() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // this.http.put(`http://localhost:8080/api/resources/${this.resourceIdToUpdate}/update`, this.resource, httpOptions).subscribe(data => {
    //   console.log(data);
    //   this.getResources();
    //   this.resource = {};
    //   this.resourceIdToUpdate = -1;
    // });
  }

  setResourceToUpdate(resourceId: number) {
    this.resourceIdToUpdate = resourceId;
    this.http.get(`http://localhost:8080/api/projects/addresource`).subscribe(data => {
      console.log(data);
      this.resource = data;
    });
  }

  cancelUpdate() {
    this.resource = {};
    this.resourceIdToUpdate = -1;
  }
}