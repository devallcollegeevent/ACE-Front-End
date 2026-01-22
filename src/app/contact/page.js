"use client";

/**
 * ContactPage
 *
 * Purpose:
 * - Present a contact form and social follow panel.
 * - Minimal client-only UI (no server actions in this file).
 *
 * Structure:
 * - Header with title and subtitle.
 * - Card with two columns:
 *   - Left: simple form (name, email, attachments placeholder, message, submit).
 *   - Right: illustration + social follow links.
 * - Global Footer included at bottom.
 *
 */

import Footer from "../../components/global/Footer/Footer";
import { FACEBOOKICON, INSTAGRAMICON, LINKEDINICON, WHATSAPP } from "../../const-value/config-icons/page";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
    <section className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>
          We’re Here for <span>You</span>
        </h1>
        <p>Let’s connect – we are here to answer your queries</p>
      </div>

      {/* MAIN CARD: left = form, right = illustration + socials */}
      <div className={styles.card}>
        {/* LEFT FORM */}
        <div className={styles.form}>
          {/* TODO: Replace with controlled inputs and validation */}
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Email" />

          {/* Attachments placeholder: disabled until file upload is implemented */}
          <div className={styles.attachment}>
            <input type="text" placeholder="Attachments" disabled />
            <span>📎</span>
          </div>

          <textarea placeholder="Your Message" rows={4}></textarea>

          {/* TODO: Implement onClick handler to submit form data */}
          <button>Submit</button>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          {/* Decorative illustration: update alt if image conveys semantic info */}
          <img
            src="/images/contactImage.png"
            alt="Contact support"
          />

          {/* Social follow box */}
          <div className={styles.followBox}>
            <p>Follow us on</p>
            <div className={styles.socials}>
              <span className={styles.linkedin}>{LINKEDINICON}</span>
              <span className={styles.facebook}>{FACEBOOKICON}</span>
              <span className={styles.whatsapp}>{WHATSAPP}</span>
              <span className={styles.instagram}>{INSTAGRAMICON}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
