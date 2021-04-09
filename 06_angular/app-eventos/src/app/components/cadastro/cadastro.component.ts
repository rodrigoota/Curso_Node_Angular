import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { IEvento } from "src/app/interfaces/interface.evento";
import { EventosService } from "src/app/services/eventos.service";

@Component({
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    // definir uma lsita de eventos
    public listaEventos : IEvento[];

    constructor(eventosService : EventosService){ //injeção de dependencia
        this.listaEventos = eventosService.getEventos();
        this.eventoSelecionado = {descricao: '', data: '', preco: 0}
        this.novoEvento = this.eventoSelecionado;
    }

    //para um evento selecionado
    public eventoSelecionado: IEvento;

    public selecionar(item: IEvento) : void {
        this.eventoSelecionado = item;
    }

    //para um novo evento
    private novoEvento: IEvento;

    public novo() {
        this.novoEvento = {descricao: '', data: '', preco: 0};
        this.eventoSelecionado = this.novoEvento;
    }

    public incluir(evento:IEvento): void {
        this.listaEventos.push(evento);
        window.alert('Evento incluído com sucesso')
    }

}