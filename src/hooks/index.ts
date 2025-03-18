import * as React from 'react';

import { AppContentContext, AppContentState } from 'providers/AppProvider';

export const useAppContext = () => {
  const { user, setUser } =
    React.useContext<AppContentState>(AppContentContext);

  return { user, setUser } as const;
};
