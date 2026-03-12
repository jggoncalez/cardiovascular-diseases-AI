import { Component } from '@angular/core';
import { Pagination } from '../../../../shared/components/pagination/pagination';
import { IPaginationConfig } from '../../../../shared/components/pagination/interfaces/pagination-config';

@Component({
  selector: 'app-page-graphs1',
  imports: [Pagination],
  templateUrl: './page-graphs1.html',
  styleUrl: './page-graphs1.scss',
})
export class PageGraphs1 {
  paginationConfig : IPaginationConfig = {
    nextActive : true,
    previousActive : false,
    pageNumber : 1,
    ways : {
      wayPrevious : "#",
      wayCurrent : "/graphs/page1",
      wayNext : "/graphs/page2"
    }
  }
}
