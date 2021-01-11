import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.module';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [new Tarefa(1, 'true', true), new Tarefa(2, 'false', false)];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
}
