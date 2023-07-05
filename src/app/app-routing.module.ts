import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{RegisterComponent} from './register/register.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  // ... other routes ...
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'resources', component: ResourcesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'clients', component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }