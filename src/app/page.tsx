"use client";

import React, { useState, useEffect } from 'react';

interface CodeLine {
  id: number;
  text: string;
  top: number;
}

interface MenuItem {
  name: string;
  description: string;
  details: string;
}

interface MenuSection {
  title: string;
  description: string;
  items: MenuItem[];
}

interface MenuSections {
  'chefs-tasting': MenuSection;
  'enterprise': MenuSection;
  'specialties': MenuSection;
}

const DevPortfolio = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuSections>('chefs-tasting');
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleTabChange = (newTab: keyof MenuSections) => {
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const codeSnippets = [
      "const lucas = new FullStackEngineer({ location: 'Austin, TX' });",
      "while(coffee.available()) { buildAmazingThings(); }",
      "// import { passion, creativity } from experience;",
      "const techStack = ['React', 'Python', 'AWS', 'PostgreSQL'];",
      "git commit -m 'Another feature shipped'",
      "SELECT * FROM opportunities WHERE impact > 0;",
      "docker compose up --scale innovation=∞",
      "npm install @lucas/problem-solving-skills",
      "const delayd = await processFlightCompensation();",
      "return solutions.map(idea => realWorldImpact);"
    ];

    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        if (newLines.length >= 6) {
          newLines.shift();
        }
        newLines.push({
          id: Date.now(),
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          top: Math.random() * 70 + 15,
        });
        return newLines;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, []);

  const menuSections: MenuSections = {
    'chefs-tasting': {
      title: "Chef's Tasting Menu",
      description: "Tonight's complete experience crafted with passion and precision",
      items: [
        {
          name: "Delayd",
          description: "Flight Delay Compensation Platform, FastAPI Backend, Supabase Infrastructure",
          details: "Production-ready backend processing flight status updates for real travelers. PostgreSQL database with auth systems, payment processing, and receipt verification for actual user compensation"
        },
        {
          name: "WebDUPER",
          description: "AI Website Replication, Claude Sonnet 4, Playwright Automation",
          details: "Reduces manual coding by 95% through intelligent HTML generation. Anti-bot detection with 90%+ success rate"
        },
        {
          name: "StreamShare",
          description: "Video Platform, Next.js, Google Cloud, Asynchronous Processing",
          details: "Event-driven architecture with Cloud Run workers for fault tolerance and horizontal scalability"
        }
      ]
    },
    'enterprise': {
      title: "Enterprise Experience",
      description: "Real-world systems at scale - where reliability meets innovation",
      items: [
        {
          name: "Enpower Resources",
          description: "Oil Well Monitoring Platform, React, WebSockets, AWS IoT Core",
          details: "Real-time platform processing 100k sensor readings per minute with 99.5% uptime. Built microservices architecture with AWS Lambda auto-scaling, reducing infrastructure costs by 30%"
        },
        {
          name: "Halliburton R&D",
          description: "Firmware Testing Frameworks, STM32H7, Python Automation",
          details: "Mission-critical systems for downhole drilling equipment in extreme environments"
        }
      ]
    },
    'specialties': {
      title: "Technical Specialties", 
      description: "The craft behind the code - modern tools wielded with expertise",
      items: [
        {
          name: "ML Sentiment Engine",
          description: "PyTorch, BERT Transformer, AWS EC2, Containerized Deployment",
          details: "94% accuracy processing 500k+ reviews with sub-200ms response times"
        },
        {
          name: "Real-time Recommendation System",
          description: "Apache Spark, Kafka Streaming, Collaborative Filtering",
          details: "Music recommendation engine with streaming pipeline processing user interactions. A/B testing framework improved engagement by 35%"
        },
        {
          name: "FlowState iOS",
          description: "Swift, Core Data, CloudKit, Apple Ecosystem Integration",
          details: "Native productivity app with seamless cross-device synchronization"
        },
        {
          name: "Backend Philosophy",
          description: "PostgreSQL for Reliability, FastAPI for Performance, Supabase for Velocity",
          details: "Scalable architectures that serve real users in production environments"
        }
      ]
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: '#f8f8f8',
      color: '#333',
      lineHeight: 1.4,
      fontSize: '13px',
      letterSpacing: '0.5px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
      }}>
        
        {/* Left Panel */}
        <div style={{
          padding: '40px 60px 140px 40px',
          background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
          position: 'relative',
          minHeight: '100vh',
          borderRight: '3px solid #6b5b73'
        }}>
          
          {/* Hamburger */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '30px',
            height: '20px',
            cursor: 'pointer'
          }}>
            <div style={{ height: '2px', background: '#666', margin: '4px 0' }}></div>
            <div style={{ height: '2px', background: '#666', margin: '4px 0' }}></div>
            <div style={{ height: '2px', background: '#666', margin: '4px 0' }}></div>
          </div>

          {/* Header */}
          <h1 style={{
            fontSize: '36px',
            fontWeight: 300,
            color: '#999',
            margin: '80px 0 8px 0',
            letterSpacing: '1px'
          }}>
            Le Code - Lucas Pham
          </h1>
          
          <a href="mailto:lucas.tru.pham@gmail.com" style={{
            fontSize: '11px',
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            textDecoration: 'none',
            marginBottom: '60px',
            display: 'inline-block'
          }}>
            Contact
          </a>

          {/* Section Nav */}
          <nav style={{ margin: '40px 0' }}>
            <a href="#work" style={{
              display: 'inline-block',
              marginRight: '40px',
              fontSize: '11px',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              textDecoration: 'none',
              padding: '8px 0',
              borderBottom: '1px solid #6b5b73',
              transition: 'all 0.3s ease'
            }}>
              Portfolio
            </a>
          </nav>

          {/* Menu Tabs */}
          <div style={{
            margin: '20px 0 40px 0',
            borderBottom: '1px solid #e0e0e0'
          }}>
            {(Object.entries(menuSections) as [keyof MenuSections, MenuSection][]).map(([key]) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                onMouseEnter={(e) => {
                  if (activeTab !== key) {
                    (e.target as HTMLButtonElement).style.color = '#6b5b73';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== key) {
                    (e.target as HTMLButtonElement).style.color = '#999';
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '11px',
                  color: activeTab === key ? '#6b5b73' : '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  padding: '12px 30px 12px 0',
                  marginRight: '20px',
                  cursor: 'pointer',
                  borderBottom: activeTab === key ? '2px solid #6b5b73' : '1px solid transparent',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
              >
                {key.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ 
            marginBottom: '20px',
            opacity: 1,
            animation: 'fadeInUp 0.5s ease-in-out'
          }}>
            <p style={{
              fontStyle: 'italic',
              color: '#666',
              marginBottom: '30px',
              fontSize: '13px',
              lineHeight: 1.6
            }}>
              {menuSections[activeTab].description}
            </p>

            <div>
              {menuSections[activeTab].items.map((item: MenuItem, index: number) => (
                <div 
                  key={index} 
                  style={{ 
                    marginBottom: '35px',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#5a4f59',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px'
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    color: '#333',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    marginBottom: '6px'
                  }}>
                    {item.description}
                  </p>
                  <p style={{
                    fontStyle: 'italic',
                    color: '#999',
                    fontSize: '12px',
                    lineHeight: 1.5
                  }}>
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '60px',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '15px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 10,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
          }}>
            <a href="/resume.pdf" style={{
              fontSize: '11px',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center'
            }}>
              Download Resume
              <span style={{ marginLeft: '8px', fontSize: '8px' }}>●</span>
            </a>
            
            <div style={{
              marginTop: '15px',
              paddingTop: '15px',
              borderTop: '1px solid #f0f0f0'
            }}>
              <p style={{
                fontSize: '10px',
                color: '#ccc',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                Connect
              </p>
              <a href="https://github.com/lpham259" style={{
                display: 'block',
                fontSize: '9px',
                color: '#999',
                marginBottom: '3px',
                textDecoration: 'none'
              }}>
                GitHub Profile
              </a>
              <a href="https://linkedin.com/in/lucas-p-60433a24b/" style={{
                display: 'block',
                fontSize: '9px',
                color: '#999',
                marginBottom: '3px',
                textDecoration: 'none'
              }}>
                LinkedIn Profile
              </a>
              <a href="mailto:lucas.tru.pham@gmail.com" style={{
                display: 'block',
                fontSize: '9px',
                color: '#999',
                textDecoration: 'none'
              }}>
                Email Contact
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{
          backgroundColor: '#0f172a',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          
          {/* Animated Code Background */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.1,
            fontFamily: "'Courier New', monospace",
            fontSize: '12px',
            color: '#00ff41',
            overflow: 'hidden'
          }}>
            {codeLines.map((line) => (
              <div
                key={line.id}
                style={{
                  position: 'absolute',
                  top: `${line.top}%`,
                  whiteSpace: 'nowrap',
                  animation: 'slideLeft 20s linear infinite'
                }}
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Terminal Window */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            margin: '20px',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: '#000',
              borderRadius: '8px',
              padding: '20px',
              fontFamily: "'Courier New', monospace",
              color: '#00ff41',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              maxWidth: '400px',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '15px'
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca3f' }}></div>
              </div>
              
              <div style={{ fontSize: '11px', lineHeight: 1.4 }}>
                <div style={{ color: '#00ff41', marginBottom: '10px' }}>
                  <span style={{ color: '#6495ed' }}>$</span> whoami
                </div>
                <div style={{ color: '#fff', marginBottom: '15px' }}>
                  Lucas Pham<br/>
                  Full-Stack Engineer @ UT Austin<br/>
                  Backend Specialist • Team Player<br/>
                  Real-World Problem Solver
                </div>
                
                <div style={{ color: '#00ff41', marginBottom: '10px' }}>
                  <span style={{ color: '#6495ed' }}>$</span> cat status.txt
                </div>
                <div style={{ color: '#fff', marginBottom: '15px', fontSize: '10px' }}>
                  Seeking 2026 SWE Opportunities<br/>
                  Backend + Full-Stack Focus<br/>
                  Big Tech & Innovative Startups<br/>
                  Coffee-Powered Development
                </div>

                <div style={{ color: '#00ff41', marginBottom: '10px' }}>
                  <span style={{ color: '#6495ed' }}>$</span> cat personal.md
                </div>
                <div style={{ color: '#fff', marginBottom: '15px', fontSize: '10px' }}>
                  Passionate foodie exploring Austin&apos;s culinary scene<br/>
                  Dedicated to consistent gym training and strength building<br/>
                  Always seeking new flavors and fitness challenges<br/>
                  Believes great code comes from a balanced life
                </div>

                <div style={{ color: '#00ff41', marginBottom: '8px' }}>
                  <span style={{ color: '#6495ed' }}>$</span> connect --lucas
                  <span style={{ 
                    color: '#00ff41', 
                    opacity: cursorVisible ? 1 : 0,
                    transition: 'opacity 0.1s ease'
                  }}>_</span>
                </div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '9px' }}>
                  <a 
                    href="mailto:lucas.tru.pham@gmail.com" 
                    style={{ 
                      color: '#da70d6', 
                      textDecoration: 'none'
                    }}
                  >
                    Email
                  </a>
                  <a 
                    href="https://linkedin.com/in/lucas-p-60433a24b/" 
                    style={{ 
                      color: '#6495ed', 
                      textDecoration: 'none'
                    }}
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/lpham259" 
                    style={{ 
                      color: '#999', 
                      textDecoration: 'none'
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default DevPortfolio;