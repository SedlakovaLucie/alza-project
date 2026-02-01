import "./BestSellerSection.css";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import BestSellerCard from "./bestSellerCard/BestSellerCard";
import type { Product } from "../../../types";

type Props = { bestSellers: Product[] };

const BREAKPOINTS = { mobile: 640, tablet: 1024 };

const getSlidesPerView = (): number => {
  if (typeof globalThis === "undefined") return 5; //default 5
  if (globalThis.matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`).matches)
    return 2;
  if (globalThis.matchMedia(`(max-width: ${BREAKPOINTS.tablet}px)`).matches)
    return 3;
  return 5;
};

const BestSellerSection = ({ bestSellers }: Props) => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [slidesPerView, setSlidesPerView] = useState(() => getSlidesPerView());

  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollBy = useCallback(
    (direction: -1 | 1) => {
      if (!emblaApi) return;
      const total = emblaApi.scrollSnapList().length;
      if (!total) return;

      const current = emblaApi.selectedScrollSnap();
      const rawNext = current + direction * slidesPerView;
      const next = ((rawNext % total) + total) % total;

      emblaApi.scrollTo(next);
    },
    [emblaApi, slidesPerView],
  );

  return (
    <section className="bestSeller-section">
      <h2 className="bestSeller__title">{t("bestSeller_section.title")}</h2>

      {/* arrow-left */}
      <div className="embla">
        <button
          className="embla__button embla__button--prev"
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Předchozí"
        >
          <svg
            className="embla__button__svg"
            viewBox="0 0 532 532"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M355.66 11.354c13.711-13.711 35.987-13.711 49.698 0 13.711 13.711 13.711 35.987 0 49.698L189.5 277.0l215.858 215.858c13.711 13.711 13.711 35.987 0 49.698-13.711 13.711-35.987 13.711-49.698 0L115.397 302.299c-13.711-13.711-13.711-35.987 0-49.698L355.66 11.354z"
            />
          </svg>
        </button>

        {/* carousel */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {bestSellers.map((bestProduct) => (
              <div className="embla__slide" key={bestProduct.id}>
                <BestSellerCard bestProduct={bestProduct} />
              </div>
            ))}
          </div>
        </div>

        {/* arrow-right */}
        <button
          className="embla__button embla__button--next"
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Další"
        >
          <svg
            className="embla__button__svg"
            viewBox="0 0 532 532"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M355.66 11.354c13.711-13.711 35.987-13.711 49.698 0 13.711 13.711 13.711 35.987 0 49.698L189.5 277.0l215.858 215.858c13.711 13.711 13.711 35.987 0 49.698-13.711 13.711-35.987 13.711-49.698 0L115.397 302.299c-13.711-13.711-13.711-35.987 0-49.698L355.66 11.354z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BestSellerSection;
