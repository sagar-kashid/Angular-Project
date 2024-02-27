import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { DataServiceService } from '../../service/data-service.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-rfq-grid',
  templateUrl: './rfq-grid.component.html',
  styleUrls: ['./rfq-grid.component.css']
})
  
export class RfqGridComponent implements OnInit {
  private  rfqs:  Array<object> = [];
  constructor(private  dataService:  DataServiceService,private spinnerService: Ng4LoadingSpinnerService) { 
  
    }

  ngOnInit() {
     this.spinnerService.show();
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      this.dataService.GetRfqs().subscribe(
      (data:  Array<object>) => {
      this.spinnerService.hide();
 console.log(data.data);
        this.dataSource.data = data.data;
      }
    );
  }
    displayedColumns: string[] = ['rfq_id', 'customer_id', 'rfq_description', 'status','rfq_amount'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   GetRfqs(){
        this.spinnerService.show();
        this.dataService.GetRfqsData().subscribe((data:  Array<object>) => {
        this.spinnerService.hide();
        console.log("testtest");
        console.log(data);
           if(data){
                this.rfqs  =  data;
            }
        });
     }
}
export interface PeriodicElement {
    rfq_id: string;
    customer_id: number;
    rfq_description: string;
    status: string;
    rfq_amount: number;
}


