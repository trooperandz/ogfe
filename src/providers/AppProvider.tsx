import * as React from 'react';

export type AppContentState = {
  user?: string;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContentContext = React.createContext<AppContentState>({});

// Only for temp-example global state, until decide to use Redux Toolkit or another lib for global state and can remove if want
export const AppContentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<string>('');

  // Can load user data etc upfront right here
  React.useEffect(() => {
    setUser('Hassan');
  }, []);

  const state: AppContentState = React.useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  return (
    <AppContentContext.Provider value={state}>
      {children}
    </AppContentContext.Provider>
  );
};
