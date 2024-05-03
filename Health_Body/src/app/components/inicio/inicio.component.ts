import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AvisoComponent } from "../aviso/aviso.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
    imports: [HeaderComponent, AvisoComponent, FooterComponent, RouterLink, RouterOutlet]
})
export class InicioComponent {

}
