import "./HeroSection.css";

type Props = {
  categoryName: string;
};

const HeroSection = ({ categoryName }: Props) => {
  return (
    <section className="heroSection" id="heroSection">
      <h1>{categoryName}</h1>
    </section>
  );
};

export default HeroSection;
