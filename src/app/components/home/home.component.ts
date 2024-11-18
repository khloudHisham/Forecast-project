import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,DatePipe,NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  data: any={} ;
  location:any = ''
  search:string = ''

  constructor(private _api: ApiService) { this.getLocation()
  }
getLocation(){
  this._api.getlocation().subscribe((data)=>{
    this.location = data.city
    this.getData();
  })
 
}


getData(){
    if (this.search == '') {
      this._api.getData(this.location).subscribe((res) => {
        this.data = res;
        console.log(res);
      });
    }
    else{
      this._api.getData(this.search).subscribe((res) => {
        this.data = res;
        console.log(res);
      });
    }
      
    
    
  }
}




