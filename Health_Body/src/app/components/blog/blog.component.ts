import { Component } from '@angular/core';
import { AvisoComponent } from "../aviso/aviso.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [AvisoComponent, HeaderComponent, FooterComponent]
})
export class BlogComponent {

}
