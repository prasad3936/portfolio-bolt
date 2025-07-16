import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Award, 
  FolderOpen, 
  FileText, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';

type Section = 'personal' | 'experience' | 'education' | 'courses' | 'certificates' | 'projects' | 'blog';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { 
    personalInfo, 
    experiences, 
    education, 
    courses, 
    certificates, 
    projects, 
    blogPosts,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    deleteExperience,
    addEducation,
    updateEducation,
    deleteEducation,
    addCourse,
    updateCourse,
    deleteCourse,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    addProject,
    updateProject,
    deleteProject,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  } = useContent();

  const [activeSection, setActiveSection] = useState<Section>('personal');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const sections = [
    { id: 'personal' as Section, label: 'Personal Info', icon: User },
    { id: 'experience' as Section, label: 'Experience', icon: Briefcase },
    { id: 'education' as Section, label: 'Education', icon: GraduationCap },
    { id: 'courses' as Section, label: 'Courses', icon: BookOpen },
    { id: 'certificates' as Section, label: 'Certificates', icon: Award },
    { id: 'projects' as Section, label: 'Projects', icon: FolderOpen },
    { id: 'blog' as Section, label: 'Blog Posts', icon: FileText }
  ];

  const renderPersonalInfoForm = () => {
    const [formData, setFormData] = useState(personalInfo);

    const handleSave = () => {
      updatePersonalInfo(formData);
      setEditingItem(null);
    };

    return (
      <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Personal Information</h3>
          {editingItem !== 'personal' ? (
            <button
              onClick={() => setEditingItem('personal')}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit size={16} className="mr-2" />
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save size={16} className="mr-2" />
                Save
              </button>
              <button
                onClick={() => setEditingItem(null)}
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X size={16} className="mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>

        {editingItem === 'personal' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">About</label>
              <textarea
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div><strong>Name:</strong> {personalInfo.name}</div>
            <div><strong>Title:</strong> {personalInfo.title}</div>
            <div><strong>Location:</strong> {personalInfo.location}</div>
            <div><strong>Email:</strong> {personalInfo.email}</div>
            <div><strong>Phone:</strong> {personalInfo.phone}</div>
            <div><strong>WhatsApp:</strong> {personalInfo.whatsapp}</div>
            <div className="md:col-span-2"><strong>About:</strong> {personalInfo.about}</div>
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalInfoForm();
      case 'experience':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Experience</h3>
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={16} className="mr-2" />
                Add Experience
              </button>
            </div>
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingItem(exp.id)}
                      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteExperience(exp.id)}
                      className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-blue-400">{exp.company} - {exp.location}</p>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 text-center">
            <p className="text-gray-400">Content management for {activeSection} coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Portfolio Admin</h1>
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900 min-h-screen border-r border-zinc-800">
          <nav className="p-4">
            <ul className="space-y-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      <IconComponent size={20} className="mr-3" />
                      {section.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;