import { Pipe, PipeTransform } from "@angular/core";
import { IEvento } from "../interfaces/interface.evento";

@Pipe({
    name: "sublista"
})
export class SubLista implements PipeTransform {
    transform(eventos: IEvento[], input: string): IEvento[] {
        if (!input) {
            return eventos;
        }
        return eventos.filter(evento => evento.descricao.toLowerCase()
            .includes(input.toLowerCase()));
    }
}