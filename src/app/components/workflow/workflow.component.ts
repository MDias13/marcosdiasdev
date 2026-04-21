import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  PLATFORM_ID,
  Inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent implements AfterViewInit {
  steps: WorkflowStep[] = [
    {
      number: '01',
      title: 'DESCOBERTA',
      description:
        'Análise profunda de requisitos e entendimento do problema para criar a melhor estratégia de solução.',
    },
    {
      number: '02',
      title: 'ARQUITETURA',
      description:
        'Planejamento da estrutura do sistema, garantindo escalabilidade, segurança e a escolha da stack ideal.',
    },
    {
      number: '03',
      title: 'DESENVOLVIMENTO',
      description:
        'Escrita de código limpo e eficiente, aplicando as melhores práticas de mercado e padrões de projeto.',
    },
    {
      number: '04',
      title: 'HOMOLOGAÇÃO',
      description:
        'Testes rigorosos e validação final junto ao cliente para garantir que tudo funcione com precisão absoluta.',
    },
  ];

  timelineActive = signal(false);
  private isBrowser: boolean;

  @ViewChild('timelineSection') timelineSection!: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.timelineActive.set(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(this.timelineSection.nativeElement);
  }
}
