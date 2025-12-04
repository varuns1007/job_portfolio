import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ArrowDown,
  GraduationCap,
  Menu,
  X,
  Code,
  Cloud,
  BarChart,
  Database,
} from "lucide-react";
import { IconType } from "react-icons";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiGit,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiSnowflake,
  SiStreamlit,
  SiFastapi,
} from "react-icons/si";
import {
  SiJavascript,
  SiR,
  SiScikitlearn,
  SiGrafana,
  SiPrometheus,
  SiApachespark,
  SiApachehadoop,
  SiApachekafka,
  SiApacheairflow,
  SiDbt,
  SiOpencv,
  SiOracle,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiCircleci,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const slateTheme = {
    navUnderline: "#64748b",
    avatarBorder: "rgba(148,163,184,0.2)",
    avatarGradient: "linear-gradient(90deg,#3b3b3b,#1f1f1f)",
    badgeBg: "rgba(51,65,85,0.45)",
    badgeBorder: "#334155",
    badgeText: "#ffffff",
    buttonBg: "#1f2937",
    buttonHover: "#111827",
    linkColor: "#94a3b8",
    cardBorder: "rgba(255,255,255,0.06)",
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  const currentTheme = slateTheme;

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "JavaScript", "Java", "C++"],
    },
    {
      category: "AI & Deep Learning",
      items: [
        "Deep Learning",
        "Computer Vision (YOLOv8, Vision Transformer, Grounding DINO, DETR, RESNet, VGGNet)",
        "Reinforcement Learning(Q-Learning, DQN, PPO, A2C, Constraint Policy Optimization, Hierarchical RL, Multi-Agent RL)",
        "PyTorch",
        "OpenCV",
      ],
    },
    {
      category: "Data Engineering & Cloud",
      items: ["AWS (S3, SQS, EC2)", "GCP (Cloud Storage)", "Docker", "CI/CD"],
    },
    {
      category: "Development Tools & Databases",
      items: [
        "React Native",
        "Streamlit",
        "FastAPI",
        "MySQL",
        // "",
        "PostgreSQL",
        "Firebase",
        "MongoDB",
        "Git",
        "GitHub",
        "ReactJS",
        "AngularJS",
        "NodeJS"
      ],
    },
  ];

  const projects = [
    {
      name: "OCR-Based Tapal (Postal Service) Automation System",
      description:
        "This project digitizes the traditional Tapal (official postal correspondence) process used across government departments by leveraging OCR technology. The current manual workflow—maintaining registers for sender, receiver, subject, and department—makes the process slow, error-prone, and difficult to analyze. The proposed OCR-based system automates the extraction of information from scanned letter covers, stores the data digitally, and enables instant access for tracking and analytics. By streamlining letter processing, reducing manual handling, and improving accessibility of records, the system enhances communication flow and supports faster, more accurate decision-making within government agencies. Published with IEEE.",
      tech: [
        "Optical Character Recognition (OCR)",
        "Python",
        "Tesseract OCR",
        "OpenCV",
        "Document Scanning Pipeline",
        "Digital Record Management",
        "Data Analytics",
        "Database Systems",
      ],
      github:"https://github.com/varuns1007/Tapaal"
    },
    {
      name: "Bird Species Classification - Deep Learning",
      description:
        "A deep learning project focused on classifying 10 bird species from images using a custom-designed Convolutional Neural Network (CNN) built with PyTorch. The workflow includes dataset preprocessing, model architecture design, data augmentation, training with CrossEntropyLoss, and performance optimization using Adam and early stopping. Grad-CAM visualizations were used to interpret model decisions by highlighting image regions influencing predictions. This project demonstrates end-to-end ML pipeline development—from data handling and model tuning to explainability and evaluation.",
      tech: [
        "Python",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "PIL",
        "PyTorch Transforms",
        "Adam Optimizer",
        "Dropout",
        "Batch Normalization",
        "Grad-CAM",
        "Matplotlib",
      ],
      github:"https://github.com/varuns1007/Birds_Classification-Deep_Learning_Project"
    },
    {
      name: "Extended Havannah AI Agent – MCTS with UCB1",
      description:
        "This project involves building an intelligent game-playing agent for Extended Havannah using Monte Carlo Tree Search (MCTS) guided by UCB1 for optimal decision-making. The system interacts with a Python-based Havannah simulator that supports human vs AI, AI vs AI, and random agent matchups. The environment is managed using a minimal conda setup, ensuring reproducibility and controlled dependencies. The AI evaluates moves through random rollouts, win/loss simulations, and heuristic checks, while UCB1 balances exploration and exploitation. Additional defensive logic prevents immediate opponent wins by prioritizing blocking moves. The agent demonstrates strong performance through simulation-driven planning in a complex strategy game environment.",
      tech: [
        "Python",
        "Conda",
        "Monte Carlo Tree Search (MCTS)",
        "UCB1 Exploration Strategy",
        "Random Rollouts",
        "Deep Copy for State Simulation",
        "Custom Game Simulator",
        "Tkinter GUI",
        "NumPy",
      ],
      github:"https://github.com/varuns1007/Havannah-Game_Playing_AI"
    },
    {
      name: "Imitation Learning with DAgger",
      description:
        "This project implements the DAgger (Dataset Aggregation) algorithm to train agents that imitate expert behavior in MuJoCo control environments such as Hopper-v4 and Ant-v4. Unlike traditional behavior cloning, DAgger allows the policy to gather data from its own distribution by querying the expert at every visited state, making the dataset progressively more robust. The learner minimizes MSE between predicted and expert actions, while iterative evaluations checkpoint the best-performing policy based on cumulative reward. Increasing episode length and return metrics confirm successful imitation and improved stability, demonstrating that DAgger effectively mitigates distribution shift and enhances real-world applicability in robotics control tasks.",
      tech: [
        "Python",
        "PyTorch",
        "MuJoCo",
        "Gymnasium / OpenAI Gym",
        "DAgger (Dataset Aggregation)",
        "MSE Loss",
        "Trajectory Collection",
        "TensorBoard",
        "NumPy",
        "Command-line Training Pipeline",
      ],
      github:"https://github.com/varuns1007/Imitation_learning-Mujuco_Agents"
    },
  ];

  // Mapping of tech name (as used in the arrays above) to an icon component.
  // Use `any` here because we mix icons from react-icons and lucide-react.
  const techIconMap: Record<string, any> = {
    Python: SiPython,
    PyTorch: SiPytorch,
    TensorFlow: SiTensorflow,
    React: SiReact,
    "React Native": SiReact,
    AWS: Cloud,
    Amazonaws: Cloud,
    GCP: Cloud,
    "Google Cloud": Cloud,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    PostgreSQL: SiPostgresql,
    Postgregres: SiPostgresql,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    GitHub: SiGithub,
    Github: SiGithub,
    Git: SiGit,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    Numpy: SiNumpy,
    Tableau: SiTableau,
    "Power BI": BarChart,
    Snowflake: SiSnowflake,
    Streamlit: SiStreamlit,
    FastAPI: SiFastapi,
    PySpark: Code, // fallback visual for PySpark
  };
  // Extend mappings for additional techs
  techIconMap["SQL"] = Database;
  techIconMap["JavaScript"] = SiJavascript;
  techIconMap["R"] = SiR;
  techIconMap["SAS"] = Code;
  techIconMap["Machine Learning"] = SiPytorch; // use PyTorch icon as representative
  techIconMap["Deep Learning"] = SiTensorflow; // use TensorFlow icon as representative
  techIconMap["Computer Vision"] = SiOpencv;
  techIconMap["OpenCV"] = SiOpencv;
  techIconMap["NLP"] = SiPytorch;
  techIconMap["Reinforcement Learning"] = SiPytorch;
  techIconMap["scikit-learn"] = SiScikitlearn;
  techIconMap["Scikit-learn"] = SiScikitlearn;
  techIconMap["Matplotlib"] = BarChart;
  techIconMap["Seaborn"] = BarChart;
  techIconMap["Grafana"] = SiGrafana;
  techIconMap["Prometheus"] = SiPrometheus;
  techIconMap["Spark"] = SiApachespark;
  techIconMap["PySpark"] = SiApachespark;
  techIconMap["Spark Streaming"] = SiApachespark;
  techIconMap["Hadoop"] = SiApachehadoop;
  techIconMap["Airflow"] = SiApacheairflow;
  techIconMap["Kafka"] = SiApachekafka;
  techIconMap["dbt"] = SiDbt;
  techIconMap["AWS (S3, EMR, Glue, Redshift)"] = Cloud;
  techIconMap["GCP (BigQuery, Dataflow)"] = SiGooglecloud;
  techIconMap["CI/CD"] = SiGithubactions;
  techIconMap["Oracle"] = SiOracle;

  const getIconForTech = (tech: string) => {
    // normalize string by removing parenthetical details and trimming
    const key = tech.replace(/\s*\(.+\)/, "").trim();
    return techIconMap[key];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button>
              <h1
                className="text-xl font-bold text-white"
                onClick={() => scrollToSection("home")}
              >
                Varun Shinde
              </h1>
            </button>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                  >
                    {item}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ background: currentTheme.navUnderline }}
                    ></span>
                  </button>
                )
              )}
            </div>
            {/* Mobile Nav Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/80 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4">
              <div className="flex flex-col space-y-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-white/80 hover:text-white transition-colors duration-300 text-left"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center p-20"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <Avatar
              className="w-48 h-48 mx-auto mb-8 border-4"
              style={{ borderColor: currentTheme.avatarBorder }}
            >
              <AvatarImage
                src="/profile.jpeg"
                alt="Varun"
                className="object-cover"
              />
              <AvatarFallback
                style={{ background: currentTheme.avatarGradient }}
                className="text-6xl font-bold text-white"
              >
                VS
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Varun Shinde
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2">
            <p>Software Engineer • Robotics Enthusiast</p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mt-4">
              I build intelligent systems that are usable, deployable, and
              rooted in real-world impact.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <a
              href="https://github.com/varuns1007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/varun-vilas-shinde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1VJFb6K3ZYyZ20HFXnPAHruIC8fIjXzGb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-full sm:w-auto"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          {/* Centered single-column layout */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/90 leading-relaxed text-left">
                  A detail-oriented and innovation-driven engineer pursuing an M.Tech in Robotics at IIT Delhi, with strong foundations in Computer Engineering and a proven track record across industry, research, and product development. I have experience building scalable full-stack systems, WebRTC SDKs, MERN applications, and automation solutions, along with hands-on expertise in deep learning, computer vision, reinforcement learning, and large-scale simulation. My work at Jio Platforms involved developing media SDKs, UI packages, and WebRTC-based integrations, while earlier roles at NIC and Closer Innovations strengthened my backend, database, and cloud engineering skills. With strong GATE credentials (Rank 1213, Score 675) and projects spanning CNN-based medical imaging, Q-learning highway simulations, and foggy object detection, I bring a unique blend of software engineering, AI, and robotics proficiency. I am driven by building real-world, high-impact systems that are reliable, efficient, and intelligent.
                </p>

               

                <hr className="border-white/20" />

                <div className="space-y-4 text-center pt-4">
                  {/* Styled Education Block */}
                  <div className="flex justify-center items-center gap-3">
                    <GraduationCap
                      className="w-8 h-8 flex-shrink-0"
                      style={{ color: currentTheme.badgeBorder }}
                    />
                    <div className="text-left">
                      <p className="text-2xl font-semibold text-white">
                        Indian Institute of Technology
                      </p>
                      <p className="text-md text-white/80">
                        MTech in Robotics
                      </p>
                    </div>
                  </div>

                  {/* Open to Opportunities */}
                  <p className="text-lg text-slate-300 pt-2">
                    Open to opportunities in Web-Development, Software Development, and Data Analysis roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-slate-200 text-center">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => {
                      const Icon = getIconForTech(skill);
                      const style = {
                        background: currentTheme.badgeBg,
                        borderColor: currentTheme.badgeBorder,
                        color: currentTheme.badgeText,
                      };
                      return (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="hover:opacity-95"
                          style={style}
                        >
                          {Icon ? (
                            <Icon className="inline w-4 h-4 mr-2" />
                          ) : (
                            <Code className="inline w-4 h-4 mr-2" />
                          )}
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-white/70">
                    {/* {project.description} */}
                    {project.description.split("\n").map((line, i) => (
                      <p key={i} className="mb-1">
                        {line}
                      </p>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => {
                      const Icon = getIconForTech(tech);
                      const style = {
                        background: currentTheme.badgeBg,
                        borderColor: currentTheme.badgeBorder,
                        color: currentTheme.badgeText,
                      };
                      return (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="hover:opacity-95"
                          style={style}
                        >
                          {Icon ? (
                            <Icon className="inline w-4 h-4 mr-2" />
                          ) : (
                            <Code className="inline w-4 h-4 mr-2" />
                          )}
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex space-x-3">
                    {project && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 hover:text-black"
                        >
                          <Github className="w-4 h-4 mr-0" />
                          Code
                        </Button>
                      </a>
                    )}
                    {/* {project && (
                      <a
                        href={project}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-gray-800 hover:bg-gray-900"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/varuns1007"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-lg"
            style={{ color: currentTheme.linkColor }}
          >
            → More Projects on my GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6 rounded-xl">
              <CardHeader className="text-center mb-4">
                <CardTitle className="text-2xl font-bold">
                  Let's Collaborate
                </CardTitle>
                <CardDescription className="text-white/70">
                  I'm always open to discussing new opportunities and
                  interesting projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-slate-400 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold">Email</p>
                        <a
                          href="mailto:jrb242029@iitd.ac.in"
                          className="text-sm text-white/70 hover:text-purple-300"
                        >
                          jrb242029@iitd.ac.in
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-slate-400 w-5 h-5" />
                      <div>
                        <p className="text-sm font-semibold">Location</p>
                        <p className="text-sm text-white/70">Delhi, India</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col space-y-4">
                    <a
                      href="https://github.com/varuns1007"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gray-900 hover:bg-gray-800">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Profile
                      </Button>
                    </a>
                    <a
                      href="https://linkedin.com/in/varun-vilas-shinde/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                      </Button>
                    </a>
                    <a href="mailto:jrb242029@iitd.ac.in">
                      <Button className="w-full bg-gray-800 hover:bg-gray-900">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Varun. Built with passion for intelligent systems and
            real-world impact.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
