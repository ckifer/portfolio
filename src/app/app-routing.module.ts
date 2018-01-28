import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  { path : '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
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
