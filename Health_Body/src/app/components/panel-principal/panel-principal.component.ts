import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class PanelPrincipalComponent {
  constructor(public authService: AuthService) {}
}
