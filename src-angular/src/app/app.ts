import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './shared/components/side-bar/side-bar';
import { ISideBarConfig } from './shared/components/side-bar/interfaces/side-bar-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Nome do projeto'); // TO-DO: Decidir o nome do projeto

  sideBarConfig : ISideBarConfig[] = [
    {
      name : "Dashboard",
      way : "#",
      child : [
        {
          name : "Inicio",
          way : "/dashboard",
          child : []
        },
        {
          name : "Graficos",
          way : "/graphs/page1",
          child : []
        },
        {
          name : "Sobre nós",
          way : "/about-us",
          child : []
        }
      ]
    }
  ]
}
