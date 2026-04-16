import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Project {
  title: string;
  role: string;
  chronology: string; // Ejemplo: 'Jan 2023 - Present'
  description: string;
  techStack: string[];
  image: string;
  achievements: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './project.component.scss' // Asegúrate de corregir el nombre aquí
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'GoPoli Institutional App',
      role: 'Android Developer',
      chronology: 'May 2019 - Sep 2020',
      description: 'Institutional application for Politécnico Grancolombiano featuring campus services and SSO integration.',
      techStack: ['Java', 'Kotlin', 'OAuth2/OIDC', 'FCM', 'Material Design'],
      image: 'assets/projects/gopoli.png',
      achievements: [
        'Led development and release, designing a clean, Material Design-compliant UI/UX.',
        'Integrated third-party APIs including SSO OAuth2/OIDC, academic systems, and FCM notifications.',
        'Carried out systematic testing, debugging, and performance optimisation for multi-version compatibility.'
      ],
      link: 'https://github.com/paul9834'
    },
    {
      title: 'Qinaya Remote Desktop',
      role: 'Android Developer',
      chronology: 'Oct 2020 - Jan 2022',
      description: 'Android applications for remote desktop access with a strong focus on secure communication and network protocols.',
      techStack: ['Android SDK', 'Network Protocols', 'Security', 'Encryption'],
      image: 'assets/projects/qinaya.png',
      achievements: [
        'Ensured stable and secure communication through advanced user authentication.',
        'Applied encryption protocols to safeguard sensitive data during remote sessions.',
        'Implemented performance optimisations across devices and resolutions to deliver a smooth user experience.'
      ],
      link: 'https://github.com/paul9834'
    },
    {
      title: 'DaviPlata Financial App (Valid)',
      role: 'Android Developer',
      chronology: 'Jun 2022 - Aug 2024',
      description: "Development and maintenance of key features for Colombia's most-used financial app, serving over 18 million active users.",
      techStack: ['Kotlin', 'Java', 'Android SDK', 'Performance Optimization', 'Security'],
      image: 'assets/projects/daviplata.png',
      achievements: [
        'Ensured the stability, security, and smooth processing of millions of daily transactions on Android and Huawei builds.',
        'Drove performance optimisation and incident resolution.',
        'Delivered continuous improvements to the UI and integrations with banking services.'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.davivienda.daviplataapp'
    },
    {
      title: 'SIBEL Biometric Solution (Grupo ASD)',
      role: 'Senior Android Developer',
      chronology: 'May 2025 - Dec 2025',
      description: 'Specialised biometric solution deployed on Aratek Marshall 8 tablets for industrial environments.',
      techStack: ['Android SDK', 'BMAPI SDK', 'Hardware Integration', 'Kotlin', 'Java'],
      image: 'assets/projects/asd.png',
      achievements: [
        'Integrated BMAPI SDK for fingerprint capture, MRZ reading, and QR code scanning.',
        'Optimised performance, stability, and power management for industrial Android devices.',
        'Contributed to PoC testing and UI adaptation across varied screen form factors.'
      ],
      link: 'https://github.com/paul9834'
    },
    {
      title: 'Dinastía - Pet Management App',
      role: 'Senior Developer',
      chronology: 'Dec 2025 - Present',
      description: 'Native iOS application for pet management with a focus on smooth user journeys and high-performance API integrations.',
      techStack: ['Swift', 'Kotlin', 'Spring Boot', 'REST APIs', 'iOS SDK'],
      image: 'assets/projects/dinastia.png',
      achievements: [
        'Developed core pet management features adhering to Apple Human Interface Guidelines.',
        'Designed and built Kotlin-based backend services to support mobile functionality.',
        'Collaborated with product and engineering teams to deliver reliable, scalable, production-ready releases.'
      ],
      link: 'https://github.com/paul9834'
    }
  ];
}
