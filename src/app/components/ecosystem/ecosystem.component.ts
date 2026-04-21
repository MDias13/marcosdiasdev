import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface TechCard {
  title: string;
  badge: string;
  description: string;
  icon: string; // SVG path data
}

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.scss'],
})
export class EcosystemComponent {
  cards: TechCard[] = [
    {
      title: 'Angular',
      badge: 'FRONTEND',
      description:
        'Minha escolha para o front-end. Desenvolvo interfaces dinâmicas e reativas, focando em componentes reutilizáveis e uma experiência de usuário fluida.',
      icon: 'angular',
    },
    {
      title: 'NestJS / Node.js / Express',
      badge: 'BACK-END',
      description:
        'Utilizo para construir APIs modulares e seguras. Aplico o TypeScript no back-end para garantir código limpo e de fácil manutenção.',
      icon: 'nestjs',
    },
    {
      title: 'Java Spring Boot',
      badge: 'BACK-END',
      description:
        'Minha base para sistemas robustos. Trabalho no desenvolvimento de serviços escaláveis, integrando segurança e performance de forma sólida.',
      icon: 'spring',
    },
    {
      title: 'Oracle PL/SQL',
      badge: 'BANCO DE DADOS',
      description:
        'Lido com a camada de dados de forma estratégica. Escrevo Procedures e Packages otimizadas para garantir a integridade e velocidade das informações.',
      icon: 'database',
    },
  ];
}
