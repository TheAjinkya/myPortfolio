import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'personal', component:PersonalComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'**', component:DashboardComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
