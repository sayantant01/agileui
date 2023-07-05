import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  tableData: any[] = [];
  
  constructor(private http: HttpClient) { 
    this.http.get("http://localhost:8080/api/clients").subscribe(data => {
      console.log(123);
      console.log(data);
      this.tableData = data as any[];
    });
  
}
 
}
