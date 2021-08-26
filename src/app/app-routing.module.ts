import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';

const routes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
  path: 'books/create',
  component: BookCreateComponent
}, {
  path: 'books/detail/:id',
  component: BookDetailComponent
}, {
  path: 'books/edit/:id',
  component: BookEditComponent
}, {
  path: 'books/delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
