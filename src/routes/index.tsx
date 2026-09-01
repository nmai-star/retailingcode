import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Brain,
  CalendarCheck,
  Check,
  Contact,
  Flame,
  Gift,
  HeartHandshake,
  Instagram,
  Layers,
  Mail,
  MessageSquare,
  Play,
  Repeat,
  Search,
  Share2,
  ShieldAlert,
  Sparkles,
  Users,
  Video,
  Youtube,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlowCursor } from "@/components/GlowCursor";
import { Reveal } from "@/components/Reveal";
import { StickyCta } from "@/components/landing/StickyCta";
import { CheckoutButton, CouponCode, FlowChips, SectionHeading } from "@/components/landing/shared";
import productImage from "@/assets/retailing-code-product.png.asset.json";
import trainerImage from "@/assets/kranthi-velpuri.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Retailing Code | Build a Consistent Retailing System" },
      {
        name: "description",
        content:
          "Learn a practical retailing system for finding customers, starting conversations, generating enquiries, following up, creating repeat purchases and building referrals.",
      },
      {
        name: "keywords",
        content:
          "Retailing Course, Network Marketing Retailing, Customer Acquisition for Network Marketers, Retailing System, Network Marketing Customer Training",
      },
      { property: "og:title", content: "The Retailing Code | Build a Consistent Retailing System" },
      {
        property: "og:description",
        content:
          "A practical foundation course for Network Marketers: turn conversations into customers with a repeatable retailing system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const introVideoParts = Array.from(
  { length: 22 },
  (_, index) => `/videos/website-intro-parts/part-${String(index).padStart(3, "0")}`,
);

function IntroVideo() {
  const [videoUrl, setVideoUrl] = useState<string>();

  useEffect(() => {
    let objectUrl: string | undefined;
    let cancelled = false;

    Promise.all(introVideoParts.map((part) => fetch(part).then((response) => response.arrayBuffer())))
      .then((parts) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(new Blob(parts, { type: "video/mp4" }));
        setVideoUrl(objectUrl);
      })
      .catch(() => setVideoUrl(undefined));

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <video
      className="aspect-video w-full bg-black object-contain"
      controls
      playsInline
      preload="metadata"
      poster="/videos/website-intro-poster.jpg"
      aria-label="Introduction to The Retailing Code"
      src={videoUrl}
    >
      Your browser does not support embedded videos.
    </video>
  );
}

const problems = [
  "You know your products… but don't know who to approach.",
  "You start conversations… but they rarely become enquiries.",
  "You follow up… but don't have a proper system.",
  "You depend mostly on friends and family.",
  "You post content… but it doesn't consistently generate customer conversations.",
  "You make a sale… but don't have a repeat-purchase or referral system.",
];

const transformation = [
  "RANDOM SELLING",
  "RIGHT CUSTOMER",
  "RIGHT CONVERSATION",
  "ENQUIRY",
  "FOLLOW-UP",
  "CUSTOMER",
  "REPEAT PURCHASE",
  "REFERRAL",
];

const machine = [
  { label: "WARM MARKET", Icon: Users },
  { label: "COLD MARKET", Icon: Search },
  { label: "CONTENT", Icon: Video },
  { label: "ENQUIRIES", Icon: Sparkles },
  { label: "CONVERSATIONS", Icon: MessageSquare },
  { label: "CUSTOMERS", Icon: BadgeCheck },
  { label: "FOLLOW-UP", Icon: CalendarCheck },
  { label: "REPEAT", Icon: Repeat },
  { label: "REFERRALS", Icon: Share2 },
];

const lessons = [
  {
    no: "01",
    title: "The Retailing Mindset",
    Icon: Brain,
    points: ["Think Customer, Not Sales", "Understand Customer Needs", "A.L.E.R.T. Retailing Formula"],
    outcome:
      "Develop the mindset required to approach retailing as customer problem-solving rather than product pushing.",
  },
  {
    no: "02",
    title: "Retailing in the Warm Market",
    Icon: Users,
    points: ["Build Your Contact List", "Start Natural Conversations", "Follow-Up & Referral Strategies"],
    outcome:
      "Learn how to approach people you already know without making conversations feel forced.",
  },
  {
    no: "03",
    title: "Retailing in the Cold Market",
    Icon: Search,
    points: ["Find Customers Beyond Friends & Family", "Build Trust With New People", "Turn Strangers Into Enquiries"],
    outcome:
      "Learn how to expand beyond your existing circle and create new customer opportunities.",
  },
  {
    no: "04",
    title: "Content → Customer System",
    Icon: Video,
    points: ["Create Customer-Focused Content", "Use Reels, Shorts & YouTube", "Turn Content Into Enquiries"],
    outcome:
      "Understand how content can become another channel for starting customer conversations.",
  },
  {
    no: "05",
    title: "The Retailing Machine",
    Icon: Layers,
    points: [
      "Build a Customer Database",
      "Create a Follow-Up System",
      "Customer Care & Repeat Purchases",
      "Build a Referral System",
    ],
    outcome:
      "Put the pieces together into a structured retailing process you can continue using.",
  },
];

const builds = [
  { no: "01", title: "Customer Identification", copy: "Know who the right customer may be.", Icon: Search },
  { no: "02", title: "Conversations", copy: "Start genuine, relevant conversations.", Icon: MessageSquare },
  { no: "03", title: "Enquiries", copy: "Move interested people toward the next step.", Icon: Sparkles },
  { no: "04", title: "Follow-Up", copy: "Stop losing potential customers because of inconsistent follow-up.", Icon: CalendarCheck },
  { no: "05", title: "Customer Database", copy: "Organize your customer relationships.", Icon: Contact },
  { no: "06", title: "Repeat Purchases", copy: "Create better customer-care habits.", Icon: Repeat },
  { no: "07", title: "Referrals", copy: "Create opportunities for customers to introduce you to others.", Icon: HeartHandshake },
];

const forYou = [
  "New Network Marketers",
  "Existing Network Marketers struggling with retailing consistency",
  "People relying heavily on friends and family",
  "People unsure how to start customer conversations",
  "People creating content but not generating enough enquiries",
  "People without a structured follow-up system",
  "Network Marketers who want to build better customer-care and referral habits",
];

const roadmap = [
  "START",
  "RETAILING MINDSET",
  "WARM MARKET",
  "COLD MARKET",
  "CONTENT → CUSTOMER",
  "FOLLOW-UP SYSTEM",
  "REPEAT CUSTOMERS",
  "REFERRALS",
  "YOUR RETAILING MACHINE",
];

const faqs = [
  {
    q: "Is this course only for experienced Network Marketers?",
    a: "No. The course is designed to build the foundations of retailing, so beginners as well as existing Network Marketers can use the concepts.",
  },
  {
    q: "What will I learn?",
    a: "You'll learn customer-focused retailing, warm-market conversations, cold-market approaches, customer-focused content, follow-up, customer care, repeat purchases and referrals.",
  },
  {
    q: "What bonuses are included?",
    a: "You'll receive the 30-Day Retailing Action Planner, the Retailing Scripts & Content Kit, the Retailing AI Assistant, and the Extra Bonuses including the Retailing Growth Resource Pack (200 WhatsApp Scripts, 50 YouTube Ideas & 50 Instagram Ideas).",
  },
  {
    q: "How do I use the launch coupon?",
    a: "Click a purchase button to continue to checkout. Enter the applicable coupon code at checkout if that offer is still available.",
  },
  {
    q: "What is RETAIL60?",
    a: "RETAIL60 is the launch coupon intended for the first 100 eligible buyers and provides 60% off.",
  },
  {
    q: "What happens after the first 100 buyers?",
    a: "The next launch stage uses RETAIL40, intended for the next 100 eligible buyers and providing 40% off.",
  },
  {
    q: "What happens after both launch offers end?",
    a: "The special launch coupons end and the product returns to its regular pricing.",
  },
  {
    q: "Does buying this course guarantee sales or income?",
    a: "No. This course provides education, frameworks and implementation resources. Sales, customer acquisition and income are not guaranteed and depend on individual execution and other factors.",
  },
  {
    q: "How can I get support?",
    a: "Reach out via email at nmaisupport@gmail.com or WhatsApp. Our team typically responds within 24-48 hours.",
  },
];

const extraBonuses = [
  {
    title: "200 WhatsApp Retailing Scripts",
    Icon: MessageSquare,
    copy: "Ready-to-use scripts for starting conversations, handling objections, following up and closing sales on WhatsApp.",
  },
  {
    title: "50 YouTube Content Ideas",
    Icon: Youtube,
    copy: "Plug-and-play video ideas designed to attract customer enquiries and build trust through long-form content.",
  },
  {
    title: "50 Instagram Post Ideas",
    Icon: Instagram,
    copy: "Engaging post, reel and story ideas to keep your audience interested and drive consistent retailing conversations.",
  },
];

function Landing() {
  return (
    <main className="overflow-x-hidden pb-24">
      <GlowCursor />
      {/* TOP OFFER BANNER */}
      <section className="relative z-10 border-b border-gold/20 bg-[image:var(--gradient-surface)] px-4 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm font-bold text-gold">
            <Flame className="size-4 animate-pulse" aria-hidden />
            <span className="tracking-wide">Limited Launch Coupons — Copy & Use at Checkout</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CouponCode code="RETAIL60" className="text-sm" />
            <CouponCode code="RETAIL40" className="text-sm" />
          </div>
        </div>
      </section>

      {/* TOP LESSONS / BONUSES / EXTRA BONUSES TOGGLES */}
      <section className="sticky top-0 z-40 border-b border-gold/20 bg-background/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 sm:gap-3">
          <a
            href="#lessons"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-2.5 text-xs font-bold tracking-wide text-gold transition-all hover:bg-gold/20 active:scale-[0.98] sm:gap-2 sm:px-5 sm:text-sm"
          >
            <BookOpen className="size-3.5 sm:size-4" aria-hidden />
            <span className="hidden sm:inline">5 Lessons</span>
            <span className="sm:hidden">Lessons</span>
          </a>
          <a
            href="#bonuses"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-2.5 text-xs font-bold tracking-wide text-gold transition-all hover:bg-gold/20 active:scale-[0.98] sm:gap-2 sm:px-5 sm:text-sm"
          >
            <Gift className="size-3.5 sm:size-4" aria-hidden />
            <span className="hidden sm:inline">3 Bonuses</span>
            <span className="sm:hidden">Bonuses</span>
          </a>
          <a
            href="#extra-bonuses"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-2.5 text-xs font-bold tracking-wide text-gold transition-all hover:bg-gold/20 active:scale-[0.98] sm:gap-2 sm:px-5 sm:text-sm"
          >
            <Zap className="size-3.5 sm:size-4" aria-hidden />
            <span className="hidden sm:inline">Extra Bonuses</span>
            <span className="sm:hidden">Extras</span>
          </a>
        </div>
      </section>

      {/* HERO */}
      <section className="relative isolate px-4 pt-16 pb-20 sm:pt-24">
        <div className="halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-gold uppercase">
              <Flame className="size-3.5" aria-hidden /> Practical Retailing System for Network
              Marketers
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl">
              STOP CHASING CUSTOMERS.
              <br />
              <span className="text-gradient-gold">BUILD A RETAILING SYSTEM.</span>
            </h1>
            <p className="mt-5 font-display text-xl font-semibold text-foreground/90 sm:text-2xl">
              Turn Conversations Into Customers
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Learn a practical step-by-step system to find the right customers, start genuine
              conversations, generate enquiries, follow up professionally, create repeat purchases
              and build referrals.
            </p>

            <FlowChips
              className="mt-8 justify-start"
              steps={["Conversations", "Enquiries", "Customers", "Repeat", "Referrals"]}
            />

            <div className="mt-9">
              <CheckoutButton className="w-full sm:w-auto">🔥 GET THE RETAILING CODE</CheckoutButton>
              <p className="mt-3 text-sm text-muted-foreground">
                Launch Offers Available — Limited Buyer Slots
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gold/15 blur-3xl" />
            <img
              src={productImage.url}
              alt="The Retailing Code digital course package"
              width={1024}
              height={1024}
              className="w-full rounded-3xl border border-border shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-gold/30 bg-black shadow-[var(--shadow-card)]">
              <IntroVideo />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="The Real Problem"
              title={<>A Good Product Doesn't Automatically Create Customers.</>}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="surface-card h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <ShieldAlert className="mb-4 size-6 text-ember" aria-hidden />
                  <p className="text-sm leading-relaxed text-foreground/90">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/30 bg-gold/10 p-8 text-center">
              <p className="font-display text-xl font-bold text-balance sm:text-2xl">
                The problem isn't always the product.
                <br />
                The missing piece is often the{" "}
                <span className="text-gradient-gold">RETAILING SYSTEM.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-surface/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="The Solution"
              title={<>Introducing The Retailing Code</>}
              subtitle="A Practical System Behind Consistent Retailing"
            />
          </Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  The Retailing Code is designed to help Network Marketers move from random selling
                  activities to a structured retailing process.
                </p>
                <div className="surface-card rounded-2xl p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Instead of asking
                  </p>
                  <p className="mt-2 font-display text-lg text-foreground/70 line-through decoration-ember/60">
                    “Who can I sell this product to?”
                  </p>
                  <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    You learn to ask
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold">
                    “Who actually needs this, and how can I start the right conversation?”
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ol className="surface-card space-y-1 rounded-2xl p-6">
                {transformation.map((step, i) => (
                  <li key={step}>
                    <div
                      className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                        i === 0 ? "bg-ember/10" : i === transformation.length - 1 ? "bg-gold/10" : ""
                      }`}
                    >
                      <span className="w-6 font-display text-sm text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-sm font-bold tracking-wide sm:text-base">
                        {step}
                      </span>
                    </div>
                    {i < transformation.length - 1 && (
                      <span aria-hidden className="ml-8 block h-4 w-px bg-gold/40" />
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RETAILING MACHINE */}
      <section className="relative px-4 py-24">
        <div className="halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] opacity-60" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="The System"
              title={<>Build Your Own Retailing Machine</>}
              subtitle="Retailing should not depend on luck. The goal is to build a process you can understand, track and repeat."
            />
          </Reveal>

          <div className="mt-14 hidden lg:block">
            <div className="grid grid-cols-9 gap-3">
              {machine.map(({ label, Icon }, i) => (
                <Reveal key={label} delay={i * 70}>
                  <div className="surface-card group relative h-full rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                    <Icon className="mx-auto mb-3 size-6 text-gold" aria-hidden />
                    <p className="text-[11px] leading-tight font-bold tracking-wide uppercase">
                      {label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <ol className="mt-12 space-y-3 lg:hidden">
            {machine.map(({ label, Icon }, i) => (
              <Reveal as="li" key={label} delay={i * 50}>
                <div className="surface-card flex items-center gap-4 rounded-2xl p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <p className="text-sm font-bold tracking-wide uppercase">{label}</p>
                </div>
                {i < machine.length - 1 && (
                  <span aria-hidden className="ml-9 block h-3 w-px bg-gold/40" />
                )}
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12 text-center">
            <CheckoutButton>BUILD MY RETAILING SYSTEM →</CheckoutButton>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section id="lessons" className="bg-surface/40 px-4 py-24 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Curriculum"
              title={<>5 Lessons. One Complete Retailing Foundation.</>}
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map(({ no, title, points, outcome, Icon }, i) => (
              <Reveal key={no} delay={i * 80}>
                <article className="surface-card flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-extrabold text-gold/25">{no}</span>
                    <Icon className="size-6 text-gold" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-foreground/80">
                    <span className="font-semibold text-gold">Outcome: </span>
                    {outcome}
                  </p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-gold/30 bg-gold/10 p-8 text-center">
                <p className="font-display text-lg font-bold text-balance">
                  You aren't learning isolated sales tricks.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  You're learning how the entire retailing process connects.
                </p>
                <CheckoutButton size="md" className="mt-6">
                  🚀 START BUILDING MY SYSTEM
                </CheckoutButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section id="bonuses" className="relative scroll-mt-24 px-4 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[image:var(--gradient-surface)] opacity-80" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading eyebrow="Included Free" title={<>Join Now & Get These Bonuses FREE</>} />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="surface-card relative h-full overflow-hidden rounded-3xl p-8">
                <span className="absolute top-6 right-6 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  FREE
                </span>
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Bonus #01</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  30-Day Retailing Action Planner
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-through">Worth ₹999</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                  A ready-to-use 30-day daily action plan designed to help you turn what you learn
                  into consistent retailing activity.
                </p>
                <div className="mt-6 rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-center text-xs font-bold tracking-[0.15em] text-gold uppercase">
                  Learn → Implement → Track → Improve
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="surface-card relative h-full overflow-hidden rounded-3xl p-8">
                <span className="absolute top-6 right-6 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  FREE
                </span>
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Bonus #02</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  Retailing Scripts & Content Kit
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-through">Worth ₹1,499</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    "Conversation Starters",
                    "Follow-Up Scripts",
                    "Referral Scripts",
                    "Call-to-Action Templates",
                    "Reel Ideas",
                    "YouTube Topics",
                    "Customer-Care Templates",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Spend less time wondering what to say and more time actually starting meaningful
                  customer conversations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="surface-card relative h-full overflow-hidden rounded-3xl p-8">
                <span className="absolute top-6 right-6 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  FREE
                </span>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                  <Bot className="size-6" aria-hidden />
                </div>
                <p className="mt-4 text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  Bonus #03
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold">Retailing AI Assistant</h3>
                <p className="mt-1 text-sm text-muted-foreground line-through">Worth ₹1,999</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                  Your smart AI partner for better customer conversations. Get instant help with:
                </p>
                <ul className="mt-4 grid gap-2">
                  {[
                    "Objection handling",
                    "WhatsApp replies",
                    "Follow-ups",
                    "Conversation starters",
                    "Customer communication",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  All based on practical, proven retailing strategies.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXTRA BONUSES */}
      <section id="extra-bonuses" className="relative scroll-mt-24 px-4 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[image:var(--gradient-surface)] opacity-80" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="Extra Bonuses"
              title={<>Retailing Growth Resource Pack</>}
              subtitle="Worth ₹2,999 — Yours FREE when you join today"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {extraBonuses.map(({ title, Icon, copy }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="surface-card relative h-full overflow-hidden rounded-3xl p-8">
                  <span className="absolute top-6 right-6 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-extrabold text-primary-foreground">
                    FREE
                  </span>
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/10 p-6 text-center">
              <p className="font-display text-lg font-bold">
                Combined Extra Bonus Value: <span className="text-gradient-gold">₹2,999</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                These resources help you start conversations faster across WhatsApp, YouTube and Instagram.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <SectionHeading eyebrow="Value Stack" title={<>Everything You Get</>} />
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card mt-12 rounded-3xl p-8">
              {[
                ["The Retailing Code Course", "₹2,999"],
                ["30-Day Retailing Action Planner", "₹999"],
                ["Retailing Scripts & Content Kit", "₹1,499"],
                ["Retailing AI Assistant", "₹1,999"],
                ["Retailing Growth Resource Pack", "₹2,999"],
              ].map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 border-b border-border py-4"
                >
                  <span className="flex items-center gap-3 text-sm font-medium sm:text-base">
                    <Gift className="size-4 text-gold" aria-hidden />
                    {name}
                  </span>
                  <span className="font-display font-bold">{price}</span>
                </div>
              ))}
              <div className="mt-6 flex items-center justify-between border-b border-gold/20 pb-6">
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Total Package Value
                </span>
                <span className="font-display text-3xl font-extrabold text-gradient-gold">
                  ₹10,495
                </span>
              </div>
              <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
                <div className="text-left">
                  <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                    Launch Offer Price
                  </p>
                  <p className="mt-1 font-display text-4xl font-extrabold text-foreground">₹2,299</p>
                </div>
                <div className="rounded-full bg-ember/10 px-4 py-2 text-sm font-bold text-ember">
                  Save ₹8,196 (78% OFF)
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-center font-display text-lg font-bold tracking-wide text-gold">
              LIMITED LAUNCH SLOTS — LOCK IN THE 78% OFF PRICE NOW
            </p>
          </Reveal>
        </div>
      </section>

      {/* LAUNCH OFFER */}
      <section className="relative px-4 py-24" id="offer">
        <div className="halo pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px]" />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Limited Launch Offer"
              title={<>🔥 Get Everything for Just ₹2,299</>}
              subtitle="Total package value ₹10,495 — you save ₹8,196 (78% OFF) when you join during the launch window."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="glow-ring relative mt-14 rounded-3xl border border-gold/40 bg-[image:var(--gradient-surface)] p-8 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-gold)] px-4 py-1 text-[11px] font-extrabold tracking-[0.15em] text-primary-foreground uppercase">
                Best Launch Offer
              </span>

              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Launch Price
              </p>
              <p className="mt-3 font-display text-6xl font-extrabold text-gradient-gold">₹2,299</p>
              <p className="mt-2 text-sm text-muted-foreground line-through">₹10,495</p>

              <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-ember/10 px-4 py-2 text-sm font-bold text-ember">
                <Flame className="size-4" aria-hidden />
                Save ₹8,196 (78% OFF)
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Use Coupon Code at Checkout
              </p>
              <div className="mt-3 flex justify-center">
                <CouponCode code="RETAIL60" className="text-xl" />
              </div>

              <CheckoutButton className="mt-8 w-full">
                🔥 CLAIM MY 78% OFF ACCESS →
              </CheckoutButton>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Limited to the first 100 eligible buyers. After that, the next launch stage applies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl border border-border bg-surface/60 p-6 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Missed the first 100?
              </p>
                <p className="mt-2 text-sm text-foreground/85">
                Use coupon <span className="font-bold text-gold">RETAIL40</span> for the next launch stage before regular pricing returns.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 rounded-2xl border border-ember/40 bg-ember/10 p-6 text-center">
              <p className="font-display text-base font-bold sm:text-lg">
                DON'T WAIT FOR THE BETTER OFFER TO DISAPPEAR.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                If RETAIL60 is still available when you reach checkout, use it immediately.
              </p>
              <CheckoutButton className="mt-6">🔥 CHECK MY OFFER & JOIN NOW</CheckoutButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL BUILD */}
      <section className="bg-surface/40 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="What You'll Build"
              title={
                <>
                  You're Not Just Buying Videos.
                  <br />
                  You're Building a Retailing Process.
                </>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {builds.map(({ no, title, copy, Icon }, i) => (
              <Reveal key={no} delay={i * 60}>
                <div className="surface-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gold/12 text-gold">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-bold text-gold/60">{no}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="Fit Check" title={<>Is The Retailing Code For You?</>} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {forYou.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="surface-card flex h-full items-start gap-3 rounded-2xl p-5">
                  <Check className="mt-0.5 size-5 shrink-0 text-mint" aria-hidden />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-7">
              <p className="font-display text-base font-bold tracking-wide text-ember">
                THIS IS NOT A MAGIC-INCOME COURSE.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Retailing Code teaches a practical process and skills. Your results depend on
                factors including your effort, execution, communication, market, products and
                consistency.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAINER */}
      <section className="bg-surface/40 px-4 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold/12 blur-2xl" />
            <img
              src={trainerImage.url}
              alt="Kranthi Velpuri, trainer of The Retailing Code"
              loading="lazy"
              width={768}
              height={896}
              className="w-full rounded-3xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
              Meet Your Trainer
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Learn With Kranthi Velpuri
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The Retailing Code focuses on practical implementation rather than complicated theory.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              The objective is simple
            </p>
            <p className="mt-2 text-base leading-relaxed text-foreground/90">
              Help you understand the retailing process and give you a structure you can actually
              put into action.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Roadmap" title={<>Your Course Roadmap</>} />
          </Reveal>
          <ol className="relative mt-14 ml-4 border-l border-gold/25 pl-8">
            {roadmap.map((step, i) => {
              const isEnd = i === 0 || i === roadmap.length - 1;
              return (
                <Reveal as="li" key={step} delay={i * 60} className="relative pb-8 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute -left-[41px] mt-2 flex size-4 items-center justify-center rounded-full ${
                      isEnd ? "bg-[image:var(--gradient-gold)]" : "bg-gold/30"
                    }`}
                  />
                  <p
                    className={`font-display font-bold tracking-wide uppercase ${
                      isEnd ? "text-lg text-gradient-gold" : "text-base"
                    }`}
                  >
                    {step}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface/40 px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title={<>Questions, Answered</>} />
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="surface-card rounded-2xl border-b-0 px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 py-28">
        <div className="halo pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Your next customer conversation can be different.
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-6xl">
              STOP CHASING.
              <br />
              <span className="text-gradient-gold">START BUILDING.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
              Build a practical retailing system for finding customers, creating conversations,
              following up and generating repeat business.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card mt-12 rounded-3xl p-8 text-left">
              <p className="text-center font-display text-2xl font-extrabold tracking-wide">
                THE RETAILING CODE
              </p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                 Course + 30-Day Planner + Scripts Kit + Retailing AI Assistant
               </p>
               <p className="mt-4 text-center text-xs font-bold tracking-[0.2em] text-gold uppercase">
                Total Value: ₹7,496
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5 text-center">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase">🔥 First 100</p>
                  <p className="mt-2 font-display text-2xl font-extrabold text-gradient-gold">
                    60% OFF
                  </p>
                  <CouponCode code="RETAIL60" className="mt-3 text-base" />
                </div>
                <div className="rounded-2xl border border-border bg-background/40 p-5 text-center">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase">⚡ Next 100</p>
                  <p className="mt-2 font-display text-2xl font-extrabold">40% OFF</p>
                  <CouponCode code="RETAIL40" className="mt-3 text-base" />
                </div>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-gold">
                <Zap className="size-4" aria-hidden /> The best launch offer goes first.
              </p>

              <CheckoutButton className="mt-8 w-full">
                🔥 GRAB YOUR LAUNCH OFFER NOW <ArrowRight className="size-5" aria-hidden />
              </CheckoutButton>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure checkout • Instant digital access subject to checkout confirmation
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-14 font-display text-lg font-bold tracking-wide text-balance sm:text-xl">
              DON'T JUST LEARN RETAILING.
              <br />
              <span className="text-gradient-gold">BUILD YOUR RETAILING MACHINE.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-10 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:nmaisupport@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="size-4 text-gold" aria-hidden />
              nmaisupport@gmail.com
            </a>
            <span className="hidden text-border sm:inline">|</span>
            <a
              href="https://tinyurl.com/484pkcpu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <MessageSquare className="size-4 text-gold" aria-hidden />
              Connect me on WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} The Retailing Code — Kranthi Velpuri.
          </p>
        </div>
      </footer>

      <StickyCta />
    </main>
  );
}
