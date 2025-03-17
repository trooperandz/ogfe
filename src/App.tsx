import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppContentProvider } from "./providers/AppProvider";
import { RootNavigation } from "./navigation/index";

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
