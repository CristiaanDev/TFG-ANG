import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isLargeScreen = false;
  isAuthenticated = false;
  username: string | null = null;
  private authSubscription!: Subscription;
  private usernameSubscription!: Subscription;

  constructor(public authService: AuthService, private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 768;
    this.authSubscription = this.authService.currentUser$.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    this.usernameSubscription = this.authService.username$.subscribe(
      (username) => {
        this.username = username;
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
