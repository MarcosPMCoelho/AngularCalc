import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CalculoService } from '../service/calculo.service';
import { CalculoElement } from '../calculo';
import { _calculoForm } from '../_calculoForm';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  /*calculoForm: any;*/
  _valorLiquido: any;
  _valorBruto: any;
  calculoForm!: FormGroup;
  VI!: number;
  qtdmes!: number;
  dataSource!: CalculoElement;

  constructor(private calculoService: CalculoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
  }


  calcular() {
    this.calculoService.getCalculo(this.VI, this.qtdmes).subscribe((data: any) =>
    {
      this.dataSource = data;
      this._valorBruto = data.valorBruto; //this.dataSource.valorBruto;
      this._valorLiquido = data.valorLiquido; // this.dataSource.valorLiquido;
    });


  }
}
