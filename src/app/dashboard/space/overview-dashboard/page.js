"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoading } from "../../../../context/LoadingContext";
import toast from "react-hot-toast";

import OverviewDashboardChart from "./OverviewDashboardChart";
import {
  getApprovedOrganizerEventsApi,
  getOrganizationProfileApi,
} from "../../../../lib/api/organizer.api";

export default function OverviewDashboardPage() {
  const { setLoading } = useLoading();
  const [events, setEvents] = useState([]);

  // ✅ REDUX AUTH
  const { organizer, role, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);

        // 🔐 Organizer only
        if (!isLoggedIn || role !== "organizer") {
          setEvents([]);
          return;
        }

        const orgId = organizer?.identity;
        if (!orgId) {
          setEvents([]);
          return;
        }

        // 1️⃣ Load organization profile
        const profileRes = await getOrganizationProfileApi(orgId);

        if (!profileRes?.status) {
          toast.error("Unable to load organization profile");
          return;
        }

        // slug needed for approved events API
        const orgSlug = profileRes.data.slug;

        // 2️⃣ Load approved events
        const eventsRes = await getApprovedOrganizerEventsApi(orgSlug);

        if (eventsRes?.status) {
          setEvents(eventsRes.data || []);
        }
      } catch (err) {
        toast.error("Unable to load overview dashboard");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, [isLoggedIn, role, organizer?.identity]);

  if (!events.length) return null;

  return <OverviewDashboardChart events={events} />;
}
