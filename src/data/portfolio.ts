export const profile = {
  name: 'Asif Kalam',
  roles: 'Cloud Engineer • Software Developer',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'asifkalam.2003@gmail.com',
  github: import.meta.env.VITE_GITHUB_USERNAME || 'Asifkalam2003',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/asif-kalam-aa4b4924b/',
  naukri: import.meta.env.VITE_NAUKRI_URL || 'https://www.naukri.com/mnjuser/profile?id=&altresid',
}

export const skillGroups = [
  { title: 'Cloud', items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'Lambda', 'CloudWatch', 'CloudFormation', 'CloudFront', 'API Gateway', 'DynamoDB', 'SNS', 'SQS'] },
  { title: 'Development', items: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'REST APIs', 'Socket.io'] },
  { title: 'Data', items: ['MongoDB', 'MySQL', 'Amazon RDS', 'DynamoDB'] },
  { title: 'DevOps', items: ['Git', 'AWS CLI', 'CloudFormation', 'Infrastructure Automation', 'CloudWatch', 'Postman'] },
]

export type Project = { name: string; eyebrow: string; description: string; problem: string; solution: string; stack: string[]; services: string[]; implementation: string; challenges: string; lessons: string; diagram: string[] }
export const projects: Project[] = [
  { name: 'Cloud-Based E-Learning Platform', eyebrow: 'Cloud application architecture', description: 'A multi-role learning platform with protected APIs, real-time communication, and production-style AWS deployment.', problem: 'Student and instructor workflows need secure separation, responsive API performance, and dependable cloud delivery.', solution: 'A Node.js service layer provides JWT-protected REST APIs while EC2, VPC, S3, CloudFront, IAM, and CloudWatch form the cloud delivery and operations layer.', stack: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'], services: ['EC2', 'S3', 'VPC', 'IAM', 'CloudFront', 'CloudWatch'], implementation: 'The backend runs in a custom VPC, static assets are served with S3 and CloudFront, and Socket.io supports live instructor-student interaction. Compound indexes and query projection reduced average API response time from approximately 320 ms to under 200 ms.', challenges: 'Balancing protected multi-role workflows with real-time interaction and a clear, least-privilege infrastructure design.', lessons: 'Application performance, secure access boundaries, and operational monitoring must be designed together.', diagram: ['Users', 'CloudFront', 'React application', 'Protected REST API', 'EC2 • S3 • MongoDB', 'CloudWatch monitoring'] },
  { name: '2048 Game', eyebrow: 'Browser-based web application', description: 'A complete browser game engine built from scratch around a strict MVC architecture.', problem: 'A tile-merging game needs accurate state transitions across every movement direction and edge case.', solution: 'A separated model, view, and controller architecture keeps game state, rendering, and input handling testable and maintainable.', stack: ['JavaScript', 'HTML5', 'CSS3', 'MVC Architecture'], services: ['LocalStorage'], implementation: 'The application implements directional tile movement, chained merge handling, win/lose detection, real-time score tracking, and offline best-score persistence via the localStorage API.', challenges: 'Correctly resolving chained merges and blocked states without coupling rendering to game logic.', lessons: 'Clear architecture matters even in a focused browser application: it simplifies edge-case handling and future changes.', diagram: ['Player input', 'Controller', 'Game model', 'View renderer', 'LocalStorage score'] },
]

export const architectureNodes = [
  ['Internet', 'Entry point for visitors and clients.', 'Receives requests before they enter the cloud delivery path.'],
  ['CloudFront', 'Global content delivery network.', 'Delivers frontend assets closer to users.'],
  ['API / App', 'Application experience and service layer.', 'Coordinates client interactions and application logic.'],
  ['EC2', 'Virtual application compute.', 'Runs workloads requiring managed server capacity.'],
  ['Lambda', 'Serverless compute.', 'Runs event-driven logic without server management.'],
  ['API Gateway', 'Managed API entry point.', 'Routes and manages API requests.'],
  ['S3', 'Durable object storage.', 'Stores static assets and application objects.'],
  ['DynamoDB', 'Managed NoSQL data store.', 'Supports low-latency application data access.'],
  ['CloudWatch', 'Observability service.', 'Collects logs, metrics, and alarms for visibility.'],
] as const
