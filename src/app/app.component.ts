import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { ArtifactsComponent } from './components/artifacts/artifacts.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    EcosystemComponent,
    ArtifactsComponent,
    WorkflowComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-ecosystem />
      <app-artifacts />
      <app-workflow />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    :host {
      display: block;
    }
    main {
      position: relative;
      z-index: 1;
    }
  `],
})
export class AppComponent {}
