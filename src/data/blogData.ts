export const topAds = [
  { 
    id: 1, 
    type: 'banner',
    text: "Seamlessly Buy & Sell Crypto via Bank Transfers.", 
    sponsor: "FlipPay", 
    image: "/work/flippay/banner.jpg.png",
    url: "https://www.flippay.app/"
  },
  { 
    id: 2, 
    text: "Have a product to build? Let's talk.", 
    sponsor: "From Fredy", 
    image: "/assets/fredy_omoke.jpg",
    url: "https://wa.me/2347039662696"
  },
  { 
    id: 3, 
    text: "Web3 Infrastructure & Fintech Solutions", 
    sponsor: "Services", 
    image: "/assets/fredy_omoke.jpg",
    url: "/work"
  },
  { 
    id: 4, 
    text: "Trading Bots, DeFi Tooling & Smart Contracts", 
    sponsor: "Available Now", 
    image: "/assets/fredy_omoke.jpg",
    url: "/work"
  },
];

export const latestPosts = [
  { id: "arc-quantum-antidote", title: "Circle's Arc: Building the Quantum Antidote", time: "Just now" },
  { id: "web3-africa", title: "Building Web3 in Africa", time: "2 hours ago" },
  { id: "ai-agents", title: "AI Agents in DeFi", time: "1 day ago" },
  { id: "career-dev", title: "Developer to Lead Transition", time: "2 days ago" },
  { id: "mathematics-community", title: "Math of Community Growth", time: "1 week ago" },
];

export const mainPosts = [
  {
    id: "arc-quantum-antidote",
    title: "Your Crypto Wallet Has an Expiry Date. Circle's Arc Is Building the Antidote",
    excerpt: "Quantum computers are coming. They will crack every wallet signature — unless the industry acts now. Here's why Arc is the first L1 designed to survive Q-Day.",
    author: "Fredy Omoke",
    date: "Apr 7, 2026",
    readTime: "10 min read",
    category: "Web3 Security",
    image: "/work/blog/arc-quantam.jpeg",
    tags: ["Post-Quantum Crypto", "Circle Arc", "Q-Day", "USDC L1", "Security"],
    content: [
      {
        type: "list",
        title: "⚡ Executive Summary",
        items: [
          "Quantum computers capable of breaking today's cryptography could arrive by 2030 or sooner.",
          "Circle's Arc blockchain is designing quantum-resistant signatures and infrastructure from day one.",
          "Most existing chains (Bitcoin, Ethereum, Solana) face a painful, disruptive retrofit.",
          "This isn't a distant risk. 'Harvest now, decrypt later' attacks are already possible today."
        ]
      },
      {
        type: "heading",
        text: "The Clock Most of Crypto Is Pretending Doesn't Exist"
      },
      {
        type: "paragraph",
        text: "Every wallet in crypto — Bitcoin, Ethereum, Solana, all of it — runs on the same foundational assumption: the math is too hard. Specifically, deriving a private key from a public key requires solving an elliptic curve discrete logarithm problem. Today's fastest supercomputers would take millions of years to crack it. A sufficiently powerful quantum computer could do it in minutes."
      },
      {
        type: "paragraph",
        text: "That's not science fiction. That's physics. Shor's algorithm, published in 1994, provides a theoretical blueprint for how a quantum computer would break ECDSA — the very signature scheme protecting nearly every blockchain wallet on earth. The only open question is: when does the hardware catch up to the theory?"
      },
      {
        type: "quote",
        text: "Q-Day isn't an 'if.' It's a 'when.' And the blockchain industry is mostly responding with silence."
      },
      {
        type: "paragraph",
        text: "Some experts place Q-Day — the moment a quantum machine can break public-key cryptography at scale — as early as 2030. Google researchers suggested this window may arrive sooner. While the Bitcoin community remains divided, Circle just made the clearest move in the space yet."
      },
      {
        type: "heading",
        text: "🔐 How Your Wallet Works Today"
      },
      {
        type: "paragraph",
        text: "When you create a crypto wallet, you get a private key (a secret number) and a public key. Your wallet address is derived from the public key. When you send a transaction, you sign it using your private key. The network verifies the signature using your public key — proving you authorized the transaction — without ever learning your private key."
      },
      {
        type: "heading",
        text: "⚛️ The Quantum Attack Vector"
      },
      {
        type: "paragraph",
        text: "A quantum computer running Shor's algorithm can work backwards — deriving the private key from the public key. Once an attacker has your private key, they control your wallet. There are two attack types: Long attacks (harvesting exposed public keys from on-chain history) and Short attacks (intercepting and forging transactions in the seconds before confirmation)."
      },
      {
        type: "heading",
        text: "🕵️ Harvest Now, Decrypt Later"
      },
      {
        type: "paragraph",
        text: "Adversaries can collect your encrypted transactions and wallet data right now and store them. When quantum hardware matures, they decrypt everything retroactively. For institutions holding long-lived digital assets or sensitive financial data — this is an existential risk that can't be patched after the fact."
      },
      {
        type: "heading",
        text: "Why Most Blockchains Are Structurally Unprepared"
      },
      {
        type: "paragraph",
        text: "The crypto industry's dirty secret is that post-quantum migration is an extraordinarily hard problem for live networks. It's not just about updating a signature scheme. It spans every layer of the stack: wallet key pairs, validator authentication, HSMs, MPC systems, and billions of existing addresses."
      },
      {
        type: "heading",
        text: "Circle's Arc: Quantum-Resistant by Design"
      },
      {
        type: "paragraph",
        text: "Arc is Circle's Layer-1 blockchain — a purpose-built chain for stablecoin finance and institutional use. Targeting mainnet in 2026, the quantum security roadmap is a phased engineering commitment baked into the network's architecture from day one."
      },
      {
        type: "list",
        title: "The Phased Roadmap",
        items: [
          "At Launch: Quantum-Resistant Wallets & Signatures (Opt-in). Users can create wallets backed by algorithms no quantum computer can break.",
          "Near-term: Private State Protection. Extends resistance to cover private balances and confidential payments.",
          "Mid-term: Infrastructure Hardening. Aligning cloud servers, HSMs, and node connections with post-quantum TLS 1.3 standards.",
          "Long-term: Validator Signature Hardening. Implementing larger post-quantum signatures for consensus without sacrificing network efficiency."
        ]
      },
      {
        type: "heading",
        text: "How Arc Compares to the Rest of the Ecosystem"
      },
      {
        type: "table",
        headers: ["Chain", "PQ Wallet Support", "PQ at Launch", "Status"],
        rows: [
          ["Circle Arc", "✓ Opt-in at mainnet", "✓ Yes (2026)", "Testnet → Mainnet 2026"],
          ["Algorand", "✓ Most PQ-ready", "✗ Retrofitting", "Noted by Google"],
          ["Ethereum", "~ Exploring", "✗ No", "Multi-year Migration"],
          ["Solana", "~ Exploring", "✗ No", "Early Research"],
          ["Bitcoin", "✗ Divided", "✗ No", "No Consensus"]
        ]
      },
      {
        type: "heading",
        text: "What You Should Do Right Now"
      },
      {
        type: "callout",
        title: "👤 If You're a User",
        text: "Stop reusing wallet addresses. Every time you reuse an address, you expose your public key on-chain — giving a future quantum attacker a target. Use fresh addresses for each transaction where possible."
      },
      {
        type: "callout",
        title: "🛠 If You're a Developer",
        text: "Start evaluating which chains you build on through the lens of durability. The EVM tooling you know carries over to Arc, but you get a defensive answer when institutional partners ask about long-term risk."
      },
      {
        type: "paragraph",
        text: "Quantum computing isn't a reason to panic. It is a reason to build infrastructure that doesn't become obsolete in a decade. Arc is betting they will be. Now the rest of the ecosystem has to answer the same question."
      }
    ]
  },
  {
    id: "web3-africa",
    title: "Building Web3 in Africa: The Reality Nobody Posts About",
    excerpt: "Erratic internet, dollar-denominated tooling costs, and communities that don't know what a wallet is. Here's how I've been navigating it — and why I'm more bullish than ever.",
    author: "Fredy Omoke",
    date: "Mar 5, 2025",
    readTime: "10 min read",
    category: "Community",
    image: "/work/blog/web3-africa.jpg.png",
    content: [
      {
        type: "paragraph",
        text: "Building in Lagos is different from building in London. We aren't just solving for better financial Rails; we are solving for survival. But the narrative of 'Africa as a crypto frontier' often overlooks the grueling day-to-day challenges of local development."
      },
      {
        type: "heading",
        text: "Internet and Power: The Hidden Taxes"
      },
      {
        type: "paragraph",
        text: "When your internet cuts out mid-deployment or the power goes out while you're syncing a node, your productivity isn't just slowed — it's shattered. We build tools that are resilient by necessity. This has led to a culture of optimization that I believe gives African devs a unique edge in the global market."
      },
      {
        type: "callout",
        title: "Developer Reality",
        text: "We don't use the cloud because it's cool; we use it because hosting anything local is a gamble. Every byte matters when data is expensive and connections are spotty."
      },
      {
        type: "paragraph",
        text: "Despite the noise, the potential is real. We are seeing real-world use cases for cross-border payments and inflation hedging that aren't just 'number go up' speculation. It's about utility, and the utility is undeniable."
      },
      {
        type: "heading",
        text: "The Mobile-First Constraint"
      },
      {
        type: "paragraph",
        text: "Most global Web3 tools assume a high-end iPhone and a 5G connection. In sub-Saharan Africa, the reality is mid-range Android devices and expensive, spotty 3G. This isn't just a hardware problem; it's an architecture problem. We need lighter clients, more efficient data serialization, and USSD fallbacks. If it doesn't work on a $100 phone, it doesn't work for the majority."
      },
      {
        type: "list",
        title: "Localized Success Framework",
        items: [
          "Low-Bandwidth Optimization: Reduce the size of your RPC calls and state fetches.",
          "Fiat On-ramps: Integration with Mobile Money (MTN, Orange, M-PESA) is worth more than any DEX listing.",
          "Education-First Onboarding: Don't sell 'decentralization'; sell 'savings' and 'cheaper transfers'.",
          "Regional Nodes: Latency from Lagos to AWS US-East is a UX killer. Local edge caching is mandatory."
        ]
      }
    ]
  },
  {
    id: "ai-agents",
    title: "The Rise of AI Agents in Decentralized Finance",
    excerpt: "What happens when you give an LLM a wallet? Exploring the potential and the security nightmare of autonomous agents executing on-chain trades and governance.",
    author: "Fredy Omoke",
    date: "Jan 22, 2025",
    readTime: "11 min read",
    category: "AI/Web3",
    image: "/work/blog/ai-agents.jpg.png",
    content: [
      {
        type: "paragraph",
        text: "What happens when you give an LLM a wallet? You get an AI Agent that can negotiate, trade, and govern in real-time. This is the new frontier of DeFi, but it comes with a massive security warning."
      },
      {
        type: "heading",
        text: "The Autonomy Paradox"
      },
      {
        type: "paragraph",
        text: "We want agents to be autonomous so they can catch opportunities 24/7. But autonomy without guardrails is a recipe for disaster. If an LLM hallucinates a trade or gets tricked by a prompt injection, your treasury could be drained in seconds."
      },
      {
        type: "quote",
        text: "AI Agents are the ultimate power users. They don't sleep, they don't panic, and they don't make emotional mistakes. But they also don't have common sense."
      },
      {
        type: "heading",
        text: "Building Secure Agents"
      },
      {
        type: "paragraph",
        text: "The solution lies in hybrid architectures: LLMs for strategy, and hardcoded smart contract logic for execution limits. An agent might decide which token to buy, but the contract ensures it can never spend more than its allocated budget. This 'Trust but Verify' model is the only way forward."
      },
      {
        type: "heading",
        text: "Risk vs. Reward Analysis"
      },
      {
        type: "table",
        headers: ["Vector", "AI Capability", "Critical Risk"],
        rows: [
          ["Arbitrage", "24/7 Execution", "Toxic MEV Vulnerability"],
          ["Governance", "Informed Voting", "Prompt Injection Attacks"],
          ["Liquidity", "Dynamic Provisioning", "Liquidation Loop Failure"],
          ["Audit", "Real-time Discovery", "False Positive Hallucination"]
        ]
      },
      {
        type: "heading",
        text: "The Governance Layer"
      },
      {
        type: "paragraph",
        text: "In 2026, we're seeing the first 'Agent DAOs.' These are organizations where the primary voters are autonomous agents trained on the protocol's whitepaper and historical data. This leads to faster, more rational decision-making, but it also creates a metadata layer that humans can't easily audit. The challenge for developers is building observability tools that allow us to understand *why* an agent voted a certain way before it's too late."
      }
    ]
  },
  {
    id: "career-dev",
    title: "Developer to Lead: The Hardest Transition",
    excerpt: "Moving from individual contributor to team lead requires a software update for your brain. Here's how I handled the shift in perspective.",
    author: "Fredy Omoke",
    date: "Jan 03, 2025",
    readTime: "10 min read",
    category: "Career",
    image: "/work/blog/career-dev.jpg",
    content: [
      {
        type: "paragraph",
        text: "Being a great developer is about solving technical problems. Being a great lead is about helping other people solve technical problems. It sounds like a subtle shift, but it requires a total rewiring of your brain. Here's what nobody told me about the transition."
      },
      {
        type: "heading",
        text: "Letting Go of the Code"
      },
      {
        type: "paragraph",
        text: "In the first month of my lead role, I tried to keep my seat at the keyboard. I failed. As a lead, your success is no longer measured by your individual lines of code, but by the output of your entire team. If you're spending all your time in VS Code, you're missing the bigger picture: unblocking your devs and Shielding them from scope creep."
      },
      {
        type: "list",
        title: "The Lead Mindset",
        items: [
          "Your job is to be an umbrella. Protect the team from management noise.",
          "Over-communicate. What seems obvious to you is rarely obvious to everyone.",
          "Feedback is a gift. Learn how to give it early and often, but always with empathy.",
          "Technical decisions are now people decisions. Every architecture choice affects the team's morale and workload."
        ]
      },
      {
        type: "heading",
        text: "Communication Patterns"
      },
      {
        type: "paragraph",
        text: "As a developer, your communication is mostly 'pull requests' and 'Slack messages'. As a lead, your communication is 'expectations' and 'context'. You have to learn how to translate technical constraints into business risks for stakeholders, and translate business goals into technical requirements for your devs. Most leads fail because they try to speak only one of these languages."
      },
      {
        type: "list",
        title: "The Lead's Weekly Audit",
        items: [
          "Check-in: Have I had a 1:1 with every direct report this week?",
          "Blocker Scan: What is slowing down my fastest developer?",
          "Strategic Alignment: Does the team know *why* we are prioritizing this feature?",
          "Self-Reflection: Did I spend at least 4 hours thinking about the next quarter, not just the next sprint?"
        ]
      }
    ]
  },
  {
    id: "mathematics-community",
    title: "The Mathematics of Community Growth",
    excerpt: "Why the first 100 members are harder than the next 1,000. Analyzing the viral coefficients and retention loops that sustain ecosystems.",
    author: "Fredy Omoke",
    date: "Dec 20, 2024",
    readTime: "14 min read",
    category: "Growth",
    image: "/work/blog/mathematics-community.jpg",
    content: [
      {
        type: "paragraph",
        text: "Building a community isn't just about 'vibes' and marketing. It's a mathematical challenge. There are specific tipping points where a group of people transforms from a collection of individuals into a self-sustaining ecosystem."
      },
      {
        type: "heading",
        text: "The Law of the First 100"
      },
      {
        type: "paragraph",
        text: "The manual effort required to gain the first 100 members is often 10x higher than what's needed for the next 1,000. Why? Because you're overcoming the 'zero-network' inertia. At this stage, you aren't managing a community; you're manually engineering every interaction to ensure value is being exchanged."
      },
      {
        type: "list",
        title: "Growth Metrics that Matter",
        items: [
          "Retention over Reach: 100 active members are better than 1,000 lurkers.",
          "Density of Interaction: How many members are talking to each other, not just to the founder?",
          "Value Velocity: How quickly does a new member receive their first 'win' in the community?",
          "Churn Management: Identifying the exact point where members lose interest and intervening."
        ]
      },
      {
        type: "heading",
        text: "The Viral Coefficient"
      },
      {
        type: "paragraph",
        text: "The 'K-factor' or viral coefficient is the number of new users generated by an existing user. For a community to grow exponentially, K must be greater than 1. In most Web3 communities, K is artificially inflated by speculators and airdrop farmers. When the incentives disappear, K crashes to zero. Sustainable growth requires building a 'K-factor' based on utility and shared identity, not just tokens."
      },
      {
        type: "quote",
        text: "A community is a network, not a broadcast. If the center is the only source of truth, it's a cult; if the edges are empowered, it's an ecosystem."
      }
    ]
  },
];
