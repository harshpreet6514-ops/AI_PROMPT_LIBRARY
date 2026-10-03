const prompts = [
{
id: 1,
title: "Senior React Code Review",
category: "Frontend",
prompt: "Act as a senior React engineer. Review my React application for scalability, maintainability, performance bottlenecks, unnecessary re-renders, state management issues, and code quality concerns. Explain each recommendation with examples."
},
{
id: 2,
title: "Modern SaaS Landing Page",
category: "Frontend",
prompt: "Design a high-converting SaaS landing page. Include hero section, social proof, pricing, FAQs, call-to-action placement, and UX recommendations optimized for conversions."
},
{
id: 3,
title: "Responsive UI Audit",
category: "Frontend",
prompt: "Analyze this UI and identify responsiveness issues across desktop, tablet, and mobile devices. Suggest layout improvements and accessibility fixes."
},
{
id: 4,
title: "Dashboard Design System",
category: "Frontend",
prompt: "Create a complete design system for a dashboard application including typography, spacing, colors, reusable components, and accessibility guidelines."
},
{
id: 5,
title: "Frontend Architecture Review",
category: "Frontend",
prompt: "Evaluate this frontend project structure and recommend improvements for scalability, maintainability, performance, and team collaboration."
},
{
id: 6,
title: "CSS Animation Expert",
category: "Frontend",
prompt: "Create elegant and performance-friendly CSS animations for a modern SaaS website while maintaining accessibility and responsiveness."
},
{
id: 7,
title: "Portfolio Improvement Guide",
category: "Frontend",
prompt: "Review my portfolio website and provide detailed recommendations on design, user experience, project presentation, typography, and visual hierarchy."
},
{
id: 8,
title: "Accessibility Inspector",
category: "Frontend",
prompt: "Perform a complete accessibility audit and identify WCAG compliance issues along with practical solutions."
},

{
id: 9,
title: "Python Architecture Review",
category: "Python",
prompt: "Act as a senior Python architect. Review my codebase for maintainability, performance, security, testing strategy, and software design principles."
},
{
id: 10,
title: "Advanced Debugging Assistant",
category: "Python",
prompt: "Identify logical bugs, hidden edge cases, performance issues, and potential exceptions in this Python code. Explain every fix clearly."
},
{
id: 11,
title: "Automation Script Generator",
category: "Python",
prompt: "Create a production-ready Python automation script with error handling, logging, configuration support, and maintainable structure."
},
{
id: 12,
title: "Data Analysis Consultant",
category: "Python",
prompt: "Analyze a dataset using pandas and provide business insights, visualizations, trends, anomalies, and actionable recommendations."
},
{
id: 13,
title: "API Development Expert",
category: "Python",
prompt: "Design a scalable REST API using Flask or FastAPI with authentication, validation, error handling, and best practices."
},
{
id: 14,
title: "LeetCode Coach",
category: "Python",
prompt: "Solve this coding challenge using the most efficient algorithm. Explain time complexity, space complexity, and alternative approaches."
},
{
id: 15,
title: "Code Refactoring Assistant",
category: "Python",
prompt: "Refactor this Python code to improve readability, maintainability, performance, and adherence to clean code principles."
},
{
id: 16,
title: "Database Integration Guide",
category: "Python",
prompt: "Design a robust database integration strategy with schema design, indexing, optimization, and scalability recommendations."
},

{
id: 17,
title: "AI Startup Advisor",
category: "AI",
prompt: "Generate AI SaaS startup ideas suitable for solo developers. Include target audience, revenue model, competition analysis, and MVP features."
},
{
id: 18,
title: "Prompt Optimization Expert",
category: "AI",
prompt: "Improve and rewrite prompts for clarity, context, accuracy, reliability, and better AI-generated outputs."
},
{
id: 19,
title: "AI Product Designer",
category: "AI",
prompt: "Design an AI-powered product from idea to MVP including user personas, workflow, monetization, and competitive advantages."
},
{
id: 20,
title: "AI Agent Builder",
category: "AI",
prompt: "Create an autonomous AI agent architecture including tools, workflows, memory systems, safeguards, and deployment considerations."
},
{
id: 21,
title: "Research Paper Simplifier",
category: "AI",
prompt: "Summarize complex academic research into simple language while preserving key findings, limitations, and practical implications."
},
{
id: 22,
title: "AI Workflow Consultant",
category: "AI",
prompt: "Design AI-powered workflows that automate repetitive business tasks and improve productivity."
},
{
id: 23,
title: "Machine Learning Mentor",
category: "AI",
prompt: "Explain machine learning concepts, model selection strategies, feature engineering approaches, and evaluation methods."
},
{
id: 24,
title: "Business Intelligence AI",
category: "AI",
prompt: "Analyze business data and identify opportunities, risks, trends, and actionable growth recommendations."
},

{
id: 25,
title: "High-Converting Landing Page Copy",
category: "Marketing",
prompt: "Write persuasive landing page copy using proven conversion principles, emotional triggers, and clear calls-to-action."
},
{
id: 26,
title: "Cold Outreach Specialist",
category: "Marketing",
prompt: "Create personalized cold emails that maximize open rates, engagement, and conversion opportunities."
},
{
id: 27,
title: "LinkedIn Growth Strategy",
category: "Marketing",
prompt: "Develop a content strategy to grow a professional LinkedIn audience through consistency, positioning, and engagement."
},
{
id: 28,
title: "Product Launch Planner",
category: "Marketing",
prompt: "Create a complete go-to-market strategy for launching a new product including promotion channels and timelines."
},
{
id: 29,
title: "Advertising Copy Generator",
category: "Marketing",
prompt: "Generate compelling ad copy for multiple platforms while targeting specific customer segments."
},
{
id: 30,
title: "Brand Positioning Expert",
category: "Marketing",
prompt: "Develop a unique brand positioning strategy including messaging, audience targeting, and competitive differentiation."
},
{
id: 31,
title: "Market Research Analyst",
category: "Marketing",
prompt: "Analyze competitors, identify market opportunities, and recommend strategic positioning improvements."
},
{
id: 32,
title: "Growth Marketing Consultant",
category: "Marketing",
prompt: "Recommend growth strategies using content, SEO, partnerships, paid advertising, and community building."
},

{
id: 33,
title: "Long-Form Blog Writer",
category: "Content",
prompt: "Write a comprehensive blog article with engaging introductions, structured sections, examples, and SEO optimization."
},
{
id: 34,
title: "YouTube Script Creator",
category: "Content",
prompt: "Create a highly engaging YouTube video script with strong hooks, storytelling, and audience retention techniques."
},
{
id: 35,
title: "Newsletter Writer",
category: "Content",
prompt: "Draft an informative and engaging newsletter that provides value while maintaining reader interest."
},
{
id: 36,
title: "SEO Content Strategist",
category: "Content",
prompt: "Create SEO-focused content plans including keywords, article structures, search intent, and optimization tactics."
},
{
id: 37,
title: "Podcast Episode Planner",
category: "Content",
prompt: "Design a podcast episode with talking points, transitions, audience engagement strategies, and call-to-action moments."
},
{
id: 38,
title: "Course Creator",
category: "Content",
prompt: "Develop a complete online course curriculum including learning objectives, lessons, exercises, and projects."
},
{
id: 39,
title: "Case Study Writer",
category: "Content",
prompt: "Write a compelling case study showcasing challenges, solutions, implementation, and measurable outcomes."
},
{
id: 40,
title: "Ebook Framework Builder",
category: "Content",
prompt: "Create a professional ebook structure with chapters, examples, actionable insights, and reader engagement elements."
}
];

export default prompts;
