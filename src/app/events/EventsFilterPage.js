"use client";

import { useEffect, useState } from "react";
import "./Events-filter.css";

import {
  getEventCategoriesApi,
  getPerksApi,
  getCertificationsApi,
  getEligibleDepartmentsApi,
  getAccommodationsApi,
  filterEventsApi,
  getAllEventTypesApi,
} from "../../lib/api/event.api";

import FiltersSidebar from "./components/FiltersSidebar";
import SortBar from "./components/SortBar";
import PaginationBar from "./components/PaginationBar";
import EventsListFilter from "./components/EventsListFilter";
import ActiveFilterChips from "./components/ActiveFilterChips";

const PAGE_SIZE = 10;

/* ================= PAYLOAD BUILDER ================= */
const buildFilterPayload = (filters, page) => {
  const payload = {
    page,
    limit: PAGE_SIZE,
  };

  // FEATURED / TRENDING
  if (filters.eventTypes.length) {
    payload.eventTypes = filters.eventTypes;

    // ADD ONLY FOR TRENDING
    if (filters.eventTypes.includes("trending")) {
      payload.trendingThreshold = 10; // viewCount >= 10
    }
  }

  if (filters.modes.length) {
    payload.modes = filters.modes;
  }

  if (filters.searchText.trim()) {
    payload.searchText = filters.searchText.trim();
  }

  if (filters.eligibleDeptIdentities.length) {
    payload.eligibleDeptIdentities = filters.eligibleDeptIdentities;
  }

  if (filters.certIdentity) {
    payload.certIdentity = filters.certIdentity;
  }

  if (filters.eventTypeIdentity) {
    payload.eventTypeIdentity = filters.eventTypeIdentity;
  }

  if (filters.perkIdentities.length) {
    payload.perkIdentities = filters.perkIdentities;
  }

  if (filters.accommodationIdentities.length) {
    payload.accommodationIdentities = filters.accommodationIdentities;
  }

  if (filters.dateRange?.startDate && filters.dateRange?.endDate) {
    payload.dateRange = filters.dateRange;
  }

  if (filters.priceRange.min !== 0 || filters.priceRange.max !== 10000) {
    payload.priceRange = filters.priceRange;
  }

  return payload;
};

export default function EventsFilterPage() {
  /* ================= MASTER DATA ================= */
  const [categories, setCategories] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [perks, setPerks] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [eligibleDepartments, setEligibleDepartments] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  /* ================= EVENTS ================= */
  const [events, setEvents] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  /* ================= FILTER STATE ================= */
  const [filters, setFilters] = useState({
    eventTypes: [], // featured | trending
    modes: [], // ONLINE | OFFLINE | HYBRID
    searchText: "",
    eventTypeIdentity: "",
    eligibleDeptIdentities: [],
    certIdentity: "",
    perkIdentities: [],
    accommodationIdentities: [],
    dateRange: null,
    priceRange: { min: 0, max: 10000 },
  });

  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);

  /* ================= LOAD MASTER DATA ================= */
  useEffect(() => {
    const loadMasterData = async () => {
      try {
        const [catRes, perkRes, certRes, deptRes, accRes] = await Promise.all([
          getEventCategoriesApi(),
          getPerksApi(),
          getCertificationsApi(),
          getEligibleDepartmentsApi(),
          getAccommodationsApi(),
        ]);

        if (catRes?.status) setCategories(catRes.data);
        if (perkRes?.status) setPerks(perkRes.data);
        if (certRes?.status) setCertifications(certRes.data);
        if (deptRes?.status) setEligibleDepartments(deptRes.data);
        if (accRes?.status) setAccommodations(accRes.data);
      } catch (err) {
        console.error("Master data error:", err);
      }
    };

    loadMasterData();
  }, []);

  /* ================= EVENT TYPES BY CATEGORY ================= */
  useEffect(() => {
    const loadAllEventTypes = async () => {
      try {
        const res = await getAllEventTypesApi();
        if (res?.status) {
          setEventTypes(res.data); 
        }
      } catch (err) {
        console.error("All event types error:", err);
      }
    };

    loadAllEventTypes();
  }, []);

  /* ================= FILTER EVENTS (BACKEND) ================= */
  useEffect(() => {
    const loadFilteredEvents = async () => {
      try {
        const payload = buildFilterPayload(filters, page);
        const res = await filterEventsApi(payload);

        if (res?.success) {
          setEvents(res.data || []);
          setTotalPages(Math.ceil((res.meta?.total || 0) / PAGE_SIZE));
        } else {
          setEvents([]);
          setTotalPages(0);
        }
      } catch (err) {
        console.error("Filter API error:", err);
        setEvents([]);
        setTotalPages(0);
      }
    };

    loadFilteredEvents();
  }, [filters, page]);

  /* ================= RESET PAGE ON FILTER CHANGE ================= */
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  /* ================= REMOVE FILTER CHIP ================= */
  const handleRemoveFilter = (key, value) => {
    setFilters((prev) => {
      if (Array.isArray(prev[key])) {
        return { ...prev, [key]: prev[key].filter((v) => v !== value) };
      }
      return { ...prev, [key]: "" };
    });
  };

  /* ================= RESET ALL ================= */
  const resetFilters = () => {
    setFilters({
      eventTypes: [],
      modes: [],
      searchText: "",
      eventTypeIdentity: "",
      eligibleDeptIdentities: [],
      certIdentity: "",
      perkIdentities: [],
      accommodationIdentities: [],
      dateRange: null,
      priceRange: { min: 0, max: 10000 },
    });
    setPage(1);
  };

  return (
    <div className="events-page container-fluid">
      <div className="row position-relative">
        {/* LEFT SIDEBAR */}
        <div className="col-xl-3 col-lg-4">
          <FiltersSidebar
            categories={categories}
            eventTypes={eventTypes}
            perks={perks}
            certifications={certifications}
            eligibleDepartments={eligibleDepartments}
            accommodations={accommodations}
            filters={filters}
            setFilters={setFilters}
            onReset={resetFilters}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-xl-9 col-lg-8 right-side-filter">
          <SortBar
            value={sort}
            onChange={setSort}
            onSearch={(v) => setFilters((f) => ({ ...f, searchText: v }))}
          />

          <ActiveFilterChips filters={filters} onRemove={handleRemoveFilter} />

          <EventsListFilter events={events} />

          {/* PAGINATION */}
          {events.length > 0 && totalPages > 1 && (
            <PaginationBar page={page} total={totalPages} onChange={setPage} />
          )}
        </div>
      </div>
    </div>
  );
}
