"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  UserCheck,
  Flame,
  Building2,
  Monitor,
  PlaySquare,
  MapPin,
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryCategories, galleryItems, GalleryItem } from "./galleryData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Category Icon Resolver
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "training":
        return <Award className="w-3.5 h-3.5" />;
      case "vip":
        return <UserCheck className="w-3.5 h-3.5" />;
      case "event":
        return <Flame className="w-3.5 h-3.5" />;
      case "facility":
        return <Building2 className="w-3.5 h-3.5" />;
      case "command":
        return <Monitor className="w-3.5 h-3.5" />;
      case "video":
        return <PlaySquare className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryItems.length };
    galleryItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const currentSelectedItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="bg-[#f8f6f0] text-[#0e1b30] min-h-screen flex flex-col font-sans selection:bg-accent-gold selection:text-[#0e1b30]">
      <Navbar />

      {/* ─── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-[#0e1b30] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle grid and ambient gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/20 via-[#0e1b30]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2.5 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-none text-accent-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
            <ShieldCheck className="w-4 h-4 text-accent-gold" />
            <span>OPERATIONAL ARCHIVE & FIELD INTELLIGENCE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-[1.08] uppercase">
                TACTICAL FIELD <br />
                <span className="text-accent-gold">GALLERY</span> & ASSETS
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-normal">
                Visual documentation of Stronghold’s deployed security battalions, executive protection details, arena crowd control units, and advanced facility guarding forces across Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTROLS & FILTER BAR ─────────────────────────────── */}
      <section className="sticky top-20 z-30 bg-[#f8f6f0]/95 backdrop-blur-md border-b border-[#0e1b30]/15 py-4 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {galleryCategories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 rounded-none border ${
                    isActive
                      ? "bg-[#0e1b30] text-accent-gold border-[#0e1b30] shadow-sm shadow-black/10"
                      : "bg-white text-[#0e1b30]/80 border-[#0e1b30]/15 hover:border-accent-gold hover:text-[#0e1b30]"
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 font-bold ${
                      isActive
                        ? "bg-accent-gold text-[#0e1b30]"
                        : "bg-[#0e1b30]/10 text-[#0e1b30]/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] max-w-md w-full lg:w-auto">
            <Search className="w-4 h-4 text-[#0e1b30]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH ASSETS / UNITS / SECTORS..."
              className="w-full bg-white border border-[#0e1b30]/20 pl-10 pr-9 py-2 text-xs font-semibold tracking-wider text-[#0e1b30] placeholder:text-[#0e1b30]/40 focus:outline-none focus:border-accent-gold rounded-none uppercase transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0e1b30]/40 hover:text-[#0e1b30] p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─── BENTO GRID SHOWCASE (CLEAN IMAGES, SHARP CORNERS) ─── */}
      <section className="py-12 lg:py-16 grow bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Active Filter Notification */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#0e1b30]/15 text-xs text-[#0e1b30]/70">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0e1b30] uppercase tracking-widest">
                DISPLAYING {filteredItems.length} RECORD{filteredItems.length !== 1 ? "S" : ""}
              </span>
              {activeCategory !== "all" && (
                <span className="bg-accent-gold/20 text-accent-gold px-2 py-0.5 text-[10px] font-bold uppercase border border-accent-gold/30">
                  {galleryCategories.find((c) => c.id === activeCategory)?.label}
                </span>
              )}
              {searchQuery && (
                <span className="bg-[#0e1b30]/10 text-[#0e1b30] px-2 py-0.5 text-[10px] font-bold uppercase border border-[#0e1b30]/20">
                  KEYWORD: &quot;{searchQuery}&quot;
                </span>
              )}
            </div>

            {(activeCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="text-[11px] font-bold tracking-wider text-accent-gold hover:text-[#0e1b30] underline uppercase cursor-pointer"
              >
                RESET FILTERS
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="border border-dashed border-[#0e1b30]/25 bg-white p-16 text-center rounded-none my-12">
              <ShieldAlert className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#0e1b30] mb-2">
                NO ASSETS FOUND MATCHING PARAMETERS
              </h3>
              <p className="text-xs text-[#0e1b30]/60 max-w-md mx-auto mb-6">
                Try resetting your search query or selecting a different operational category filter above.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-[#0e1b30] text-accent-gold text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-[#0e1b30] transition-colors rounded-none cursor-pointer"
              >
                SHOW ALL ARCHIVE ASSETS
              </button>
            </div>
          ) : (
            /* Bento Grid Container (Dense Auto Flow - Zero Gaps) */
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[280px] grid-flow-row-dense"
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => {
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                      key={item.id}
                      className={`group relative border border-[#0e1b30]/15 bg-black rounded-none overflow-hidden cursor-pointer shadow-md transition-all duration-500 hover:border-accent-gold hover:shadow-xl hover:shadow-black/20 ${item.bentoSpan.cols} ${item.bentoSpan.rows}`}
                      onClick={() => setSelectedItemIndex(index)}
                    >
                      {/* Video vs Image (Pure & Clean - No text crammed on image) */}
                      {item.isVideo ? (
                        <div className="relative w-full h-full bg-black flex items-center justify-center">
                          <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full bg-[#0e1b30]">
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                          />
                        </div>
                      )}

                      {/* Tactical Sharp Corner Accents on Hover */}
                      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* ─── FULLSCREEN LIGHTBOX MODAL ─────────────────────────── */}
      <AnimatePresence>
        {currentSelectedItem && selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-10 select-none"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between border-b border-white/15 pb-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="bg-accent-gold text-[#0e1b30] px-3 py-1 text-xs font-black uppercase tracking-widest rounded-none">
                  {currentSelectedItem.code}
                </span>
                <div>
                  <h2 className="text-white text-base sm:text-lg font-bold uppercase tracking-tight">
                    {currentSelectedItem.title}
                  </h2>
                  <span className="text-accent-gold text-[10px] uppercase tracking-widest font-semibold">
                    {currentSelectedItem.categoryLabel} • {currentSelectedItem.clearance}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/50 text-xs font-bold tracking-widest hidden sm:inline-block">
                  {selectedItemIndex + 1} OF {filteredItems.length}
                </span>
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="bg-white/10 hover:bg-accent-gold hover:text-[#0e1b30] text-white p-2.5 transition-colors border border-white/20 rounded-none cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / Media Canvas */}
            <div
              className="relative grow flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedItemIndex((prev) =>
                    prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : null
                  )
                }
                className="absolute left-2 sm:left-4 z-20 bg-[#0e1b30]/90 hover:bg-accent-gold hover:text-[#0e1b30] text-white p-3.5 border border-white/20 rounded-none transition-all cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Media Preview */}
              <div className="max-h-[70vh] max-w-5xl w-full h-full flex items-center justify-center p-2 relative">
                {currentSelectedItem.isVideo ? (
                  <video
                    src={currentSelectedItem.src}
                    controls
                    autoPlay
                    className="max-h-[68vh] max-w-full object-contain border border-accent-gold/40 shadow-2xl rounded-none"
                  />
                ) : (
                  <img
                    src={currentSelectedItem.src}
                    alt={currentSelectedItem.title}
                    className="max-h-[68vh] max-w-full object-contain border border-accent-gold/40 shadow-2xl rounded-none"
                  />
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedItemIndex((prev) =>
                    prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : null
                  )
                }
                className="absolute right-2 sm:right-4 z-20 bg-[#0e1b30]/90 hover:bg-accent-gold hover:text-[#0e1b30] text-white p-3.5 border border-white/20 rounded-none transition-all cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer / Metadata Inspector */}
            <div
              className="border-t border-white/15 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs z-10 bg-[#0e1b30]/90 p-4 border border-white/10 rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[10px] text-accent-gold uppercase font-bold tracking-widest block mb-1">
                  LOCATION & DEPLOYMENT
                </span>
                <p className="text-white font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                  {currentSelectedItem.location}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-accent-gold uppercase font-bold tracking-widest block mb-1">
                  TACTICAL UNIT ASSIGNMENT
                </span>
                <p className="text-white font-medium">
                  {currentSelectedItem.unit}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-accent-gold uppercase font-bold tracking-widest block mb-1">
                  FIELD MISSION BRIEF
                </span>
                <p className="text-white/80 font-normal leading-relaxed text-[11px]">
                  {currentSelectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0e1b30] text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 tracking-tight">
            NEED SPECIALIZED FIELD SECURITY DEPLOYMENT?
          </h2>
          <p className="text-xs md:text-sm text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Stronghold provides dedicated guard units, VIP close protection specialists, and integrated electronic surveillance for corporate and private sectors across Sri Lanka.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#0e1b30] px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-md rounded-none"
          >
            REQUEST A SECURITY AUDIT
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
