"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stasts from "@/components/Stasts";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  // Web Vitals monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => console.log('CLS:', metric));
          getFID((metric) => console.log('FID:', metric));
          getFCP((metric) => console.log('FCP:', metric));
          getLCP((metric) => console.log('LCP:', metric));
          getTTFB((metric) => console.log('TTFB:', metric));
        }).catch(() => {
          // Silently fail if web-vitals is not available
        });
      });
    }
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Carlos Escorcia - Senior Full-Stack Developer | React.js, Node.js, AWS Expert</title>
        <meta name="description" content="Welcome to Carlos Escorcia's portfolio. Experienced Full-Stack Developer with 5+ years in React.js, Node.js, AWS, and cloud architecture. Available for remote work worldwide." />
        <meta name="keywords" content="Carlos Escorcia Portfolio, Senior Full-Stack Developer, React.js Expert, Node.js Developer, AWS Cloud Architect, Remote Developer Colombia, JavaScript Expert, Technical Leadership, Enterprise Software Development, SaaS Development, Startup Experience, Fortune 500 Projects" />
        <meta name="author" content="Carlos Escorcia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cmescorcia.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmescorcia.com/" />
        <meta property="og:title" content="Carlos Escorcia - Senior Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Explore innovative web applications and cloud solutions by Carlos Escorcia. Expert in React.js, Node.js, AWS with 5+ years experience." />
        <meta property="og:image" content="https://cmescorcia.com/og-home.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cmescorcia.com/" />
        <meta name="twitter:title" content="Carlos Escorcia - Senior Full-Stack Developer" />
        <meta name="twitter:description" content="Explore innovative web applications and cloud solutions by Carlos Escorcia. Expert in React.js, Node.js, AWS with 5+ years experience." />
        <meta name="twitter:image" content="https://cmescorcia.com/og-home.jpg" />
        <meta name="twitter:creator" content="@cmescorcia" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla, Colombia" />
        <meta name="geo.position" content="10.9639;-74.7964" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carlos Escorcia",
              "jobTitle": "Senior Full-Stack Developer",
              "url": "https://cmescorcia.com",
              "email": "cmescorcia5@icloud.com",
              "telephone": "+57-300-123-4567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barranquilla",
                "addressRegion": "Atlántico",
                "addressCountry": "CO"
              },
              "sameAs": [
                "https://linkedin.com/in/cmescorcia",
                "https://github.com/cmescorcia",
                "https://twitter.com/cmescorcia",
                "https://instagram.com/cmescorcia"
              ],
              "knowsAbout": [
                "JavaScript", "TypeScript", "React.js", "Node.js", "AWS", "Google Cloud Platform",
                "Docker", "Kubernetes", "MySQL", "MongoDB", "REST APIs", "GraphQL",
                "Technical Leadership", "Agile Development", "DevOps", "CI/CD"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "description": "Full-Stack Web Development, Cloud Architecture, Technical Leadership"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Universidad de la Costa"
              },
              "knowsLanguage": [
                { "@type": "Language", "name": "Spanish", "fluency": "Native" },
                { "@type": "Language", "name": "English", "fluency": "Fluent" }
              ]
            })
          }}
        />
      </Head>

      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="xl:text-left text-center order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br />{" "}
                <span className="text-accent">Carlos Escorcia</span>
              </h1>
              <p className="max-2-[500px] mb-9 text-white/80">
                Welcome to the intersection of innovation and impact. With over 5
                years of experience, I specialize in creating dynamic web
                applications with Node.js, PHP, and React JS. I build reliable
                backends with MySQL and Node JS, and optimize cloud
                infrastructures using AWS and Google Cloud Platform. I also
                transform data into actionable insights with Power BI. Ready to
                see what we can achieve together? Explore more and discover how I
                can help turn your ideas into extraordinary realities.
              </p>

              {/* Comprehensive ATS Keywords Section - Hidden from UI */}
              <div className="sr-only" aria-hidden="true">
                {/* Professional Titles for ATS */}
                <h2>Carlos Escorcia - Senior Full-Stack Developer | Software Engineer | Technical Lead</h2>
                <h3>Full Stack Web Developer | Frontend Developer | Backend Developer | React.js Developer</h3>
                <h4>Node.js Developer | JavaScript Expert | AWS Developer | Cloud Architect</h4>
                <h5>DevOps Engineer | API Developer | Database Developer | Mobile Developer</h5>
                
                {/* Core Technical Skills */}
                <div>
                  <h6>Programming Languages & Technologies:</h6>
                  <p>JavaScript (ES6+), TypeScript, Python, PHP, Java, C#, HTML5, CSS3, SCSS, Sass, SQL, NoSQL, JSON, XML, YAML, GraphQL, REST APIs, WebSocket, Progressive Web Apps (PWA), Single Page Applications (SPA)</p>
                </div>
                
                <div>
                  <h6>Frontend Development:</h6>
                  <p>React.js, React Native, Next.js, Vue.js, Angular, Nuxt.js, Svelte, jQuery, Bootstrap, Tailwind CSS, Material-UI, Ant Design, Chakra UI, Styled Components, CSS-in-JS, Responsive Design, Mobile-First Design, Cross-Browser Compatibility, User Interface (UI), User Experience (UX), Accessibility (WCAG), Web Components, Micro-frontends</p>
                </div>
                
                <div>
                  <h6>Backend Development:</h6>
                  <p>Node.js, Express.js, Nest.js, Laravel, Symfony, Django, Flask, FastAPI, Spring Boot, .NET Core, ASP.NET, Ruby on Rails, Koa.js, Hapi.js, Serverless Functions, Lambda Functions, Microservices Architecture, Monolithic Architecture, Event-Driven Architecture, Domain-Driven Design (DDD)</p>
                </div>
                
                <div>
                  <h6>Databases & Data Management:</h6>
                  <p>MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch, Cassandra, DynamoDB, BigQuery, SQL Server, Oracle Database, SQLite, MariaDB, CouchDB, Neo4j, InfluxDB, Database Design, Data Modeling, Query Optimization, Data Warehousing, ETL Processes, Data Pipeline, Data Migration, ACID Properties, CAP Theorem</p>
                </div>
                
                <div>
                  <h6>Cloud Platforms & Services:</h6>
                  <p>Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Digital Ocean, Heroku, Vercel, Netlify, Railway, PlanetScale, Supabase, Firebase, EC2, S3, Lambda, CloudFront, RDS, VPC, IAM, Cloud Functions, Compute Engine, Cloud Storage, Cloud SQL, App Engine, Azure Functions, Azure Storage, Cloud Computing, Cloud Architecture, Infrastructure as Code (IaC), Serverless Computing, Edge Computing, Multi-Cloud Strategy, Hybrid Cloud</p>
                </div>
                
                <div>
                  <h6>DevOps & Infrastructure:</h6>
                  <p>Docker, Kubernetes, Jenkins, GitLab CI/CD, GitHub Actions, CircleCI, Travis CI, Azure DevOps, Terraform, Ansible, Chef, Puppet, Vagrant, Docker Compose, Docker Swarm, Helm, Istio, Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), CI/CD Pipelines, Continuous Integration, Continuous Deployment, Infrastructure Monitoring, Log Management, Alerting, Load Balancing, Auto-scaling, Blue-Green Deployment, Canary Deployment, Rolling Updates</p>
                </div>
                
                <div>
                  <h6>Testing & Quality Assurance:</h6>
                  <p>Unit Testing, Integration Testing, End-to-End Testing, Test-Driven Development (TDD), Behavior-Driven Development (BDD), Jest, Mocha, Chai, Cypress, Selenium, Playwright, Puppeteer, React Testing Library, Vue Test Utils, PHPUnit, PyTest, JUnit, TestNG, Postman, Insomnia, API Testing, Performance Testing, Load Testing, Security Testing, Code Quality, ESLint, Prettier, SonarQube</p>
                </div>
                
                <div>
                  <h6>Data Analytics & Business Intelligence:</h6>
                  <p>Power BI, Tableau, Looker Studio, Google Analytics, Google Data Studio, Metabase, Grafana, Data Visualization, Business Intelligence (BI), Data Analysis, Statistical Analysis, Reporting, Dashboard Development, KPI Tracking, Data Mining, Big Data, Apache Spark, Hadoop, Kafka, Stream Processing, Real-time Analytics, Predictive Analytics, Machine Learning Basics, Data Science Fundamentals</p>
                </div>
                
                <div>
                  <h6>Soft Skills & Leadership:</h6>
                  <p>Technical Leadership, Team Management, Team Lead, Project Management, Mentoring, Code Review, Pair Programming, Knowledge Transfer, Technical Documentation, Communication Skills, Presentation Skills, Problem Solving, Critical Thinking, Analytical Thinking, Decision Making, Conflict Resolution, Time Management, Prioritization, Adaptability, Innovation, Creativity, Collaboration, Cross-Functional Collaboration, Remote Team Management, Virtual Collaboration, Cultural Sensitivity, Emotional Intelligence</p>
                </div>
                
                <div>
                  <h6>Education & Experience:</h6>
                  <p>Bachelor's Degree Systems Engineering Universidad de la Costa, 5+ years experience, Senior Developer, Technical Leadership, Agile Methodologies, Scrum Master, AWS Certification, Google Cloud Certification, Professional Development, Continuous Learning, Remote Work, International Projects, Enterprise Software, SaaS, Startup Experience, Fortune 500, BussRide, iFood, Dash Develop, LiveDesign</p>
                </div>
                
                <div>
                  <h6>Location & Contact:</h6>
                  <p>Colombia, Barranquilla, South America, Remote Developer, cmescorcia5@icloud.com, LinkedIn: cmescorcia, GitHub: cmescorcia, Twitter: cmescorcia, Instagram: cmescorcia, English Fluent, Spanish Native, Available for Hire, Freelance, Contract Work, Full-Time Employment</p>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="/pdf/01_CARLOS_ESCORCIA_CV.pdf"
                  download="Carlos_Escorcia_CV.pdf"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        <Stasts />
      </section>
    </>
  );
};

export default Home;