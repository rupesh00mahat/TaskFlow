export interface User {
    id: string,
    name: string, 
    email: string
}

export interface Project{
    id: string | number;              // Unique ID for the project
  title: string;           // Title of the project (required)
  description?: string;    // Optional description of the project
  createdAt: string;  
  status:  string    // Date when the project was created (in ISO string format)
}

export interface Task{
    id: string | number;              // Unique ID for the project
  title: string;           // Title of the project (required)
  description?: string;    // Optional description of the project
  dueDate: string;  
  createdAt? : string;
  status:  'todo' | 'in-progress' |  'done';  // Date when the project was created (in ISO string format)
  projectId?: string;
}