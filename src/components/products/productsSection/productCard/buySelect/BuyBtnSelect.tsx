import "./BuyBtnSelect.css";
import { useTranslation } from "react-i18next";

export const BUY_ACTIONS = [
  "buy",
  "buy_fast",
  "compare",
  "watch",
  "add",
] as const;
export type BuyAction = (typeof BUY_ACTIONS)[number];

type Props = {
  value: BuyAction;
  onChange: (newValue: BuyAction) => void;
};

const BuyBtnSelect = ({ value, onChange }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="BuyBtnSelect">
      <select
        className="BuyBtnSelect-select"
        value={value}
        aria-label={t("bestSellerSection.byutBtn.aria")}
        onChange={(e) => {
          onChange(e.target.value as BuyAction);
        }}
      >
        {BUY_ACTIONS.map((action) => (
          <option key={action} value={action}>
            {t(`bestSellerSection.byutBtn.${action}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BuyBtnSelect;
