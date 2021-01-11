import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouter, TarefasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
