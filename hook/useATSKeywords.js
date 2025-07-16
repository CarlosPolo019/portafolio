// hooks/useATSKeywords.js
import { useState, useEffect, useMemo } from 'react';

// Keywords base para Carlos Escorcia
const BASE_KEYWORDS = {
  technical: [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'PHP', 'Laravel',
    'MySQL', 'MongoDB', 'AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes',
    'REST API', 'GraphQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js',
    'Express.js', 'Git', 'CI/CD', 'DevOps', 'Microservices'
  ],
  
  skills: [
    'Full-Stack Developer', 'Senior Developer', 'Software Engineer', 
    'Technical Lead', 'Frontend Developer', 'Backend Developer',
    'Cloud Architect', 'DevOps Engineer', 'API Developer',
    'Database Developer', 'Web Developer', 'Mobile Developer'
  ],
  
  experience: [
    '5+ years experience', 'Technical Leadership', 'Team Management',
    'Project Management', 'Agile', 'Scrum', 'Kanban', 'Code Review',
    'Mentoring', 'Problem Solving', 'Remote Work', 'Collaboration'
  ],
  
  industries: [
    'Enterprise Software', 'SaaS', 'E-commerce', 'Fintech', 'Startup',
    'Fortune 500', 'B2B', 'B2C', 'Digital Transformation',
    'Transportation Technology', 'Food Delivery', 'Logistics'
  ],
  
  education: [
    'Bachelor Degree', 'Systems Engineering', 'Universidad de la Costa',
    'Technical Certification', 'Agile Certification', 'AWS Certification',
    'Professional Development', 'Continuous Learning'
  ],
  
  location: [
    'Colombia', 'Barranquilla', 'South America', 'Remote Developer',
    'Remote Work', 'International Projects', 'Global Teams',
    'English Fluent', 'Spanish Native', 'Bilingual'
  ]
};

/**
 * Hook personalizado para optimización ATS
 * @param {string} jobDescription - Descripción del trabajo opcional
 * @param {string} targetRole - Rol objetivo opcional
 * @returns {object} Keywords optimizados y utilidades
 */
export const useATSKeywords = (jobDescription = '', targetRole = '') => {
  const [analyzedKeywords, setAnalyzedKeywords] = useState([]);
  const [matchScore, setMatchScore] = useState(0);
  const [loading, setLoading] = useState(false);

  // Función para extraer keywords de un texto
  const extractKeywords = (text) => {
    if (!text) return [];
    
    const words = text
      .toLowerCase()
      .replace(/[^\w\s.-]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .filter(word => !STOP_WORDS.includes(word));
    
    // Contar frecuencia
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    // Ordenar por frecuencia
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 50)
      .map(([word]) => word);
  };

  // Función para calcular score de coincidencia
  const calculateMatchScore = (jobKeywords, resumeKeywords) => {
    if (!jobKeywords.length || !resumeKeywords.length) return 0;
    
    const matches = jobKeywords.filter(keyword => 
      resumeKeywords.some(resumeKeyword => 
        resumeKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
        keyword.toLowerCase().includes(resumeKeyword.toLowerCase())
      )
    );
    
    return Math.round((matches.length / jobKeywords.length) * 100);
  };

  // Generar keywords optimizados basados en rol
  const generateRoleKeywords = useMemo(() => {
    const roleKeywords = {
      'full-stack': [...BASE_KEYWORDS.technical, 'Full-Stack Development', 'MEAN Stack', 'MERN Stack'],
      'frontend': ['React.js', 'Vue.js', 'Angular', 'TypeScript', 'CSS3', 'Responsive Design', 'UI/UX'],
      'backend': ['Node.js', 'API Development', 'Database Design', 'Server Architecture', 'Microservices'],
      'cloud': ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'DevOps', 'Infrastructure'],
      'senior': ['Technical Leadership', 'Architecture', 'Team Lead', 'Code Review', 'Mentoring'],
      'lead': ['Project Management', 'Team Management', 'Strategic Planning', 'Cross-functional']
    };

    const targetLower = targetRole.toLowerCase();
    let keywords = [...BASE_KEYWORDS.technical, ...BASE_KEYWORDS.skills];

    Object.keys(roleKeywords).forEach(role => {
      if (targetLower.includes(role)) {
        keywords = [...keywords, ...roleKeywords[role]];
      }
    });

    return [...new Set(keywords)]; // Eliminar duplicados
  }, [targetRole]);

  // Efecto para analizar job description
  useEffect(() => {
    if (!jobDescription.trim()) {
      setAnalyzedKeywords([]);
      setMatchScore(0);
      return;
    }

    setLoading(true);
    
    try {
      const jobKeywords = extractKeywords(jobDescription);
      const score = calculateMatchScore(jobKeywords, generateRoleKeywords);
      
      setAnalyzedKeywords(jobKeywords);
      setMatchScore(score);
    } catch (error) {
      console.error('Error analyzing keywords:', error);
    } finally {
      setLoading(false);
    }
  }, [jobDescription, generateRoleKeywords]);

  // Generar keywords dinámicos para contenido oculto
  const generateHiddenContent = () => {
    const allKeywords = [
      ...BASE_KEYWORDS.technical,
      ...BASE_KEYWORDS.skills,
      ...BASE_KEYWORDS.experience,
      ...BASE_KEYWORDS.industries,
      ...BASE_KEYWORDS.education,
      ...BASE_KEYWORDS.location,
      ...generateRoleKeywords,
      ...analyzedKeywords
    ];

    return [...new Set(allKeywords)].join(', ');
  };

  // Obtener recomendaciones de keywords faltantes
  const getMissingKeywords = () => {
    if (!analyzedKeywords.length) return [];
    
    return analyzedKeywords