import { Routes } from "@angular/router";
import { CadastroComponent } from "../cadastro/cadastro.component";
import { HomeComponent } from "../home/home.component";
import { NotFoundComponent } from "../notfound/notfound.component";

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "eventos", component: CadastroComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: NotFoundComponent}

]
