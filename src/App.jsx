import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const translations = {
  ar: {
    // Navigation
    nav: {
      problem: 'المشكلة',
      solution: 'الحل',
      roadmap: 'خارطة الطريق',
      download: 'تحميل'
    },
    // Hero
    hero: {
      badge: 'منصة السياحة الذكية',
      title: 'منصة تمكين التجربة السياحية الذكية',
      subtitle: 'نرافق السائح لحظة بلحظة، نحول تجربته من عشوائية إلى ذكية ومنظمة',
      downloadApp: 'تحميل التطبيق',
      learnMore: 'اكتشف المزيد',
      stats: {
        commission: 'عمولة فقط',
        costToTourist: 'تكلفة على السائح',
        yearRevenue: 'ريال إيرادات السنة الأولى'
      }
    },
    // Phone mockup
    phone: {
      welcome: 'مرحباً بك في Hasio',
      assistant: 'مساعدك السياحي الذكي',
      hotels: 'فنادق',
      restaurants: 'مطاعم',
      tours: 'جولات',
      events: 'فعاليات',
      botMessage: 'مرحباً! أين تريد أن تستكشف اليوم؟',
      userMessage: 'ابحث عن فنادق في الرياض',
      tapToSpeak: 'اضغط للتحدث'
    },
    // Problem section
    problem: {
      label: 'المشكلة',
      title: 'الفجوة في السوق',
      subtitle: 'تواجه السياحة المحلية تحديات تؤثر على جودة التجربة',
      problems: [
        {
          title: 'تشتت الخدمات',
          desc: 'السائح يحتاج إلى تطبيقات متعددة لخدمات مختلفة'
        },
        {
          title: 'ضعف التجربة الرقمية',
          desc: 'معظم التطبيقات لا تعمل بدون إنترنت'
        },
        {
          title: 'الفجوة التسويقية',
          desc: 'صعوبة الوصول للسياح أثناء الرحلة'
        },
        {
          title: 'غياب المنصة الموحدة',
          desc: 'لا توجد منصة شاملة تجمع كل الخدمات'
        }
      ]
    },
    // Solution section
    solution: {
      label: 'الحل',
      title: 'أكثر من مجرد تطبيق',
      services: [
        {
          title: 'حجوزات الفنادق',
          desc: 'حجز فوري بأفضل الأسعار'
        },
        {
          title: 'المطاعم المحلية',
          desc: 'اكتشف أطباق المنطقة'
        },
        {
          title: 'الجولات السياحية',
          desc: 'برامج سياحية متنوعة'
        },
        {
          title: 'الأنشطة الترفيهية',
          desc: 'فعاليات وعروض مميزة'
        }
      ],
      model: {
        title: 'نموذج التشغيل: الاستحواذ الميداني',
        steps: [
          { title: 'الاستقبال', desc: 'حافلات السياح' },
          { title: 'التمكين الميداني', desc: 'مرشدين + QR' },
          { title: 'الربط', desc: 'مقدمي الخدمات' },
          { title: 'العمليات', desc: 'الحجز والدفع' }
        ],
        highlight: 'عمولة 15% من مقدم الخدمة',
        subHighlight: 'صفر تكلفة على السائح'
      }
    },
    // Roadmap section
    roadmap: {
      label: 'خارطة الطريق لمدة 12 شهر',
      title: 'الأهداف المرحلية',
      touristsLabel: 'سائح',
      milestones: [
        'إطلاق مع 5 وجهات',
        'التوسع إلى 15 وجهة',
        'الوصول إلى 25 وجهة',
        'تغطية جميع المناطق السياحية الرئيسية'
      ],
      financial: {
        revenue: { label: 'إيرادات السنة الأولى', value: '12 مليون ريال' },
        expense: { label: 'إجمالي المصروفات', value: '550 ألف ريال' },
        profit: { label: 'صافي الربح', value: '11.45 مليون ريال' }
      }
    },
    // Download section
    download: {
      badge: 'متوفر الآن',
      title: 'تحميل Hasio',
      desc: 'امسح رمز QR لتحميل التطبيق فوراً على جهاز الأندرويد الخاص بك.',
      downloadFor: 'تحميل لـ',
      android: 'أندرويد',
      scanToDownload: 'امسح للتحميل'
    },
    // Founder section
    founder: {
      label: 'المؤسس وقائد المشروع',
      name: 'مرزوق الشمري',
      desc: 'قائد مشاريع سياحية وتقنية مع فوز في هاكاثونات وفهم عميق لسوق السياحة السعودي.',
      investment: {
        label: 'فرصة الاستثمار',
        value: '750,000 ريال',
        quote: '"نحن لا نفترض وجود السياح — لدينا خطة لجلبهم وخلق تجربتهم. هذا ما يجعل أرقامنا واقعية وقابلة للتحقيق."'
      }
    },
    // Footer
    footer: {
      tagline: 'منصة تمكين التجربة السياحية الذكية',
      copyright: '© 2025 Hasio. عرض للمستثمرين - ديسمبر 2025'
    }
  },
  en: {
    // Navigation
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      roadmap: 'Roadmap',
      download: 'Download'
    },
    // Hero
    hero: {
      badge: 'Smart Tourism Platform',
      title: 'Smart Tourism Experience Platform',
      subtitle: 'We accompany tourists moment by moment, transforming their experience from random to smart and organized',
      downloadApp: 'Download App',
      learnMore: 'Learn More',
      stats: {
        commission: 'Commission Only',
        costToTourist: 'Cost to Tourist',
        yearRevenue: 'SAR Year 1 Revenue'
      }
    },
    // Phone mockup
    phone: {
      welcome: 'Welcome to Hasio',
      assistant: 'Your AI travel assistant',
      hotels: 'Hotels',
      restaurants: 'Restaurants',
      tours: 'Tours',
      events: 'Events',
      botMessage: 'Hello! Where would you like to explore today?',
      userMessage: 'Find hotels in Riyadh',
      tapToSpeak: 'Tap to speak'
    },
    // Problem section
    problem: {
      label: 'The Problem',
      title: 'Market Gap',
      subtitle: 'Local tourism faces challenges affecting experience quality',
      problems: [
        {
          title: 'Scattered Services',
          desc: 'Tourists need multiple apps for different services'
        },
        {
          title: 'Poor Digital Experience',
          desc: 'Most apps don\'t work without internet'
        },
        {
          title: 'Marketing Gap',
          desc: 'Difficulty reaching tourists during trips'
        },
        {
          title: 'No Unified Platform',
          desc: 'No comprehensive platform for all services'
        }
      ]
    },
    // Solution section
    solution: {
      label: 'The Solution',
      title: 'More Than Just an App',
      services: [
        {
          title: 'Hotel Bookings',
          desc: 'Instant booking at best prices'
        },
        {
          title: 'Local Restaurants',
          desc: 'Discover regional cuisine'
        },
        {
          title: 'Tourist Tours',
          desc: 'Diverse tourism programs'
        },
        {
          title: 'Activities',
          desc: 'Events and special offers'
        }
      ],
      model: {
        title: 'Operating Model: Field Acquisition',
        steps: [
          { title: 'Reception', desc: 'Tourist Buses' },
          { title: 'Field Enablement', desc: 'Guides + QR' },
          { title: 'Connection', desc: 'Service Providers' },
          { title: 'Operations', desc: 'Booking & Payment' }
        ],
        highlight: '15% commission from service provider',
        subHighlight: 'Zero cost to tourist'
      }
    },
    // Roadmap section
    roadmap: {
      label: '12-Month Roadmap',
      title: 'Growth Milestones',
      touristsLabel: 'Tourists',
      milestones: [
        'Launch with 5 destinations',
        'Expand to 15 destinations',
        'Reach 25 destinations',
        'Cover all main tourist areas'
      ],
      financial: {
        revenue: { label: 'Year 1 Revenue', value: '12M SAR' },
        expense: { label: 'Total Expenses', value: '550K SAR' },
        profit: { label: 'Net Profit', value: '11.45M SAR' }
      }
    },
    // Download section
    download: {
      badge: 'Available Now',
      title: 'Download Hasio',
      desc: 'Scan the QR code to download the app instantly on your Android device.',
      downloadFor: 'Download for',
      android: 'Android',
      scanToDownload: 'Scan to download'
    },
    // Founder section
    founder: {
      label: 'Founder & Project Lead',
      name: 'Marzouq Al-Shammari',
      desc: 'Tourism & tech project leader with hackathon wins and deep understanding of Saudi tourism market.',
      investment: {
        label: 'Investment Opportunity',
        value: '750,000 SAR',
        quote: '"We don\'t assume tourists exist — we have a plan to bring them and create their experience. That\'s what makes our numbers realistic and achievable."'
      }
    },
    // Footer
    footer: {
      tagline: 'Smart Tourism Experience Platform',
      copyright: '© 2025 Hasio. Investor Presentation - December 2025'
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

function App() {
  const [lang, setLang] = useState('ar')
  const t = translations[lang]
  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [lang, isRTL])

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar')
  }

  const roadmapData = [
    { quarter: "Q1", tourists: "10K" },
    { quarter: "Q2", tourists: "30K" },
    { quarter: "Q3", tourists: "60K" },
    { quarter: "Q4", tourists: "100K" }
  ]

  return (
    <div className={`app ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Decorative Background */}
      <div className="bg-decoration">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
        <div className="grain-overlay" />
      </div>

      {/* Navigation */}
      <motion.nav
        className="nav"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <img src="/logo.png" alt="Hasio" className="logo-img" />
            <span className="logo-text">HASIO</span>
          </motion.div>
          <div className="nav-links">
            <motion.a
              href="#problem"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t.nav.problem}
            </motion.a>
            <motion.a
              href="#solution"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.nav.solution}
            </motion.a>
            <motion.a
              href="#roadmap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t.nav.roadmap}
            </motion.a>
            <motion.a
              href="#download"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t.nav.download}
            </motion.a>
            <motion.button
              className="lang-toggle"
              onClick={toggleLang}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="hero-badge"
            variants={scaleIn}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge-dot" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href="#download"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span>{t.hero.downloadApp}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="#solution"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {t.hero.learnMore}
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { value: "15%", label: t.hero.stats.commission },
              { value: "0", label: t.hero.stats.costToTourist },
              { value: "12M", label: t.hero.stats.yearRevenue }
            ].map((stat, index) => (
              <motion.div key={stat.label} style={{ display: 'contents' }}>
                {index > 0 && <div className="stat-divider" />}
                <motion.div
                  className="stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-reflection" />
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="screen-content">
                  <div className="status-bar">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 4h-3V2h-4v2H7v18h10V4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="app-header">
                    <img src="/logo.png" alt="" className="app-logo" />
                    <span>Hasio</span>
                  </div>
                  <div className="app-content">
                    <div className="welcome-card">
                      <h3>{t.phone.welcome}</h3>
                      <p>{t.phone.assistant}</p>
                    </div>
                    <div className="services-preview">
                      <div className="service-chip">{t.phone.hotels}</div>
                      <div className="service-chip">{t.phone.restaurants}</div>
                      <div className="service-chip">{t.phone.tours}</div>
                      <div className="service-chip">{t.phone.events}</div>
                    </div>
                    <div className="chat-preview">
                      <div className="chat-bubble bot">
                        <p>{t.phone.botMessage}</p>
                      </div>
                      <div className="chat-bubble user">
                        <p>{t.phone.userMessage}</p>
                      </div>
                    </div>
                  </div>
                  <div className="voice-bar">
                    <span className="voice-text">{t.phone.tapToSpeak}</span>
                    <div className="voice-btn">
                      <div className="voice-waves">
                        <span></span><span></span><span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                  <div className="home-indicator" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section" id="problem">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">{t.problem.label}</span>
            <h2>{t.problem.title}</h2>
            <p className="section-subtitle">{t.problem.subtitle}</p>
          </motion.div>

          <motion.div
            className="problems-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {t.problem.problems.map((problem, index) => (
              <motion.div
                key={index}
                className="problem-card"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>{problem.title}</h3>
                <p className="desc">{problem.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="solution">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">{t.solution.label}</span>
            <h2>{t.solution.title}</h2>
          </motion.div>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {t.solution.services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="service-icon">
                  {index === 0 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 11l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <h3>{service.title}</h3>
                <p className="desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Operating Model */}
          <motion.div
            className="operating-model"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>{t.solution.model.title}</h3>
            <div className="model-flow">
              {t.solution.model.steps.map((step, index) => (
                <div key={index} style={{ display: 'contents' }}>
                  <div className="model-step">
                    <div className="step-num">{index + 1}</div>
                    <span className="step-title">{step.title}</span>
                    <span className="step-desc">{step.desc}</span>
                  </div>
                  {index < 3 && <div className="model-arrow">{isRTL ? '←' : '→'}</div>}
                </div>
              ))}
            </div>
            <div className="model-highlight">
              <span className="highlight-main">{t.solution.model.highlight}</span>
              <span className="highlight-sub">{t.solution.model.subHighlight}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section" id="roadmap">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">{t.roadmap.label}</span>
            <h2>{t.roadmap.title}</h2>
          </motion.div>

          <motion.div
            className="roadmap-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.quarter}
                className="roadmap-card"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <span className="quarter">{item.quarter}</span>
                <span className="tourists">{item.tourists}</span>
                <span className="tourists-label">{t.roadmap.touristsLabel}</span>
                <p className="milestone">{t.roadmap.milestones[index]}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Financial Summary */}
          <motion.div
            className="financial-summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="financial-card revenue"
              variants={scaleIn}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <span className="fin-label">{t.roadmap.financial.revenue.label}</span>
              <span className="fin-value">{t.roadmap.financial.revenue.value}</span>
            </motion.div>
            <motion.div
              className="financial-card expense"
              variants={scaleIn}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <span className="fin-label">{t.roadmap.financial.expense.label}</span>
              <span className="fin-value">{t.roadmap.financial.expense.value}</span>
            </motion.div>
            <motion.div
              className="financial-card profit"
              variants={scaleIn}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <span className="fin-label">{t.roadmap.financial.profit.label}</span>
              <span className="fin-value">{t.roadmap.financial.profit.value}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section" id="download">
        <motion.div
          className="download-card"
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="download-content">
            <img src="/logo.png" alt="Hasio" className="download-logo" />
            <span className="download-badge">{t.download.badge}</span>
            <h2>{t.download.title}</h2>
            <p>{t.download.desc}</p>

            <motion.a
              href="https://github.com/autonomyowner/hasio2/releases/download/v1.0.0/app-release.apk"
              className="download-btn"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 2.652l1.625 2.825a.5.5 0 01-.183.683l-.933.536a8.5 8.5 0 010 10.608l.933.536a.5.5 0 01.183.683l-1.625 2.825a.5.5 0 01-.683.183l-.934-.539a8.5 8.5 0 01-9.182 0l-.934.539a.5.5 0 01-.683-.183L3.477 18.52a.5.5 0 01.183-.683l.933-.536a8.5 8.5 0 010-10.608l-.933-.536a.5.5 0 01-.183-.683l1.625-2.825a.5.5 0 01.683-.183l.934.539a8.5 8.5 0 019.182 0l.934-.539a.5.5 0 01.683.183zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
              </svg>
              <div>
                <span>{t.download.downloadFor}</span>
                <strong>{t.download.android}</strong>
              </div>
            </motion.a>
          </div>

          <div className="qr-section">
            <motion.div
              className="qr-container"
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="qr-glow" />
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://github.com/autonomyowner/hasio2/releases/download/v1.0.0/app-release.apk&bgcolor=FFFFFF&color=0A6B54"
                alt="Download QR Code"
                className="qr-code"
              />
              <div className="qr-corners">
                <span /><span /><span /><span />
              </div>
            </motion.div>
            <p className="qr-hint">{t.download.scanToDownload}</p>
          </div>
        </motion.div>
      </section>

      {/* Contact / Founder Section */}
      <section className="founder-section">
        <div className="section-container">
          <motion.div
            className="founder-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="founder-info">
              <span className="founder-label">{t.founder.label}</span>
              <h3>{lang === 'ar' ? 'مرزوق الشمري' : 'Marzouq Al-Shammari'}</h3>
              {lang === 'en' && <p className="founder-ar">مرزوق الشمري</p>}
              <p className="founder-desc">{t.founder.desc}</p>
            </div>
            <div className="founder-contact">
              <a href="tel:+966552442119" className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+966 55 244 2119</span>
              </a>
              <a href="mailto:m.a.3.17@outlook.com" className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>m.a.3.17@outlook.com</span>
              </a>
              <a href="https://linkedin.com/in/marzouq-alshammari-339897160" target="_blank" rel="noopener" className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="investment-cta"
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="investment-amount">
              <span className="inv-label">{t.founder.investment.label}</span>
              <span className="inv-value">{t.founder.investment.value}</span>
            </div>
            <p className="investment-quote">{t.founder.investment.quote}</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="Hasio" className="logo-img" />
              <span className="logo-text">HASIO</span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>
          <p className="copyright">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
