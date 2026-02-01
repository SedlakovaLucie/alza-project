import type { CSSProperties } from "react";
import StarIcon from "../../../../assets/images/StarIcon";
import "./Stars.css";

type StarsProps = {
  value: number;
};

// ID stars
const STAR_IDS = ["1", "2", "3", "4", "5"] as const;

type StarsStyle = CSSProperties & {
  "--stars-fill"?: string;
};

const Stars = ({ value }: StarsProps) => {
  const safe = Number.isFinite(value) ? Math.max(0, Math.min(5, value)) : 0;
  const percent = (safe / 5) * 100; 
  const style: StarsStyle = { "--stars-fill": `${percent}%` };

  return (
    <span className="starsWrapper" aria-label={`Hodnocení ${safe} z 5`}>
      {/* empty stars */}
      <span className="stars" style={style} aria-hidden="true">
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
