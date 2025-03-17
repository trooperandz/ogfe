// Only for temp-example global state, until decide to use Redux Toolkit or another lib for global state and can remove if want

import React from "react";

type AppContentState = {
  testConfig?: string;
};

const AppContentContext = React.createContext<AppContentState>({});

export const AppContentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [configState, setConfigState] = React.useState<string>("");

  React.useEffect(() => {
    setConfigState("test");
  }, []);

  const state: AppContentState = React.useMemo(() => {
    return {
      testConfig: configState,
    };
  }, [configState]);

  return (
    <AppContentContext.Provider value={state}>
      {children}
    </AppContentContext.Provider>
  );
};
