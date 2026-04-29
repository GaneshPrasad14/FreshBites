import { MapPin, Phone, Send, Star } from "lucide-react";
import heroImage from "@/assets/restaurant-hero.jpg";
import pastaImage from "@/assets/menu-pasta.jpg";
import steakImage from "@/assets/menu-steak.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "Truffle Tagliatelle",
    description: "Silky handmade pasta with aged parmesan, black truffle, and garden herbs.",
    price: "₹24",
    image: pastaImage,
  },
  {
    name: "Rosemary Ribeye",
    description: "Char-grilled ribeye with asparagus, rosemary butter, and smoked sea salt.",
    price: "₹38",
    image: steakImage,
  },
  {
    name: "Molten Cacao Cake",
    description: "Warm chocolate cake, berry compote, and a cloud of vanilla cream.",
    price: "₹14",
    image: dessertImage,
  },
];

const offers = [
  { badge: "20% OFF", title: "Chef's Table Night", detail: "Every Tuesday on signature mains after 6 PM." },
  { badge: "2 FOR 1", title: "Lunch Duos", detail: "Share fresh pasta bowls with complimentary focaccia." },
  { badge: "FREE", title: "Dessert Weekend", detail: "A sweet finish with every dinner reservation." },
];

const navLinks = ["Home", "Menu", "Offers", "Contact"];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="font-display text-2xl font-bold tracking-normal text-mahogany">
            Fresh Bites
          </a>
          <div className="flex items-center gap-3 sm:gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-bold text-foreground/75 transition-colors duration-300 hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Rustic restaurant table filled with fresh pasta, bread, basil, and warm candlelight"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={960}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex w-full max-w-7xl px-5 py-24 md:px-8">
          <div className="max-w-3xl animate-float">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-bold text-primary-foreground backdrop-blur-md">
              <Star className="h-4 w-4 fill-current" /> Fresh from our kitchen daily
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-normal text-primary-foreground sm:text-6xl md:text-7xl">
              Delicious Food Delivered Fresh
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85 md:text-xl">
              Premium comfort plates, seasonal ingredients, and restaurant-grade flavors brought warm to your table.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-9">
              <a href="#menu">View Menu</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="menu" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Our menu</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-mahogany md:text-5xl">Signature favorites</h2>
            </div>
            <p className="max-w-xl text-muted-foreground">Carefully crafted plates with bold flavor, premium ingredients, and the kind of finish that makes dinner memorable.</p>
          </div>
          <div className="flex flex-col gap-7 md:flex-row">
            {menuItems.map((item) => (
              <article key={item.name} className="flex-1 overflow-hidden rounded-lg bg-card-gradient shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:shadow-premium">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    width={900}
                    height={700}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-mahogany">{item.name}</h3>
                    <span className="rounded-full bg-secondary px-4 py-2 text-sm font-extrabold text-secondary-foreground">{item.price}</span>
                  </div>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="bg-mahogany px-5 py-20 text-primary-foreground md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">Limited offers</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A little extra on the house</h2>
          <div className="mt-12 flex flex-col gap-6 md:flex-row">
            {offers.map((offer) => (
              <article key={offer.title} className="flex-1 rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-7 shadow-soft backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
                <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground">{offer.badge}</span>
                <h3 className="mt-6 font-display text-2xl font-bold">{offer.title}</h3>
                <p className="mt-3 leading-7 text-primary-foreground/78">{offer.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-mahogany md:text-5xl">Reserve a warm seat</h2>
            <form className="mt-10 grid gap-5 rounded-lg bg-card-gradient p-6 shadow-soft md:p-8">
              <input className="rounded-md border border-input bg-background px-4 py-4 outline-none transition-shadow focus:ring-2 focus:ring-ring" placeholder="Name" type="text" />
              <input className="rounded-md border border-input bg-background px-4 py-4 outline-none transition-shadow focus:ring-2 focus:ring-ring" placeholder="Email" type="email" />
              <textarea className="min-h-36 rounded-md border border-input bg-background px-4 py-4 outline-none transition-shadow focus:ring-2 focus:ring-ring" placeholder="Message" />
              <Button type="button" variant="hero" size="lg" className="justify-self-start">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
           <aside className="flex flex-col gap-6 rounded-lg bg-card p-6 shadow-soft md:p-8">
             <div className="flex gap-4">
               <MapPin className="mt-1 h-5 w-5 text-primary" />
               <div>
                 <h3 className="font-bold text-mahogany">Address</h3>
                 <p className="mt-1 text-muted-foreground">123 Anna Salai, Chennai, Tamil Nadu 600002</p>
               </div>
             </div>
             <div className="flex gap-4">
               <Phone className="mt-1 h-5 w-5 text-primary" />
               <div>
                 <h3 className="font-bold text-mahogany">Phone</h3>
                 <p className="mt-1 text-muted-foreground">+91 44 1234 5678</p>
               </div>
             </div>
              <div className="flex min-h-72 items-center justify-center rounded-lg border border-border bg-secondary">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.250419847131!2d80.26449167484304!3d13.064045187259845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661992dff20f%3A0xf915e463511d20ac!2s123%2C%20123%2C%20Anna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e1!3m2!1sen!2sin!4v1777449019810!5m2!1sen!2sin"
                ></iframe>
              </div>
           </aside>
        </div>
      </section>
    </main>
  );
};

export default Index;
