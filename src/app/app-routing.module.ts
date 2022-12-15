import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTodosComponent } from './user-todos/user-todos.component';

const routes: Routes = [
{ path: "userTodos", component:UserTodosComponent},
{ path: "userDetails", component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
