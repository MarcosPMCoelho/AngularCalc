import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { CalculoElement } from '../calculo';

var httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  url = 'http://localhost:32740/api/Calculo?';

  constructor(private http: HttpClient) { }


  getCalculo(VI: number, qtdMes: number): Observable<CalculoElement> {
    console.log(VI);
    console.log(qtdMes);
    const apiurl = `${this.url}VI=${VI}&qtdmes=${qtdMes}`;
    console.log(apiurl);
    return this.http.get<CalculoElement>(apiurl);
  }
}
