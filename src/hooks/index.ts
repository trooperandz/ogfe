import * as React from 'react';

import { AppContentContext } from 'providers/AppProvider';

export const useAppContext = () => {
  const { user } = React.useContext(AppContentContext);

  return { user } as const;
};
