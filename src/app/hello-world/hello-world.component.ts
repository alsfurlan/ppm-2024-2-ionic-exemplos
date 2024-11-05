import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    // template: '<h1> Hello World </h1>',
    // styles: 'h1 { color: red; }',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

    // public é opcional
    public nome: string = '';

    public limpar(): void {
        // Caso fosse javascript puro
        // document.getElementsByName('h1').innerText = 'Hello World';
        // document.getElementsByName('input')[0].value = '';
        this.nome = '';
    }

    setNome(evento: KeyboardEvent) {
        this.nome = (evento.target as HTMLInputElement).value;
    }
}