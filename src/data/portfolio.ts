export type ProjectType = "Engineering" | "Growth" | "Events";

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  subtitle: string;
  client: string;
  year: string;
  role: string;
  heroImage: string;
  videoUrl?: string;
  description: string;
  challenge: string;
  theIdea: string;
  systemDesign: string;
  engineeringScope: string;
  businessOutcome: string;
  techStack: string[];
  liveLink: string;
  githubLink?: string;
  stats?: {
    commits: number;
    stars: number;
    forks: number;
  };
  responsibilities: string[];
  impact: string[];
  isWeb3: boolean;
  isFeatured: boolean;
  timeline?: string;
  deliverables?: string[];
  context?: string;
  ideation?: string;
  solution?: string;
  gallery?: string[];
}

export const allProjects: Project[] = [
  {
    slug: "harapay",
    title: "HaraPay — Offline Crypto Payments",
    subtitle: "Web3 for the unbanked",
    category: "Web3 Infrastructure",
    type: "Engineering",
    client: "Blockchain Communities",
    year: "2024",
    role: "Product Engineer",
    timeline: "8 Weeks",
    deliverables: ["Product Strategy", "System Architecture", "Node.js Backend", "End-to-End USSD Execution"],
    context: "Millions across Africa cannot access digital financial services due to unreliable internet and complex onboarding systems. The existing crypto ecosystem focuses entirely on high-speed internet and smartphone users.",
    ideation: "To bridge the gap between blockchain technology and traditional telecom protocols, we needed a zero-internet-required crypto wallet. The core idea was to map USSD menu sequences (*123#) directly to Hedera network transactions while securely managing private keys on a robust backend node.",
    solution: "I designed a scalable USSD gateway that interfaces directly with a Node.js backend. This backend orchestrates private key shards and securely executes transfers on the Hedera Hashgraph via their SDK, effectively processing crypto transactions in under 3 seconds without a data connection.",
    gallery: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop"
    ],
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "A USSD-powered crypto payment system that allows users to send, receive, and manage funds on the Hedera network without needing internet access. Designed for high-impact financial inclusion in emerging markets.",
    challenge: "Millions across Africa cannot access digital financial services due to unreliable internet and complex onboarding systems.",
    theIdea: "Bridge the gap between blockchain technology and traditional USSD protocols to create a zero-internet-required crypto wallet.",
    systemDesign: "Built a USSD gateway that interacts with a Node.js backend. The backend manages private key shards and executes transactions on the Hedera network via SDK.",
    engineeringScope: "USSD protocol design, Hedera SDK integration, secure key management, and transaction queuing systems.",
    businessOutcome: "Deployed a working prototype capable of handling sub-cent transaction fees for users without smartphones.",
    techStack: ["Hedera SDK", "Node.js", "USSD Gateway", "SMS APIs"],
    liveLink: "#",
    githubLink: "https://github.com/omokeify/harapay",
    stats: { commits: 124, stars: 42, forks: 12 },
    responsibilities: [
      "Collaborated with a global team of blockchain enthusiasts to define the USSD session lifecycle for crypto operations.",
      "Architected the backend interface in Node.js to bridge USSD protocol requests with the Hedera Hashgraph mainnet.",
      "Implemented a secure, sharding-based private key management system for non-custodial wallet security via feature phones.",
      "Integrated Hedera SDK for sub-second transaction finality and ultra-low fee execution (less than $0.001 per tx).",
      "Developed a custom USSD menu state machine to handle complex user flows like balance checks, transfers, and liquidation.",
      "Built a reliable SMS-based confirmation and notification system to provide users with transaction receipts.",
      "Optimized backend response times to ensure USSD sessions don't time out during heavy network congestion.",
      "Designed the cryptographic payload structure for secure transaction signing via simple numeric PIN inputs.",
      "Managed version control and team collaboration using Git, emphasizing feature-based branching and peer code reviews.",
      "Deployed the solution with high-availability consideration for critical financial infrastructure in remote areas."
    ],
    impact: [
      "Successfully enabled blockchain access for users with $20 feature phones, bypassing the need for 4G/5G infrastructure.",
      "Reduced the complexity of crypto transfers to a simple 4-digit PIN system, lowering the barrier to entry for non-technical users.",
      "Processed high-fidelity test transactions in low-bandwidth rural areas with 100% success rate on the Hedera network.",
      "Eliminated the smartphone requirement for digital payments, opening the market to 40% of the currently unbanked population.",
      "Delivered a smooth, low-latency interface that feels as responsive as traditional banking USSD codes.",
      "Architected a scalable, modular gateway ready for multi-carrier deployment across sub-Saharan Africa.",
      "Established a blueprint for non-internet-dependent DeFi interactions in emerging economies."
    ],
    isWeb3: true,
    isFeatured: true
  },
  {
    slug: "arcle",
    title: "Arcle — Payment Infrastructure",
    subtitle: "Crypto to Fiat rails",
    category: "Fintech Rails",
    type: "Engineering",
    client: "Fintech Startup",
    year: "2024",
    role: "Full Stack Engineer",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Building the infrastructure that makes crypto payments as easy as sending a link. Arcle allows merchants to accept crypto and receive fiat directly into their bank accounts.",
    challenge: "Merchants want to accept crypto but fear volatility and complex liquidation processes.",
    theIdea: "A link-based payment system that handles the crypto-to-fiat conversion in the background, providing a Web2 experience for a Web3 transaction.",
    systemDesign: "Frontend payment links (React) -> Liquidity Aggregators -> Fiat Ramps (APIs) -> Bank Settlement.",
    engineeringScope: "Payment link generation, real-time price feed integration, and fiat on/off ramp orchestration.",
    businessOutcome: "Shortened the merchant onboarding process for crypto acceptance by 80%.",
    techStack: ["React", "Node.js", "Payment APIs", "Liquidity Engines"],
    liveLink: "#",
    githubLink: "https://github.com/omokeify/arcle",
    stats: { commits: 86, stars: 31, forks: 8 },
    responsibilities: [
      "Developed the secure, high-performance link-based payment generator using React and a modular component library.",
      "Integrated real-time price oracles and liquidity aggregators to ensure merchants receive the best possible conversion rates.",
      "Automated the fiat settlement process by orchestrating bank API webhooks and on-ramp/off-ramp service integrations.",
      "Designed a seamless checkout experience with zero-friction wallet connections (MetaMask, WalletConnect, Coinbase).",
      "Built a robust merchant dashboard for real-time transaction tracking, settlement history, and exportable financial reports.",
      "Implemented strict security protocols for link expiration and one-time-use payment signatures to prevent double-spending.",
      "Optimized the payment flow to handle concurrent transactions with minimal latency during peak market volatility.",
      "Collaborated on the API design for merchant integration, ensuring ease of use for third-party platforms.",
      "Managed CI/CD deployment pipelines using Github Actions for continuous delivery of frontend and backend services.",
      "Executed comprehensive unit and integration testing across the payment rail to ensure 99.9% reliability."
    ],
    impact: [
      "Reduced merchant onboarding time for crypto acceptance by 80%, from weeks to minutes.",
      "Processed thousands of dollars in pilot transactions without a single loss or failed settlement during high volatility periods.",
      "Delivered a Web2 checkout experience for Web3 transactions, leading to a significant increase in user conversion.",
      "Eliminated the merchant's risk of price volatility by locking in exchange rates at the moment of payment.",
      "Enhanced financial transparency with real-time settlement tracking and automated reconciliation.",
      "Architected a bridge that connects existing traditional banking systems with decentralized liquidity pools.",
      "Proven scalability of the system during stress tests with concurrent payment link generations."
    ],
    isWeb3: true,
    isFeatured: true
  },
  {
    slug: "ai-sales-inbox",
    title: "Smart Inbox — AI Sales Engine",
    subtitle: "Automated Lead Generation",
    category: "AI & Automation",
    type: "Engineering",
    client: "SaaS Enterprise",
    year: "2024",
    role: "AI Systems Engineer",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "A background automation engine that turns your Gmail inbox into a high-octane sales assistant using GPT-4 and custom automation workflows.",
    challenge: "Sales teams spend 60% of their time manually sorting through emails and drafting initial proposals.",
    theIdea: "An AI agent that monitors the inbox, categorizes leads, and drafts highly personalized proposals based on previous successful deals.",
    systemDesign: "Gmail API Webhooks -> Node.js Workflow -> GPT-4 Analysis -> CRM Integration -> Draft Generation.",
    engineeringScope: "API integration, AI prompt engineering, and background job processing (BullMQ).",
    businessOutcome: "Increased sales team efficiency by 3x, allowing them to focus only on closed deals.",
    techStack: ["GPT-4", "Node.js", "Gmail API", "BullMQ", "Tailwind CSS"],
    liveLink: "#",
    responsibilities: [
      "Engineered a high-concurrency Node.js listener for Gmail API webhooks to detect and process incoming lead inquiries.",
      "Developed complex, multi-stage AI prompt chains using GPT-4 to accurately categorize leads by intent and urgency.",
      "Built a custom automation workflow that cross-references lead data with internal CRMs to provide contextual intelligence.",
      "Implemented an automated proposal generation engine that drafts personalized responses based on history of successful closings.",
      "Optimized background job processing using BullMQ to handle thousands of concurrent email analyses without downtime.",
      "Integrated secure OAuth2 authentication for seamless user connection and permission management within the Google ecosystem.",
      "Created an interactive dashboard using React and Tailwind CSS for sales teams to monitor and review AI-generated drafts.",
      "Refined the RAG pipeline to include company-specific sales collateral in the AI's reasoning.",
      "Managed development velocity and code quality through rigorous Git practices and automated testing suites.",
      "Collaborated with sales stakeholders to continuously iterate on the AI's conversational tone and proposal logic."
    ],
    impact: [
      "Achieved a 3x increase in total sales outreach volume without increasing headcount.",
      "Reduced the average time-to-first-response for inquiries by 40%, directly correlating with higher closing rates.",
      "Identified over 20% more high-value leads that would have previously been missed in an overflowing inbox.",
      "Eliminated over 15 hours of manual drafting per salesperson per week through automated response orchestration.",
      "Enhanced lead quality by implementing AI-driven scoring before human intervention.",
      "Delivered a highly responsive, modern interface that integrates perfectly with the existing sales tech stack.",
      "Established a scalable template for AI-driven communications across multi-channel outreach platforms."
    ],
    isWeb3: false,
    isFeatured: true
  },
  {
    slug: "onb3d",
    title: "Blink — Intelligent Onboarding Platform",
    subtitle: "Automated efficiency for scaling relationships.",
    category: "AI & Automation",
    type: "Engineering",
    client: "Agencies & SaaS Enterprises",
    year: "2024",
    role: "Lead Product Engineer",
    timeline: "12 Weeks",
    deliverables: ["Product Architecture", "Automated Workflows", "Client Portals", "Smart Analytics"],
    context: "Client onboarding is traditionally fragmented, manual, and slow. Teams lose dozens of hours every week to repeating administrative tasks like intake forms and document requests.",
    ideation: "We rejected manual workflows in favor of a System of Intelligence that acts as a bridge between lead interest and successful client relationships.",
    solution: "I architected an automation hub that handles intake and email sequences while providing branded portals for clients to track progress securely.",
    gallery: [
      "/src/work/onb3d/dashboard.jpg.png",
      "/src/work/onb3d/onb3d.jpg.png"
    ],
    heroImage: "/src/work/onb3d/onb3d.jpg.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "An intelligent onboarding platform crafted to eliminate manual workflows through automated efficiency. It operates at the intersection of intelligent automation and human connection.",
    challenge: "Scaling client intake without scaling headcount often leads to fragmented document management and poor initial user experiences.",
    theIdea: "Rejecting manual administrative overhead in favor of a System of Intelligence that reclaims time for high-value human connection.",
    systemDesign: "Multi-stage automation engine using BullMQ for task processing and email orchestration, with high-performance real-time analytics pipelines.",
    engineeringScope: "End-to-end development of the automation hub, enterprise CRM stack integration (Salesforce/HubSpot), and secure document management portals.",
    businessOutcome: "Reduced manual administrative overhead by over 60% and enabled a 400% increase in client intake volume without increasing staff.",
    techStack: ["TypeScript", "Next.js", "Framer Motion", "BullMQ", "Postgres", "Prisma"],
    liveLink: "https://onb3d.vercel.app/",
    githubLink: "https://github.com/omokeify/onboard3d",
    responsibilities: [
      "Architected the multi-stage automation engine for reliable task processing and complex email orchestration.",
      "Designed and implemented secure, branded client portals for transparent project tracking and document sharing.",
      "Integrated enterprise-grade API webhooks for seamless synchronization with Salesforce and HubSpot ecosystems.",
      "Built a custom analytics dashboard to provide real-time insights into the onboarding pipeline and team performance."
    ],
    impact: [
      "Reduced manual administrative overhead for agency teams by 60% through automated scheduling and intake.",
      "Achieved 99.9% reliability on automated contract delivery across hundreds of concurrent onboarding sessions.",
      "Shortened time-to-value for new clients by 30% through optimized, immediate feedback loops."
    ],
    isWeb3: false,
    isFeatured: true
  },
  {
    slug: "ceo-elite",
    title: "CEO — Elite AI Executive Assistant",
    subtitle: "Your external brain for high-stakes decisions.",
    category: "AI & Automation",
    type: "Engineering",
    client: "Executives & Founders",
    year: "2025",
    role: "Lead AI Engineer",
    timeline: "10 Weeks",
    deliverables: ["Multi-Agent Architecture", "Executive Briefing Engine", "Email Triage System", "Strategic Dashboard"],
    context: "High-performing executives suffer from decision fatigue caused by fragmented data, unstructured inboxes, and a constant flood of low-priority noise competing with mission-critical signals.",
    ideation: "Rather than building another productivity tool, we architected an External Brain — a multi-agent reasoning system that learns an executive's priorities, filters noise at the source, and surfaces only what demands human judgment.",
    solution: "CEO is a multi-agent orchestration hub that triages high-stakes communication, generates daily strategic briefings, extracts action items, and provides context-aware recommendations — all operating silently in the background.",
    gallery: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
    ],
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "A multi-agent AI platform that acts as the executive's External Brain — triaging communication, generating strategic briefings, and surfacing only the decisions that require human judgment.",
    challenge: "Executives lose an average of 4-6 hours per day to information overload. The cost is not just time — it is delayed decisions, missed opportunities, and strategic fatigue.",
    theIdea: "Build an AI orchestration layer that sits between the executive and their data streams, using specialized agents to filter, reason, and brief rather than just aggregate.",
    systemDesign: "Email/Calendar APIs -> Triage Agent -> Reasoning Layer (RAG + GPT-4) -> Briefing Compiler -> Executive Dashboard.",
    engineeringScope: "Multi-agent pipeline design, large-context RAG architecture, real-time email processing, and a high-density executive command interface.",
    businessOutcome: "Increased decision velocity by 40% and reclaimed 15+ hours per week previously lost to manual information processing and email triage.",
    techStack: ["TypeScript", "Next.js", "Vercel AI SDK", "GPT-4", "LangChain", "BullMQ", "Postgres"],
    liveLink: "#",
    githubLink: "https://github.com/omokeify/ceo",
    responsibilities: [
      "Architected the multi-agent pipeline with specialized agents for email triage, calendar reasoning, and strategic briefing generation.",
      "Implemented a large-context RAG system to surface relevant historical decisions and company data during briefing compilation.",
      "Built the real-time email processing engine using Gmail and Outlook OAuth2 integrations with high-concurrency BullMQ queues.",
      "Designed the executive command interface — a high-density dashboard providing complete situational awareness at a glance.",
      "Engineered the briefing compiler that synthesizes overnight communications into a structured, prioritized morning digest.",
      "Integrated calendar intelligence to automatically correlate upcoming meetings with relevant email threads and action items.",
      "Implemented adaptive priority scoring that learns from executive feedback to continuously improve triage accuracy.",
      "Optimized token usage across the LLM pipeline to ensure sub-3-second briefing generation for large inbox volumes."
    ],
    impact: [
      "Increased decision velocity by 40% by eliminating manual information gathering from the executive's daily routine.",
      "Reclaimed 15+ hours per week through automated triage, allowing executives to focus exclusively on high-leverage decisions.",
      "Reduced critical email response time by 65% by surfacing urgent communications to the top within seconds of arrival.",
      "Delivered structured, contextual briefings that reduced meeting preparation time from 45 minutes to under 5 minutes."
    ],
    isWeb3: false,
    isFeatured: true
  }
];

export const blogPosts = [
  {
    slug: "future-of-web3-payments",
    title: "The Future of Web3 Payments: Bypassing the Internet",
    excerpt: "How USSD and blockchain are teaming up to bank the unbanked in emerging markets.",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    category: "Web3",
    readTime: "5 min",
    content: "Full content coming soon..."
  }
];

export const ecosystemCaseStudies = [
  {
    slug: "hedera-community-growth",
    title: "Hedera Africa Community Launch",
    category: "Community Management",
    type: "Growth",
    metric: "400% Growth",
    description: "Orchestrating the regional expansion of Hedera Hashgraph across sub-Saharan Africa through localized events and ambassador programs.",
    results: ["5,000+ new verified developers", "12 IRL workshops hosted", "Strategic partnerships with 3 universities"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop"
  }
];
