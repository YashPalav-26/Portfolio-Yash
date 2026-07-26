import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiTypescript,
  SiNextdotjs,
  SiBlender,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiDaisyui,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiPython,
  SiMongoose,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiBruno,
  SiBun,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";
import { useTheme } from "@/contexts/ThemeContext";
import DotGrid from "@/components/animations/DotGrid";

const BRAND_COLORS: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "React.js": "#61DAFB",
  Redux: "#764ABC",
  "React Router": "#CA4245",
  "Next.js": "#FFFFFF",
  "Three.js": "#FFFFFF",
  "Node.js": "#68A063",
  "Express.js": "#FFFFFF",
  Bootstrap: "#7952B3",
  "Tailwind CSS": "#38BDF8",
  DaisyUI: "#A78BFA",
  Java: "#F89820",
  C: "#A8B9CC",
  "C++": "#00599C",
  Python: "#3776AB",
  Mongoose: "#FF6B6B",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  Vite: "#646CFF",
  Bun: "#FFFFFF",
  Postman: "#FF6C37",
  Bruno: "#FFC50F",
  Vercel: "#FFFFFF",
  Blender: "#F5792A",
};


const categories = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Redux", "React Router", "Next.js", "Three.js", "Tailwind CSS", "DaisyUI"] },
  { name: "Backend", items: ["Node.js", "Express.js", "Java", "Python", "MongoDB", "Mongoose", "MySQL"] },
  { name: "Tools & DevOps", items: ["Git", "GitHub", "Vite", "Bun", "Postman", "Bruno", "Vercel", "Blender"] },
];

const allSkills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "React Router", icon: SiReactrouter },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "DaisyUI", icon: SiDaisyui },
  { name: "Java", icon: SiOpenjdk },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: SiPython },
  { name: "Mongoose", icon: SiMongoose },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Vite", icon: SiVite },
  { name: "Bun", icon: SiBun },
  { name: "Postman", icon: SiPostman },
  { name: "Bruno", icon: SiBruno },
  { name: "Vercel", icon: TbBrandVercel },
  { name: "Blender", icon: SiBlender },
];

const SkillsSection = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">My Skills</h2>
        </Reveal>

        <Reveal>
          <div className="skills-shell mt-16 p-6 md:p-8 relative overflow-hidden bg-background border border-border">
            <div className="absolute inset-0 bg-background backdrop-blur-[1px] z-0" />
            <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.15]">
              <DotGrid
                className="w-full h-full p-0"
                dotSize={4.5}
                gap={16}
                baseColor={theme === "light" ? "#f9330c" : "#40e0ff"}
                activeColor={theme === "light" ? "#f411de" : "#00ffff"}
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
              />
            </div>
            <div className="relative z-[2] flex flex-col md:flex-row gap-8">
              {/* Tab Selector */}
              <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all border-2",
                      activeCategory === cat.name
                        ? "bg-primary text-primary-foreground border-primary translate-y-0.5"
                        : "bg-card hover:translate-y-[-2px] border-border shadow-brutal"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Content Grid */}
              <div className="flex-1">
                <FadeInStagger key={activeCategory} className="flex flex-wrap gap-4">
                  {categories
                    .find((c) => c.name === activeCategory)
                    ?.items.map((skillName) => {
                      const skill = allSkills.find((s) => s.name === skillName);
                      if (!skill) return null;
                      const IconComponent = skill.icon;
                      const color = BRAND_COLORS[skill.name] || "currentColor";
                      const isWhiteBrand = color === "#FFFFFF";
                      // White icons need dark backgrounds for visibility
                      const useDarkBg = isWhiteBrand || ["Next.js", "Express.js", "Vercel", "Bun"].includes(skill.name);

                      return (
                        <FadeInItem
                          key={skill.name}
                          className="flex-shrink-0"
                        >
                          <div className={cn(
                            "p-4 rounded-lg border-2 border-border bg-card flex flex-col items-center gap-2",
                            "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-brutal hover:border-primary"
                          )}>
                            <div className={cn("w-12 h-12 flex items-center justify-center rounded-lg border", useDarkBg ? "icon-dark-bg" : "bg-white/5 border-white/10")}>
                               <IconComponent className="w-6 h-6" style={{ color: useDarkBg ? (theme === "light" ? "#1e293b" : "#e2e8f0") : color }} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-tight">{skill.name}</span>
                          </div>
                        </FadeInItem>
                      );
                    })}
                </FadeInStagger>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
