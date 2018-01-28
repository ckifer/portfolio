import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  { path : 'projects',
    component: ProjectsComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutMeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
