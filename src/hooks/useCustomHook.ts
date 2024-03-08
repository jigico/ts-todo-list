import { deleteTodo, toggleTodoDone } from "api/todos";
import { useMutation, useQueryClient } from "react-query";

export const QUERY_KEY_TODO = "todos";

export const useTodoQuery = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    mutationKey: [QUERY_KEY_TODO],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TODO] });
    }
  });

  const patchMutation = useMutation({
    mutationFn: toggleTodoDone,
    mutationKey: [QUERY_KEY_TODO],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TODO] });
    }
  });

  return { deleteMutation, patchMutation };
};
