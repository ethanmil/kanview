import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';

const routes: Routes = [
  {
    path: 'organizations/:organizationId/projects',
    component: OrganizationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
