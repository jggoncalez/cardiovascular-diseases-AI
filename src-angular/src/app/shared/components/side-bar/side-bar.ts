import { Component, input } from '@angular/core';
import { ISideBarConfig } from './interfaces/side-bar-config';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  sideBarConfig = input<ISideBarConfig[]>([])
}
