import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Mail, Linkedin, Github, ExternalLink, Briefcase, User, Code2, Send, Network, Layers, Route, Shuffle, Menu, X, Download } from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  };

  const languages = [
    { label: 'Python', src: 'https://cdn.simpleicons.org/python' },
    { label: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript' },
    { label: 'Java', src: '/icons/java.svg' },
    { label: 'Bash', src: 'https://cdn.simpleicons.org/gnubash' },
  ];

  const frameworks = [
    { label: 'React', src: 'https://cdn.simpleicons.org/react' },
    { label: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs' },
    { label: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss' },
    { label: 'FastAPI', src: 'https://cdn.simpleicons.org/fastapi' },
  ];

  const tools = [
    { label: 'Git', src: 'https://cdn.simpleicons.org/git' },
    { label: 'VirtualBox', src: 'https://cdn.simpleicons.org/virtualbox' },
    { label: 'Linux', src: 'https://cdn.simpleicons.org/linux' },
    { label: 'Cisco Packet Tracer', src: 'https://cdn.simpleicons.org/cisco' },
    { label: 'AWS', src: '/icons/aws.svg' },
  ];

  const databases = [
    { label: 'MySQL', src: 'https://cdn.simpleicons.org/mysql' },
    { label: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql' },
    { label: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb' },
    { label: 'Supabase', src: 'https://cdn.simpleicons.org/supabase' },
    { label: 'DynamoDB', src: '/icons/dynamodb.svg' },
  ];

  const networks = [
    { label: 'TCP/IP', icon: <Network size={14} /> },
    { label: 'VLANs', icon: <Layers size={14} /> },
    { label: 'Routing', icon: <Route size={14} /> },
    { label: 'Switching', icon: <Shuffle size={14} /> },
  ];

  const projects = [
    {
      title: 'Semillero-Classroom Google Educativo',
      desc: 'Plataforma web que se integra con Google Classroom para proporcionar visualizaciones y análisis del rendimiento académico de estudiantes. Reduce el 85% de llamadas a Google Classroom API, un TTL de caché de 60 segundos y una mejora de tiempo de carga inicial de unos 2-3 segundos.',
      tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Google Classroom API'],
      img: '/icons/dashboard-sem.png', 
      github:'https://github.com/j0se0101/semillero-google', 
      demo: 'https://semillero-google.vercel.app/' 
    },
    {
      title: 'Gestión de productos e inventarios',
      desc: 'Aplicación web moderna que permite a los usuarios gestionar productos e inventarios de manera eficiente.Reduce el 80% de datos transferidos debido a server-side y a la paginación de datos,seguridad robusta con RLS y autenticación JWT, UX fluida con feedback instantáneo y estados de carga, arquitectura modular y código mantenible  ',
      tags: ['React', 'Vite', 'Typescript', 'Tailwind', 'Supabase'],
      img: '/icons/gestion.png',
      github: 'https://github.com/j0se0101/gestion_productos',
      demo: 'https://gestion-productos-prod.vercel.app/login'
    },
    {
      title: 'Sistema dictado por voz al bloc de notas',
      desc: 'Aplicación de escritorio para Windows que permite grabar audio mediante la tecla Insert la cual transcribe el audio usando la API de Grok  y autimaticamente genera el audio a texto en formato bloc de notas (txt).Se logro reducir el tiempo de transcripción manual a un 95% y una experiencia del usuario fluida y configurable ',
      tags: ['Grok API', 'Python'],
      img: '/icons/dictado.png',
      github: 'https://github.com/j0se0101/Sistema-de-dictado-por-voz-',
      demo: 'www.youtube.com/shorts/qlPW8coB0Hc'
    },
    {
      title: 'Lista de tareas avanzada',
      desc: 'Aplicación moderna para gestión de tareas cotidianas para el usuario.Se logro 95% de reducción de costos de alojamiento, tiempo de respuesta de API de 100ms y una alta disponibilidad del 99.9% mediante el uso de AWS Lambda y DynamoDB para una experiencia de usuario optima, ciclos de implementación de 5 minutos para una iteración rápida .',
      tags: ['React', 'TypeScript', 'Tailwind','AWS Lambda','CDK','DynamoDB', 'FastAPI','Python'],
      img: '/icons/todolist.png',
      github: 'https://github.com/j0se0101/todolist',
      demo: 'https://todolist-lyart-gamma-69.vercel.app/'
    },
    {
      title: 'Pomodo Timer',
      desc: 'Aplicación web moderna de gestión de tiempo diseñada para mejorar la productividad mediante ciclos de trabajo enfocado y descansos programados.Se logró una reducción de overhead de HTTP en un 70% mediante WebSockets para actualizaciones en tiempo real, una experiencia de usuario fluida con tiempos de carga iniciales de menos de 2 segundos y una arquitectura escalable y mantenible.',
      tags: ['React', 'TypeScript', 'Vite','Tailwind','Node.js','Express','Supabase','WebSockets'],
      img: '/icons/pomodoro.png',
      github:'https://github.com/j0se0101/pomodoro-timer',
      demo: 'https://pomodoro-timer-bice-eight.vercel.app/'
    },
    {
      title: 'Simple Login',
      desc: 'Aplicación web de autenticación de sistema de gestión de usuarios. Rate limiting implementado para prevencion de ataques de 100 request/15 min por Ip, Cors estricto, tiempo de build de unos 3-5 segundos , escalabilidad y mantenibilidad mediante arquitectura modular.',
      tags: ['React', 'TypeScript','Tailwind','Node.js','Express','MongoDB','JSON WebTokens'],
      img: '/icons/login.png',
      github:'https://github.com/j0se0101/Login-app',
      demo: 'https://login-app-orpin-mu.vercel.app/login'
    }
  ];

  const SkillItem = ({ src, label, icon }: { src?: string; label: string; icon?: JSX.Element }) => (
    <motion.span 
      whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="skill-badge"
    >
      {src ? <img src={src} alt={label} className="w-4 h-4" /> : icon}
      {label}
    </motion.span>
  );

  // Enhanced button component
  const AnimatedButton = ({ 
    href, 
    children, 
    icon: Icon,
    variant = 'primary' 
  }: { 
    href: string; 
    children: React.ReactNode; 
    icon: React.ElementType;
    variant?: 'primary' | 'secondary';
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all ${
          variant === 'primary' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-2xl' 
            : 'glass border hover:shadow-lg'
        }`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '0%' : '-100%' }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          <Icon size={18} />
          {children}
        </span>
      </motion.a>
    );
  };

  // Enhanced project card
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      setTiltX(rotateX);
      setTiltY(rotateY);
    };

    const handleMouseLeave = () => {
      setTiltX(0);
      setTiltY(0);
    };

    return (
      <motion.div
        variants={scaleIn}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
        className="project-card tilt-card glow"
      >
        <div className="overflow-hidden relative">
          <img
            src={project.img}
            alt={project.title}
            className="project-image"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <div className="project-content">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs md:text-sm rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.1, x: 5 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 ripple"
              >
                <Github size={16} /> Código
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.1, x: 5 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 ripple"
              >
                <ExternalLink size={16} /> Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 texture-overlay">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full glass z-50 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-xl font-bold gradient-text">
                ¡Bienvenidos!
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['experience', 'projects', 'about', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {section === 'experience' ? 'Experiencia' : section === 'projects' ? 'Proyectos' : section === 'about' ? 'Sobre mí' : 'Contacto'}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col gap-2 py-4"
                >
                  {['experience', 'projects', 'about', 'contact'].map((section) => (
                    <motion.button
                      key={section}
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(section)}
                      className="text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors capitalize"
                    >
                      {section === 'experience' ? 'Experiencia' : section === 'projects' ? 'Proyectos' : section === 'about' ? 'Sobre mí' : 'Contacto'}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="hero-grid"
          >
            <ScrollReveal direction="left">
              <motion.div className="hero-image">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src="/icons/mewe.png"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 mx-auto md:mx-0 shadow-xl animate-float"
                />
              </motion.div>
            </ScrollReveal>
            
            <div className="hero-content">
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <motion.span 
                    className="available-badge"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.4)',
                        '0 0 0 10px rgba(34, 197, 94, 0)',
                        '0 0 0 0 rgba(34, 197, 94, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      Disponible para trabajar
                    </span>
                  </motion.span>
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Hey, soy <span className="gradient-text">Eduardo Fernández</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Ingeniero de Software y Redes | México | Desarrollador en aplicaciones únicas y diseño
                  de arquitecturas escalables y eficientes.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton
                    href="mailto:jose_20rsl@hotmail.com"
                    icon={Mail}
                    variant="primary"
                  >
                    Contáctame
                  </AnimatedButton>
                  <AnimatedButton
                    href="https://www.linkedin.com/in/eddevfdez/"
                    icon={Linkedin}
                    variant="secondary"
                  >
                    LinkedIn
                  </AnimatedButton>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 gradient-bg parallax-section">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Briefcase size={28} />
                Experiencia
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <motion.a
                href="/icons/CV EDUARDO FERNANDEZ.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <Download size={16} />
                Descargar CV
              </motion.a>
            </ScrollReveal>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="experience-grid"
          >
            <ScrollReveal delay={0.1}>
              <motion.div variants={scaleIn} className="experience-card glow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Hackathon</h3>
                    <p className="text-blue-600 dark:text-blue-400">Nerdearla</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollé como participante en 24 hrs una aplicacion web complementaria usando la API de Google Classroom.
                  Implementé arquitecturas modernas y optimicé el rendimiento de aplicaciones existentes.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div variants={scaleIn} className="experience-card glow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">Freelance Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400">Workana</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Desarrollé features completas desde el frontend hasta el backend.
                  Trabajé con tecnologías modernas y metodologías ágiles. Mejora de un 30% en la
                  entrega de calidad del software.
                </p>
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
              <Code2 size={28} />
              Proyectos
            </h2>
          </ScrollReveal>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="projects-grid"
          >
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 gradient-bg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
              <User size={28} />
              Sobre mí
            </h2>
          </ScrollReveal>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <ScrollReveal delay={0.1}>
              <motion.div variants={fadeInUp}>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Me llamo José Eduardo Fernández Rosales, me dedico a crear software que funciona y redes que conectan.
                  Como ingeniero de desarrollo de software y redes, vivo en la intersección de dos mundos fascinantes 
                  el código que da vida a las aplicaciones y la infraestructura que las mantiene comunicadas. 
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  Desde que escribí mi primera línea de código y configuré mi primer router, supe que mi camino estaba en la tecnología. 
                  Me fascina cómo una aplicación bien diseñada puede transformarse cuando se ejecuta sobre una red optimizada.
                  Actualmente desarrollo aplicaciones, diseño arquitecturas de red, automatizo procesos y resuelvo problemas complejos que requieren pensar tanto en software como en infraestructura. 
                  Ya sea construyendo una API, configurando un firewall o integrando sistemas, disfruto cada desafío técnico.
                </p>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Habilidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass rounded-lg p-6">
                    <div className="font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                      <Code2 size={20} />
                      Lenguajes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((s) => (
                        <SkillItem key={s.label} src={s.src} label={s.label} />
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-lg p-6">
                    <div className="font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                      <Layers size={20} />
                      Frameworks:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {frameworks.map((s) => (
                        <SkillItem key={s.label} src={s.src} label={s.label} />
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-lg p-6">
                    <div className="font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                      <Network size={20} />
                      Redes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {networks.map((s) => (
                        <SkillItem key={s.label} label={s.label} icon={s.icon} />
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-lg p-6">
                    <div className="font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                      <Code2 size={20} />
                      Herramientas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((s) => (
                        <SkillItem key={s.label} src={s.src} label={s.label} />
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-lg p-6 md:col-span-2">
                    <div className="font-semibold mb-4 text-base md:text-lg flex items-center gap-2">
                      <Briefcase size={20} />
                      Bases de Datos:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {databases.map((s) => (
                        <SkillItem key={s.label} src={s.src} label={s.label} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
              <Send size={28} />
              Contacto
            </h2>
          </ScrollReveal>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="contact-grid"
          >
            <ScrollReveal delay={0.1}>
              <motion.div variants={fadeInUp} className="contact-content">
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  ¿Te gustaría colaborar en algún proyecto o tienes alguna duda? No dudes en contactarme.
                </p>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div variants={fadeInUp} className="contact-links">
                {[
                  { icon: Mail, label: 'Email', value: 'jose_20rsl@hotmail.com', href: 'mailto:jose_20rsl@hotmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/eddevfdez', href: 'https://www.linkedin.com/in/eddevfdez/' },
                  { icon: Github, label: 'GitHub', value: 'github.com/j0se0101', href: 'https://github.com/j0se0101' }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-4 glass rounded-lg hover:shadow-lg transition-all contact-link"
                  >
                    <contact.icon size={24} className="flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <div className="min-w-0">
                      <div className="font-semibold">{contact.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 truncate">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-6 border-t border-gray-200/50 dark:border-gray-700/50 glass"
      >
        <div className="max-w-4xl mx-auto text-center text-sm md:text-base text-gray-600 dark:text-gray-400">
          <p>© 2025 Eduardo Fernandez. Todos los derechos reservados.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
