import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
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
      this.bookForm = new FormGroup({
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      });
    });
  }

  update(id: number) {
    this.book = this.bookForm.value;
    this.bookService.update(id, this.book).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['books']);
    });

  }
}
