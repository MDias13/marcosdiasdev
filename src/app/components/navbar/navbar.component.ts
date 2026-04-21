import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  /** Whether the navbar has a solid/glass background (scrolled state) */
  isScrolled = signal(false);

  /** Whether the mobile drawer is open */
  isMobileMenuOpen = signal(false);

  /** Navigation links mapped to section IDs */
  navLinks = [
    { label: 'STACK', fragment: 'expertise' },
    { label: 'TRABALHO', fragment: 'work' },
    { label: 'PROCESSO', fragment: 'process' },
    { label: 'CONTATO', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(fragment: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
