import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.module';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(novaTarefa: Tarefa): void {
    const todasTarefas = this.listarTodos();

    novaTarefa.id = new Date().getTime();
    todasTarefas.push(novaTarefa);

    localStorage['tarefas'] = JSON.stringify(todasTarefas);
  }

  buscarTarefaPorId(idPesquisado: number): Tarefa {
    const todasTarefas = this.listarTodos();

    return todasTarefas.find((tarefa) => tarefa.id === idPesquisado);
  }

  atualizarTarefa(tarefa: Tarefa): void {
    const todasTarefas = this.listarTodos();

    todasTarefas.forEach((element, idx, arr) => {
      if (element.id === tarefa.id) {
        arr[idx] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(todasTarefas);
  }

  removerTarefa(idTarefa: number): void {
    const todasTarefas = this.listarTodos();

    let listaSemTarefa = todasTarefas.filter(
      (element) => element.id !== idTarefa
    );

    localStorage['tarefas'] = JSON.stringify(listaSemTarefa);
  }

  alterarStatusTarefa(idTarefa: number): void {
    const todasTarefas: Tarefa[] = this.listarTodos();

    todasTarefas.forEach((element, idx, arr) => {
      if (element.id === idTarefa) {
        arr[idx].concluida = !arr[idx].concluida;
      }
      localStorage['tarefas'] = JSON.stringify(todasTarefas);
    });
  }
}
