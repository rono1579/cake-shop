// src/api/tasks.ts
import axiosClient from './axiosClient';
import type { Task } from '../types/tasks';

export interface CreateTaskData extends Omit<Task, 'id' | 'created_at' | 'updated_at'> {
  title: string;
  description?: string;
  status: 'pending' | 'in progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
}

export interface UpdateTaskData {
  id: number;
  status?: 'pending' | 'in progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  due_date?: string | null;
  title?: string;
  description?: string | null;
}

export const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axiosClient.get<Task[]>('/tasks');
  return data;
};

export const createTask = async (taskData: Omit<CreateTaskData, 'id' | 'created_at' | 'updated_at'>): Promise<Task> => {
  const { data } = await axiosClient.post<Task>('/tasks', taskData);
  return data;
};

export const updateTask = async ({ id, ...taskData }: UpdateTaskData): Promise<Task> => {
  const { data } = await axiosClient.put<Task>(`/tasks/${id}`, taskData);
  return data;
};

export const deleteTask = async (id: number): Promise<{ success: boolean }> => {
  const { data } = await axiosClient.delete<{ success: boolean }>(`/tasks/${id}`);
  return data;
};