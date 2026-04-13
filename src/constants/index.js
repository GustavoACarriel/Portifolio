export const NAV_LINKS = [
  { label: 'Sobre', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experiência', href: 'experience' },
  { label: 'Projetos', href: 'projects' },
  { label: 'Contato', href: 'contact' },
];

export const SKILLS = [
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'Django', level: 85, color: '#092E20' },
  { name: 'Java', level: 80, color: '#ED8B00' },
  { name: 'Spring Boot', level: 70, color: '#6DB33F' },
  { name: 'React', level: 80, color: '#61DAFB' },
  { name: 'JavaScript', level: 80, color: '#F7DF1E' },
  { name: 'SQL', level: 85, color: '#4479A1' },
  { name: 'AWS', level: 50, color: '#FF9900' },
  { name: 'Git', level: 80, color: '#F05032' },
  { name: 'Docker', level: 50, color: '#2496ED' },
];

export const EXPERIENCES = [
  {
    company: 'Adecco @ SHEIN',
    role: 'IT Team Lead & Systems Developer',
    period: 'Abr 2026 – Presente',
    description:
      'Liderou e organizou um time de suporte de TI, gerenciando tarefas e prioridades para garantir a eficiência operacional. Desenvolveu sistemas internos para automação de processos como controle de estoque, permissões de acesso e gestão de equipamentos por turno. Responsável pelo deploy e administração de servidores On-Premise, garantindo disponibilidade e estabilidade da infraestrutura local. Atuou como elo entre as equipes técnicas e a operação, impulsionando melhorias de processos através de soluções de software personalizadas.',
    techs: ['Python', 'Django', 'SQL Server', 'JavaScript', 'React.js', 'Microsoft Intune'],
  },
  {
    company: 'Adecco @ SHEIN',
    role: 'IT Technical Support Analyst',
    period: 'Jun 2024 – Mar 2026',
    description:
      'Desenvolvimento de sistemas internos para automação de processos como controle de estoque, permissões de acesso e gestão de equipamentos por turno. Deploy e gerenciamento de servidores On-Premise.',
    techs: ['Python', 'Django', 'SQL Server', 'JavaScript', 'React.js', 'Microsoft Intune'],
  },
  {
    company: 'Timeware',
    role: 'Back-End Developer',
    period: 'Dez 2023 – Abr 2024',
    description:
      'Desenvolvimento e manutenção de sistemas Java com Java Swing e Spring Boot. Principal projeto: sistema de gestão de medicamentos em farmácias e emissão de notas fiscais.',
    techs: ['Java', 'Spring Boot', 'SQL', 'Agile'],
  },
  {
    company: 'Ernst & Young (EY)',
    role: 'Technology Solution Delivery Intern',
    period: 'Ago 2022 – Ago 2023',
    description:
      'Desenvolvimento com SAP ABAP RESTful e SAP S/4HANA em projetos para hospitais e supermercados. Aplicação de metodologias ágeis e SQL.',
    techs: ['SAP ABAP', 'SAP S/4HANA', 'SQL', 'Scrum'],
  },
];

export const PROJECTS = [
  {
    title: 'Check IT',
    description:
      'Sistema feito para uso interno na SHEIN de controle e gestão de entrada e saída de equipamentos de TI, organizando a operação por turnos e garantindo a rastreabilidade dos equipamentos.',
    techs: ['Python', 'Django', 'React', 'Chart.js'],
    github: 'https://github.com/GustavoACarriel',
    demo: null,
  },
];
