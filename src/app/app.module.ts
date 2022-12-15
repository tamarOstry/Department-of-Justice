import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { UsersComponent } from './users/users.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import {MatListModule} from '@angular/material/list';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserTodosComponent,
    UserDetailsComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
