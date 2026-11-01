import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  Sparkles,
  Camera,
  MapPin,
} from 'lucide-react';
import { GalleryPhoto } from '../data/weddingData';
import { MandalaDivider, GoldCornerOrnament } from './OrnamentalSVGs';
import { WeddingArtScene } from './WeddingArtScene';

interface WeddingGallerySectionProps {
  photos: GalleryPhoto[];
}

export const WeddingGallerySection: React.FC<WeddingGallerySectionProps> = ({ photos }) => {
  // Strictly ensure 5 images
  const [galleryItems, setGalleryItems] = useState<GalleryPhoto[]>(() => photos.slice(0, 5));
  const [failedImageIds, setFailedImageIds] = useState<Record<number, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [replacingPhotoId, setReplacingPhotoId] = useState<number | null>(null);

  useEffect(() => {
    setGalleryItems(photos.slice(0, 5));
  }, [photos]);

  // Keyboard navigation for Full-Screen Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryItems.length));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryItems.length]);

  const handleImageError = (id: number) => {
    setFailedImageIds((prev) => ({ ...prev, [id]: true }));
  };

  const triggerReplacePhoto = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setReplacingPhotoId(id);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || replacingPhotoId === null) return;
    const objectUrl = URL.createObjectURL(file);

    setGalleryItems((prev) =>
      prev.map((item) =>
        item.id === replacingPhotoId ? { ...item, imageUrl: objectUrl } : item
      )
    );
    setFailedImageIds((prev) => ({ ...prev, [replacingPhotoId]: false }));
    setReplacingPhotoId(null);
  };

  return (
    <section
      id="gallery-section"
      className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Hidden File Input for Easy Local Photo Replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelected}
        className="hidden"
      />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF62]/15 border border-[#D4AF62]/40 text-xs font-sans uppercase tracking-[0.25em] text-[#FCF6BA]">
          <Camera className="w-3.5 h-3.5 text-[#D4AF62]" />
          <span>Curated Royal Memories • 5 Signature Frames</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil mt-3">
          Wedding Photo Gallery
        </h2>
        <p className="mt-2 text-sm sm:text-base font-serif text-[#FFF8EA]/80">
          Five cherished moments from our portrait, pre-wedding, Haldi, Mehendi, and sacred
          Muhurtham celebrations. Click any frame for full-screen lightbox view.
        </p>
        <MandalaDivider />
      </div>

      {/* Responsive 5-Image Royal Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {galleryItems.map((photo, index) => {
          // First 2 images span 3 columns each on desktop; bottom 3 images span 2 columns each (total = 5 images)
          const gridSpanClass =
            index < 2 ? 'md:col-span-3 h-[340px] sm:h-[400px]' : 'md:col-span-2 h-[300px] sm:h-[340px]';
          const useFallback = Boolean(failedImageIds[photo.id]);

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: index % 2 === 0 ? -3 : 3,
                scale: 1.015,
              }}
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              className={`group relative rounded-3xl overflow-hidden border-2 border-[#D4AF62]/60 bg-[#2E040C] gold-glow cursor-pointer perspective-1500 ${gridSpanClass}`}
            >
              {/* Gold Corner Accent */}
              <GoldCornerOrnament
                position="top-left"
                className="absolute top-2 left-2 z-20 w-10 h-10 opacity-85"
              />
              <GoldCornerOrnament
                position="bottom-right"
                className="absolute bottom-2 right-2 z-20 w-10 h-10 opacity-85"
              />

              {/* Photo or Rich Royal SVG Artwork Fallback */}
              <div className="w-full h-full overflow-hidden">
                {useFallback ? (
                  <WeddingArtScene
                    scene={photo.fallbackScene}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={photo.imageUrl}
                    alt={`${photo.category} — ${photo.title}`}
                    onError={() => handleImageError(photo.id)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Top Category Badge & Replace Photo Button */}
              <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#240309]/85 border border-[#D4AF62]/60 text-[11px] font-sans font-semibold tracking-wider uppercase text-[#FCF6BA] backdrop-blur-md">
                  {photo.category}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => triggerReplacePhoto(photo.id, e)}
                    title="Replace with your own wedding photo"
                    className="px-2.5 py-1 rounded-full bg-[#240309]/85 hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62]/50 text-[11px] font-sans font-medium inline-flex items-center gap-1 transition-colors backdrop-blur-md"
                  >
                    <Upload className="w-3 h-3" />
                    <span className="hidden sm:inline">Replace</span>
                  </button>

                  <span className="p-2 rounded-full bg-[#240309]/85 border border-[#D4AF62]/50 text-[#FCF6BA] group-hover:bg-[#D4AF62] group-hover:text-[#240309] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Bottom Gradient Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-14 bg-gradient-to-t from-[#1A0206] via-[#240309]/85 to-transparent">
                <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#D4AF62] uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  <span>{photo.dateLocation}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#FFF8EA] group-hover:text-[#FCF6BA] transition-colors mt-0.5">
                  {photo.title}
                </h3>
                <p className="text-xs sm:text-sm font-serif text-[#FFF8EA]/80 line-clamp-2 mt-1">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && galleryItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-[#120104]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close full-screen lightbox"
              className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#6B1020] hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Image Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
                );
              }}
              aria-label="Previous gallery photo"
              className="absolute left-3 sm:left-8 z-50 p-3 rounded-full bg-[#240309]/90 hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62]/60 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
              }}
              aria-label="Next gallery photo"
              className="absolute right-3 sm:right-8 z-50 p-3 rounded-full bg-[#240309]/90 hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62]/60 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Lightbox Frame */}
            <motion.div
              key={galleryItems[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -15 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border-2 border-[#D4AF62] bg-[#240309] gold-glow-strong"
            >
              <div className="relative h-[52vh] sm:h-[64vh] w-full bg-[#1A0206]">
                {failedImageIds[galleryItems[lightboxIndex].id] ? (
                  <WeddingArtScene
                    scene={galleryItems[lightboxIndex].fallbackScene}
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={galleryItems[lightboxIndex].imageUrl}
                    alt={galleryItems[lightboxIndex].title}
                    onError={() => handleImageError(galleryItems[lightboxIndex].id)}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="p-5 sm:p-7 bg-gradient-to-r from-[#240309] via-[#3D0711] to-[#240309] border-t border-[#D4AF62]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#D4AF62]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      Frame {lightboxIndex + 1} of {galleryItems.length} •{' '}
                      {galleryItems[lightboxIndex].category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-foil mt-1">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm font-serif text-[#FFF8EA]/85 mt-1">
                    {galleryItems[lightboxIndex].caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => triggerReplacePhoto(galleryItems[lightboxIndex].id, e)}
                  className="self-start sm:self-center px-4 py-2.5 rounded-full bg-[#D4AF62] hover:bg-[#FCF6BA] text-[#240309] font-sans font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 flex-shrink-0 transition-all"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Custom Photo</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

