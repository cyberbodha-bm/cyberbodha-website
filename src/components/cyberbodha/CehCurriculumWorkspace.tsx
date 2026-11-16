import { useState, useEffect, useMemo } from "react";
import {
  ShieldCheck,
  Terminal,
  BookOpen,
  Cpu,
  Bot,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Search,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp,
  Check,
  Award,
  AlertTriangle,
  FileText,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  CEH_V13_MODULES,
  CEH_V13_METADATA,
  type CehModule,
  type ContentClassification,
} from "@/data/ceh-v13-curriculum";

const CLASSIFICATION_COLORS: Record<
  ContentClassification,
  { bg: string; text: string; border: string }
> = {
  "Official Curriculum Mapping": {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/30",
  },
  "CyberBodha Explanation": {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
  },
  "CyberBodha Supplementary Lab": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
  },
  "AI-Assisted Explanation": {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/30",
  },
  "Practice Assessment": {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30",
  },
  "Certification Preparation": {
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
  },
};

export function ClassificationBadge({ classification }: { classification: ContentClassification }) {
  const style =
    CLASSIFICATION_COLORS[classification] || CLASSIFICATION_COLORS["Official Curriculum Mapping"];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide border ${style.bg} ${style.text} ${style.border}`}
    >
      {classification}
    </span>
  );
}

const CATEGORY_FILTERS = [
  { id: "all", label: "All 20 Modules" },
  { id: "Foundations & Recon", label: "1. Foundations & Recon (01-05)" },
  { id: "Network & System Exploitation", label: "2. Network & System (06-10)" },
  { id: "Offensive Web & Apps", label: "3. Web & Applications (11-15)" },
  { id: "Specialized Platforms & Cloud", label: "4. Wireless, Mobile, IoT & Cloud (16-19)" },
  { id: "Defensive Defense & Crypto", label: "5. Cryptography (20)" },
];

export function CehCurriculumWorkspace() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 1: true });
  const [completedModules, setCompletedModules] = useState<Record<number, boolean>>({});
  const [revealedQuiz, setRevealedQuiz] = useState<Record<string, number | null>>({});

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cyberbodha_ceh_v13_progress");
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const toggleModuleReviewed = (moduleNumber: number) => {
    setCompletedModules((prev) => {
      const updated = { ...prev, [moduleNumber]: !prev[moduleNumber] };
      try {
        localStorage.setItem("cyberbodha_ceh_v13_progress", JSON.stringify(updated));
      } catch {
        // Storage unavailable
      }
      return updated;
    });
  };

  const toggleExpand = (moduleNumber: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleNumber]: !prev[moduleNumber],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    CEH_V13_MODULES.forEach((m) => {
      allExpanded[m.number] = true;
    });
    setExpandedModules(allExpanded);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  const filteredModules = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return CEH_V13_MODULES.filter((m) => {
      const matchCat = selectedCategory === "all" || m.category === selectedCategory;
      const matchQuery =
        !q ||
        m.officialTitle.toLowerCase().includes(q) ||
        m.officialNumber.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.officialTopics.some((t) => t.toLowerCase().includes(q)) ||
        m.guidedLabs.some(
          (l) =>
            l.title.toLowerCase().includes(q) || l.tools.some((t) => t.toLowerCase().includes(q)),
        );
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const completedCount = Object.values(completedModules).filter(Boolean).length;
  const progressPct = Math.round((completedCount / CEH_V13_MODULES.length) * 100);

  return (
    <div className="space-y-8">
      {/* Official EC-Council Alignment Blueprint Header */}
      <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-card/95 via-card to-card/95 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> EC-Council CEH v13 (AI) Canonical Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Official 20-Module Ethical Hacking & AI Syllabus
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every official module from{" "}
              <strong className="text-foreground">
                Module 01 (Introduction to Ethical Hacking)
              </strong>{" "}
              through <strong className="text-foreground">Module 20 (Cryptography)</strong> is
              represented with full topical depth, learning objectives, Cyber Range virtual labs,
              and AI ethical hacking integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                <span>20 Official Modules</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span>20 Dedicated Cyber Range Labs</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Bot className="h-3.5 w-3.5 text-primary" />
                <span>AI Hacking & Defense Workflows</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Award className="h-3.5 w-3.5 text-primary" />
                <span>ANSI 17024 & DoD 8140 Aligned</span>
              </span>
            </div>
          </div>

          {/* Learner Progress Tracker */}
          <div className="rounded-xl border border-border bg-background/80 p-5 shrink-0 min-w-[260px] text-center space-y-2.5">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1.5">
              <span>Your Curriculum Progress</span>
            </div>
            <div className="text-3xl font-bold font-mono text-primary">{progressPct}%</div>
            <Progress value={progressPct} className="h-2" />
            <div className="text-[11px] text-muted-foreground flex justify-between">
              <span>{completedCount} of 20 Reviewed</span>
              <span>{20 - completedCount} Remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Classification Transparency Legend */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-border/70">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Curriculum Content Classification Framework
            </h3>
          </div>
          <span className="text-[11px] text-muted-foreground">
            Clear separation between EC-Council official syllabus mapping and CyberBodha virtual lab
            enhancements
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {Object.keys(CLASSIFICATION_COLORS).map((key) => (
            <div key={key} className="flex flex-col gap-1">
              <ClassificationBadge classification={key as ContentClassification} />
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Filter by module title, tool (e.g. Nmap, Burp), topic, or AI feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs bg-card"
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={expandAll} className="h-9 text-xs">
              Expand All
            </Button>
            <Button variant="outline" size="sm" onClick={collapseAll} className="h-9 text-xs">
              Collapse All
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 20 Modules List */}
      <div className="space-y-4">
        {filteredModules.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center space-y-3">
            <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto" />
            <h4 className="text-sm font-bold text-foreground">No matching modules found</h4>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              No module matched your search query &quot;{searchQuery}&quot;. Clear the search filter
              to display all 20 canonical modules.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredModules.map((mod) => {
            const isExpanded = expandedModules[mod.number] ?? false;
            const isCompleted = completedModules[mod.number] ?? false;

            return (
              <div
                key={mod.number}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-card ${
                  isCompleted
                    ? "border-emerald-500/40 bg-emerald-500/[0.02]"
                    : isExpanded
                      ? "border-primary/50 shadow-md"
                      : "border-border hover:border-border/80"
                }`}
              >
                {/* Module Bar */}
                <div
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  onClick={() => toggleExpand(mod.number)}
                >
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    {/* Module Number Emblem */}
                    <div
                      className={`h-11 w-11 rounded-xl font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-sm transition-colors ${
                        isCompleted
                          ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      {String(mod.number).padStart(2, "0")}
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                          {mod.officialNumber}
                        </span>
                        <Badge variant="outline" className="text-[10px] py-0 h-4">
                          {mod.category}
                        </Badge>
                        <ClassificationBadge classification={mod.classification} />
                        {isCompleted && (
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] py-0 h-4 gap-1">
                            <Check className="h-2.5 w-2.5" /> Reviewed
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                        {mod.officialTitle}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 md:line-clamp-1 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Action & Progress Checkbox */}
                  <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleModuleReviewed(mod.number);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        isCompleted
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/25"
                          : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:bg-secondary/80"
                      }`}
                      title={isCompleted ? "Mark as unreviewed" : "Mark as reviewed"}
                    >
                      <CheckCircle2
                        className={`h-3.5 w-3.5 ${isCompleted ? "text-emerald-400" : "text-muted-foreground"}`}
                      />
                      <span>{isCompleted ? "Reviewed" : "Mark Reviewed"}</span>
                    </button>

                    <div className="h-8 w-8 rounded-lg bg-secondary/80 text-muted-foreground flex items-center justify-center">
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Module Workspace */}
                {isExpanded && (
                  <div className="border-t border-border/80 bg-background/40 p-4 sm:p-6 space-y-6">
                    {/* Tab Navigation inside Module */}
                    <Tabs defaultValue="topics" className="w-full">
                      <TabsList className="bg-card border border-border p-1 h-auto flex flex-wrap gap-1">
                        <TabsTrigger
                          value="topics"
                          className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Official Topics & Objectives
                        </TabsTrigger>
                        <TabsTrigger
                          value="concepts"
                          className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <FileText className="mr-1.5 h-3.5 w-3.5" /> Concept Deep-Dive
                        </TabsTrigger>
                        <TabsTrigger
                          value="labs"
                          className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <Terminal className="mr-1.5 h-3.5 w-3.5" /> Cyber Range Labs (
                          {mod.guidedLabs.length})
                        </TabsTrigger>
                        <TabsTrigger
                          value="ai"
                          className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <Bot className="mr-1.5 h-3.5 w-3.5" /> AI Security Features
                        </TabsTrigger>
                        <TabsTrigger
                          value="checks"
                          className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <HelpCircle className="mr-1.5 h-3.5 w-3.5" /> Knowledge Checks (
                          {mod.knowledgeChecks.length})
                        </TabsTrigger>
                      </TabsList>

                      {/* Tab 1: Official Topics & Learning Objectives */}
                      <TabsContent value="topics" className="pt-4 space-y-5">
                        {/* Learning Objectives */}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5" /> Module Learning Objectives
                            </h4>
                            <ClassificationBadge classification="Certification Preparation" />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mod.learningObjectives.map((obj, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3 text-xs leading-relaxed"
                              >
                                <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground/90 font-medium">{obj}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Official Syllabus Topics */}
                        <div className="space-y-2.5 pt-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                              <BookOpen className="h-3.5 w-3.5" /> Official Curriculum Topics
                              (EC-Council CEH v13)
                            </h4>
                            <ClassificationBadge classification="Official Curriculum Mapping" />
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0">
                            {mod.officialTopics.map((top, i) => (
                              <li
                                key={i}
                                className="rounded-lg border border-border/80 bg-card/60 p-3 text-xs flex items-center gap-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-foreground font-medium">{top}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Lessons Hierarchy */}
                        <div className="space-y-2.5 pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Structured Lesson Delivery
                          </h4>
                          <div className="space-y-2">
                            {mod.lessons.map((les) => (
                              <div
                                key={les.id}
                                className="rounded-lg border border-border bg-card p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                              >
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-foreground">
                                      {les.title}
                                    </span>
                                    <ClassificationBadge classification={les.classification} />
                                  </div>
                                  <p className="text-[11px] text-muted-foreground">
                                    {les.description}
                                  </p>
                                </div>
                                <div className="text-[10px] font-mono text-muted-foreground whitespace-nowrap self-start sm:self-center">
                                  ~{les.durationMin} min
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      {/* Tab 2: Concept Deep-Dive */}
                      <TabsContent value="concepts" className="pt-4 space-y-4">
                        <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-5 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                              <FileText className="h-3.5 w-3.5" /> Conceptual Technical Overview
                            </h4>
                            <ClassificationBadge classification="CyberBodha Explanation" />
                          </div>
                          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                            {mod.conceptExplanation}
                          </p>
                        </div>

                        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-foreground">
                            Module Executive Summary
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {mod.summary}
                          </p>
                        </div>
                      </TabsContent>

                      {/* Tab 3: Guided Labs & Hands-on Range */}
                      <TabsContent value="labs" className="pt-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                            <Terminal className="h-4 w-4" />
                            <span>Dedicated Cyber Range Lab Environment</span>
                          </div>
                          <ClassificationBadge classification="CyberBodha Supplementary Lab" />
                        </div>

                        {mod.guidedLabs.map((lab) => (
                          <div
                            key={lab.id}
                            className="rounded-xl border border-emerald-500/30 bg-card p-5 space-y-3"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
                              <div>
                                <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold block">
                                  {lab.environment}
                                </span>
                                <h4 className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                                  {lab.title}
                                </h4>
                              </div>
                              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 self-start sm:self-center text-xs">
                                Live Range Active
                              </Badge>
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed">
                              <strong className="text-foreground">Scenario:</strong> {lab.scenario}
                            </p>

                            <div>
                              <span className="text-[11px] font-semibold text-foreground block mb-1.5">
                                Tools & Utilities Utilized in Lab:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {lab.tools.map((t, tidx) => (
                                  <span
                                    key={tidx}
                                    className="px-2 py-0.5 rounded-md bg-secondary text-foreground text-[11px] font-mono border border-border"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Practice Challenges */}
                        {mod.practiceChallenges.length > 0 && (
                          <div className="rounded-xl border border-border bg-card p-4 space-y-2.5">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                              <Award className="h-3.5 w-3.5" /> Practical Flag Challenges
                            </h5>
                            <ul className="space-y-1.5 list-none p-0 text-xs text-muted-foreground">
                              {mod.practiceChallenges.map((pc, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary font-bold">›</span>
                                  <span>{pc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </TabsContent>

                      {/* Tab 4: AI Security Assistant Features */}
                      <TabsContent value="ai" className="pt-4 space-y-4">
                        <div className="rounded-xl border border-purple-500/30 bg-purple-500/[0.03] p-5 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                              <Bot className="h-4 w-4" />
                              <span>CEH v13 AI Integration Capabilities</span>
                            </div>
                            <ClassificationBadge classification="AI-Assisted Explanation" />
                          </div>

                          <p className="text-xs text-muted-foreground leading-relaxed">
                            How ethical hackers leverage AI tools responsibly to automate tasks in
                            this module, while defending against adversarial AI threats:
                          </p>

                          <div className="space-y-2 pt-1">
                            {mod.aiAssistantFeatures.map((feat, fidx) => (
                              <div
                                key={fidx}
                                className="flex items-start gap-2.5 rounded-lg border border-purple-500/20 bg-card p-3 text-xs"
                              >
                                <Sparkles className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span className="text-foreground/90 font-medium">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      {/* Tab 5: Knowledge Checks */}
                      <TabsContent value="checks" className="pt-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                            <HelpCircle className="h-4 w-4" />
                            <span>Self-Assessment Knowledge Checks</span>
                          </div>
                          <ClassificationBadge classification="Practice Assessment" />
                        </div>

                        {mod.knowledgeChecks.map((kc) => {
                          const userSelected = revealedQuiz[kc.id];
                          const isRevealed = userSelected !== undefined && userSelected !== null;

                          return (
                            <div
                              key={kc.id}
                              className="rounded-xl border border-border bg-card p-5 space-y-3"
                            >
                              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                                {kc.question}
                              </h4>

                              <div className="space-y-1.5">
                                {kc.options.map((opt, oidx) => {
                                  const isCorrect = oidx === kc.answerIndex;
                                  const isSelected = userSelected === oidx;

                                  let optClass =
                                    "border-border bg-background hover:bg-secondary/50 text-foreground";
                                  if (isRevealed) {
                                    if (isCorrect) {
                                      optClass =
                                        "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold";
                                    } else if (isSelected) {
                                      optClass =
                                        "border-destructive bg-destructive/10 text-destructive";
                                    } else {
                                      optClass =
                                        "border-border/50 text-muted-foreground opacity-60";
                                    }
                                  }

                                  return (
                                    <button
                                      key={oidx}
                                      disabled={isRevealed}
                                      onClick={() =>
                                        setRevealedQuiz((prev) => ({ ...prev, [kc.id]: oidx }))
                                      }
                                      className={`w-full text-left p-3 rounded-lg border text-xs transition-colors flex items-center justify-between ${optClass}`}
                                    >
                                      <span>{opt}</span>
                                      {isRevealed && isCorrect && (
                                        <Check className="h-4 w-4 text-emerald-400" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {isRevealed && (
                                <div className="rounded-lg bg-secondary/80 p-3 border border-border/80 text-xs text-muted-foreground leading-relaxed mt-2 flex items-start gap-2">
                                  <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <div>
                                    <strong className="text-foreground block mb-0.5">
                                      Explanation:
                                    </strong>
                                    {kc.explanation}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}

                        <div className="rounded-lg bg-card border border-border p-3 text-xs text-muted-foreground">
                          <strong className="text-foreground">Module Assessment Standard:</strong>{" "}
                          {mod.moduleAssessment}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
