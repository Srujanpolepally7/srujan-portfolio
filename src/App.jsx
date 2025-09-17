import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronRight } from "lucide-react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-5xl mx-auto px-6 py-16 md:py-24">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border p-6 shadow-sm ${className}`}>{children}</div>
);

const NavLink = ({ href, label, active }) => (
  <a
    href={href}
    className={`text-sm md:text-base transition-colors hover:opacity-100 ${active ? "opacity-100" : "opacity-60"}`}
  >
    {label}
  </a>
);

const Hero = () => (
  <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24">
    <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-lg md:text-xl mb-2">
      Hi there!
    </motion.p>
    <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
      I am <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">Srujankumar Polepally</span>
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl">
      Data Scientist & Senior Data Engineer with 8+ years building ML models, real-time data pipelines, and cloud-native analytics. I love turning complex data into systems that ship.
    </motion.p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-medium">
        <Mail className="h-4 w-4" /> Reach out
      </a>
      <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-medium">
        <FileText className="h-4 w-4" /> Resume
      </a>
    </div>
    <div className="mt-8 flex items-center gap-4">
      <a href="https://github.com/Srujanpolepally7" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/srujankumar-polepally" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100">
        <Linkedin />
      </a>
    </div>
  </div>
);

const About = () => (
  <Section id="about" title="About">
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          I’m <strong>Srujankumar Polepally</strong>, an innovative and results-driven Data Scientist with deep experience across healthcare,
          finance, telecom, and operations. I specialize in building and deploying end‑to‑end ML models, time‑series forecasting, and
          real‑time analytics using Python, Spark, and cloud platforms (Azure, AWS).
        </p>
        <p>
          I integrate statistical modeling, AI/ML algorithms, and big data technologies to deliver actionable insights. I’m fluent in
          scalable data modeling with Snowflake & SQL and data storytelling with Power BI and Tableau.
        </p>
        <p>
          Recently, I’ve focused on production MLOps (Azure DevOps, Docker, MLflow), LLM/RAG pipelines, and event-driven architectures with Kafka,
          Spark Structured Streaming, and Azure Databricks.
        </p>
      </div>
      <div className="aspect-square rounded-2xl border overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop"
          alt="Headshot placeholder"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </Section>
);

const Experience = () => {
  const Item = ({ title, company, period, bullets }) => (
    <Card>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <div>
          <h4 className="text-xl font-semibold">{company}</h4>
          <p className="text-sm opacity-70">{title}</p>
        </div>
        <p className="text-sm opacity-70">{period}</p>
      </div>
      <ul className="mt-4 space-y-2 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm leading-relaxed">{b}</li>
        ))}
      </ul>
    </Card>
  );

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        <Item
          company="Tagridge Technologies, USA"
          title="Data Scientist"
          period="Apr 2025 – Present"
          bullets={[
            "Managed enterprise-grade Python, PySpark, SQL Server & SSIS workflows in telecom; automated maintenance tasks to reduce manual effort by ~40%.",
            "Led large-scale telecom data ingestion & transformation; advanced stored procedures and indexing strategies cut latency by ~35% and enabled robust KPI reporting.",
            "Applied ML for churn prediction, segmentation, and anomaly detection; integrated LLMs with RAG pipelines for automated documentation and ticket triage."
          ]}
        />
        <Item
          company="TechVedika, India"
          title="Data Scientist"
          period="Mar 2021 – Jul 2023"
          bullets={[
            "Built preprocessing pipelines with Pandas/NumPy/Spark; partnered with stakeholders to define KPIs and translate business needs into DS solutions.",
            "Trained predictive models (Random Forest, XGBoost) for high-value customers and CLV forecasting; built segmentation with K-Means/DBSCAN.",
            "Forecasted seasonal demand with SARIMA (reduced stockouts by ~20%); engineered real-time pipelines with DBT & ADF for clickstream analytics."
          ]}
        />
        <Item
          company="Clean Harbors, India"
          title="Data Analytics Engineer"
          period="Jan 2017 – Nov 2019"
          bullets={[
            "Designed ETL pipelines with Spark, ADF, Python; integrated Oracle & API data into cloud data lakes/warehouses.",
            "Developed analytics on Azure Databricks & Synapse; improved performance & scalability for big data workloads; optimized complex SQL for OLTP/DW."
          ]}
        />
        <Item
          company="myGwork, India"
          title="Data Analyst"
          period="Aug 2014 – Dec 2016"
          bullets={[
            "Analyzed large datasets from SQL/NoSQL/APIs; delivered dashboards in Power BI/Tableau; automated reporting in Excel.",
            "Applied regression & time-series analyses; optimized SQL queries for faster, accurate reporting; collaborated on KPI design."
          ]}
        />
      </div>
    </Section>
  );
};

const Tools = () => (
  <Section id="tools" title="Tools">
    <div className="grid md:grid-cols-4 gap-6">
      <Card>
        <h4 className="font-semibold mb-3">Cloud & Big Data</h4>
        <div className="flex flex-wrap gap-2">
          {["Azure (Synapse, ADF, ML, Databricks)", "AWS (S3, Redshift, EMR)", "Spark", "Kafka", "Airflow", "DBT", "Azure Event Hubs"].map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </Card>
      <Card>
        <h4 className="font-semibold mb-3">Databases</h4>
        <div className="flex flex-wrap gap-2">
          {["Snowflake", "SQL Server", "PostgreSQL", "MongoDB", "NoSQL"].map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </Card>
      <Card>
        <h4 className="font-semibold mb-3">ML & Analytics</h4>
        <div className="flex flex-wrap gap-2">
          {["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "TensorFlow", "PyTorch", "Transformers (HF)", "MLflow", "MLOps"].map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </Card>
      <Card>
        <h4 className="font-semibold mb-3">Visualization & Scripting</h4>
        <div className="flex flex-wrap gap-2">
          {["Power BI", "Tableau", "Looker", "Python", "R", "SQL", "Bash"].map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </Card>
    </div>
  </Section>
);

const Projects = () => {
  const ProjectCard = ({ title, desc, stack, href, image }) => (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 order-2 md:order-1">
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="mt-2 text-sm opacity-80">{desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((s) => <Badge key={s}>{s}</Badge>)}
          </div>
          <div className="mt-4">
            <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium">
              View project <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-xl overflow-hidden border">
          <img src={image} alt="Project visual" className="h-full w-full object-cover" />
        </div>
      </div>
    </Card>
  );

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        <ProjectCard
          title="Predictify Healthcare Application"
          desc="Mobile-first app that validates lifestyle data, aligns with open health datasets (WHO, CMS), and forecasts long-term health outcomes; built with OMOP standards, LLM-assisted CI/CD, and governed data pipelines."
          stack={["Python", "Azure", "Snowflake", "OMOP", "LLM/RAG"]}
          href="http://urn.kb.se/resolve?urn=urn:nbn:se:du-36010"
          image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
        />
        <ProjectCard
          title="Instant Payment Fraud Detection"
          desc="Low-latency fraud detection for instant payments (UPI, Faster Payments). Streams transactions via Kafka; Spark Structured Streaming on Azure Databricks performs behavior analytics within milliseconds."
          stack={["Kafka", "Spark", "Databricks", "Azure", "Terraform", "DevOps"]}
          href="#"
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
        />
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Reach out!">
    <Card>
      <p className="text-neutral-700 dark:text-neutral-300">
        I’m open to new projects and roles. If you’re looking for a hands-on data scientist / data engineer who ships, let’s talk.
      </p>
      <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! This demo form does not submit anywhere yet."); }}
            className="mt-6 grid md:grid-cols-2 gap-4">
        <input className="rounded-xl border p-3" placeholder="Your name" required />
        <input className="rounded-xl border p-3" placeholder="Email" type="email" required />
        <textarea className="rounded-xl border p-3 md:col-span-2" rows={5} placeholder="Message" required />
        <button className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-medium w-max">
          Send <ChevronRight className="h-4 w-4" />
        </button>
      </form>
    </Card>
    <div className="mt-6 flex gap-4">
      <a href="https://github.com/Srujanpolepally7" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100"><Github /></a>
      <a href="https://www.linkedin.com/in/srujankumar-polepally" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100"><Linkedin /></a>
      <a href="mailto:psrujan047@gmail.com" className="opacity-70 hover:opacity-100"><Mail /></a>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="max-w-5xl mx-auto px-6 py-10 text-sm opacity-70">
    © {new Date().getFullYear()} Srujankumar Polepally
  </footer>
);

export default function App() {
  const ids = ["top", "about", "experience", "tools", "projects", "contact"];
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handler = () => {
      let current = "about";
      for (const id of ["about","experience","tools","projects","contact"]) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const NavLink = ({ to, label }) => (
    <a href={to} className={`text-sm md:text-base transition-colors hover:opacity-100 ${active === to.slice(1) ? "opacity-100" : "opacity-60"}`}>
      {label}
    </a>
  );

  return (
    <div id="top" className="min-h-screen">
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/40 border-b">
        <nav className="max-w-5xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="font-semibold">Srujankumar Polepally</div>
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="#about" label="About" />
            <NavLink to="#experience" label="Experience" />
            <NavLink to="#tools" label="Tools" />
            <NavLink to="#projects" label="Projects" />
            <NavLink to="#contact" label="Contact" />
            <a href="/resume.pdf" className="text-sm md:text-base opacity-80 hover:opacity-100 flex items-center gap-2"><FileText className="h-4 w-4"/>Resume</a>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="rounded-xl border px-3 py-1 text-sm">
              {dark ? "Dark" : "Light"}
            </button>
          </div>
        </nav>
      </div>

      <Hero />
      <About />
      <Experience />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
