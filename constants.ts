import { Content, Language } from './types';

export const COLORS = {
  navy: '#0E1A2B',
  blue: '#3A76F0',
  ivory: '#F8F5F0',
  lemon: '#F5D76E',
  softGreen: '#7ECF8B',
  lightBlue: '#9BC7FF',
  softGray: '#DADCE0',
};

const contentEn: Content = {
  nav: {
    about: "About",
    whatIDo: "Expertise",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi! I'm",
    name: "Yunyue LEI",
    titles: ["Curious Builder", "Analytical Thinker", "Cross-cultural Storyteller"],
    bio: "I’m a self-driven programmer & data enthusiast with a strong foundation in business analysis, sustainable innovation, and global project execution. Having worked across Europe and Asia, I enjoy transforming complex challenges into intuitive, user-centered solutions through data, design, and strategy.",
    cta: "View My Work"
  },
  about: {
    title: "What I Do",
    description: "Combining technical precision with creative strategy.",
    skills: [
      {
        title: "Data Analysis & Visualisation",
        skills: "Python, Pandas, Matplotlib, SQL, Tableau",
        iconName: "BarChart3"
      },
      {
        title: "Product & Content Design",
        skills: "Figma, Canva, CapCut",
        iconName: "PenTool"
      },
      {
        title: "Communication & Branding",
        skills: "Storytelling, Cross-cultural Messaging",
        iconName: "Globe"
      },
      {
        title: "Innovation & User Insight",
        skills: "Research, Product Thinking, Iterative Development",
        iconName: "Lightbulb"
      }
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Global E-commerce HRBP Intern",
        company: "ByteDance",
        period: "Mar – Aug 2025",
        location: "Shanghai",
        description: [
          "Analysed consumer behaviour to generate actionable insights for business teams.",
          "Supported leadership development programs and employee engagement initiatives."
        ],
        kpi: "24 Panels / 13 Reports"
      },
      {
        role: "Sustainable Development Intern",
        company: "Decathlon",
        period: "Jun 2024 – Mar 2025",
        location: "Shanghai",
        description: [
          "Executed sustainability campaigns with measurable increases in visibility and user engagement.",
          "Coordinated nationwide collaboration with stores and production offices during global clean-up initiatives."
        ],
        kpi: "Nationwide Collab"
      },
      {
        role: "Marketing Intern",
        company: "Santen",
        period: "Sep – Dec 2023",
        location: "Shanghai",
        description: [
          "Conducted competitor and partnership research to support product expansion.",
          "Produced SEO-optimised content to improve digital visibility.",
          "Analysed sales data and contributed to product launch operations."
        ],
        kpi: "Product Launch Ops"
      }
    ]
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Diamond Price Analysis",
        category: "Code",
        description: "Data analysis project using Python libraries to analyze diamond pricing trends.",
        tools: ["Python", "Pandas", "Matplotlib"],
        link: "https://github.com/BarbaraLEI/Python---diamond-price-analysis",
        image: "https://picsum.photos/id/20/800/600"
      },
      {
        title: "Kiwun’s Rose Castle",
        category: "Code",
        description: "An RPG Maker game project showcasing narrative design and logic implementation.",
        tools: ["RPG Maker", "Game Logic"],
        link: "https://github.com/BarbaraLEI/RPG-MAKER---kiwun-.git",
        image: "https://picsum.photos/id/96/800/600"
      },
      {
        title: "Decathlon Zero-Emission Truck",
        category: "Video",
        description: "Brand video highlighting sustainable logistics initiatives.",
        tools: ["Video Editing", "Storytelling"],
        link: "https://www.bilibili.com/video/BV1wXWHenEGb",
        image: "https://picsum.photos/id/160/800/600"
      },
      {
        title: "Pet Cloud: An Emotional Companion",
        category: "Video",
        description: "Short film exploring emotional connections.",
        tools: ["Directing", "Editing"],
        link: "https://www.bilibili.com/video/BV1kr421j7t3",
        image: "https://picsum.photos/id/237/800/600"
      },
      {
        title: "Content Creation",
        category: "Design",
        description: "Various design and content creation projects across digital platforms.",
        tools: ["Figma", "Canva"],
        link: "#",
        image: "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/bf8dcbaca0357833dfe5ae0ba4ddd1e5.PNG",
        gallery: [
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/bf8dcbaca0357833dfe5ae0ba4ddd1e5.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/ae58e1c24d8ea5f8e1c127dcc0db3c79.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/92b96809c754e5abc75dc5562f2bab36.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/8bf6c95f2e1677b908433e4fea4a7d88.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/64b5432786fcd71a3f7421bb0901f18a.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/5ed0b7fe310f67ff8b6b968403561e9c.PNG"
        ]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        school: "EDHEC Business School | Imperial College London",
        degree: "Master in Management & MSc Innovation, Entrepreneurship & Management",
        period: "2025 – 2028",
        details: [
          "EDHEC–Imperial Dual Degree",
          "Academic Excellence Scholarship (Top 5%), Future Chinese Alumni Scholarship",
          "EDHEC Student Ambassador"
        ]
      },
      {
        school: "East China Normal University",
        degree: "Bachelor in French Literature",
        period: "2021 – 2025",
        details: [
          "GPA 3.78/4.0 (Top 10%)",
          "National Scholarship (Top 5%)"
        ]
      }
    ]
  },
  contact: {
    title: "Contact Me",
    subtitle: "I’d love to connect — whether it’s about collaborations, product ideas, or global opportunities.",
    emailText: "yunyue.lei@edhec.com",
    linkedinText: "LinkedIn Profile",
    footerQuote: "Make an impact."
  }
};

const contentZh: Content = {
  nav: {
    about: "关于我",
    whatIDo: "技能专长",
    experience: "工作经历",
    projects: "项目展示",
    education: "教育背景",
    contact: "联系我",
  },
  hero: {
    greeting: "你好！我是",
    name: "雷云越",
    titles: ["好奇的构建者", "理性分析者", "跨文化叙事者"],
    bio: "我是一名自我驱动的程序员和数据爱好者，在商业分析、可持续创新和全球项目执行方面拥有扎实的基础。曾在欧洲和亚洲工作，我热衷于通过数据、设计和战略，将复杂的挑战转化为直观的、以用户为中心的解决方案。",
    cta: "查看作品"
  },
  about: {
    title: "我的专长",
    description: "融合技术精度与创意策略。",
    skills: [
      {
        title: "数据分析与可视化",
        skills: "Python, Pandas, Matplotlib, SQL, Tableau",
        iconName: "BarChart3"
      },
      {
        title: "产品与内容设计",
        skills: "Figma, Canva, CapCut",
        iconName: "PenTool"
      },
      {
        title: "沟通与品牌建设",
        skills: "故事叙述, 跨文化传播",
        iconName: "Globe"
      },
      {
        title: "创新与用户洞察",
        skills: "用户调研, 产品思维, 迭代开发",
        iconName: "Lightbulb"
      }
    ]
  },
  experience: {
    title: "工作经历",
    items: [
      {
        role: "全球电商 HRBP 实习生",
        company: "字节跳动",
        period: "2025年3月 – 8月",
        location: "上海",
        description: [
          "分析消费者行为，为业务团队提供可落地的洞察建议。",
          "支持领导力发展项目和员工敬业度提升计划。"
        ],
        kpi: "24场评审 / 13份报告"
      },
      {
        role: "可持续发展实习生",
        company: "迪卡侬",
        period: "2024年6月 – 2025年3月",
        location: "上海",
        description: [
          "执行可持续发展活动，显著提升了品牌可见度和用户参与度。",
          "在全球清洁行动期间，协调全国门店与生产办公室的合作。"
        ],
        kpi: "全国协同项目"
      },
      {
        role: "市场部实习生",
        company: "参天制药",
        period: "2023年9月 – 12月",
        location: "上海",
        description: [
          "进行竞争对手和合作伙伴研究，支持产品市场拓展。",
          "制作SEO优化内容，提升数字化曝光率。",
          "分析销售数据并参与产品发布运营。"
        ],
        kpi: "产品发布运营"
      }
    ]
  },
  projects: {
    title: "精选项目",
    items: [
      {
        title: "钻石价格分析",
        category: "Code",
        description: "使用 Python 库分析钻石定价趋势的数据分析项目。",
        tools: ["Python", "Pandas", "Matplotlib"],
        link: "https://github.com/BarbaraLEI/Python---diamond-price-analysis",
        image: "https://picsum.photos/id/20/800/600"
      },
      {
        title: "Kiwun’s Rose Castle",
        category: "Code",
        description: "一个展示叙事设计和逻辑实现的 RPG Maker 游戏项目。",
        tools: ["RPG Maker", "Game Logic"],
        link: "https://github.com/BarbaraLEI/RPG-MAKER---kiwun-.git",
        image: "https://picsum.photos/id/96/800/600"
      },
      {
        title: "迪卡侬零排放卡车",
        category: "Video",
        description: "展示可持续物流举措的品牌视频。",
        tools: ["视频剪辑", "故事叙述"],
        link: "https://www.bilibili.com/video/BV1wXWHenEGb",
        image: "https://picsum.photos/id/160/800/600"
      },
      {
        title: "Pet Cloud: 情感伴侣",
        category: "Video",
        description: "探索情感联结的短片。",
        tools: ["导演", "剪辑"],
        link: "https://www.bilibili.com/video/BV1kr421j7t3",
        image: "https://picsum.photos/id/237/800/600"
      },
      {
        title: "内容创作",
        category: "Design",
        description: "跨数字平台的各种设计和内容创作项目。",
        tools: ["Figma", "Canva"],
        link: "#",
        image: "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/bf8dcbaca0357833dfe5ae0ba4ddd1e5.PNG",
        gallery: [
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/bf8dcbaca0357833dfe5ae0ba4ddd1e5.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/ae58e1c24d8ea5f8e1c127dcc0db3c79.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/92b96809c754e5abc75dc5562f2bab36.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/8bf6c95f2e1677b908433e4fea4a7d88.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/64b5432786fcd71a3f7421bb0901f18a.PNG",
          "https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/5ed0b7fe310f67ff8b6b968403561e9c.PNG"
        ]
      }
    ]
  },
  education: {
    title: "教育背景",
    items: [
      {
        school: "EDHEC 商学院 | 帝国理工学院",
        degree: "管理学硕士 & 创新、创业与管理硕士",
        period: "2025 – 2028",
        details: [
          "EDHEC–Imperial 双学位项目",
          "学术卓越奖学金 (Top 5%), 未来中国校友奖学金",
          "EDHEC 学生大使"
        ]
      },
      {
        school: "华东师范大学",
        degree: "法语文学学士",
        period: "2021 – 2025",
        details: [
          "GPA 3.78/4.0 (Top 10%)",
          "国家奖学金 (Top 5%)"
        ]
      }
    ]
  },
  contact: {
    title: "联系我",
    subtitle: "无论是关于合作、产品创意还是全球机会，我都乐意与您交流。",
    emailText: "yunyue.lei@edhec.com",
    linkedinText: "LinkedIn 个人主页",
    footerQuote: "Make an impact."
  }
};

export const getContent = (lang: Language) => lang === 'en' ? contentEn : contentZh;