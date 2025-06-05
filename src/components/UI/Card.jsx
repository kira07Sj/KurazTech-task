import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Card({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title || '',
    description: task.description || '',
    status: task.status || 'Not Started',
    priority: task.priority || 'Medium',
    dueDate: task.dueDate || '',
    assignee: task.assignee || '',
    labels: task.labels ? [...task.labels] : [],
    progress: task.progress || 0,
    isPinned: task.isPinned || false,
  });

  // Status and priority options
  const statusOptions = ['Not Started', 'In Progress', 'Completed'];
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];

  // Color mappings
  const statusColors = {
    'Not Started': 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    Low: 'bg-gray-100 text-gray-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800',
    Critical: 'bg-red-100 text-red-800',
  };

  const handleSave = () => {
    onEdit({
      ...task,
      ...editedTask,
      labels: editedTask.labels.length > 0 ? editedTask.labels : task.labels,
      updatedAt: new Date().toISOString(),
    });
    setIsEditing(false);
  };

  const handleLabelChange = (e) => {
    const labels = e.target.value ? e.target.value.split(',').map((label) => label.trim()) : [];
    setEditedTask({ ...editedTask, labels });
  };

  return (
    <div
      className={`border rounded-lg p-4 shadow-sm transition-shadow relative ${
        task.isPinned ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
      }`}
    >
      {/* View Mode */}
      <div className={`${isEditing ? 'invisible' : 'visible'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{task.title}</h3>
            {task.description && (
              <p className="text-gray-600 text-sm mt-1">{task.description}</p>
            )}
            {task.assignee && (
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium">Assignee:</span> {task.assignee}
              </p>
            )}
          </div>
          {task.isPinned && <span className="text-yellow-500">📌</span>}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}`}>
            {task.status}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          {task.labels?.map((label, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {label}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500 mt-2">
          {task.dueDate && (
            <p>
              <span className="font-medium">Due:</span>{' '}
              {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
          <p>
            <span className="font-medium">Progress:</span> {task.progress}%
          </p>
        </div>

        <div className="flex justify-between items-center pt-3">
          <div className="text-xs text-gray-400">
            Updated: {new Date(task.updatedAt).toLocaleString()}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Icon icon="fluent:pen-20-filled" width="20" height="20" />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-2 py-1 text-red-600 hover:text-red-800 text-sm"
            >
              <Icon icon="fluent:delete-20-filled" width="20" height="20" />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Mode */}
      {isEditing && (
        <div className="absolute h-[500px] inset-0 bg-white rounded-lg p-4 shadow-lg border border-blue-200 z-10">
          <div className="space-y-3 h-full flex flex-col">
            <div className="flex-grow space-y-3 overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={editedTask.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assignee</label>
                <input
                  type="text"
                  value={editedTask.assignee}
                  onChange={(e) => setEditedTask({ ...editedTask, assignee: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={editedTask.status}
                    onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={editedTask.priority}
                    onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={editedTask.dueDate}
                  onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Labels</label>
                <input
                  type="text"
                  value={editedTask.labels.join(', ')}
                  onChange={handleLabelChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter labels (comma-separated)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Progress (%)</label>
                <input
                  type="number"
                  value={editedTask.progress}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, progress: parseInt(e.target.value) || 0 })
                  }
                  min="0"
                  max="100"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={editedTask.isPinned}
                  onChange={(e) => setEditedTask({ ...editedTask, isPinned: e.target.checked })}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">Pin Task</label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1 text-gray-700 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}