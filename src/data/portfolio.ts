export const profile = {
  name: 'Asif Kalam',

  roles: 'Cloud Engineer • AWS • DevOps • Software Developer',

  email:
    import.meta.env.VITE_CONTACT_EMAIL ||
    'asifkalam.2003@gmail.com',

  github:
    import.meta.env.VITE_GITHUB_USERNAME ||
    'Asifkalam2003',

  linkedin:
    import.meta.env.VITE_LINKEDIN_URL ||
    'https://www.linkedin.com/in/asif-kalam-aa4b4924b/',

  naukri:
    import.meta.env.VITE_NAUKRI_URL ||
    'https://www.naukri.com/mnjuser/profile?id=&altresid',
}

export const skillGroups = [
  {
    title: 'AWS & Cloud',
    items: [
      'AWS',
      'EC2',
      'S3',
      'IAM',
      'VPC',
      'CloudWatch',
      'CloudFormation',
      'CloudFront',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'SNS',
      'SQS',
    ],
  },

  {
    title: 'Backend Development',
    items: [
      'Java',
      'Python',
      'JavaScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Socket.io',
    ],
  },

  {
    title: 'Frontend & Web',
    items: [
      'React.js',
      'HTML5',
      'CSS3',
      'JavaScript',
      'MVC Architecture',
    ],
  },

  {
    title: 'Data & Databases',
    items: [
      'MongoDB',
      'MySQL',
      'Amazon RDS',
      'DynamoDB',
      'LocalStorage',
    ],
  },

  {
    title: 'DevOps & Tools',
    items: [
      'Git',
      'GitHub',
      'AWS CLI',
      'CloudFormation',
      'Infrastructure Automation',
      'CloudWatch',
      'Postman',
    ],
  },
]

export type Project = {
  name: string
  eyebrow: string
  description: string
  problem: string
  solution: string
  stack: string[]
  services: string[]
  implementation: string
  challenges: string
  lessons: string
  diagram: string[]
}

export const projects: Project[] = [
  {
    name: 'Cloud-Based E-Learning Platform',

    eyebrow: 'AWS cloud application',

    description:
      'A cloud-based multi-role e-learning platform designed for students and instructors, featuring secure authentication, protected APIs, real-time communication, and AWS-based deployment.',

    problem:
      'Online learning systems need secure separation between student and instructor workflows while supporting reliable APIs, scalable content delivery, real-time interaction, and operational visibility.',

    solution:
      'The platform uses React for the client experience and Node.js with Express.js for the backend. JWT authentication protects APIs and role-based access separates users. AWS infrastructure provides compute, networking, storage, content delivery, identity management, and monitoring.',

    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'JWT',
      'REST APIs',
    ],

    services: [
      'Amazon EC2',
      'Amazon S3',
      'Amazon VPC',
      'AWS IAM',
      'Amazon CloudFront',
      'Amazon CloudWatch',
    ],

    implementation:
      'The frontend is built with React and application requests are handled through REST APIs developed with Node.js and Express.js. JWT-based authentication protects user access, while role-based workflows support students and instructors. Socket.io enables real-time communication. The application infrastructure is deployed on EC2 within a controlled VPC environment. Static assets are stored in Amazon S3 and delivered through CloudFront. IAM controls permissions and CloudWatch provides operational monitoring. Database indexing and query optimisation were used to improve API performance.',

    challenges:
      'The main challenges were designing secure multi-role access, protecting APIs, supporting real-time communication, connecting application components cleanly, and maintaining a clear separation between application logic and cloud infrastructure.',

    lessons:
      'This project strengthened my understanding of how frontend applications, backend APIs, authentication, cloud infrastructure, content delivery, monitoring, and security work together as one complete system.',

    diagram: [
      'Users',
      'CloudFront',
      'React.js Frontend',
      'Node.js + Express API',
      'JWT Authentication',
      'EC2 in VPC',
      'MongoDB Database',
      'S3 Storage',
      'Socket.io',
      'CloudWatch Monitoring',
    ],
  },

  {
    name: 'Cloud Infrastructure Automation',

    eyebrow: 'Infrastructure as code • DevOps',

    description:
      'A reusable AWS infrastructure automation project built using CloudFormation to provision cloud resources consistently and improve repeatability across environments.',

    problem:
      'Manual cloud provisioning can create configuration inconsistencies, increase setup time, and make infrastructure difficult to reproduce across development and deployment environments.',

    solution:
      'Infrastructure is defined using reusable CloudFormation templates, allowing AWS resources and configurations to be provisioned consistently through infrastructure as code practices.',

    stack: [
      'AWS CloudFormation',
      'AWS CLI',
      'Bash Scripting',
      'Infrastructure as Code',
    ],

    services: [
      'Amazon EC2',
      'Amazon S3',
      'AWS IAM',
      'Amazon CloudWatch',
    ],

    implementation:
      'Reusable CloudFormation templates define infrastructure resources and configuration. The project follows modular and DRY principles to reduce repeated configuration. AWS CLI and scripting support deployment workflows, while CloudWatch provides monitoring and operational visibility.',

    challenges:
      'The main challenge was designing templates that were reusable and understandable while keeping resource dependencies, permissions, and configuration organised.',

    lessons:
      'Infrastructure should be treated like application code: versioned, repeatable, modular, and easy to review. Infrastructure as code reduces manual configuration and improves consistency.',

    diagram: [
      'Developer',
      'AWS CLI / Scripts',
      'CloudFormation Template',
      'EC2 Infrastructure',
      'S3 Storage',
      'IAM Permissions',
      'CloudWatch Monitoring',
    ],
  },

  {
    name: '2048 Game',

    eyebrow: 'Frontend application • MVC architecture',

    description:
      'A browser-based implementation of the 2048 game built from scratch using JavaScript and a structured Model-View-Controller architecture.',

    problem:
      'The game requires accurate tile movement, merge rules, score tracking, win and lose detection, and reliable handling of edge cases across all movement directions.',

    solution:
      'The application separates game state, rendering, and user interaction through an MVC architecture, making the logic easier to test, maintain, and extend.',

    stack: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'MVC Architecture',
    ],

    services: [
      'Browser APIs',
      'LocalStorage',
    ],

    implementation:
      'The game supports directional tile movement, merge validation, score calculation, win and game-over detection, dynamic board rendering, and persistent best-score storage using the browser localStorage API.',

    challenges:
      'The most difficult part was correctly handling merge logic so that tiles merge according to the game rules without allowing invalid repeated merges during a single move.',

    lessons:
      'The project demonstrated the value of separating application state from UI rendering. Even a small application becomes easier to debug and extend when responsibilities are clearly defined.',

    diagram: [
      'Player Input',
      'Controller',
      'Game Logic',
      'Game State Model',
      'View Renderer',
      'Score System',
      'LocalStorage',
    ],
  },
]

export const architectureNodes = [
  [
    'Users',
    'Students and instructors access the application.',
    'They interact with the platform through the web interface.',
  ],

  [
    'CloudFront',
    'Content delivery layer for frontend assets.',
    'Delivers static application content efficiently to users.',
  ],

  [
    'React.js',
    'Frontend application layer.',
    'Provides the user interface and communicates with backend APIs.',
  ],

  [
    'Node.js API',
    'Backend application and REST API layer.',
    'Handles business logic, authentication, and application workflows.',
  ],

  [
    'JWT Authentication',
    'Token-based access control.',
    'Protects APIs and supports authenticated user sessions.',
  ],

  [
    'EC2',
    'Virtual compute for application services.',
    'Runs the backend workload in AWS.',
  ],

  [
    'VPC',
    'Network isolation and infrastructure boundary.',
    'Controls how application resources communicate within AWS.',
  ],

  [
    'S3',
    'Object storage for static assets and application files.',
    'Provides durable storage for application content.',
  ],

  [
    'MongoDB',
    'Application database.',
    'Stores users, application data, and learning-related information.',
  ],

  [
    'Socket.io',
    'Real-time communication layer.',
    'Supports live interaction between application users.',
  ],

  [
    'CloudWatch',
    'Monitoring and observability layer.',
    'Provides logs and metrics for application and infrastructure visibility.',
  ],
] as const