import React from 'react';

interface Props {
  title: string;
  icon?: JSX.Element;
  BgColor?: string;
  TxtColor?: string;
}

const ChipOfTable = ({
  title,
  icon,
  BgColor = 'bg-secondary-light',
  TxtColor = 'text-primary',
}: Props) => {
  return (
    <span className={`${BgColor} py-1 px-2 text-xs font-bold ${TxtColor}`}>
      {icon}
      {title}
    </span>
  );
};

export default ChipOfTable;
