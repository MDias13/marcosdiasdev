import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * FadeInDirective — Triggers a CSS fade-in + slide-up animation
 * when the host element enters the viewport via IntersectionObserver.
 *
 * Usage:
 *   <div appFadeIn></div>
 *   <div appFadeIn [fadeDelay]="200"></div>
 */
@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, OnDestroy {
  /** Delay before the animation starts (ms) */
  @Input() fadeDelay = 0;

  /** Threshold at which element is considered "in view" */
  @Input() fadeThreshold = 0.15;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;

    // Set initial hidden state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.7s ease ${this.fadeDelay}ms, transform 0.7s ease ${this.fadeDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: this.fadeThreshold }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
