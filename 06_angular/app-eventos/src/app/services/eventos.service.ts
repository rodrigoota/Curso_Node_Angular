import { Injectable } from "@angular/core";
import { IEvento } from "../interfaces/interface.evento";

@Injectable()
export class EventosService {
    public getEventos(): IEvento[] {
        return [
            { descricao:'Palestra Angular', data : '2021-10-23', preco: 12000 },
            { descricao:'Manifestação Paulista', data : '2021-04-08', preco: 12 },
            { descricao:'Torneio de Tenis', data : '2021-10-23', preco: 250 },
            { descricao:'Congresso CREMESP', data : '2021-04-11', preco: 500 }
        ];
    }
}