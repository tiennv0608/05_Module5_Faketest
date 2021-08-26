import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/books', book);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + '/books/' + id);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }
}
