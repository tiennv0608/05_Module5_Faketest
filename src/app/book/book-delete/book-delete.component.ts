import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  findById(id: number) {
    return this.bookService.findById(id).subscribe(data => {
      this.book = data;
    });
  }

  delete(id: number) {
    this.bookService.delete(id).subscribe(() => {
      alert('Xóa thành công');
      this.router.navigate(['books']);
    });
  }
}
