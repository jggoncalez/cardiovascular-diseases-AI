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
      name : "Home",
      way : "#",
      child : [
        {
          name : "Início",
          way : "/",
          child : []
        },
        {
          name : "Teste 2",
          way : "/",
          child : []
        },
        {
          name : "Teste 3",
          way : "/",
          child : []
        }
      ]
    },
    {
      name : "Dashboard",
      way : "#",
      child : [
        {
          name : "Início",
          way : "/",
          child : []
        },
        {
          name : "Teste 2",
          way : "/",
          child : []
        },
        {
          name : "Teste 3",
          way : "/",
          child : []
        }
      ]
    }
  ]
}
