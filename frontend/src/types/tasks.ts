export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'pending' | 'in progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  created_at: string;
  updated_at: string;

}

export interface TaskFormData {
  title: string;
  description: string;
  status: Task['status'];
  priority: Task['priority'];
  due_date?: string;

}

