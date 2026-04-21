import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  Inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  yearsCount = signal(0);
  projectsCount = signal(0);

  private targetYears = 4;
  private targetProjects = 10;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    // Staggered counter animation after hero appears
    setTimeout(() => this.animateCounter('years'), 2300);
    setTimeout(() => this.animateCounter('projects'), 2500);
  }

  private animateCounter(type: 'years' | 'projects'): void {
    const target = type === 'years' ? this.targetYears : this.targetProjects;
    const setter = type === 'years' ? this.yearsCount : this.projectsCount;
    const duration = 1200; // ms
    const steps = target;
    const stepTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setter.set(current);
      if (current >= target) {
        clearInterval(interval);
      }
    }, stepTime);
  }

  scrollTo(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
