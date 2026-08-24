import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronRight,
  Cloud,
  Download,
  ExternalLink,
  GitFork,
  Link,
  Mail,
  Menu,
  Server,
  X,
} from 'lucide-react'

import emailjs from '@emailjs/browser'

import {
  architectureNodes,
  profile,
  projects,
  skillGroups,
  type Project,
} from './data/portfolio'

const nav = [
  'About',
  'Skills',
  'Experience',
  'Projects',
  'Architecture',
  'Certifications',
  'GitHub',
  'Contact',
]

const sectionIds = nav.map((x) => x.toLowerCase())

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
}

const isConfigured = (value: string) => !value.startsWith('YOUR_')

const githubUrl = isConfigured(profile.github)
  ? `https://github.com/${profile.github}`
  : undefined

function External({
  href,
  children,
  className = '',
}: {
  href?: string
  children: React.ReactNode
  className?: string
}) {
  return href ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <span
      className={`${className} disabled`}
      title="Configure this in .env"
    >
      {children}
    </span>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const handler = () => {
      for (const id of sectionIds) {
        const element = document.getElementById(id)

        if (
          element &&
          element.getBoundingClientRect().top < 170
        ) {
          setActive(id)
        }
      }
    }

    addEventListener('scroll', handler)

    handler()

    return () => removeEventListener('scroll', handler)
  }, [])

  const links = (
    <>
      {nav.map((label) => (
        <a
          key={label}
          onClick={() => setOpen(false)}
          className={
            active === label.toLowerCase()
              ? 'active'
              : ''
          }
          href={`#${label.toLowerCase()}`}
        >
          {label}
        </a>
      ))}
    </>
  )

  return (
    <header className="nav">
      <a
        href="#home"
        className="mark"
        aria-label="Home"
      >
        AK<span>.</span>
      </a>

      <nav>{links}</nav>

      <button
        className="menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function SystemDiagram({
  compact = false,
}: {
  compact?: boolean
}) {
  const labels = compact
    ? [
        'USER',
        'CloudFront',
        'Application',
        'EC2 · Lambda · API',
        'S3 · DynamoDB',
      ]
    : [
        'Internet',
        'CloudFront',
        'API / App',
        'EC2 · Lambda · API Gateway',
        'S3 · DynamoDB',
        'CloudWatch',
      ]

  return (
    <div
      className="system-diagram"
      aria-label="Cloud architecture diagram"
    >
      {labels.map((x, i) => (
        <div key={x}>
          <motion.span
            className="node"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
          >
            {x}
          </motion.span>

          {i < labels.length - 1 && (
            <i className="connector" />
          )}
        </div>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          {...reveal}
        >
          CLOUD ENGINEER <b>•</b> SOFTWARE DEVELOPER
        </motion.p>

        <motion.h1
          {...reveal}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Building scalable software and{' '}
          <em>cloud infrastructure.</em>
        </motion.h1>

        <motion.p
          className="lede"
          {...reveal}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          I'm Asif Kalam, a Computer Science graduate focused on
          AWS cloud engineering, software development, DevOps,
          and building reliable applications.
        </motion.p>

        <motion.div
          className="actions"
          {...reveal}
        >
          <a
            href="#projects"
            className="button primary"
          >
            View projects
            <ArrowUpRight size={17} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="button"
          >
            Download resume
            <Download size={16} />
          </a>
        </motion.div>

        <motion.div
          className="socials"
          {...reveal}
        >
          <External href={githubUrl}>
            <GitFork />
            GitHub
          </External>

          <External
            href={
              isConfigured(profile.linkedin)
                ? profile.linkedin
                : undefined
            }
          >
            <Link />
            LinkedIn
          </External>

          <External
            href={
              isConfigured(profile.email)
                ? `mailto:${profile.email}`
                : undefined
            }
          >
            <Mail />
            Email
          </External>
        </motion.div>
      </div>

      <motion.div
        className="hero-photo-section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-orbit-container">
          <div className="profile-glow" />

          <div className="orbit orbit-one">
            <span className="orbit-dot" />
          </div>

          <div className="orbit orbit-two">
            <span className="orbit-dot" />
          </div>

          <div className="profile-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Asif Kalam"
              className="profile-image"
            />
          </div>
        </div>

        <p className="profile-caption">
          CLOUD ENGINEER • AWS • DEVOPS
        </p>
      </motion.div>
    </section>
  )
}

function SectionTitle({
  kicker,
  children,
}: {
  kicker: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="section-title"
      {...reveal}
    >
      <p className="eyebrow">{kicker}</p>
      <h2>{children}</h2>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about">
      <SectionTitle kicker="01 / ABOUT">
        A systems-minded developer, from interface to
        infrastructure.
      </SectionTitle>

      <div className="about-grid">
        <motion.p
          className="prose"
          {...reveal}
        >
          I am a B.Tech (Hons) Computer Science and Engineering
          graduate from Galgotias University, specializing in
          Cloud Computing and Virtualisation. I build
          cloud-connected, service-based applications with Java,
          Python, Node.js, and AWS, grounded in REST API design,
          backend development, and secure infrastructure.

          <br />
          <br />

          I enjoy understanding how systems work behind the
          interface — from frontend applications to APIs, cloud
          infrastructure, deployment, monitoring, and
          scalability.
        </motion.p>

        <motion.aside
          className="philosophy"
          {...reveal}
        >
          <span>ENGINEERING PHILOSOPHY</span>

          <p>
            “Build thoughtfully. Make operations visible. Keep
            systems easy to reason about.”
          </p>

          <div>
            Career direction

            <strong>
              Cloud engineering · Software development · DevOps
            </strong>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <SectionTitle kicker="02 / TOOLKIT">
        Technology choices grounded in practical application.
      </SectionTitle>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <motion.article
            className="skill-card"
            {...reveal}
            transition={{ delay: i * 0.06 }}
            key={group.title}
          >
            <div className="card-icon">
              <Server size={19} />
            </div>

            <h3>{group.title}</h3>

            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <SectionTitle kicker="03 / EXPERIENCE">
        Cloud operations through hands-on infrastructure practice.
      </SectionTitle>

      <motion.article
        className="experience"
        {...reveal}
      >
        <div className="timeline-dot" />

        <div>
          <p className="eyebrow">
            CLOUD ENGINEER INTERN · EDUSKILLS
          </p>

          <h3>Cloud infrastructure & deployment</h3>

          <p>
            Provisioned and configured 10+ EC2 instances with
            custom VPC networking, improving provisioning time by
            approximately 40%. Managed 15+ S3 buckets with
            versioning and lifecycle policies, automated repeatable
            setup across three environments with CloudFormation,
            audited IAM roles and security groups, and monitored
            service health through CloudWatch dashboards.
          </p>

          <div className="tags">
            <span>AWS</span>
            <span>EC2</span>
            <span>VPC</span>
            <span>IAM</span>
            <span>S3</span>
            <span>CloudFormation</span>
            <span>CloudWatch</span>
          </div>
        </div>
      </motion.article>
    </section>
  )
}

function ProjectModal({
  project,
  close,
}: {
  project: Project
  close: () => void
}) {
  return (
    <motion.div
      className="overlay"
      onClick={close}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
      >
        <button
          className="close"
          onClick={close}
          aria-label="Close project details"
        >
          <X />
        </button>

        <p className="eyebrow">{project.eyebrow}</p>

        <h2>{project.name}</h2>

        <div className="modal-grid">
          <div>
            {[
              ['Overview', project.description],
              ['Problem', project.problem],
              ['Solution', project.solution],
              ['Implementation', project.implementation],
              ['Challenges', project.challenges],
              ['Lessons learned', project.lessons],
            ].map(([title, content]) => (
              <div
                className="detail"
                key={title}
              >
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            ))}
          </div>

          <aside>
            <h3>Architecture</h3>

            <SystemDiagram compact />

            <h3>Technologies</h3>

            <div className="tags">
              {[...project.stack, ...project.services].map(
                (x) => (
                  <span key={x}>{x}</span>
                )
              )}
            </div>

            <p className="configuration">
              Repository and live demo links can be added in{' '}
              <code>src/data/portfolio.ts</code> after they are
              available.
            </p>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [selected, setSelected] =
    useState<Project | null>(null)

  return (
    <section id="projects">
      <SectionTitle kicker="04 / SELECTED WORK">
        Projects designed with delivery and operations in mind.
      </SectionTitle>

      <div className="projects">
        {projects.map((project, i) => (
          <motion.article
            className="project"
            {...reveal}
            transition={{ delay: i * 0.08 }}
            key={project.name}
          >
            <div>
              <p className="eyebrow">
                0{i + 1} / {project.eyebrow}
              </p>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>

            <button
              className="text-button"
              onClick={() => setSelected(project)}
            >
              Explore case study
              <ChevronRight size={17} />
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            close={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function Architecture() {
  const [selected, setSelected] =
    useState<(typeof architectureNodes)[number] | null>(
      null
    )

  return (
    <section
      id="architecture"
      className="architecture"
    >
      <SectionTitle kicker="05 / ARCHITECTURE">
        A cloud architecture built around clear responsibilities.
      </SectionTitle>

      <div className="architecture-grid">
        <div className="architecture-map">
          {architectureNodes.map((node, i) => (
            <button
              key={node[0]}
              onMouseEnter={() => setSelected(node)}
              onFocus={() => setSelected(node)}
              onClick={() => setSelected(node)}
              className={`arch-node n${i}`}
            >
              <Cloud size={16} />
              {node[0]}
            </button>
          ))}
        </div>

        <aside className="architecture-info">
          {selected ? (
            <>
              <p className="eyebrow">SERVICE ROLE</p>

              <h3>{selected[0]}</h3>

              <p>{selected[1]}</p>

              <p>
                <b>Why it is used:</b> {selected[2]}
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow">
                INTERACTIVE DIAGRAM
              </p>

              <h3>Explore the system</h3>

              <p>
                Hover or focus on a service to understand its
                responsibility in the architecture.
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}

type Repository = {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
}

function GitHubSection() {
  const configured = !!githubUrl

  const [repos, setRepos] = useState<Repository[]>([])
  const [state, setState] = useState<
    'idle' | 'loading' | 'error'
  >('idle')

  useEffect(() => {
    if (!configured) return

    let live = true

    setState('loading')

    fetch(
      `https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=3`
    )
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject()
      )
      .then((data: Repository[]) => {
        if (live) {
          setRepos(data)
          setState('idle')
        }
      })
      .catch(() => {
        if (live) {
          setState('error')
        }
      })

    return () => {
      live = false
    }
  }, [configured])

  return (
    <section id="github">
      <SectionTitle kicker="06 / GITHUB">
        Open-source work, configured from one place.
      </SectionTitle>

      <motion.div
        className="github-panel"
        {...reveal}
      >
        <GitFork size={30} />

        <div>
          <h3>
            {configured
              ? `github.com/${profile.github}`
              : 'GitHub integration ready'}
          </h3>

          <p>
            {configured
              ? 'The latest public repositories load from the GitHub API; this portfolio remains useful if the API is unavailable.'
              : 'Add VITE_GITHUB_USERNAME to .env to enable the public profile link and repository integration.'}
          </p>
        </div>

        <External
          href={githubUrl}
          className="button"
        >
          {configured ? (
            <>
              Visit GitHub
              <ExternalLink size={15} />
            </>
          ) : (
            <>Configuration required</>
          )}
        </External>
      </motion.div>

      {state === 'loading' && (
        <p className="repo-state">
          Loading public repositories…
        </p>
      )}

      {state === 'error' && (
        <p className="repo-state">
          Repository data is temporarily unavailable. Visit the
          profile directly.
        </p>
      )}

      {repos.length > 0 && (
        <div className="repo-grid">
          {repos.map((repo) => (
            <a
              className="repo-card"
              target="_blank"
              rel="noreferrer"
              href={repo.html_url}
              key={repo.id}
            >
              <h3>
                {repo.name}
                <ArrowUpRight size={15} />
              </h3>

              <p>
                {repo.description ||
                  'No repository description provided.'}
              </p>

              <div>
                <span>{repo.language || 'Code'}</span>
                <span>
                  ★ {repo.stargazers_count}
                </span>
                <span>
                  Forks {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications">
      <SectionTitle kicker="07 / CREDENTIALS">
        Foundations and demonstrated technical communication.
      </SectionTitle>

      <motion.article
        className="cert"
        {...reveal}
      >
        <Cloud size={25} />

        <div>
          <h3>AWS Academy Cloud Foundations</h3>

          <p>
            Amazon Web Services. A verification link can be added
            when available.
          </p>
        </div>

        <span className="status">
          CERTIFICATION
        </span>
      </motion.article>

      <motion.article
        className="cert"
        {...reveal}
      >
        <Server size={25} />

        <div>
          <h3>
            Research presentation — ICCCNT 2025, IIT Indore
          </h3>

          <p>
            Presented “Serverless E-Learning Platform” at the 16th
            ICCCNT 2025.
          </p>
        </div>

        <span className="status">
          PRESENTATION
        </span>
      </motion.article>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const configured = isConfigured(profile.email)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setSending(true)
    setSent(false)
    setError('')

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setSent(true)
      form.reset()
    } 
    catch (err) {
      console.error(
        'Email sending failed:',
        err
      )

      setError(
        err instanceof Error
      ? err.message
      : JSON.stringify(err)
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <SectionTitle kicker="08 / CONTACT">
        Let's build something meaningful.
      </SectionTitle>

      <div className="contact-grid">
        <div>
          <p className="lede">
            Whether you are hiring, discussing a cloud project,
            or looking to collaborate, I would be glad to connect.
          </p>

          <div className="contact-links">
            <External
              href={
                configured
                  ? `mailto:${profile.email}`
                  : undefined
              }
            >
              <Mail />
              {profile.email}
            </External>

            <External
              href={
                isConfigured(profile.linkedin)
                  ? profile.linkedin
                  : undefined
              }
            >
              <Link />
              LinkedIn
            </External>

            <External href={profile.naukri}>
              <Link />
              Naukri profile
            </External>

            <External href={githubUrl}>
              <GitFork />
              GitHub
            </External>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Name

            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </label>

          <label>
            Email

            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </label>

          <label>
            Message

            <textarea
              required
              name="message"
              placeholder="How can I help?"
              rows={4}
            />
          </label>

          <button
            className="button primary"
            type="submit"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send message'}

            {!sending && (
              <ArrowUpRight size={16} />
            )}
          </button>

          {sent && (
            <p className="form-note">
              Message sent successfully! I will get back to you
              soon.
            </p>
          )}

          {error && (
            <p className="form-note">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <a
        className="mark"
        href="#home"
      >
        AK<span>.</span>
      </a>

      <div>
        <strong>Asif Kalam</strong>

        <p>
          Cloud Engineer / Software Developer
        </p>
      </div>

      <p>
        Built with React, TypeScript and Vite.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View resume
      </a>

      <small>
        © {new Date().getFullYear()} Asif Kalam
      </small>
    </footer>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()

  const [top, setTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setTop(scrollY > 700)
    }

    addEventListener('scroll', handleScroll)

    return () =>
      removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  return (
    <>
      <motion.div
        className="progress"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <GitHubSection />
        <Certifications />
        <Contact />
      </main>

      <AnimatePresence>
        {top && (
          <motion.a
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="back-top"
            href="#home"
            aria-label="Back to top"
          >
            <ArrowUpRight />
          </motion.a>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}