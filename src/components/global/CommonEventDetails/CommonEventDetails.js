"use client";
import {
  DATEICON,
  INSTAGRAMICON,
  LOCATION_ICON,
  MAPLOCATIONVIEWICON,
  SAVEDICON,
  SHAREICON,
  WHATSAPPICON,
  XICON,
  YOUTUBEICON,
} from "../../../const-value/config-icons/page";
import Footer from "../Footer/Footer";
import "./CommonEventDetails.css";

export default function CommonEventDetails({ event = {}, onBack }) {


  return (
    <div className="container event-wrapper my-4">
      <div className="event-details-wrapper">
        <button className="event-back-btn" onClick={onBack}>
          🔙 Back
        </button>

        {/* rest of your event details UI */}
      </div>
      {/* ================= 1. HERO ================= */}
      <div className="hero-card">
        <img
          src={
            event?.bannerImage ||
            "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
          }
          alt="event"
          className="event-img"
        />

        {/* BACKEND: event.bannerImage */}

        <span className="badge-upcoming">Upcoming Event</span>
        {/* BACKEND: event.status */}

        <div className="slider-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ================= 2. TITLE + REGISTER ================= */}
      <div className="title-row">
        <div>
          <h1 className="mt-3">
            {event?.title || "International Conference on ICRSEM II – 2025"}
          </h1>

          {/* ================= 3. TAGS + VIEWS ================= */}
          <div className="meta-row">
            <div>
              <span className="tag yellow">{event?.eventTypeIdentity || "==========="}</span>

              <span className="tag purple">Paid</span>
              <span className="tag green">{event?.mode || "===="}</span>
              {/* BACKEND: event.tags */}

              <span className="views">👁 5678</span>
              {/* BACKEND: event.views */}
            </div>
            <div>
              <span>Like</span>
              <span>SAHRE</span>
              <span>SAVE</span>
            </div>
          </div>
        </div>

        <button className="btn-register">
          Register Now
          {/* BACKEND: CTA */}
        </button>
      </div>

      {/* ================= 4. DESCRIPTION ================= */}
      <p className="description">
        {event?.description || "No description"}
        <span className="readmore"> Readmore</span>
        {/* BACKEND: event.description */}
      </p>

      {/* ================= 5. VENUE + TICKETS ================= */}
      <div className="row g-4 py-5">
        {/* ================= VENUE & DATE (LEFT 6) ================= */}
        <div className="col-lg-6">
          <div className="card-box h-100">
            <h3>Venue & Date</h3>

            <p>
              {LOCATION_ICON} 22nd, Bindhavan Convention Hall – Saravanampatti,
              Coimbatore
            </p>
            {/* BACKEND: event.venue */}

            <p>{DATEICON} 24th Dec 2025 – 31st Dec 2025</p>
            {/* BACKEND: event.startDate, endDate */}

            <button className="map-btn">
              {MAPLOCATIONVIEWICON} View Map Location
            </button>

            <div className="countdown">
              <span>
                07
                <br />
                Days
              </span>
              <span>
                17
                <br />
                Hours
              </span>
              <span>
                25
                <br />
                Mins
              </span>
              <span>
                08
                <br />
                Secs
              </span>
              {/* BACKEND: countdown */}
            </div>
          </div>
        </div>

        {/* ================= TICKET AVAILABILITY (RIGHT 6) ================= */}
        <div className="col-lg-6">
          <div className="card-box">
            <h4 className="section-title mb-4">Ticket Availability</h4>

            <div className="row g-4">
              {/* CARD 1 */}
              <div className="col-md-6">
                <div className="ticket-card">
                  <div className="ticket-top">
                    <span className="ticket-icon">★</span>
                    <h6 className="ticket-title">Early bird registration </h6>
                  </div>
                  <div className="ticket-top">
                    <span className="">Ticket ends at 12/09</span>
                    <span className="ticket-price">₹500</span>
                  </div>

                  <span className="ticket-status live">Ticket is on live</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-6">
                <div className="ticket-card">
                  <div className="ticket-top">
                    <span className="ticket-icon">★</span>
                    <h6 className="ticket-title">Early bird registration </h6>
                  </div>
                  <div className="ticket-top">
                    <span className="">Ticket ends at 12/09</span>
                    <span className="ticket-price">₹500</span>
                  </div>

                  <span className="ticket-status live">Ticket is on live</span>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-md-6">
                <div className="ticket-card">
                  <div className="ticket-top">
                    <span className="ticket-icon">★</span>
                    <h6 className="ticket-title">Early bird registration </h6>
                  </div>
                  <div className="ticket-top">
                    <span className="">Ticket ends at 12/09</span>
                    <span className="ticket-price">₹500</span>
                  </div>

                  <span className="ticket-status live">Ticket is on live</span>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-md-6">
                <div className="ticket-card">
                  <div className="ticket-top">
                    <span className="ticket-icon">★</span>
                    <h6 className="ticket-title">Early bird registration </h6>
                  </div>
                  <div className="ticket-top">
                    <span className="">Ticket ends at 12/09</span>
                    <span className="ticket-price">₹500</span>
                  </div>

                  <span className="ticket-status live">Ticket is on live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 6. HOST DETAILS ================= */}
      <div className="row g-4 py-5">
        <div className="col-lg-8">
          <div className="card-box mt-4">
            <h3>Event Host Details</h3>

            <h4>Organization Name </h4>
            <p>Laxmi Narayana Arst and Science college in Dharmapuri</p>

            <div className="host-grid">
              <div>
                <label>Organizer Name</label>
                <p>Avinashilingam Institute of Home Science</p>
              </div>
              <div>
                <label>Organizer Contact</label>
                <p>(0000-0000-00)</p>
              </div>
              <div>
                <label>Organizer Department</label>
                <p>B.sc Computer sicence</p>
              </div>
            </div>
            <h4>Co - Organization Name </h4>
            <p>Laxmi Narayana Arst and Science college in Dharmapuri</p>
            <div className="host-grid mt-3">
              <div>
                <label>Organizer Name</label>
                <p>Ecleranix Edtech Private Limited</p>
              </div>
              <div>
                <label>Organizer Contact</label>
                <p>(0000-0000-00)</p>
              </div>
              <div>
                <label>Organizer Department</label>
                <p>B.sc Computer sicence</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 7. DISCOUNTS + TAGS ================= */}
        <div className="col-lg-4">
          <div className="card-box mt-4">
            <div className="">
              <h3>Discounts & Offers</h3>
              <div className="discount-section">
                <img src="/images/discount.png" />
                <span>Get 50% off on Elite tickets</span>
              </div>
              <hr />
              {/* BACKEND: offers */}

              <h3 className="mt-3">Tags</h3>
              <div className="tag-wrap">
                <span>#conference2025</span>
                <span>#international</span>
                <span>#2025</span>
                <span>#aiConference</span>
                {/* BACKEND: tags */}
              </div>
              <hr />
              <h3 className="mt-3">Follow us on</h3>
              <div className="tag-wrap">
                <span>{WHATSAPPICON}</span>
                <span>{INSTAGRAMICON}</span>
                <span>{YOUTUBEICON}</span>
                <span>{XICON}</span>
                {/* BACKEND: tags */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= 8. OTHER DETAILS ================= */}
      <div className="card-box mt-4">
        <h3>Other Details</h3>

        <div className="row">
          <div className="col-md-4">
            <strong>Perks</strong>
            <ul>
              <li>Awards</li>
              <li>Cash</li>
            </ul>
          </div>
          <div className="col-md-4">
            <strong>Certifications</strong>
            <ul>
              <li>For all Participants</li>
            </ul>
          </div>
          <div className="col-md-4">
            <strong>Accommodations</strong>
            <ul>
              <li>Stay</li>
              <li>Food</li>
              <li>Washrooms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= 9. ACTION BUTTONS ================= */}
      <div className="action-row">
        <button className="btn-outline">View Event Video</button>
        <button className="btn-outline">Visit Website</button>
      </div>
      {/* ================= 10. FOOTER SECTION ================= */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
