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
  currentPage = input.required<number>();
  totalPages = input.required<number>();
  baseUrl = input.required<string>();
  pages = computed<IPaginationConfig>(() => {
    const current = this.currentPage();
    const total = this.totalPages();
    const base = this.baseUrl();

    return {
      pageNumber: current,
      previousActive: current > 1,
      nextActive: current < total,
      ways: {
        wayPrevious: `${base}?page=${current - 1}`,
        wayCurrent: `${base}?page=${current}`,
        wayNext: `${base}?page=${current + 1}`
      }
    };
  });
}
