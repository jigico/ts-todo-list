import { Header } from "components/Header";
import { TodoForm } from "components/TodoForm";
import { TodoList } from "components/TodoList";
import { Layout } from "components/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <TodoForm />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </Layout>
    </>
  );
}

export default App;
