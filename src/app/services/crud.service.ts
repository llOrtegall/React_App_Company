import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; /** Esto es de JS */
import { User } from './User'; /** estructura del empeado */

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API01: string = 'http://localhost/empleados/'

  constructor(private clientHttp: HttpClient) {
    
  }
}
