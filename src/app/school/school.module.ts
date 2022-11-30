import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './institution/institution.component';
import { DataOperationsComponent } from './data-operations/data-operations.component';
import { SchoolService } from './school.service';
import { HttpClientModule } from '@angular/common/http';
import { WhereYouComponent } from './where-you/where-you.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    InstitutionComponent,
    DataOperationsComponent,
    WhereYouComponent
  ],
  imports: [
    CommonModule,HttpClientModule,MatIconModule,MatCheckboxModule,MatTableModule
    ,MatPaginatorModule,MatInputModule
  ],
  providers:[SchoolService]
})
export class SchoolModule { }
