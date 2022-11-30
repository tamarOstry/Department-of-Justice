import { ActivatedRoute } from '@angular/router';
import { institutes } from 'src/app/models/institutes.model';
import { SchoolService } from '../school.service';
import { MatIcon } from '@angular/material/icon';
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit, AfterViewInit {

  InstitutesList: institutes[] = [];
  displayedColumns: string[] =
  ["הוסף הזמנה","קוד שוסהיים","ח.פ/סמל מוסד","שכבת גיל","סוג מוסד",'עיר', 'כתובת', 'טלפון', 'מוסד',"משלמים",'יוו'];
  whereYou:string;
  dataSource!:MatTableDataSource<institutes>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource=new MatTableDataSource<institutes>(this.InstitutesList);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _schoolService: SchoolService,private _activeR: ActivatedRoute) {
    this._schoolService.GetAllInstitutesFromServer().subscribe(data=>{
      debugger
      this.InstitutesList=data;
      this.dataSource=new MatTableDataSource<institutes>(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
     });
     this.whereYou="מוסדות";
   }

   ngOnInit(): void {
    // this._activeR.paramMap.subscribe(paramMap => {
    //   if (paramMap.get("whereYou")) 
    //     this.whereYou = (paramMap.get("whereYou"));
    // }
    // );
  }
}
