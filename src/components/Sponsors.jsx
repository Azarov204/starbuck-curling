import { SectionTitle } from "../components/SectionTitle.jsx";
import sponsorship_package from "../assets/sponsors/sponsorship_package_26-27.pdf";

export function Sponsors() {
  return (
    <section className="section sponsors">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Our supporters"
          title="Powered by local pride."
          intro={
            <>
              Thank you to our wonderful sponsors who help keep curling
              accessible and our ice keen. Interested in becoming a sponsor?
              Check out our{" "}
              <a
                href={sponsorship_package}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline cursor-pointer"
              >
                sponsorship package
              </a>
            </>
          }
        />
        <div className="sponsor-grid">
          <article className="sponsor-tier platinum">
            <span>01</span>
            <h3>Platinum</h3>
            <p>Perfectly Raw</p>
            <p>One Insurance</p>
            <p>Access Credit Union</p>
            <p>Prairie Flour Mills</p>
          </article>
          <article className="sponsor-tier gold">
            <span>02</span>
            <h3>Gold</h3>
            <p>East Meridian Electric</p>
            <p>Terraco</p>
            <p>Phil's Honey</p>
          </article>
          <article className="sponsor-tier silver">
            <span>03</span>
            <h3>Silver</h3>
            <p>Meridian Hauling</p>
            <p>Rocky Mountain Equipment</p>
            <p>Extreme Coatings</p>
            <p>Enns Brother</p>
            <p>Rosenort Motors</p>
          </article>
        </div>
      </div>
    </section>
  );
}
