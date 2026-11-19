import heroImage from "../assets/heros/image_2_crop.jpg";
import { ClubMark } from "./ClubMark";

export function PageHero({ title, eyebrow }) {
  return (
    <section
      className={`hero ${title ? "hero--page" : ""}`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        {title ? (
          <>
            <span className="eyebrow light">{eyebrow}</span>
            <h1>{title}</h1>
          </>
        ) : (
          <>
            <ClubMark />
            {/* <p>Community on ice, in the heart of Starbuck</p> */}
          </>
        )}
      </div>
    </section>
  );
}
