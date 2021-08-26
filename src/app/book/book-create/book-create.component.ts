import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    });
  }

  submit() {
    const book = this.bookForm.value;
    this.bookService.create(book).subscribe(() => {
      alert('Tạo mới thành công');
      this.router.navigate(['books']);
    });
  }


}
