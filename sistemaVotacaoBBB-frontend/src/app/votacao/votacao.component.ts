import {Component, input, OnInit} from '@angular/core';
import {Participante} from '../model/participante';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-votacao',
  imports: [
    NgForOf
  ],
  templateUrl: './votacao.component.html',
  styleUrl: './votacao.component.css'
})
export class VotacaoComponent implements OnInit {

  participantes: Participante[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this.participantes = [
      { id: '1', name: 'Lucas' },
      { id: '2', name: 'Ana Pejas' },
      { id: '3', name: 'Marcos Campos' }
    ];
  }

  protected readonly input = input;
}
