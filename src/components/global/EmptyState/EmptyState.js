"use client";
import { IMAGE_LOADING } from "../../../const-value/config-message/page";
import "./EmptyState.css";

export default function EmptyState({
  image = "/images/no-event-image.png",
  title = "No events created yet",
  subtitle = "Start by creating your first event",
}) {
  return (
    <div className="empty-state">
      <img src={image} alt={IMAGE_LOADING} />
      <h6>{title}</h6>
      <p>{subtitle}</p>
    </div>
  );
}
