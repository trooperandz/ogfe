import * as React from 'react';
import { Link as RouterLink } from 'react-router';

type Props = {
  text: string;
  url: string;
};

export const Link: React.FC<Props> = ({ text, url }) => {
  return (
    <RouterLink to={url} className="py-2 text-indigo-500">
      {text}
    </RouterLink>
  );
};
