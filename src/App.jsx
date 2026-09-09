import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Cpu,
  GraduationCap,
  Download,
  Laptop2,
  MessageCircle,
  MonitorPlay,
  Network,
  Phone,
  PlayCircle,
  WalletCards,
} from 'lucide-react';

const WHATSAPP_URL = 'https://form.wa.link/itdiploma';
const PAY_INSTALLMENTS = 'https://payhere.lk/pay/o86d24f62';
const PAY_FULL = 'https://payhere.lk/pay/of1d57ff4';
const COURSE_GUIDE_URL = 'https://drive.google.com/file/d/1shDoi1v58m0RUV7rBOCX7JjnWU8TjH4d/view?usp=sharing';

const audience = [
  { image: '/assets/psychology-audience-01.png', alt: 'Information for people interested in counselling careers' },
  { image: '/assets/psychology-audience-02.png', alt: 'Information for uniformed service members' },
  { image: '/assets/psychology-audience-03.png', alt: 'Information for government-sector professionals' },
  { image: '/assets/psychology-audience-04.png', alt: 'Information for private-sector professionals' },
  { image: '/assets/psychology-audience-05.png', alt: 'Information for state university graduates and applicants' },
  { image: '/assets/psychology-audience-06.png', alt: 'Information for students who have completed ordinary and advanced level education' },
];

const curriculum = [
  ['Fundamentals of Computers', 'Basic ICT concepts, data and information, history of computing, computer types, operating systems, file management, internet and email basics, hardware, input/output devices, memory and storage, processing and networking hardware.'],
  ['Productivity and Collaborative Tools', 'Microsoft Office Package A-Z including Word, Excel, PowerPoint and Access, digital productivity, online collaboration tools, cloud storage, document preparation, spreadsheet analysis, presentations and database basics.'],
  ['Current Topics in IT', 'Future trends in ICT, artificial intelligence, Internet of Things (IoT), cloud computing overview, cybersecurity awareness, online entrepreneurship, e-commerce, digital transformation and current industry applications.'],
  ['Principles of Program Design and Programming', 'Flowcharts and pseudocode, problem solving, introduction to Python programming, variables and data types, control structures, functions, file handling, database management basics, practical programming exercises and introductory ethical-hacking-oriented coding.'],
  ['Mathematics and Statistics for Computing', 'Basic mathematics for computing, logical thinking, number systems, sets and functions, basic algebra, introductory statistics, data representation and simple analytical methods relevant to IT.'],
  ['Communication Skills', 'Written and verbal communication, professional email writing, report writing, presentation skills, teamwork, interview readiness and communication in IT and business environments.'],
  ['Capstone Project', 'A final practical project integrating computer fundamentals, productivity tools, programming, hardware knowledge and current IT topics. Students prepare a proposal, develop a small solution or prototype and present the final outcome.'],
];

const faqs = [
  ['How long is the diploma?', 'The programme duration stated in the supplied course document is 6 months.'],
  ['How are classes conducted?', 'The programme is delivered online via Zoom, with Zoom links shared to students.'],
  ['What is the teaching medium?', 'The course document states Sinhala as the teaching medium for the night lectures.'],
  ['When are classes scheduled?', 'The published schedule lists Tuesday and Sunday classes from 8:00 PM to 10:00 PM.'],
  ['What is the scholarship fee?', 'The 50% skill-development scholarship reduces the stated LKR 48,000 course fee to LKR 24,000.'],
  ['Can I pay in installments?', 'Yes. The document lists 4 installments of LKR 6,000 each, for a total of LKR 24,000.'],
  ['Is there a one-time payment option?', 'Yes. The published one-time payment amount is LKR 19,000.'],
  ['What is the academic progression?', 'The published pathway shows Diploma in Information Technology → Higher National Diploma in Information Technology → BSc (Hons) in Information Technology or BSc (Hons) in Software Engineering.'],
];

function Countdown() {
  const target = useMemo(() => new Date('2026-09-26T20:00:00+05:30').getTime(), []);
  const getTime = () => Math.max(0, target - Date.now());
  const [remaining, setRemaining] = useState(getTime);

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getTime()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  const sec = Math.floor(remaining / 1000);
  const values = [
    ['Days', Math.floor(sec / 86400)],
    ['Hours', Math.floor((sec % 86400) / 3600)],
    ['Minutes', Math.floor((sec % 3600) / 60)],
    ['Seconds', sec % 60],
  ];

  return (
    <div className="countdown-grid" aria-label="Countdown to the September intake">
      {values.map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="SITC Campus home">
            <img src="/assets/sitc-logo.jpg" alt="SITC Campus" />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#programme">Programme</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#fees">Fees</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn--small" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Apply now <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Build your future in <span>Information Technology</span></h1>
              <p className="hero-lead">A career-focused, 6-month online diploma designed to build practical skills across computer fundamentals, productivity tools, Python programming, hardware, networking, cybersecurity, AI and emerging technologies.</p>
              <div className="hero-actions">
                <a className="btn hero-action-btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Secure Your Scholarship <ArrowRight size={18} /></a>
                <a className="btn btn--outline hero-action-btn" href={COURSE_GUIDE_URL} target="_blank" rel="noreferrer"><Download size={18} /> Download Course Guide <ArrowRight size={18} /></a>
              </div>
              <div className="hero-meta">
                <div><MonitorPlay size={18} /><span><b>Online via Zoom</b><small>Live night lectures</small></span></div>
                <div><Clock3 size={18} /><span><b>6 Months</b><small>Tuesday & Sunday</small></span></div>
                <div><GraduationCap size={18} /><span><b>IT pathway</b><small>Diploma → HND → BSc</small></span></div>
              </div>
            </div>

            <aside className="intake-card" aria-label="Next intake details">
              <div className="intake-card__top">
                <span>Next intake</span>
                <div className="status-dot">Enrolling now</div>
              </div>
              <div className="intake-date"><strong>26</strong><span>September<br/>2026</span></div>
              <div className="mini-list">
                <div><CalendarDays size={18} /><span><b>Tuesday & Sunday</b><small>8:00 PM - 10:00 PM</small></span></div>
                <div><Laptop2 size={18} /><span><b>Sinhala Medium</b><small>Online Zoom classes</small></span></div>
                <div><WalletCards size={18} /><span><b>Scholarship plan</b><small>Total LKR 24,000</small></span></div>
              </div>
              <div className="price-row"><span>One-time payment</span><strong>LKR 19,000</strong></div>
              <a className="btn btn--full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start your application</a>
            </aside>
          </div>
        </section>

        <section className="recognition">
          <div className="container recognition-inner">
            <img src="/assets/recognition-memberships.png" alt="Recognition, memberships and accreditations" />
          </div>
        </section>

        <section className="section section--soft" id="programme">
          <div className="container">
            <SectionTitle eyebrow="Who is this programme for?" title="A practical pathway for different career stages" description="The eligibility categories listed in the programme document include school leavers, university students, and experienced professionals from a variety of fields." />
            <div className="card-grid audience-grid">
              {audience.map(({ image, alt }) => (
                <article className="audience-card" key={image}>
                  <img src={image} alt={alt} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle eyebrow="Recognition & credibility" title="A credible foundation for your technology future" description="The programme document identifies PSB University as the awarding body, recognised by the University Grants Commission of Sri Lanka and accredited by ASIC, United Kingdom." />
            <div className="evidence-grid">
              <article className="image-card image-card--wide">
                <img src="/assets/graduation-stage.jpg" alt="SITC Campus convocation and awarding ceremony" />
                <div className="image-card__body"><span>Academic direction</span><h3>University-linked awarding pathway</h3><p>Built around the awarding and recognition profile published with the Information Technology diploma.</p></div>
              </article>
              <article className="image-card">
                <img src="/assets/ugc-letter.jpg" alt="University Grants Commission recognition letter shown in course material" />
                <div className="image-card__body"><span>Recognition</span><h3>UGC recognition evidence</h3><p>Recognition documentation is included in the official programme PDF.</p></div>
              </article>
              <article className="image-card">
                <img src="/assets/certificate-profile.jpg" alt="PSB University certificate and graduation award presentation" />
                <div className="image-card__body"><span>Verification</span><h3>Certificate & transcript profile</h3><p>The course material includes certificate, transcript and online verification examples.</p></div>
              </article>
            </div>
            <div className="credibility-panel">
              <Award size={34} />
              <p>The published recognition profile also references Times Higher Education, ASIC, QAHE, INQAAHE, WES, IEAC and CPD-related recognition or association information for the awarding body.</p>
            </div>
          </div>
        </section>

        <section className="section career-section">
          <div className="container career-grid">
            <div>
              <span className="eyebrow">Career-focused learning</span>
              <h2>IT skills that connect to real digital work</h2>
              <p>The curriculum combines computer fundamentals and office productivity with programming, hardware, networking, AI, IoT, cybersecurity awareness, communication and a practical capstone project.</p>
              <a className="btn" href="#curriculum">Explore all 7 modules <ArrowRight size={18} /></a>
            </div>
            <div className="skill-grid">
              {[
                'Computer Fundamentals', 'Python Programming', 'Hardware & Networking', 'AI & Emerging Technology',
                'Cybersecurity Awareness', 'IoT & Cloud Concepts', 'Office Productivity Tools', 'Professional Communication'
              ].map((item) => <div className="skill-pill" key={item}><Check size={16} /> {item}</div>)}
            </div>
          </div>
        </section>

        <section className="section section--navy pathway-section">
          <div className="container">
            <SectionTitle light eyebrow="Academic progression" title="A pathway designed to take you further" description="The course material presents progression from the Diploma in Information Technology to a Higher National Diploma, followed by direct entry to BSc (Hons) Information Technology or BSc (Hons) Software Engineering. The supplied SLQF diagram also shows further postgraduate progression after degree level." />
            <div className="pathway-grid">
              {[
                ['01', 'Diploma', 'Information Technology'],
                ['02', 'Higher National Diploma', 'Information Technology'],
                ['03', 'BSc (Hons)', 'Information Technology or Software Engineering'],
                ['04', 'Master’s', 'Potential postgraduate progression after degree completion'],
                ['05', 'PhD', 'Advanced academic progression within the wider SLQF pathway'],
              ].map(([n, title, text]) => (
                <article className="path-card" key={n}>
                  <span className="path-number">{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="path-foot">Progression step <ArrowRight size={15} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="curriculum">
          <div className="container curriculum-layout">
            <div className="curriculum-copy">
              <span className="eyebrow">Academic profile</span>
              <h2>Build expertise across 7 core IT modules</h2>
              <p>Each module below is drawn directly from the academic profile in the supplied Diploma in Information Technology programme document.</p>
              <div className="curriculum-stat"><strong>7</strong><span>core Information Technology modules</span></div>
              <div className="curriculum-stat"><strong>1</strong><span>integrated final Capstone Project</span></div>
            </div>
            <div className="accordion-list">
              {curriculum.map(([title, body], i) => (
                <details className="accordion" key={title} open={i === 0}>
                  <summary><span>{String(i + 1).padStart(2, '0')}</span>{title}<ChevronDown size={18}/></summary>
                  <p>{body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--navy support-section">
          <div className="container support-grid">
            <div>
              <span className="eyebrow">Flexible delivery</span>
              <h2>Live, supported learning that works around you</h2>
              <p>Online Zoom delivery, evening scheduling, recording support and WhatsApp communication make the programme accessible to working learners and students.</p>
            </div>
            <div className="support-cards">
              {[
                [MonitorPlay, 'Live Zoom classes'],
                [Clock3, 'Tuesday & Sunday • 8-10 PM'],
                [PlayCircle, 'Zoom recording support'],
                [MessageCircle, 'WhatsApp learner support'],
                [Code2, 'Programming & practical exercises'],
                [Laptop2, 'Sinhala-medium night lectures'],
              ].map(([Icon, label]) => <div className="support-card" key={label}><Icon size={18}/><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section lecturers-section">
          <div className="container">
            <SectionTitle eyebrow="Teaching leadership" title="Learn with experienced academic guidance" description="The Head of Department message and lecturer profile below are based on the supplied Information Technology programme material." />
            <div className="lecturer-feature">
              <img src="/assets/lecturer-main.jpg" alt="Head lecturer shown in the Information Technology programme material" />
              <div>
                <span className="eyebrow">Head of Department</span>
                <h3>Renuka Wickramasinghe</h3>
                <p className="qualification">International award-winning Head Lecturer • Information Technology</p>
                <p>The programme message highlights guidance across computer fundamentals, hardware and networking, Python programming, Ethical Hacking, IoT and Artificial Intelligence.</p>
              </div>
            </div>
            <div className="lecturer-mini-grid">
              <article className="lecturer-mini">
                <img src="/assets/awarding-profile.jpg" alt="SITC awarding university profile" />
                <div><span>Academic environment</span><h4>University-linked learning</h4><p>Programme material presents the awarding body, recognition profile and academic direction together.</p></div>
              </article>
              <article className="gallery-mini">
                <img src="/assets/convocation-2025-2026.jpg" alt="Recent SITC Campus convocation gallery" />
                <div><span>Gallery of trust</span><h4>Recent convocation moments</h4><p>The supplied programme material includes SITC Campus general convocation galleries through July 2026.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="fees">
          <div className="container">
            <SectionTitle eyebrow="Skill development scholarship" title="Choose the payment plan that works for you" description="The programme document lists a 50% scholarship plan, a four-installment option and a reduced one-time payment amount." />
            <div className="pricing-grid">
              <article className="price-card price-card--featured">
                <div className="price-top"><span>Installment plan</span><div className="tag">Most flexible</div></div>
                <div className="price">LKR <strong>24,000</strong></div>
                <p>After the stated 50% skill-development scholarship from the published LKR 48,000 course fee.</p>
                <ul><li><Check size={16}/> LKR 6,000 initial payment</li><li><Check size={16}/> 3 further installments of LKR 6,000</li><li><Check size={16}/> Total stated payable amount: LKR 24,000</li></ul>
                <a className="btn btn--full" href={PAY_INSTALLMENTS} target="_blank" rel="noreferrer">Pay first installment <ArrowRight size={16}/></a>
              </article>
              <article className="price-card">
                <div className="price-top"><span>One-time payment</span><div className="tag tag--dark">Best value</div></div>
                <div className="price">LKR <strong>19,000</strong></div>
                <p>Published one-time settlement option for the Diploma in Information Technology.</p>
                <ul><li><Check size={16}/> Single payment</li><li><Check size={16}/> Lower than installment total</li><li><Check size={16}/> Direct PayHere link from the supplied course document</li></ul>
                <a className="btn btn--outline btn--full" href={PAY_FULL} target="_blank" rel="noreferrer">Pay in full <ArrowRight size={16}/></a>
              </article>
            </div>
            <p className="pricing-note">Payment details are reproduced from the supplied programme document. Confirm current availability with SITC Campus before making a payment.</p>
          </div>
        </section>

        <section className="countdown-section">
          <div className="container countdown-layout">
            <div>
              <span className="eyebrow eyebrow--gold">September Intake 2026</span>
              <h2>Your next chapter starts soon</h2>
              <p>Published start date: 26 September 2026. Reserve your place through the Diploma in IT WhatsApp support channel.</p>
              <div className="countdown-actions"><a className="btn btn--white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Apply via WhatsApp</a><a href="tel:+94715258653"><Phone size={16}/> 071 525 8653</a></div>
            </div>
            <Countdown />
          </div>
        </section>

        <section className="section section--soft" id="faq">
          <div className="container faq-container">
            <SectionTitle eyebrow="Everything you need to know" title="Frequently asked questions" description="Quick answers based on the supplied Diploma in Information Technology 2026 intake programme material." />
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <details className="faq-item" key={q} open={i === 0}>
                  <summary>{q}<ChevronDown size={18}/></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div className="container cta-strip__inner">
            <div><span className="eyebrow">Take the first step</span><h3>Ready to power up your technology career?</h3></div>
            <a className="btn btn--dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat with SITC Campus</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><img src="/assets/sitc-logo.jpg" alt="SITC Campus" /><p>Diploma in Information Technology • September Intake 2026</p></div>
          <div><h4>Contact</h4><a href="tel:+94114532139">011 453 2139</a><a href="tel:+94715258653">071 525 8653</a><a href="mailto:info@sitc.lk">info@sitc.lk</a></div>
          <div><h4>Head Office</h4><p>World Trade Center, Level 26, East Tower, Colombo 01.</p></div>
          <div><h4>Digital Affairs Branch</h4><p>208, Hospital Road, Gampola.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 SITC Campus landing page concept.</span><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Diploma in IT WhatsApp Support <ArrowRight size={14}/></a></div>
      </footer>
    </div>
  );
}

export default App;
