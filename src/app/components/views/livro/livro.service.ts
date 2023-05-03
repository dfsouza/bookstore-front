import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: String): Observable<livro[]>{
     const url = `${this.baseUrl}/livros?categoria=${id_cat}`
     return this.http.get<livro[]>(url)   
  }

  findById(id: String):Observable<livro>{
    const url = `${this.baseUrl}/livros?categoria=${id}`
    return this.http.get<livro>(url)
  }

    update(livro: livro):Observable<livro>{
    const url = `${this.baseUrl}/livros/${livro.id}`
    return this.http.put<livro>(url, livro)
  }

  create(livro: livro, id_cat: String): Observable<livro> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<livro>(url, livro)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }
}
