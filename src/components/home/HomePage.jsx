import React from 'react';

import iconPython from '../../assets/icons/python.svg';
import iconTypescript from '../../assets/icons/typescript.svg';
import iconReact from '../../assets/icons/react.svg';
import iconBash from '../../assets/icons/bash.svg';
import iconGCP from '../../assets/icons/gcp.svg';
import iconAWS from '../../assets/icons/aws.svg';
import iconDocker from '../../assets/icons/docker.svg';
import iconBigQuery from '../../assets/icons/bigquery.svg';
import iconDBT from '../../assets/icons/dbt.svg';
import iconSpark from '../../assets/icons/spark.svg';
import iconOpenAI from '../../assets/icons/openai.svg';
import iconHuggingFace from '../../assets/icons/huggingface.svg';
import iconAirflow from '../../assets/icons/airflow.svg';
import iconCICD from '../../assets/icons/cicd.svg';
import profilePhoto from '../../assets/profile.png';

const heroStack = [
  { label: 'Python',       icon: iconPython },
  { label: 'RAG / LLMs',   icon: iconOpenAI },
  { label: 'Agentic AI',   icon: iconOpenAI },
  { label: 'TypeScript',   icon: iconTypescript },
  { label: 'React',        icon: iconReact },
  { label: 'Bash',         icon: iconBash },
  { label: 'GCP',          icon: iconGCP },
  { label: 'AWS',          icon: iconAWS },
  { label: 'Docker',       icon: iconDocker },
  { label: 'BigQuery',     icon: iconBigQuery },
  { label: 'DBT',          icon: iconDBT },
  { label: 'Airflow',      icon: iconAirflow },
  { label: 'CI/CD',        icon: iconCICD },
];

const kpis = [
  { value: '7',    label: 'Years experience',     sub: 'From research to production ML systems' },
  { value: '10+',  label: 'Projects delivered',   sub: 'Luxury, energy, insurance & consulting' },
  { value: '100%', label: 'Client satisfaction',  sub: 'Every engagement renewed or referred' },
];

const mentions = [
  { name: 'Kering',              sector: 'Luxury' },
  { name: 'SNCF',               sector: 'Transport · National' },
  { name: 'Enedis',             sector: 'Energy distribution' },
  { name: 'EDF',                sector: 'Energy' },
  { name: 'Groupama',           sector: 'Insurance' },
  { name: 'SCOR',               sector: 'Reinsurance' },
  { name: 'Université de Toulon', sector: 'Academia' },
];

const mentionsDouble = [...mentions, ...mentions];

const heroStackRows = [heroStack.slice(0, 7), heroStack.slice(7)];

const certs = [
  { name: 'Certified Professional Data Engineer',         issuer: 'GCP',  issued: 'Nov 2023',  icon: iconGCP,  accent: 'rgba(100,255,218,.08)', border: 'rgba(100,255,218,.2)', colored: true },
  { name: 'Certified Machine Learning – Specialty',       issuer: 'AWS',  issued: 'Sept 2022', icon: iconAWS,  accent: 'rgba(255,153,51,.1)',   border: 'rgba(255,153,51,.25)' },
  { name: 'Certified Solutions Architect – Associate',    issuer: 'AWS',  issued: 'June 2022', icon: iconAWS,  accent: 'rgba(255,153,51,.1)',   border: 'rgba(255,153,51,.25)' },
];

const services = [
  {
    title: 'Data Engineering',
    desc: 'Reliable pipelines that turn scattered raw sources into clean, trusted, query-ready data.',
    points: ['Orchestration (Airflow · Dataflow)', 'DBT & Spark transformations', 'BigQuery modeling & warehousing'],
    icon: iconDBT,
    proof: { client: 'Kering', result: '−80% infra cost' },
  },
  {
    title: 'AI / ML Systems',
    desc: 'Production AI systems, from agentic pipelines to monitored, reliable inference.',
    points: ['Agentic AI & RAG / LLM applications', 'Model training & serving', 'Evaluation & drift monitoring'],
    icon: iconOpenAI,
    proof: { client: 'SCOR', result: '2× underwriting productivity' },
  },
  {
    title: 'Cloud & Infrastructure',
    desc: 'Scalable, cost-aware cloud foundations on GCP & AWS, reproducible and production-ready.',
    points: ['Infra-as-Code & CI/CD', 'Docker & containerized services', 'Monitoring, alerting & cost control'],
    icon: iconAWS,
    proof: { client: 'Sia Partners', result: 'sovereign GenAI platform' },
  },
];

const experiences = [
  {
    client: 'SCOR',
    sector: 'Reinsurance',
    service: 'AI / ML Systems',
    period: '2025',
    metric: '2×',
    metricLabel: 'underwriting productivity',
    sub: '200k dossiers/year, auditable, compliant, end-to-end.',
    desc: 'Agentic AI pipeline across 11 heterogeneous data sources. PydanticAI agents with human-in-the-loop gates and full audit trails for regulated environments.',
    tags: ['RAG', 'PydanticAI', 'FastAPI', 'React'],
  },
  {
    client: 'Kering',
    sector: 'Luxury',
    service: 'Data Engineering',
    period: '2023',
    metric: '−80%',
    metricLabel: 'infrastructure cost',
    sub: '30 days → 24 hours, same pipeline, rebuilt right.',
    desc: '100M+ customer records unified across 20+ markets. Redesigned the full ingestion and transformation layer on BigQuery + DBT.',
    tags: ['BigQuery', 'Kafka', 'DBT', 'Airflow'],
  },
  {
    client: 'Indrabot',
    sector: 'Weather Data',
    service: 'Data Engineering',
    period: '2022',
    metric: '50 TB',
    metricLabel: 'external data managed',
    sub: '30k+ API calls/day, resilient and cost-efficient.',
    desc: 'Designed and deployed a high-throughput ingestion architecture for meteorological data. Infrastructure automated via Terraform on AWS for continuous data synchronization.',
    tags: ['AWS', 'Terraform', 'Airflow', 'Python'],
  },
  {
    client: 'La Poste',
    sector: 'Public Services',
    service: 'Data Engineering',
    period: '2021',
    metric: 'Tech',
    metricLabel: 'lead',
    sub: 'Agile team across Data, Web & UX.',
    desc: 'Led the technical architecture of an industrial SaaS data collection platform. Algorithmic pipelines, REST API services, CI/CD, and GCP cloud deployment.',
    tags: ['GCP', 'FastAPI', 'CI/CD', 'React'],
  },
  {
    client: 'EDF',
    sector: 'Energy',
    service: 'AI / ML Systems',
    period: '2020',
    metric: 'ML',
    metricLabel: 'models in production',
    sub: 'Forecasting models on microservices architecture.',
    desc: 'Automated data preprocessing and deployed forecasting model endpoints. Industrialized ML models on microservices infrastructure for dynamic prediction at scale.',
    tags: ['Python', 'Flask', 'Docker', 'GCP'],
  },
];

function TechChip({ label, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: hovered ? 'rgba(100,255,218,.07)' : 'rgba(255,255,255,.04)',
        border: `1px solid ${hovered ? 'rgba(100,255,218,.5)' : 'rgba(100,255,218,.12)'}`,
        borderRadius: 7, padding: '6px 11px',
        transition: 'all .25s', cursor: 'default', flexShrink: 0,
      }}
    >
      <img src={icon} alt="" width={16} height={16} style={{ flexShrink: 0, filter: 'brightness(0) invert(.9)' }} />
      <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, color: hovered ? '#ccd6f6' : '#a8b2d1', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  );
}

function ServiceCard({ title, desc, points, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 14,
        position: 'relative',
        border: `1px solid ${hovered ? 'rgba(100,255,218,.4)' : '#233554'}`,
        borderRadius: 14, padding: '22px 22px 24px',
        background: hovered ? '#112240' : '#0a192f',
        transition: 'all .22s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 10px 32px rgba(100,255,218,.08)' : 'none',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 11, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? 'rgba(100,255,218,.1)' : 'rgba(255,255,255,.04)',
        border: `1px solid ${hovered ? 'rgba(100,255,218,.35)' : 'rgba(100,255,218,.12)'}`,
        transition: 'all .22s',
      }}>
        <img src={icon} alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(.92)' }} />
      </div>

      <div>
        <h3 style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 17, fontWeight: 600, letterSpacing: '-.02em', color: '#e6f1ff', margin: '0 0 7px' }}>{title}</h3>
        <p style={{ fontSize: 12.5, lineHeight: 1.65, color: '#8892b0', margin: 0 }}>{desc}</p>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {points.map(p => (
          <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: "'Calibre','Inter',sans-serif", fontSize: 11.5, color: '#a8b2d1', lineHeight: 1.4 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 2 }} xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 6.2 L5 8.7 L9.5 3.5" stroke="#64ffda" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {p}
          </li>
        ))}
      </ul>

    </div>
  );
}

function ExperienceCard({ client, sector, service, period, metric, metricLabel, sub, desc, tags, isLast }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
        <div style={{
          width: 10, height: 10, borderRadius: '50%', flexShrink: 0, marginTop: 28,
          background: hovered ? '#64ffda' : '#233554',
          border: `2px solid ${hovered ? '#64ffda' : '#233554'}`,
          boxShadow: hovered ? '0 0 0 4px rgba(100,255,218,.15)' : 'none',
          transition: 'all .22s', zIndex: 1,
        }}/>
        {!isLast && (
          <div style={{ flex: 1, width: 1, background: 'linear-gradient(180deg, #233554 0%, #112240 100%)', marginTop: 4 }}/>
        )}
      </div>

      {/* Year label */}
      <div style={{ width: 44, flexShrink: 0, paddingTop: 22, textAlign: 'right', marginRight: 20 }}>
        <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11, fontWeight: 600, color: hovered ? '#64ffda' : '#8892b0', letterSpacing: '.04em', transition: 'color .22s' }}>{period}</span>
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1, marginBottom: isLast ? 0 : 10,
          border: `1px solid ${hovered ? 'rgba(100,255,218,.35)' : '#233554'}`,
          borderRadius: 12, padding: '14px 18px',
          background: hovered ? '#112240' : '#0a192f',
          transition: 'all .22s',
          transform: hovered ? 'translateX(3px)' : 'none',
          boxShadow: hovered ? '0 4px 20px rgba(100,255,218,.06)' : 'none',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: '-.02em', color: '#e6f1ff' }}>{sector}</span>
            <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 14, fontWeight: 700, color: hovered ? '#64ffda' : '#64ffda' }}>{metric}</span>
            <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: '#8892b0' }}>{metricLabel}</span>
          </div>
        </div>

        <p style={{ fontSize: 12, lineHeight: 1.65, color: '#a8b2d1', margin: 0 }}>{desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {tags.map(t => (
            <span key={t} style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, color: '#64ffda', border: '1px solid rgba(100,255,218,.2)', borderRadius: 5, padding: '2px 7px', letterSpacing: '.02em' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertRow({ name, issuer, issued, icon, accent, border, colored }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 14,
        padding: '20px 20px 18px',
        border: `1px solid ${hovered ? 'rgba(100,255,218,.4)' : '#233554'}`,
        borderRadius: 14,
        background: hovered ? '#112240' : '#0a192f',
        transition: 'all .22s',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(100,255,218,.07)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: accent, border: `1px solid ${border}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
          <img src={icon} alt="" width={24} height={24} style={{ objectFit: 'contain', filter: colored ? 'none' : 'brightness(0) invert(.92)' }} />
        </div>
        <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, color: hovered ? '#64ffda' : '#8892b0', letterSpacing: '.04em' }}>{issued}</span>
      </div>
      <div>
        <div style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 13, fontWeight: 600, color: '#e6f1ff', letterSpacing: '-.01em', lineHeight: 1.4, marginBottom: 5 }}>{name}</div>
        <div style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10.5, color: '#64ffda', letterSpacing: '.03em' }}>{issuer}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: '#0a192f', color: '#ccd6f6', fontFamily: "'Calibre','Inter',sans-serif", minHeight: '100vh', WebkitFontSmoothing: 'antialiased' }}>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 52, padding: '0 48px',
        background: 'rgba(10,25,47,.96)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #233554',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="7" fill="#112240"/>
            <path d="M8 8 L8 18 L14 18" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8 L16 13 M16 13 C16 13 16 18 20 18" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
          </svg>
          <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 14, fontWeight: 500, color: '#e6f1ff' }}>louis</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          {[['Services', '#services'], ['Work', '#work'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11.5, letterSpacing: '.04em', color: '#a8b2d1', textDecoration: 'none' }}>{label}</a>
          ))}
          <NavHireButton />
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(80px,11vw,128px) 56px clamp(64px,8vw,96px)', animation: 'fadein .8s ease both', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 148px', gap: 48, alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            <div style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 13, color: '#64ffda', letterSpacing: '.04em', marginBottom: 12 }}>Hello, I'm Louis</div>
            <h1 style={{ fontFamily: "'Calibre','Inter',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.5vw,62px)', lineHeight: 1.0, letterSpacing: '-0.04em', margin: '0 0 24px', color: '#e6f1ff' }}>
              Data / AI<br/>Engineer
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#a8b2d1', maxWidth: 440, margin: '0 0 28px' }}>
              I design and build data &amp; AI systems end-to-end, from experimentation to production, with a focus on what actually moves the needle for the business.
            </p>

            {/* TECH CHIPS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
              {heroStack.map(c => <TechChip key={c.label} label={c.label} icon={c.icon} />)}
            </div>

            <CtaLink href="https://www.linkedin.com/in/louis-jeanpierre-6362b1122/">Contact me on LinkedIn</CtaLink>
          </div>

          {/* RIGHT meta */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, paddingTop: 4 }}>
            <div style={{ width: 128, height: 128, borderRadius: '50%', border: '2px solid rgba(100,255,218,.4)', marginBottom: 18, flexShrink: 0, boxShadow: '0 0 0 4px rgba(100,255,218,.06)', background: 'rgb(18,19,28)', backgroundImage: `url(${profilePhoto})`, backgroundSize: '80%', backgroundPosition: 'center 8%', backgroundRepeat: 'no-repeat' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11 }}>
              {[
                ['location', 'Paris, FR'],
                ['focus',    'Data / AI Engineer'],
                ['mode',     'remote'],
                ['lang',     'EN / FR'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 8 }}>
                  <span style={{ color: '#8892b0' }}>{k}</span>
                  <span style={{ color: '#ccd6f6' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN TRACK RECORD */}
      <section style={{ borderTop: '1px solid #233554', background: '#112240' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(56px,8vw,84px) 56px' }}>

          <SectionLabel>Proven Track Record</SectionLabel>

          {/* KPI CARDS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 28 }}>
            {kpis.map(kpi => <KpiCard key={kpi.label} {...kpi} />)}
          </div>

          {/* MENTIONS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#8892b0', whiteSpace: 'nowrap' }}>Trusted by teams at</span>
            <div style={{ flex: 1, height: 1, background: '#233554' }}/>
          </div>
          <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
            <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'marquee 22s linear infinite' }}>
              {mentionsDouble.map((m, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, border: '1px solid #233554', borderRadius: 10, padding: '14px 22px', background: '#0a192f', whiteSpace: 'nowrap', flexShrink: 0, minWidth: 150 }}>
                  <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 15, fontWeight: 700, color: '#e6f1ff', letterSpacing: '-.02em' }}>{m.name}</span>
                  <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, color: '#8892b0', letterSpacing: '.05em', textTransform: 'uppercase' }}>{m.sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div style={{ marginTop: 36, padding: '30px 34px', border: '1px solid #233554', borderRadius: 14, background: 'transparent', position: 'relative' }}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" style={{ position: 'absolute', top: 24, right: 28, opacity: .2 }} xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0ZM20 24V14.4C20 6.4 24.8 1.6 34.4 0l1.6 2.4c-5.6 1.2-8.4 4-8.8 8H32V24H20Z" fill="#64ffda"/>
            </svg>
            <p style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 14.5, lineHeight: 1.85, color: '#ccd6f6', margin: '0 0 22px', fontStyle: 'italic' }}>
              "Louis worked with me as a Data Engineer, he is thoughtful individual. Technically, he is exceptionally strong, demonstrating a deep understanding of technical architecture and proactively proposing innovative solutions. He is also fluent in Python. His greatest asset, however, is his ability to listen and understand business needs. Thanks to this dual expertise, he delivered excellent work. On top of all this, he is very pleasant to work with on a daily basis, making him a colleague you genuinely enjoy collaborating with."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#233554', border: '1px solid rgba(100,255,218,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 13, fontWeight: 600, color: '#64ffda' }}>BL</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 13, fontWeight: 600, color: '#e6f1ff', letterSpacing: '-.01em' }}>Boris LIM</span>
                <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11, color: '#8892b0', letterSpacing: '.03em' }}>Customer Data Manager · Kering</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MY SERVICES */}
      <section id="services" style={{ borderTop: '1px solid #233554', background: '#0a192f' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(56px,8vw,84px) 56px 0' }}>

          <SectionLabel>Services</SectionLabel>

          {/* Intro row */}
          <p style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 15, color: '#a8b2d1', margin: '0 0 36px', maxWidth: 420, lineHeight: 1.75 }}>
            I cover the full data &amp; AI stack, from raw sources to end-users. Engage me at any stage or for the whole pipeline.
          </p>
        </div>

        <div className="services-grid-wrap">
          <div className="services-grid">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* SELECTED EXPERIENCES */}
      <section id="work" style={{ borderTop: '1px solid #233554', background: '#112240' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(56px,8vw,84px) 56px' }}>

          <SectionLabel>Selected Work</SectionLabel>

          <p style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 15, color: '#a8b2d1', margin: '0 0 32px', maxWidth: 480, lineHeight: 1.75 }}>
            Real projects, measurable outcomes. Each project, a concrete result.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experiences.map((e, i) => <ExperienceCard key={e.client} {...e} isLast={i === experiences.length - 1} />)}
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ borderTop: '1px solid #233554', background: '#112240' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(48px,6vw,72px) 56px clamp(60px,7vw,84px)' }}>
          <SectionLabel>Certifications</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {certs.map(c => <CertRow key={c.name} {...c} />)}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" style={{ borderTop: '1px solid #233554', background: '#0a192f' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(64px,9vw,104px) 56px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Calibre','Inter',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,44px)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#e6f1ff', margin: '0 0 16px' }}>
            Have a project in mind?
          </h2>
          <p style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 14.5, lineHeight: 1.8, color: '#a8b2d1', maxWidth: 460, margin: '0 auto 32px' }}>
            Tell me what you're building, or what's broken. I'll reply within 24 hours with an honest take on whether and how I can help.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CtaLink href="https://www.linkedin.com/in/louis-jeanpierre-6362b1122/">Connect on LinkedIn</CtaLink>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #233554' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '22px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11 }}>
          <span style={{ color: '#8892b0' }}>© 2026 Louis Jpr</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://github.com/louis80" style={{ color: '#a8b2d1', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/louis-jeanpierre-6362b1122/" style={{ color: '#a8b2d1', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
      <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#64ffda', whiteSpace: 'nowrap', fontWeight: 500 }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #233554, transparent)' }}/>
    </div>
  );
}

function KpiCard({ value, label, sub }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? '#64ffda' : '#233554'}`,
        borderRadius: 12, padding: '26px 22px',
        display: 'flex', flexDirection: 'column', gap: 6,
        transition: 'all .2s',
        background: hovered ? '#112240' : 'transparent',
        boxShadow: hovered ? '0 4px 24px rgba(100,255,218,.08)' : 'none',
      }}
    >
      <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 'clamp(34px,4.5vw,48px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#e6f1ff', lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 10, letterSpacing: '.1em', color: '#a8b2d1', textTransform: 'uppercase' }}>{label}</span>
      <span style={{ fontFamily: "'Calibre','Inter',sans-serif", fontSize: 12, color: '#8892b0', lineHeight: 1.5, marginTop: 2 }}>{sub}</span>
    </div>
  );
}

function CtaLink({ href, children }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 13, fontWeight: 500,
        padding: '11px 24px', borderRadius: 4,
        background: hovered ? 'rgba(100,255,218,.08)' : 'transparent',
        color: hovered ? '#64ffda' : '#4db8a0',
        textDecoration: 'none', letterSpacing: '.08em',
        border: `1px solid ${hovered ? '#64ffda' : '#4db8a0'}`,
        boxShadow: hovered ? '0 4px 20px rgba(100,255,218,.12)' : '0 4px 20px rgba(100,255,218,.05)',
        transition: 'all .25s',
      }}
    >
      {children}
    </a>
  );
}

function NavHireButton() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="https://www.linkedin.com/in/louis-jeanpierre-6362b1122/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Fira Code','SF Mono',monospace", fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase',
        color: hovered ? '#64ffda' : '#64ffda',
        textDecoration: 'none',
        background: hovered ? 'rgba(100,255,218,.08)' : 'transparent',
        border: '1px solid #64ffda',
        padding: '7px 18px', borderRadius: 4, transition: 'all .25s',
      }}
    >
      hire me
    </a>
  );
}
