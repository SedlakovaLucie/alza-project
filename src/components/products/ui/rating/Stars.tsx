import type { CSSProperties } from "react";
import StarIcon from "../../../../assets/images/StarIcon";
import "./Stars.css";
import { useTranslation } from "react-i18next";

type StarsProps = {
  value: number;
};

type StarsStyle = CSSProperties & {
  "--stars-fill"?: string;
};

// ID stars
const STAR_IDS = ["1", "2", "3", "4", "5"] as const;

const Stars = ({ value }: StarsProps) => {
  const { t } = useTranslation();
  const validate = Number.isFinite(value) ? Math.max(0, Math.min(5, value)) : 0;
  const percent = (validate / 5) * 100;
  const style: StarsStyle = { "--stars-fill": `${percent}%` };

  return (
    <span className="starsWrapper" aria-label={`${t("rating")} ${validate}`}>
      <span className="stars" style={style} aria-hidden="true">
        {/* empty stars */}
        <span className="stars__row stars__row--empty">
          {STAR_IDS.map((id) => (
            <StarIcon key={`e-${id}`} />
          ))}
        </span>
        {/* filled stars */}
        <span className="stars__fill">
          <span className="stars__row stars__row--full">
            {STAR_IDS.map((id) => (
              <StarIcon key={`f-${id}`} />
            ))}
          </span>
        </span>
      </span>
    </span>
  );
};

export default Stars;
