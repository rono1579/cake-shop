import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask, deleteTask } from '../api/tasks';
import type { Task } from '../types/tasks';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '@/components/ui/button';

function TaskItem({ task }: { task: Task }) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (data: { id: number; status: Task['status'] }) => 
      updateTask({ id: data.id, status: data.status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const toggleStatus = () => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    updateMutation.mutate({ id: task.id, status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteMutation.mutate(task.id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button onClick={toggleStatus} disabled={updateMutation.isPending}>
          {task.status === 'pending' ? '✓ Complete' : '↻ Reopen'}
        </Button>
        <Button onClick={handleDelete} disabled={deleteMutation.isPending}>
          🗑 Delete
        </Button>
      </CardFooter>
    </Card>

  );
}

export default TaskItem;