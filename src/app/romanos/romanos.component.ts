import { Component, Input, OnInit } from '@angular/core';
import { Model } from '../model';
import { HttpService } from './http.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-romanos',
  templateUrl: './romanos.component.html',
  styleUrls: ['./romanos.component.css']
})
export class RomanosComponent  {


  checkoutForm = this.formBuilder.group({
    decimal: '',
    romano: ''
  });

  model : Model = new Model();
  constructor(private service: HttpService, private formBuilder: FormBuilder){
  
    
  
  }

  onSubmit(): void {
    const num = this.checkoutForm.value['decimal'];
    if (num==''){
      const romano = this.checkoutForm.value['romano'];
      this.service.convertArabico(this.checkoutForm.value['romano']).subscribe(response => {
        this.model = response;
        this.checkoutForm = this.formBuilder.group({
          decimal: this.model.valor,
          romano: romano
        });
      })
    }else {
      this.service.convert(num).subscribe(response => {
        this.model = response;
        this.checkoutForm = this.formBuilder.group({
          decimal: num,
          romano: this.model.valor
        });
      });
    }
    
  }
}
