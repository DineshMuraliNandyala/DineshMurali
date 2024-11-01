import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Dinesh Murali Nandyala</h1>
          <p className={styles.description}>
            As a final-year B.Tech student specializing in Artificial Intelligence and Data Science, 
            I am driven by a strong passion for applying AI-driven solutions across domains. 
            With hands-on experience in advanced ML model development, computer vision, IoT, and cloud-based deployments, 
            I am eager to contribute as an entry-level AI engineer in challenging and innovative roles. 
            My recent internships and projects have honed my skills in human action recognition, 
            database security, and scalable, real-time applications, making me well-prepared for dynamic roles in the industry. 
            Open to both freelancing and full-time opportunities, I am committed to utilizing my technical expertise and creative 
            problem-solving abilities to drive impactful results.
          </p>
        </div>
        <img src="/img/Me.jpg" alt="Dinesh Murali Nandyala" className={styles.image} />
      </div>
    </header>
  );
}



function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.techAndLink}>
          <p className={styles.technologies}>{technologies}</p>
          <a href={link} className={styles.projectLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      image: '/img/db.jpg',
      title: 'AirPortDB',
      description: 'A secure employee database system with the password-protected access,designed for reliable airport personnel management using HTML, CSS, JavaScript, and SQL.',
      technologies: '#Xampp #HTML #PHP #CSS',
      link: 'https://github.com/DineshMuraliNandyala/Airport-Employee-Database-System',
    },
    {
      image: '/img/eq.png',
      title: 'EcoAquatics',
      description: 'An AI-powered IoT system for real-time fish feeding optimization, achieving 90% accuracy in feed efficiency. Securely deployed on AWS for scalable remote monitoring.',
      technologies: '#ML #IOT #MySQL',
      link: 'https://github.com/DineshMuraliNandyala/Eco-Aquatics',
    },
    {
      image: '/img/dv.jpg',
      title: 'Distanced Vision',
      description: 'A high-accuracy, long-range face recognition system with real-time tracking, 30% faster response, and 40% improved stability, deployed on GCP with Docker for scalability.',
      technologies: '#GCP #DOCKER #DL',
      link: 'https://github.com/DineshMuraliNandyala/Face-Reco',
    },
  ];

  return (
    <div id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectsSection />
      </main>
    </Layout>
  );
}
