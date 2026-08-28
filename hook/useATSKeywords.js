// hooks/useATSKeywords.js
import { useState, useEffect, useMemo } from 'react';

// Keywords base para Carlos Escorcia
const BASE_KEYWORDS = {
  technical: [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'PHP', 'Laravel',
    'MySQL', 'PostgreSQL', 'BigQuery', 'AWS', 'Google Cloud Platform',
    'REST API', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'React Native',
    'Express.js', 'Git', 'CI/CD', 'Looker Studio', 'AI Integrations'
  ],
  
  skills: [
    'Full-Stack Developer', 'Software Engineer', 'Lead Full-Stack Engineer',
    'Frontend Developer', 'Backend Developer', 'Mobile Developer',
    'Cloud Developer', 'API Developer', 'Automation Developer',
    'Database Developer', 'Web Developer'
  ],
  
  experience: [
    '8+ years experience', 'Technical Decision-Making', 'Architecture',
    'Project Planning', 'Code Review', 'Debugging', 'Refactoring',
    'Documentation', 'Problem Solving', 'Remote Work', 'Collaboration'
  ],
  
  industries: [
    'Enterprise Software', 'Client Web Platforms', 'B2B', 'B2C',
    'Digital Transformation', 'Transportation Technology', 'Corporate Transport',
    'Operations', 'Logistics', 'Business Automation'
  ],
  
  education: [
    'Systems Engineering', 'Universidad de la Costa', 'SIASOFT',
    'Android Studio', 'Information and Communication Technologies',
    'SENAsoft', 'Innovation', 'Professional Development', 'Continuous Learning'
  ],
  
  location: [
    'Colombia', 'Barranquilla', 'South America', 'Remote Developer',
    'Remote Work', 'International Projects', 'Global Teams',
    'English Fluent', 'Spanish Native', 'Bilingual'
  ]
};

const STOP_WORDS = [
  'and', 'the', 'for', 'with', 'from', 'that', 'this', 'you', 'your', 'are',
  'del', 'los', 'las', 'con', 'para', 'por', 'una', 'uno', 'que', 'como'
];

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
      'cloud': ['AWS', 'Google Cloud', 'CI/CD', 'Infrastructure', 'Monitoring', 'Deployments'],
      'senior': ['Technical Decision-Making', 'Architecture', 'Code Review', 'Debugging'],
      'lead': ['Technical Decision-Making', 'Project Planning', 'Architecture', 'Cross-functional']
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
    
    const resumeKeywords = generateRoleKeywords.map((keyword) => keyword.toLowerCase());

    return analyzedKeywords.filter((keyword) => {
      return !resumeKeywords.some((resumeKeyword) =>
        resumeKeyword.includes(keyword.toLowerCase()) ||
        keyword.toLowerCase().includes(resumeKeyword)
      );
    });
  };

  return {
    keywords: generateRoleKeywords,
    analyzedKeywords,
    matchScore,
    loading,
    hiddenContent: generateHiddenContent(),
    missingKeywords: getMissingKeywords(),
  };
};

export default useATSKeywords;
