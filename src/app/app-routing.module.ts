import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberFormComponent} from './member-form/member-form.component';
import {MembersComponent} from './members/members.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'members/:id/edit',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
