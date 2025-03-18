import React from 'react';

type AppContentState = {
  user?: string;
};

export const AppContentContext = React.createContext<AppContentState>({});

// Only for temp-example global state, until decide to use Redux Toolkit or another lib for global state and can remove if want
export const AppContentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<string>('');

  React.useEffect(() => {
    setUser('Hassan');
  }, []);

  const state: AppContentState = React.useMemo(() => {
    return {
      user,
    };
  }, [user]);

  return (
    <AppContentContext.Provider value={state}>
      {children}
    </AppContentContext.Provider>
  );
};
