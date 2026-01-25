"use client";

import { useState } from "react";
import styles from "./LocationHighlights.module.css";
import { IMAGE_LOADING } from "../../../const-value/config-message/page";

export default function PopularLocations() {
  const [activeTab, setActiveTab] = useState("cities");

  const cities = [
    { img: "/images/coimbatore.png", name: "Coimbatore", events: "1725 Events" },
    { img: "/images/chennai.png", name: "Chennai", events: "1710 Events" },
    { img: "/images/bangalore.png", name: "Bangalore", events: "500 Events" },
    { img: "/images/cochin.png", name: "Cochin", events: "475 Events" },
    { img: "/images/delhi.png", name: "Delhi", events: "450 Events" },
    { img: "/images/salem.png", name: "Salem", events: "400 Events" },
  ];

  const countries = [
    { img: "/images/india.png", name: "India", events: "1725 Events" },
    { img: "/images/australia.png", name: "Australia", events: "1710 Events" },
    { img: "/images/usa.png", name: "USA", events: "500 Events" },
    { img: "/images/uk.png", name: "UK", events: "200 Events" },
    { img: "/images/uae.png", name: "UAE", events: "300 Events" },
    { img: "/images/singapore.png", name: "Singapore", events: "400 Events" },
  ];

  const list = activeTab === "cities" ? cities : countries;

  return (
    <section className={styles.popularlocationroot}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "cities" ? styles.active : ""}`}
          onClick={() => setActiveTab("cities")}
        >
          Popular Cities
        </button>

        <button
          className={`${styles.tab} ${activeTab === "countries" ? styles.active : ""}`}
          onClick={() => setActiveTab("countries")}
        >
          Popular Countries
        </button>
      </div>

      {/* Subtitle */}
      <p className={styles.sub}>
        {activeTab === "cities"
          ? "Cities That Never Stop Celebrating"
          : "Where Every Continent Comes Alive with Events"}
      </p>

      {/* Grid */}
      <div className={styles.grid}>
        {list.map((item, i) => (
          <div key={i} className={styles.card}>
            <img src={item.img} className={styles.img} alt={IMAGE_LOADING} />
            <div className={styles.text}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.events}>{item.events}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
