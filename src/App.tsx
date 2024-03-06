import { ReactQueryDevtools } from "react-query/devtools";
import { Header } from "components/Header";
import { TodoForm } from "components/TodoForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { TodoList } from "components/TodoList";
import { Layout } from "components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Layout>
        <TodoForm />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
