import { Component, computed, input } from '@angular/core';
import { IPaginationConfig } from './interfaces/pagination-config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  paginationConfig = input<IPaginationConfig>();
}
