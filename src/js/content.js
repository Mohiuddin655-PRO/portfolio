/**
 * CONTENT — the single source of truth for everything on the page.
 *
 * To update the site, edit this file only. Nothing here is styling or
 * markup; every field is rendered by `render.js` through shared helpers.
 *
 * Publication rules this file follows (from the master professional profile):
 *   - Only Lovora and Pro.Cal / Dr.Cal AI may be named publicly.
 *   - Commercial figures are used exactly as approved — never extrapolated.
 *   - Capability levels are literal: "Production" or "Hands-on". Basic-level
 *     skills are not listed at all, and are never promoted to a higher level.
 */

export const PROFILE = {
  name: "Mohi Uddin",
  role: "Senior Full-Stack Mobile Engineer",
  status: "Available for new work",
  pitch:
    "I rescue existing Flutter and Android codebases, and build complete production apps — " +
    "from requirements and architecture to backend, release, monitoring and post-launch support.",
  location: "Bangladesh (GMT+6) · Working remotely worldwide",
  email: "mohiuddin655.bd@gmail.com",
  whatsapp: "https://wa.me/8801313670655",
  upwork: "https://www.upwork.com/freelancers/~01f93969b223fdf251",
  github: "https://github.com/Mohiuddin655-DEV",
  linkedin: "https://www.linkedin.com/in/mohiuddin655"
};

export const FACTS = [
  ["Experience", "6+ years"],
  ["Production apps", "25+ contributions"],
  ["Solo end-to-end apps", "11–15"],
  ["Open-source packages", "20+ on pub.dev"],
  ["Availability", "30+ hrs/week, 7 days"],
  ["Start", "Same day"]
];

export const SERVICES = [
  {
    title: "Existing project fixes & rescue",
    lead: "A codebase that stalled, crashes, or was left half-finished by someone else.",
    items: [
      "Bug fixing, crash resolution and same-day urgent production support",
      "Architecture repair, refactoring and modularization",
      "Performance, memory, startup, battery, network and rendering optimization",
      "Flutter/Dart, Gradle, AGP, Kotlin, Xcode, CocoaPods, SPM, signing and build failures",
      "Firebase, backend, API, database, auth, notification and native-integration fixes",
      "Play Store / App Store release and policy-rejection fixes",
      "Legacy upgrades, null-safety migrations, deprecated APIs and breaking SDK migrations",
      "New feature development inside an existing codebase"
    ]
  },
  {
    title: "End-to-end product development",
    lead: "An idea, a set of use cases, or a feature list — taken through to a live release.",
    items: [
      "Requirement discovery, PRD/SRS, user stories, acceptance criteria, roadmap and risk register",
      "Wireframes, flows, Figma/Adobe XD interpretation and pixel-accurate implementation",
      "Mobile app, backend, database, integrations, testing, security, CI/CD and release",
      "Android, iOS and Web production delivery",
      "Monitoring, analytics, remote configuration and post-launch optimization",
      "Full handover: source, builds, backend, credentials guide, test report and support plan"
    ]
  },
  {
    title: "Engagement models",
    tags: [
      "Hourly", "Fixed-price", "Milestone-based", "Monthly retainer / maintenance",
      "Paid technical audit", "Quick fixes", "1–7 day tasks", "Medium projects",
      "Long-term engagements", "Independent single-owner execution",
      "Collaboration with your existing team"
    ]
  }
];

export const CASES = [
  {
    tag: "AI health product",
    name: "Pro.Cal / Dr.Cal AI",
    role: "Sole end-to-end engineer — application and backend.",
    metrics: [
      ["$3,000–$4,000", "Current daily revenue"],
      ["$300,000", "Android build sale value"]
    ],
    items: [
      "AI food and image scanning", "Barcode scanning", "Nutrition and calorie analysis",
      "Meal tracking and history", "Health-data integration", "Subscription, IAP and paywall systems",
      "Custom backend and admin system", "Analytics and Remote Config",
      "Authentication and user profiles", "Push notifications"
    ]
  },
  {
    tag: "Couples app",
    name: "Lovora",
    role: "Sole end-to-end engineer — application and backend.",
    note: "A couples/relationship application. It is not a dating app.",
    metrics: [["$1,500–$2,500", "Current daily revenue"]],
    items: [
      "Real-time partner synchronization and pairing", "Chat and messaging",
      "Background live location and geofencing", "Google Maps with live avatars",
      "Android and iOS home-screen widgets", "Couple activities and content systems",
      "Push and local notifications", "Subscription, in-app purchase and paywall flows",
      "Custom backend and administration system", "Authentication and partner profiles"
    ],
    links: [
      ["Apple App Store", "https://apps.apple.com/app/id6746055334"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.lovoracards.couplequestion"]
    ]
  },
  {
    tag: "Under NDA",
    name: "Undisclosed consumer product",
    role: "Product name remains confidential at the client's request.",
    metrics: [["3M+", "Users reached"]]
  }
];

export const LIFECYCLE = [
  ["Discover", "Clarify outcomes, users, constraints, the existing codebase, risks, integrations and acceptance criteria."],
  ["Define", "PRD, SRS, workflows, use cases, architecture, ERD, API plan, milestones and estimates."],
  ["Design", "Create or interpret Figma / Adobe XD designs; define component systems and responsive behaviour."],
  ["Build", "Flutter and Android implementation, native iOS integrations, Node.js backend, databases, cloud, analytics, payments and AI."],
  ["Verify", "Automated and manual testing, profiling, security checks, code review, Git diff analysis and release readiness."],
  ["Release", "Signing, store metadata, testing tracks, phased rollout, policy compliance, CI/CD and production deployment."],
  ["Operate", "Crash, analytics, revenue and remote-config monitoring, production health, user issues and ongoing optimization."],
  ["Handover", "Source, builds, backend and database, credentials guide, setup instructions, test report, documentation and support plan."]
];

export const CAPABILITIES = [
  {
    title: "Flutter & Dart",
    level: "Production",
    tags: [
      "Android, iOS & Web production apps", "Clean Architecture", "MVVM / MVC / MVP",
      "Modular feature-first", "Dependency injection", "BLoC / Cubit", "Provider", "GetX",
      "Responsive & adaptive UI", "Design systems & theming", "Animation", "Accessibility",
      "Localization / RTL", "Tablet, foldable & desktop layouts", "Flavors & multi-environment",
      "White-label & multi-tenant", "Feature flags"
    ],
    note: "Windows and macOS application capability — no production-release claim."
  },
  {
    title: "Native Android — Kotlin / Java",
    level: "Production",
    tags: [
      "Complete native app development", "XML / ViewBinding", "Jetpack Compose", "MVVM", "Room",
      "WorkManager & background services", "Retrofit / OkHttp", "Coroutines / Flow",
      "Hilt / Dagger / Koin", "Play Billing", "Widgets"
    ]
  },
  {
    title: "Native iOS — Swift / Objective-C",
    level: "Hands-on",
    tags: [
      "Flutter platform channels & plugins", "UIKit", "SwiftUI", "WidgetKit & extensions",
      "Background modes & tasks", "APNs notification extensions", "StoreKit / IAP", "HealthKit",
      "CocoaPods / SPM", "Signing, provisioning & build fixes"
    ],
    note: "Native integrations and platform features — not positioned as full standalone native iOS specialization."
  },
  {
    title: "Backend, APIs & Data",
    level: "Production",
    tags: [
      "Node.js", "Express.js", "REST APIs", "JWT / OAuth / RBAC", "Microservices",
      "Payment integrations", "WebSocket backends", "MongoDB & Atlas",
      "Indexing & query optimization", "Aggregation & transactions", "Replica sets & sharding",
      "SQLite / sqflite", "Offline data systems", "Dio, http, Retrofit, Chopper",
      "Interceptors & refresh tokens", "Caching & offline sync", "gRPC & Protocol Buffers"
    ]
  },
  {
    title: "Firebase & Google Cloud",
    level: "Production",
    tags: [
      "Authentication", "Cloud Firestore", "Realtime Database", "Cloud Functions", "Cloud Storage",
      "Cloud Messaging", "Crashlytics", "Remote Config", "App Check", "Security Rules", "Hosting",
      "Analytics", "Performance Monitoring", "A/B Testing", "App Distribution", "Emulator Suite",
      "Extensions", "Data Connect", "Pub/Sub", "Google Maps Platform", "IAM & service accounts"
    ]
  },
  {
    title: "Real-time, Notifications & Identity",
    level: "Production",
    tags: [
      "WebRTC", "WebSocket", "Firestore listeners", "FCM", "APNs", "Flutter Local Notifications",
      "Awesome Notifications", "OneSignal", "Scheduled & silent notifications",
      "Notification service extensions", "Topic & segment messaging", "Email/password", "Phone OTP",
      "Google Sign-In", "Sign in with Apple", "Anonymous auth", "MFA", "SSO / OAuth 2.0"
    ]
  },
  {
    title: "AI, Automation & On-device ML",
    level: "Production",
    tags: [
      "OpenAI text & vision APIs", "Anthropic Claude API", "Google Gemini API",
      "Whisper / speech-to-text", "Text-to-speech", "Image generation", "Video generation",
      "OpenAI Assistants / Responses API", "MCP-based integrations", "Google ML Kit",
      "OCR / text recognition", "Barcode & QR scanning", "Face detection", "Image labeling",
      "Object detection & tracking", "Pose detection", "Document scanning",
      "Custom TensorFlow Lite models"
    ],
    note:
      "AI-accelerated, human-reviewed engineering. I read, write, debug and architect code " +
      "independently; AI tooling accelerates implementation and review — it does not replace " +
      "engineering judgment."
  },
  {
    title: "Monetization, Payments & Analytics",
    level: "Production",
    tags: [
      "Google Play Billing", "Apple StoreKit / IAP", "RevenueCat", "Adapty", "Qonversion",
      "Superwall", "Zotlo", "Google AdMob", "Stripe", "PayPal / Braintree", "Firebase Analytics",
      "Adjust", "Amplitude", "Mixpanel", "Meta / Facebook SDK", "Google Ads conversion tracking",
      "Revenue & subscription analytics", "Apple ATT consent", "iOS Privacy Manifest",
      "Google Play Data Safety"
    ]
  },
  {
    title: "Quality, Testing, Security & Performance",
    level: "Production",
    tags: [
      "Unit, widget, integration & golden tests", "End-to-end & API testing", "UI automation",
      "flutter_test", "Mockito / Mocktail", "Postman / Newman", "Firebase Test Lab",
      "Maestro / Appium", "Secure token & key storage", "API authentication & authorization",
      "Data encryption", "SSL certificate pinning", "ProGuard / R8 obfuscation",
      "Root & jailbreak detection", "Play Integrity", "Input validation & rate limiting",
      "OWASP-aligned practices", "Flutter DevTools", "Frame/jank optimization",
      "Memory-leak & CPU analysis", "App-size & startup optimization"
    ]
  },
  {
    title: "Cloud, CI/CD & Release",
    level: "Production",
    tags: [
      "Azure App Service (Node.js APIs)", "Azure Application Insights / Monitor",
      "AWS S3 upload & download", "Vercel & Netlify (Flutter Web)", "Railway & Heroku (Node APIs)",
      "Docker & Docker Compose", "Container registries", "GitHub Actions", "GitLab CI/CD",
      "Bitbucket Pipelines", "Codemagic", "Fastlane", "Jenkins", "Azure DevOps Pipelines",
      "Firebase App Distribution", "Play Store & App Store release automation"
    ]
  },
  {
    title: "Device, Native & Platform Integrations",
    level: "Hands-on",
    tags: [
      "Background location & geofencing", "Maps & navigation", "Live map avatars",
      "Background services & WorkManager", "Device sensors", "Camera, gallery & media",
      "File system & downloads", "Audio/video playback & recording", "Contacts & calendar",
      "Share extensions & intents", "Biometric authentication", "Bluetooth / BLE", "NFC",
      "Barcode / QR scanning", "HealthKit & Health Connect",
      "Android & iOS home-screen widgets", "Screen-capture protection", "Deep links & app links",
      "App & notification extensions"
    ]
  },
  {
    title: "Architecture, Tooling & Engineering Practice",
    level: "Production",
    tags: [
      "Clean Architecture", "White-label & multi-tenant systems", "build_runner",
      "json_serializable", "Freezed", "Retrofit, Hive & Drift generators", "Pigeon", "Mason",
      "Custom Dart generators", "Melos / monorepo tooling", "Branching & merge workflows",
      "Rebase / cherry-pick", "Conflict resolution", "Pull requests & code review", "Git bisect",
      "Submodules", "Git LFS", "Semantic versioning", "Dart analyzer & lints",
      "Dependency audits", "Test-coverage tracking", "Architecture documentation"
    ]
  }
];

export const DOMAINS = [
  "Health / fitness / nutrition", "AI-integrated apps", "ML Kit & on-device ML",
  "Couples & relationship apps", "Real-time chat & messaging", "Video / audio calling",
  "Maps & background location", "Native widget apps", "Social media",
  "E-commerce & marketplaces", "Subscription / IAP apps", "Travel & booking",
  "Educational / LMS", "ERP & company management", "Government applications",
  "News & content platforms", "Flutter / Android games", "MLM"
];

export const BOUNDARIES = [
  "Work I do not take on: adult or explicit content, gambling or betting, illegal or deceptive applications, weapons-related apps, crypto or trading apps, and dating apps.",
  "Outside my service scope: banking/fintech and crypto/blockchain as professional categories, traditional web frontend, server administration, and penetration testing."
];

export const PACKAGES = [
  ["auth_management", "v3.4.3", "https://pub.dev/packages/auth_management"],
  ["data_management", "pub.dev", "https://pub.dev/packages/data_management"],
  ["in_app_purchaser", "pub.dev", "https://pub.dev/packages/in_app_purchaser"]
];

export const TIMELINE = [
  {
    when: "Dec 2023 — Present",
    org: "Plantake Inc.",
    role: "Senior Flutter Developer · Remote",
    items: [
      "Sole person responsible for all coding and software engineering at a 100+ employee company.",
      "End-to-end product engineering across mobile, backend, native integrations, monetization, deployment, monitoring and maintenance.",
      "Leadership supplies product ideas and feature requirements; I own planning, architecture, design implementation, delivery and ongoing optimization."
    ]
  },
  {
    when: "Nov 2022 — Nov 2023",
    org: "Tech Analytica Limited",
    role: "Software Engineer · On-site",
    items: [
      "Primary Flutter mobile developer in a cross-functional team.",
      "Owned mobile architecture, API integration, native platform work, security, real-time features, performance and production delivery."
    ]
  },
  {
    when: "Sep 2020 — May 2022",
    org: "Diganta Software Limited",
    role: "Android Developer (Native)",
    items: [
      "Owned native Android development across multiple commercial products.",
      "Architecture, UI, business logic, APIs, debugging, optimization and releases."
    ]
  },
  {
    when: "2017 — 2020",
    org: "Freelance client projects",
    role: "Native Android Developer",
    items: ["3–5 paid native Android projects, alongside study."]
  }
];

export const EDUCATION = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    meta: "World University of Bangladesh · 2022–2026 · Graduated",
    body:
      "Academic project: Farmer-to-Buyer Smart Auction Marketplace — decentralized bidding with " +
      "ML price prediction. Academic work only."
  },
  {
    title: "Diploma in Computer Science & Engineering",
    meta: "Chandpur Polytechnic Institute · 2016–2020"
  },
  {
    title: "AI tools training — 17 course certificates",
    meta: "Coursiv · 2026",
    body:
      "Structured training across conversational AI, research, coding, spreadsheet, image, video, " +
      "design, content and no-code tools. Platform-issued training certificates — not vendor certifications."
  }
];

export const TERMS = [
  ["Availability", "30+ hours per week, seven days. Same-day start. Flexible coverage between 7:00 AM and 1:00 AM Bangladesh time (GMT+6) — not continuous availability."],
  ["Communication", "Written English: strong. Spoken English: basic. Asynchronous documentation and written reporting are a deliberate strength. Bengali is my conversational language."],
  ["Reporting", "Daily written updates, weekly reports, milestone demos, Git summaries, root-cause reports, time logs and release handover."],
  ["Tools", "Slack, Zoom, Google Meet, Discord, Notion, Jira, GitHub Projects/Issues, Upwork Messages. Agile/Scrum delivery."],
  ["Contracts", "Hourly, fixed-price, milestone, retainer/maintenance and paid technical audit."],
  ["Warranty", "30 days for bugs within the agreed scope."],
  ["Scope changes", "Handled as a paid milestone, hourly billing or a revised fixed quote — project dependent."],
  ["NDA & IP", "NDA accepted. Full IP transfer after payment."],
  ["Handover", "Full source, builds, backend and database, credentials guide, setup instructions, test report, documentation and support plan."],
  ["Devices", "Apple Silicon MacBook, Windows PC, physical Android phone and iPhone, emulators and Firebase Test Lab."]
];

export const CONTACT = [
  ["Email", PROFILE.email, `mailto:${PROFILE.email}`],
  ["Phone / WhatsApp", "+880 1313-670655", PROFILE.whatsapp],
  ["LinkedIn", "linkedin.com/in/mohiuddin655", PROFILE.linkedin],
  ["GitHub", "github.com/Mohiuddin655-DEV", PROFILE.github],
  ["Upwork", "Freelancer profile", PROFILE.upwork],
  ["Based in", PROFILE.location, null]
];
