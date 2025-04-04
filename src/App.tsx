import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RootNavigation } from 'navigation/index';

import { AppContentProvider } from 'providers/AppProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <AppContentProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </AppContentProvider>
  );
}

export default App;
