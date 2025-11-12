"use client";
import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Check,
  Calendar,
  Clock,
  Bell,
  X,
  Info,
  Crown
} from "lucide-react";

interface Reminder {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
}

interface ReminderFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  priority: "low" | "medium" | "high";
}

export default function ReminderContent() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Team Meeting",
      description: "Quarterly review with the team",
      date: "2025-11-15",
      time: "10:00",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      title: "Doctor Appointment",
      description: "Annual checkup",
      date: "2025-11-12",
      time: "14:30",
      priority: "medium",
      completed: false
    },
    {
      id: 3,
      title: "Project Deadline",
      description: "Submit final report",
      date: "2025-11-20",
      time: "23:59",
      priority: "high",
      completed: true
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<ReminderFormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    priority: "medium"
  });

  const priorityColors: Record<"low" | "medium" | "high", string> = {
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };

  const handleOpenModal = (reminder?: Reminder | null) => {
    if (reminder) {
      setEditingId(reminder.id);
      setFormData({
        title: reminder.title,
        description: reminder.description,
        date: reminder.date,
        time: reminder.time,
        priority: reminder.priority
      });
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        priority: "medium"
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      priority: "medium"
    });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.date || !formData.time) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      setReminders((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...formData } : r))
      );
    } else {
      const newReminder: Reminder = {
        id: Date.now(),
        ...formData,
        completed: false
      };
      setReminders((prev) => [...prev, newReminder]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this reminder?")) {
      setReminders((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const toggleComplete = (id: number) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          {/* Bagian Judul */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Reminders
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Manage your reminders and stay organized
            </p>
          </div>

          {/* Info Free Plan + Tombol Upgrade */}
          <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-2 rounded-xl text-sm sm:text-base shadow-sm">
            <Info className="w-4 h-4 text-yellow-700" />
            <span>
              <span className="font-semibold">Free Plan:</span> max{" "}
              <span className="font-bold">3 reminders</span>.
            </span>
            <button
              onClick={() => alert("Upgrade ke Premium")}
              className="flex cursor-pointer items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-3 py-1.5 rounded-lg transition"
            >
              <Crown className="w-4 h-4" />
              Upgrade
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => handleOpenModal()}
            className="cursor-pointer bg-primary hover:bg-primary/80 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
          >
            <Plus size={18} />
            Add New Reminder
          </button>
        </div>

        {/* ✅ Table View - Desktop Only */}
        <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <tr>
                {[
                  "Status",
                  "Title",
                  "Description",
                  "Date & Time",
                  "Priority",
                  "Actions"
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reminders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Bell className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-500 text-lg">No reminders yet</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Create your first reminder to get started
                    </p>
                  </td>
                </tr>
              ) : (
                reminders.map((r) => (
                  <tr
                    key={r.id}
                    className={`hover:bg-gray-50 transition-colors ${
                      r.completed ? "opacity-60" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleComplete(r.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          r.completed
                            ? "bg-green-500 border-green-500"
                            : "border-gray-300 hover:border-green-500"
                        }`}
                      >
                        {r.completed && (
                          <Check size={16} className="text-white" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {r.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">
                      {r.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(r.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock size={14} />
                          {r.time}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          priorityColors[r.priority]
                        }`}
                      >
                        {r.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleOpenModal(r)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Card View - Mobile Only */}
        <div className="grid gap-4 md:hidden">
          {reminders.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow">
              <Bell className="mx-auto h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-600 font-medium">No reminders yet</p>
              <p className="text-gray-400 text-sm">
                Create your first reminder
              </p>
            </div>
          ) : (
            reminders.map((r) => (
              <div
                key={r.id}
                className={`bg-white rounded-xl shadow p-4 border border-gray-100 ${
                  r.completed ? "opacity-60" : ""
                }`}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{r.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      priorityColors[r.priority]
                    }`}
                  >
                    {r.priority}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3">{r.description}</p>

                {/* Date & Time */}
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(r.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {r.time}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleComplete(r.id)}
                    className={`flex items-center gap-1 text-sm font-medium ${
                      r.completed
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    <Check size={16} />
                    {r.completed ? "Completed" : "Mark Done"}
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleOpenModal(r)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Add/Edit */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {editingId ? "Edit Reminder" : "Add New Reminder"}
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority: e.target.value as "low" | "medium" | "high"
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {editingId ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
