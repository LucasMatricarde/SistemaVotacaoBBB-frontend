import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VotacaoComponent} from './votacao/votacao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VotacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Votação BBB do Lucas';
}
