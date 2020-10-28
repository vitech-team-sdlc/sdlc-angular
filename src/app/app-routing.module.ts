import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full'},
  {path: 'feed', component: FeedComponent},
  {path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
