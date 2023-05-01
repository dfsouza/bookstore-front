import { livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl =  environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: String): Observable<livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`
     return this.http.get<livro[]>(url)   
  }

}
