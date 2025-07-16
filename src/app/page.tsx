'use client';

import React from 'react';
import { ExternalLink, Github, Mail, Linkedin, Code, Database, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "WebDUPER",
      description: "AI-powered HTML replica generator that converts website URLs into code using Claude Sonnet 4 API, reducing manual coding time by 95%",
      tech: ["Python", "FastAPI", "React/Next.js", "TypeScript", "Anthropic API", "Playwright"],
      features: [
        "Visual analysis pipeline with screenshot capture and DOM extraction",
        "Hyperbrowser cloud API integration for anti-bot detection",
        "Real-time job tracking with progress monitoring",
        "90%+ success rate vs 60% with local browsers"
      ],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "StreamShare",
      description: "Scalable video sharing platform with Google OAuth authentication and automated video processing pipeline",
      tech: ["Next.js", "TypeScript", "Firebase", "Google Cloud Platform", "Firestore", "FFmpeg"],
      features: [
        "Secure video upload with Cloud Storage signed URLs",
        "Asynchronous video processing with Cloud Pub/Sub",
        "Auto-transcoding to multiple formats (360p, 720p)",
        "Event-driven architecture for fault tolerance"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Amazon NLP Classifier",
      description: "Machine learning model for sentiment analysis and classification of Amazon product reviews",
      tech: ["Python", "PyTorch", "NumPy", "pandas", "Matplotlib", "NLP"],
      features: [
        "Advanced sentiment analysis on product reviews",
        "Custom neural network architecture",
        "Data preprocessing and feature engineering",
        "Model evaluation and performance metrics"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-600 to-teal-600"
    }
  ];

  const openProject = (projectName: string) => {
    const urls: Record<string, string> = {
      'WebDUPER': 'https://github.com/lpham259/WebDUPER',
      'StreamShare': 'https://github.com/lpham259/StreamShare',
      'Amazon NLP Classifier': 'https://github.com/lpham259/Amazon-NLP-Classifier'
    };
    
    window.open(urls[projectName], '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Lucas Pham</h1>
              <p className="text-gray-400 text-lg">Computer Engineering Student & Software Developer</p>
              <p className="text-gray-500 mt-1">University of Texas Austin • GPA: 3.80</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="mailto:lucaspham59@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/lucas-p-60433a24b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/lpham259" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">About</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            I'm a Computer Engineering student at UT Austin with experience in full-stack development, 
            machine learning, and embedded systems. I've interned at Enpower Resources and Halliburton, 
            where I worked on real-time monitoring systems, firmware development, and cloud infrastructure. 
            I'm passionate about building scalable applications and solving complex technical challenges.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProject(project.title)}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 group-hover:bg-gray-600"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL", "Swift"].map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Flask", "FastAPI"].map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Google Cloud", "Docker", "Git", "MongoDB", "Firebase"].map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["NumPy", "pandas", "PyTorch", "Matplotlib"].map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
};

export default Portfolio;