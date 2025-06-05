const  tasks = [
  {
    id: '1',  // Unique identifier
    title: 'Complete project proposal',
    description: 'Write and submit the client project proposal document',
    status: 'In Progress',  // 'Not Started' | 'In Progress' | 'Completed'
    priority: 'High',       // 'Low' | 'Medium' | 'High'
    dueDate: '2023-11-30',  // YYYY-MM-DD format
    assignee: 'John Doe',
    createdAt: '2023-11-15T10:30:00Z', // ISO timestamp
    updatedAt: '2023-11-20T14:45:00Z',
    labels: ['Documentation', 'Urgent'],
    progress: 65,           // Percentage (0-100)
    isPinned: false
  },
  {
    id: '2',
    title: 'Fix login page bug',
    description: 'Users unable to login with Google accounts',
    status: 'Not Started',
    priority: 'Critical',   // Custom priority level
    dueDate: '2023-11-25',
    assignee: 'Sarah Chen',
    createdAt: '2023-11-18T09:15:00Z',
    updatedAt: '2023-11-18T09:15:00Z',
    labels: ['Frontend', 'Bug'],
    progress: 0,
    isPinned: true
  },
  {
    id: '3',
    title: 'Team retrospective meeting',
    description: 'Monthly sprint retrospective with engineering team',
    status: 'Completed',
    priority: 'Medium',
    dueDate: '2023-11-22',
    assignee: 'Alex Johnson',
    createdAt: '2023-11-01T13:00:00Z',
    updatedAt: '2023-11-22T17:30:00Z',
    labels: ['Meeting'],
    progress: 100,
    isPinned: false
  }
];

export default tasks;