import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendar2Line,
  RiMessage2Line,
} from 'react-icons/ri';

export const NavHome = [
  {
    name: 'Inicio',
    href: '/#home',
    active: true,
  },
  {
    name: 'Filosofía y propósito',
    href: '/#filosofia',
    active: false,
  },
  {
    name: 'Misión y Visión',
    href: '/#mision',
    active: false,
  },
  {
    name: 'Objetivos y valores',
    href: '/#objetivos',
    active: false,
  },
];
export const NavAdmin = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: <RiDashboardLine />,
  },
  {
    title: 'Shedule',
    href: '/admin/shedule',
    icon: <RiCalendar2Line />,
  },
  {
    title: 'Chat',
    href: '/admin/chat',
    icon: <RiMessage2Line />,
  },
];
export const NavStudent = [];
