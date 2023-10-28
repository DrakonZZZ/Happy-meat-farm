import { SiRoamresearch } from 'react-icons/si';
import { FaHeadSideVirus } from 'react-icons/fa';
import { VscFeedback, VscSettingsGear } from 'react-icons/vsc';
import { BiHelpCircle } from 'react-icons/bi';

const links = [
  {
    title: 'Products & Services',
    href: '/products',
    src: 'farm.webp',
  },
  {
    title: 'Shop',
    href: '/shop',
    src: 'chicken.webp',
  },
  {
    title: 'Abous Us',
    href: '/about',
    src: 'about.webp',
  },
  {
    title: 'Contact',
    href: '/contact',
    src: 'contact.webp',
  },
  {
    title: 'Employee Access',
    href: 'access',
    src: 'access.webp',
  },
];

const heroImages = [
  {
    id: 1,
    text: 'Solutions for a happier,',
    text2: 'humane future',
  },
  {
    id: 2,
    title: 'farm',
    text: 'Paths to a happier,',
    text2: 'more compassionate future',
  },
  {
    id: 3,
    text: 'Blueprints for a brighter,',
    text2: 'more joyous tomorrow',
  },
];

const dashboardLinks = [
  {
    id: 1,
    title: 'Home',
    link: 'home',
    icon: <SiRoamresearch size={22} className="text-secondary" />,
    imageSrc: 'dashboard/home.webp',
  },
  {
    id: 2,
    title: 'R&D Department',
    link: 'rndportal',
    icon: <SiRoamresearch size={22} className="text-secondary" />,
    imageSrc: 'dashboard/rnd.jpg',
  },
  {
    id: 3,
    title: 'HR Department',
    link: 'hrportal',
    icon: <FaHeadSideVirus size={22} className="h-7 w-7 text-secondary" />,
    imageSrc: 'dashboard/hr.jpg',
  },
  {
    id: 4,
    title: 'Feedback',
    link: 'feedback',
    icon: <VscFeedback size={22} className="h-7 w-7 text-secondary" />,
    imageSrc: 'dashboard/feedback.webp',
  },
];

const dashboardLinks2 = [
  {
    id: 1,
    title: 'Help Center',
    link: '/',
    icon: <BiHelpCircle size={22} className="text-secondary" />,
  },
  {
    id: 2,
    title: 'Settings',
    link: '/',
    icon: <VscSettingsGear size={22} className="h-7 w-7 text-secondary" />,
  },
];

export { links, heroImages, dashboardLinks, dashboardLinks2 };
