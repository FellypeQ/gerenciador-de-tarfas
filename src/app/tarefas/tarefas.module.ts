import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
})
export class TarefasModule {}
