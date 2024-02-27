import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  private  designers:  Array<object> = [];
  constructor(private  apiService:  ApiService,private spinnerService: Ng4LoadingSpinnerService) { 
    this.spinnerService.show();
    }
    ngOnInit() {
      this.getDesigners();
    }
    ngAfterViewInit() {
    this.spinnerService.hide();
    }
    public  getDesigners(){
    this.apiService.getDesigners().subscribe((data:  Array<object>) => {
            this.designers  =  data;
            console.log(data);
        });
    }
    createContact(){
        alert();
    };
}
