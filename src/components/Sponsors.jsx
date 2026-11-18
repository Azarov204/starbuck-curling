import { SectionTitle } from "../components/SectionTitle.jsx";

export function Sponsors() {
  return (
    <section className="section sponsors">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Our supporters"
          title="Powered by local pride."
          intro="Our sponsors help keep curling accessible, our ice keen, and our community connected. We’re grateful to every business that stands behind local sport."
        />
        <div className="sponsor-grid">
          <article className="sponsor-tier platinum">
            <span>01</span>
            <h3>Platinum</h3>
            <p>Starbuck Co-op</p>
            <p>Prairie Hearth Financial</p>
          </article>
          <article className="sponsor-tier gold">
            <span>02</span>
            <h3>Gold</h3>
            <p>Red River Ag</p>
            <p>MacDonald Hardware</p>
          </article>
          <article className="sponsor-tier silver">
            <span>03</span>
            <h3>Silver</h3>
            <p>Starbuck Pharmacy</p>
            <p>Community Builders</p>
          </article>
        </div>
      </div>
    </section>
  );
}
