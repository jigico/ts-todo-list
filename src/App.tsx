import { ReactQueryDevtools } from "react-query/devtools";
import { Header } from "components/Header";
import { TodoForm } from "components/TodoForm";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <TodoForm />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
