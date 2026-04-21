import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface Project {
  label: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  image: string;
}

@Component({
  selector: 'app-artifacts',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss'],
})
export class ArtifactsComponent {
  projects: Project[] = [
    {
      label: 'GESTÃO HOSPITALAR',
      title: 'UNICARE - UNIMED FORTALEZA',
      description:
        'Projeto voltado à administração de pacientes em sistemas de Home Care dentro da operadora de saúde, otimizando o fluxo de atendimento domiciliar.',
      tags: ['ANGULAR', 'NODE.JS', 'NESTJS'],
      featured: true,
      image: '/assets/images/unicare.png',
    },
    {
      label: 'CENTRAL CORPORATIVA',
      title: 'MESA DE TRABALHO - UNIMED FORTALEZA',
      description:
        'Central corporativa unificada que consolida diversas ferramentas internas para facilitar o acesso e a agilidade da gestão no dia a dia.',
      tags: ['ANGULAR', 'NODE.JS', 'NESTJS'],
      featured: true,
      image: '/assets/images/mesa.png',
    },
    {
      label: 'PERFORMANCE & GESTÃO',
      title: 'GESTÃO UNIMED',
      description:
        'Sistema estratégico para gestores focado em melhorar o desempenho e a produtividade das equipes através de indicadores em tempo real.',
      tags: ['ANGULAR', 'NODE.JS', 'NESTJS'],
      featured: false,
      image: '/assets/images/gestao.png',
    },
    {
      label: 'SISTEMA LABORATORIAL',
      title: 'ULIS UNIMED',
      description:
        'Sistema de laboratório completo e integrado com os principais laboratórios, visando o melhor atendimento e precisão para os colaboradores.',
      tags: ['ANGULAR', 'NODE.JS', 'NESTJS'],
      featured: false,
      image: '/assets/images/ulis.png',
    },
  ];
}
