import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AvisoComponent } from "../aviso/aviso.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
    imports: [HeaderComponent, AvisoComponent]
})
export class InicioComponent {

}
