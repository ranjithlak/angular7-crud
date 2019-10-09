import { Component ,OnInit} from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from 'src/app/adunit.service';

@Component({
  selector: 'app-root',
  templateUrl: './service.component.html'
  
})
export class serviceComponent  implements OnInit{
  
  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService) { }

    


   ngOnInit(){
    this.adunitservice
    .getAdUnits()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
  });
}

   

   
}