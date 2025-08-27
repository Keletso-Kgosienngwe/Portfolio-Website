import {Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BuffClan Capital Web Page",
    description: "A simple professional web page style using Html, Css and Javascript.",
    image: "/projects/website.PNG",
    tags: ["Html", "Css", "Javascript"],
    githubUrl: "https://keletso-kgosienngwe.github.io/BuffClanCapital-Web/",
  },
  {
    id: 2,
    title: "Tableau Analytic Bank Loan Dashboard",
    description:
      "Developed an interactive Tableau dashboard connected to a SQL database for querying, data extraction, and visualization. ",
    image: "/projects/Tableau.png",
    tags: ["Tableau", ],
    githubUrl: "https://public.tableau.com/app/profile/keletso.kgosienngwe/viz/LoanDashboard_17520121460960/SUMMARY",
  },
  {
    id: 3,
    title: "Blinkit Kellys Last minute dashboard",
    description:
      "Designed an interactive Power BI dashboard to analyze sales trends, product performance, and outlet effectiveness, supporting inventory management, customer targeting, and KPI-driven decision-making",
    image: "/projects/Powerbi.png",
    tags: ["Powerbi"],
    githubUrl: "https://github.com/Keletso-Kgosienngwe/Blinkit-Dasboard/blob/main/Dashboard-main/Dashboard.pdf",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Keletso-Kgosienngwe"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
