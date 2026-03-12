import { Component } from '@angular/core';
import { Pagination } from '../../../../shared/components/pagination/pagination';
import { IPaginationConfig } from '../../../../shared/components/pagination/interfaces/pagination-config';

@Component({
  selector: 'app-page-graphs2',
  imports: [Pagination],
  templateUrl: './page-graphs2.html',
  styleUrl: './page-graphs2.scss',
})
export class PageGraphs2 {
  paginationConfig : IPaginationConfig = {
    pageNumber : 2,
    previousActive : true,
    nextActive : false,
    ways : {
      wayCurrent : "/graphs/page2",
      wayNext : "#",
      wayPrevious : "/graphs/page1"
    }
  }
}
