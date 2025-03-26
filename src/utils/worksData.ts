import {type Work} from "../types/work"

export const works: Work[] = [
    {
        id: 0,
        title: 'Content Media',
        description: "<p class=\"contenido\">At Content Media, you led the development of <strong class=\"text-sunny\">scalable FullStack applications</strong>, utilizing <strong class=\"text-sunny\">Angular</strong> for the frontend and <strong class=\"text-sunny\">ExpressJS</strong> for the backend to deliver high-performance user experiences. You played a key role in <strong class=\"text-sunny\">managing cloud infrastructure</strong>, integrating various <strong class=\"text-sunny\">AWS services</strong> such as <strong class=\"text-sunny\">S3, Lambda, EventBridge, Route 53, and CloudFront</strong> to enhance application scalability and security.</p> <p class=\"contenido\">Additionally, you implemented <strong class=\"text-sunny\">CI/CD pipelines with GitHub Actions</strong>, significantly improving deployment efficiency and system reliability. Your contributions extended to performance optimization, leveraging <strong class=\"text-sunny\">serverless architectures</strong> to boost system efficiency. You also ensured high-quality code through rigorous <strong class=\"text-sunny\">unit testing and QA reviews</strong>, adhering to best software development practices.</p> <p class=\"contenido\">Furthermore, you designed secure solutions for data management and financial transactions, strengthening system robustness.</p> <p class=\"contenido pt-8\"><strong class=\"text-sunny\" id=\"key\">Key Technologies:</strong></p> <div class=\"flex gap-12 px-8\"> <ul class=\"contenido\"> <li>Angular</li> <li>ExpressJS</li> <li>AWS</li> </ul> <ul class=\"contenido\"> <li>GitHub Actions</li> <li>Serverless</li> <li>CI/CD</li> </ul> </div>",
        problem:  `<p class="contenido">
            The project encountered severe <strong class="text-sunny">performance bottlenecks</strong> due to an inefficient serverless architecture. The AWS Lambda functions, responsible for handling business logic, experienced frequent <strong class="text-sunny">cold starts</strong> and unoptimized memory allocation, leading to <strong class="text-sunny">high execution latencies</strong>. Additionally, the existing infrastructure lacked proper <strong class="text-sunny">auto-scaling mechanisms</strong>, causing <strong class="text-sunny">downtime</strong> during peak traffic periods.  
        </p>

        <p class="contenido">
            Another critical issue was the <strong class="text-sunny">redundant invocation of Lambda functions</strong>, increasing operational costs and degrading system performance. The architecture did not leverage <strong class="text-sunny">caching mechanisms</strong>, forcing frequent database queries and API calls, further exacerbating response times.  
        </p>

        <p class="contenido">
            Moreover, the application struggled with <strong class="text-sunny">content delivery inefficiencies</strong>, leading to slow page loads and degraded user experience. Cloud resources were underutilized due to <strong class="text-sunny">poor compute optimization strategies</strong>, and deployment cycles were inconsistent due to the lack of a structured <strong class="text-sunny">CI/CD pipeline</strong>.  
        </p>`,
        solution: `<p class="contenido">
            To address these critical issues, I implemented a series of architectural optimizations focused on improving <strong class="text-sunny">performance, scalability, and cost efficiency</strong>.  
        </p>

        <p class="contenido">
            First, I optimized <strong class="text-sunny">AWS Lambda execution</strong> by adjusting memory and compute resource allocation dynamically based on workload requirements. I also <strong class="text-sunny">batched API requests</strong> and introduced <strong class="text-sunny">lazy loading techniques</strong> to minimize unnecessary function invocations, reducing cold start times and improving response rates.  
        </p>

        <p class="contenido">
            To enhance scalability, I implemented <strong class="text-sunny">AWS Auto Scaling</strong> with provisioned concurrency for critical Lambda functions. This allowed the system to pre-warm instances, drastically cutting down initialization times and ensuring high availability even during traffic surges. Additionally, <strong class="text-sunny">CloudFront</strong> was leveraged to <strong class="text-sunny">generate reusable Lambda templates</strong>, reducing redundant deployments and improving execution consistency.  
        </p>

        <p class="contenido">
            For caching and data retrieval improvements, I integrated <strong class="text-sunny">AWS DynamoDB with Global Secondary Indexes (GSIs)</strong> to optimize query performance and minimize direct Lambda-to-database interactions. Additionally, I incorporated <strong class="text-sunny">Redis for caching</strong>, significantly reducing API response times by serving precomputed results.  
        </p>

        <p class="contenido">
            Lastly, I implemented an automated <strong class="text-sunny">CI/CD pipeline using GitHub Actions</strong> to standardize deployments. This streamlined code integration and ensured every update underwent rigorous testing before reaching production. Cloud monitoring tools, such as <strong class="text-sunny">AWS CloudWatch and X-Ray</strong>, were also integrated for real-time performance tracking and debugging.  
        </p>

        <p class="contenido">
            These optimizations led to a <strong class="text-sunny">40% improvement in application response time</strong>, a <strong class="text-sunny">30% reduction in operational costs</strong>, and significantly higher system availability.  
        </p>

        <p class="contenido pt-8"><strong class="text-sunny">Key Technologies:</strong></p>

        <div class="flex gap-12 px-8">
            <ul class="contenido">
                <li>AWS Lambda</li>
                <li>AWS Auto Scaling</li>
                <li>CloudFront (Lambda Templates)</li>
                <li>Redis (Caching)</li>
            </ul>
            <ul class="contenido">
                <li>DynamoDB (GSIs)</li>
                <li>GitHub Actions (CI/CD)</li>
                <li>CloudWatch & X-Ray (Monitoring)</li>
                <li>Serverless Architecture</li>
            </ul>
        </div>`,
        role: 'Analyst Developer FullStack',
        time: 'Sep 2024 - Present',
        image: {
            link: 'https://contentmedia.pe/wp-content/uploads/2021/08/Recurso-3.png',
            alt:'Logo de Content Media'
        },
    },
    {
        id: 1,
        title: 'Consultoria Carranza',
        description: `<p class="contenido">
            As a <strong class="text-sunny">FullStack Developer</strong>, you led a team in the design, development, and deployment of <strong class="text-sunny">AI-integrated software systems</strong>, ensuring project success through <strong class="text-sunny">Scrum methodology</strong>. Your leadership and technical expertise contributed to the successful delivery of high-quality solutions.
        </p>
        <p class="contenido">
            Additionally, you managed <strong class="text-sunny">continuous website maintenance and SEO optimization</strong>, improving performance through tools like <strong class="text-sunny">Google Analytics</strong> and <strong class="text-sunny">PageSpeed Insights</strong>. Your contributions significantly enhanced user experience and site efficiency.
        </p>
        <p class="contenido">
            You played a key role in <strong class="text-sunny">developing and executing unit tests</strong> for both web and mobile applications using <strong class="text-sunny">Playwright</strong> and <strong class="text-sunny">Jest</strong>. This proactive testing approach reduced bugs by <strong class="text-sunny">25%</strong> before deployment, ensuring high software reliability.
        </p>
        <p class="contenido">
            Furthermore, you <strong class="text-sunny">implemented a CI/CD culture</strong>, optimizing workflows with automation tools like <strong class="text-sunny">GitHub Actions</strong>. This reduced manual deployment efforts by <strong class="text-sunny">22%</strong>, increasing development efficiency and reliability.
        </p>
        <p class="contenido">
            Another key contribution was building and deploying <strong class="text-sunny">web scrapers</strong> for automating legal standards and price collection using <strong class="text-sunny">Playwright</strong> and <strong class="text-sunny">Azure</strong>. These automated solutions significantly improved data accuracy and operational efficiency.
        </p>
        <p class="contenido pt-8" id="key">
            <strong class="text-sunny">Key Technologies:</strong>
        </p>
        <div class="flex gap-12 px-8">
            <ul class="contenido">
                <li>Angular</li>
                <li>Express</li>
                <li>Astro</li>
            </ul>
            <ul class="contenido">
                <li>Playwright</li>
                <li>Jest</li>
                <li>GitHub Actions</li>
                <li>Azure</li>
            </ul>
        </div>
        `,
        problem: `<p class="contenido" id="problem">
            The original system was built as a <strong class="text-sunny">monolithic application</strong>, limiting scalability, maintainability, and multi-tenancy support. The platform was tailored for a single-client environment, making it <strong class="text-sunny">difficult to onboard new customers</strong> without extensive manual configuration.  
        </p>

        <p class="contenido">
            Additionally, the deployment process lacked automation, requiring <strong class="text-sunny">manual interventions</strong> for updates and releases. This led to <strong class="text-sunny">longer downtimes</strong> and inconsistent application states across environments. The absence of a structured **CI/CD pipeline** and versioning strategy further complicated maintenance.  
        </p>

        <p class="contenido">
            Security and compliance also posed challenges. The system lacked <strong class="text-sunny">proper access control mechanisms</strong>, and user data was stored without clear multi-tenancy separation, risking data leaks. The performance suffered due to <strong class="text-sunny">unoptimized database queries</strong> and the lack of **caching mechanisms**, causing slow response times and increased operational costs.  
        </p>`,
        solution: `<p class="contenido" id="solution">
            To transform the system into a scalable <strong class="text-sunny">SaaS platform</strong>, I led a full <strong class="text-sunny">architectural refactor</strong>, implementing a **multi-tenant structure** with modular microservices.  
        </p>

        <p class="contenido">
            First, I restructured the system using <strong class="text-sunny">Angular for frontend modularization</strong> and <strong class="text-sunny">Express with Angular Universal</strong> for backend and server-side rendering. The application was containerized using **Docker**, enabling seamless deployments and environment consistency.  
        </p>

        <p class="contenido">
            To enhance **multi-tenancy**, I implemented <strong class="text-sunny">role-based access control (RBAC)</strong> and **database partitioning** using PostgreSQL schemas. Each tenant now had isolated data storage, eliminating cross-client data leakage risks. I also integrated <strong class="text-sunny">Azure Functions</strong> for handling background tasks asynchronously, improving system responsiveness.  
        </p>

        <p class="contenido">
            For **performance optimization**, I introduced **Playwright-based automated testing** to detect UI/UX flaws early. I also implemented **Redis caching** to optimize API response times and reduced database load by indexing critical queries.  
        </p>

        <p class="contenido">
            To modernize deployments, I introduced a **CI/CD culture** using <strong class="text-sunny">GitHub Actions</strong>. This allowed for automated builds, testing, and deployments, reducing release cycles and ensuring stability. The system was also integrated with **Google Analytics** and **PageSpeed Insights** to continuously monitor performance and improve SEO rankings.  
        </p>

        <p class="contenido">
            This refactor transformed the platform into a fully functional **SaaS solution**, increasing customer onboarding efficiency by **40%**, reducing operational costs by **30%**, and enhancing system reliability.  
        </p>

        <p class="contenido pt-8"><strong class="text-sunny">Key Technologies:</strong></p>

        <div class="flex gap-12 px-8">
            <ul class="contenido">
                <li>Angular (Modular Frontend)</li>
                <li>Express + Angular Universal (Backend & SSR)</li>
                <li>Docker (Containerization)</li>
                <li>Azure Functions (Serverless Tasks)</li>
            </ul>
            <ul class="contenido">
                <li>PostgreSQL (Multi-Tenancy Support)</li>
                <li>GitHub Actions (CI/CD Automation)</li>
                <li>Playwright & Jest (Automated Testing)</li>
            </ul>
        </div>`,
        role: 'Web/App Developer',
        time: 'Sep 2024 - Present',
        image: {
            link: 'https://media.licdn.com/dms/image/v2/D4E05AQGn1-24K_2u4A/videocover-low/videocover-low/0/1681848672856?e=2147483647&v=beta&t=5lFG8p_i_1gvdNZq4qvGV0CBh48xUQdOzjaEr7yQ9L8',
            alt:'Logo de Consultoria Carranza'
        },
    },
    {
        id: 2,
        title: 'Geohidrac S.A.C.',
        description:`<p class="contenido">
            At your role, you supervised the <strong class="text-sunny">installation, configuration, and maintenance</strong> of geotechnical instruments, including <strong class="text-sunny">vibrating wire piezometers, inclinometers, and DataLoggers</strong>, ensuring a <strong class="text-sunny">20% increase in system accuracy</strong>.
        </p>

        <p class="contenido">
            You developed and deployed a <strong class="text-sunny">virtual inventory tool</strong> to optimize field material management, reducing <strong class="text-sunny">operational errors</strong> and improving <strong class="text-sunny">resource efficiency by 5%</strong>. Additionally, you created a <strong class="text-sunny">cloud-based platform</strong> for <strong class="text-sunny">real-time decision-making</strong>, significantly reducing <strong class="text-sunny">equipment and team mobilization costs by 30%</strong>.
        </p>

        <p class="contenido">
            As part of your leadership responsibilities, you conducted <strong class="text-sunny">preventive, predictive, and corrective maintenance</strong>, while also preparing <strong class="text-sunny">daily instrumentation reports</strong> and supervising personnel.
        </p>

        <p class="contenido">
            You also led the <strong class="text-sunny">redesign and prototyping</strong> of the company website, enhancing <strong class="text-sunny">SEO and performance</strong> to improve <strong class="text-sunny">visibility and user engagement</strong>.
        </p>

        <p class="contenido pt-8" id="key"><strong class="text-sunny">Key Technologies:</strong></p>

        <div class="flex gap-12 px-8">
            <ul class="contenido">
                <li>React</li>
                <li>AWS</li>
                <li>NextJS</li>
            </ul>
        </div>`,
        problem: `<p class="contenido">
            The mining company faced challenges in **real-time data collection** from geotechnical sensors, specifically **vibrating wire piezometers**. The lack of a centralized interface made **monitoring and decision-making inefficient**, requiring manual data retrieval and increasing operational delays.  
        </p>

        <p class="contenido">
            Field engineers relied on **distributed spreadsheets** and local logs for data storage, leading to **inconsistent records and difficulties in trend analysis**. The absence of **automated alerts** made it hard to detect anomalies in groundwater pressure, posing **safety risks** and **delaying preventive actions**.  
        </p>

        <p class="contenido">
            The existing system also lacked **remote accessibility**, forcing engineers to be on-site for analysis, increasing **personnel mobilization costs** and affecting **decision-making speed**.  
        </p>`,
        solution: `<p class="contenido">
            To streamline **sensor data collection and visualization**, I designed a **web-based IoT interface** using **React and Next.js**, hosted on **AWS** for **real-time monitoring**.  
        </p>

        <p class="contenido">
            The new platform integrated **DataLoggers** via a **REST API**, enabling seamless communication between piezometric sensors and the cloud. The collected data was stored in a **time-series database**, allowing engineers to visualize historical trends and set threshold-based alerts for critical pressure variations.  
        </p>

        <p class="contenido">
            For **improved accessibility**, the interface was developed as a **responsive PWA (Progressive Web App)**, ensuring usability on both **desktop and mobile devices**. The **dashboard provided real-time analytics**, displaying sensor data through **interactive charts and heatmaps**, helping engineers quickly assess risks.  
        </p>

        <p class="contenido">
            Additionally, **automated notifications** were implemented, triggering alerts when anomalies were detected, reducing **response time by 30%**. A **role-based access control (RBAC)** system was also integrated to ensure **data security**, preventing unauthorized modifications.  
        </p>

        <p class="contenido">
            The new solution **reduced the need for manual data collection, decreased operational costs, and improved decision-making efficiency**, transforming the monitoring process into a **proactive and automated system**.  
        </p>

        <p class="contenido pt-8"><strong class="text-sunny">Key Technologies:</strong></p>

        <div class="flex gap-12 px-8">
            <ul class="contenido">
                <li>React & Next.js (UI & Performance Optimization)</li>
                <li>AWS (Cloud Hosting & Scalability)</li>
                <li>REST API (Sensor Integration)</li>
            </ul>
        </div>`,
        role: 'IT Member – Instrumentation Assistant',
        time: 'Sep 2024 - Present',
        image: {
            link: 'https://www.canadaperu.org/sites/default/files/store/empresa/foto/2021-05/999332323609db120ed21e.jpg',
            alt:'Logo de Geohidrac S.A.C.'
        },
    }
]