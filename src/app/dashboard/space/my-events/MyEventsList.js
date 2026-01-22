"use client";

import { useState } from "react";
import DeleteConfirmModal from "../../../../components/ui/DeleteConfirmModal/DeleteConfirmModal";
import EmptyState from "../../../../components/global/EmptyState/EmptyState";

/**
 * MyEventsList Component
 * Displays a list view of events with details and actions.
 */
export default function MyEventsList({ events = [] }) {
  const [deleteId, setDeleteId] = useState(null);
 
  // Show empty state if no events are provided
  if (!events.length) {
    return (
      <EmptyState
        img="/images/no-data.png"
        title="No events created yet"
        subtitle="Create your first event to see it here"
      />
    );
  }

  // Handle event deletion confirmation
  const handleDelete = () => {
    console.log("DELETE EVENT:", deleteId);
    setDeleteId(null);
  };

  return (
    <>
      <div className="list-group list-group-flush p-5">
        {events.map((e) => (
          <div
            key={e.id}
            className="shadow-sm p-3 mb-5 bg-body-tertiary rounded"
          >
            <div className="d-flex align-items-center d-flex justify-content-between">
              <div className="d-flex align-items-start gap-5">
                {/* IMAGE */}
                <img
                  src={
                    e.bannerImages[0] ||
                    "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
                  }
                  alt={e.title}
                  style={{ width: 248, height: 132, objectFit: "cover" }}
                  className="rounded"
                />

                {/* TITLE */}
                <div className="">
                  <h6
                    className="fw-semibold text-uppercase mb-0 flex-grow-1"
                    title={e.title}
                  >
                    {e.title || "Untitled Event"}
                  </h6>
                  <div className="mt-3">Date : {e.createdAt}</div>
                  <div
                    className={`event-list-status ${e.status?.toLowerCase()} mt-2`}
                  >
                    {e.status}
                  </div>
                </div>
              </div>
              {/* ACTIONS */}
              <div className="d-flex gap-3">
                <button className="btn btn-outline-primary btn-sm">Edit</button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => setDeleteId(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DeleteConfirmModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </>
  );
}
