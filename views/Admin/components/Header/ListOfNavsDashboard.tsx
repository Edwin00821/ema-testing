import React from 'react';
import { NavsDashboard } from './';
interface Props {
  menu: {
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
}
const ListOfNavsDashboard = ({ menu }: Props) => {
  return (
    <nav>
      <ul>
        {menu.map(({ title, href, icon }) => (
          <NavsDashboard title={title} href={href} icon={icon} />
        ))}
      </ul>
    </nav>
  );
};

export default ListOfNavsDashboard;
