import { Component } from "@angular/core";
import { Tarefa } from "./tarefa.type";

@Component({
    selector: 'tarefas',
    templateUrl: './tarefas.component.html',
    styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent {

    novaTarefa: string = '';

    tarefas: Tarefa[] = [
        { descricao: 'Fazer exercícios', concluida: false },
        { descricao: 'Cozinhar', concluida: true },
        { descricao: 'Passear com o cachorro', concluida: false }
    ];

    adicionaTarefa() {
        this.tarefas.push({
            descricao: this.novaTarefa,
            concluida: false
        });
        this.novaTarefa = '';
    }

    inverteStatus(tarefa: Tarefa) {
        tarefa.concluida = !tarefa.concluida;
    }

    removeTarefa(indice: number) {
        this.tarefas.splice(indice, 1);
    }

}