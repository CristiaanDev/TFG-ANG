import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { AvisoComponent } from "../aviso/aviso.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
    imports: [FooterComponent, HeaderComponent, AvisoComponent, RouterLink]
})
export class RegistroComponent {

}
