import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Talent Corner HR Services Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      date: "June 2025 – Present",
      description: [
        "Worked on building and enhancing Saarthi360, a comprehensive CRM & HR management system used internally by the company and its franchisees.",
        "Built Saarthi360, a CRM & HR platform with multi-tenant architecture.",
        "Integrated 6+ job portals with payment tracking & analytics.",
        "Designed and optimized a MySQL database (20+ tables) with migrations, constraints, and query optimization.",
        "Implemented 50+ REST API endpoints with JWT authentication, error handling, and role-based access.",
      ],
    },
    {
      company: "Nullclass EdTech Pvt. Ltd.",
      role: "Frontend Developer Intern",
      date: "Jan 2025 – Jun 2025",
      description: [
        "Developed and enhanced responsive, user-friendly web interfaces for interactive projects.",
        "Implemented dynamic features such as portfolio tracking, sentiment analysis, and trading simulations to improve functionality and user experience.",
        "Designed an Analytics Dashboard with moving averages, RSI, and volatility metrics.",
        "Built a simulated Algorithmic Trading Bot to automate “buy low, sell high” strategies.",
        "Added User Login & Data Persistence with Firebase for secure access and saved preferences."
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <h2 className="section-title text-center mb-16">Experience</h2>
        </Reveal>

        <FadeInStagger className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeInItem key={index}>
              <div className="neobrutalist-card p-6 md:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-bold text-lg">{exp.company}</p>
                  </div>
                  <span className="stat-badge shrink-0">{exp.date}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0 rotate-45" />
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default ExperienceSection;
