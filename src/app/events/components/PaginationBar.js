"use client";

export default function PaginationBar({ page, total, onChange }) {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="pagination-wrap">
      <button
        className="pg-btn"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ← Prev
      </button>

      <div className="pg-pages">
        {pages.map((p) => (
          <button
            key={p}
            className={`pg-page ${p === page ? "active" : ""}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="pg-btn"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}
