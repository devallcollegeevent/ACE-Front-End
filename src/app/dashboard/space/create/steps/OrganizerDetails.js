"use client";

import { useEffect, useState } from "react";
import { getOrgCategoriesApi } from "../../../../../lib/api/event.api";
import styles from "./OrganizerDetails.module.css";

/**
 * OrganizerDetails Component
 * Manages the list of organizations/collaborators hosting the event.
 * Allows adding up to 3 organizers with details like name, location, and contact info.
 */
export default function OrganizerDetails({
  data,
  resetSignal,
  setData,
  onNext,
}) {
  const [orgCategories, setOrgCategories] = useState([]);
  const organizations = data.organizations || [
    {
      hostBy: "",
      orgName: "",
      location: "",
      organizerName: "",
      organizerNumber: "",
      department: "",
    },
  ];

  /* ================= FETCH ORG CATEGORIES ================= */
  // Fetch organization categories (e.g., College, Company) on mount
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await getOrgCategoriesApi();
        if (res?.status) {
          setOrgCategories(res.data);
        }
      } catch (err) {
        console.error("Org category fetch failed", err);
      }
    }

    loadCategories();
  }, []);

  // Add a new organization block (max 3 allowed)
  const addOrganization = () => {
    if (organizations.length >= 3) {
      console.warn("Maximum 3 collaborators allowed");
      return;
    }

    const updated = [
      ...organizations,
      {
        hostBy: "",
        orgName: "",
        location: "",
        organizerName: "",
        organizerNumber: "",
        department: "",
      },
    ];

    setData({ ...data, organizations: updated });
  };

  // Update a specific field for an organization at the given index
  const updateOrg = (index, key, value) => {
    const updated = [...organizations];
    updated[index][key] = value;

    if (key === "hostBy" && !showDepartment(value)) {
      updated[index].department = "";
    }
    
    setData({ ...data, organizations: updated });
  };

  // Remove an organization block
  const deleteOrganization = (index) => {
    const updated = organizations.filter((_, i) => i !== index);    
    setData({ ...data, organizations: updated });
  };

  // Determine if the Department field should be shown based on host type
  const showDepartment = (hostBy) => {
    const selectedCategory = orgCategories.find((c) => c.identity === hostBy);

    if (!selectedCategory) return false;

    const name = selectedCategory.categoryName;

    return (
      name === "College / University" ||
      name === "Training & Coaching Institute"
    );
  };

  // Reset the organization list to default state
  useEffect(() => {
    if (!resetSignal) return;

    setData({
      organizations: [
        {
          hostBy: "",
          orgName: "",
          location: "",
          organizerName: "",
          organizerNumber: "",
          department: "",
        },
      ],
    });
  }, [resetSignal]);


  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Hosting Information</h3>

        {organizations.map((org, index) => (
          <div key={index} className={styles.orgBlock}>
            <div className={styles.orgHeader}>
              <span>Organization {index + 1}</span>

              {index !== 0 && (
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteOrganization(index)}
                >
                  Delete
                </button>
              )}
            </div>

            <div className={styles.field}>
              <label>
                Event Host By <span>*</span>
              </label>

              <select
                className={styles.input}
                value={org.hostBy}
                onChange={(e) => updateOrg(index, "hostBy", e.target.value)}
              >
                <option value="">Select Category</option>

                {orgCategories.map((category) => (
                  <option key={category.identity} value={category.identity}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label>
                  Organization Name <span>*</span>
                </label>
                <input
                  className={styles.input}
                  value={org.orgName}
                  onChange={(e) => updateOrg(index, "orgName", e.target.value)}
                  placeholder="Enter organization name"
                />
              </div>

              <div className={styles.field}>
                <label>
                  Location <span>*</span>
                </label>
                <input
                  className={styles.input}
                  value={org.location}
                  onChange={(e) => updateOrg(index, "location", e.target.value)}
                  placeholder="Enter a location "
                />
              </div>

              <div className={styles.field}>
                <label>
                  Organizer Name <span>*</span>
                </label>
                <input
                  className={styles.input}
                  value={org.organizerName}
                  placeholder="Enter organizer name"
                  onChange={(e) =>
                    updateOrg(index, "organizerName", e.target.value)
                  }
                />
              </div>

              <div className={styles.field}>
                <label>
                  Organizer Number <span>*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  className={styles.input}
                  value={org.organizerNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      updateOrg(index, "organizerNumber", value);
                    }
                  }}
                  placeholder="(000-000-0000)"
                />
              </div>
            </div>

            {showDepartment(org.hostBy) && (
              <div className={styles.field}>
                <label>
                  Department <span>*</span>
                </label>

                <select
                  className={styles.input}
                  value={org.department}
                  onChange={(e) =>
                    updateOrg(index, "department", e.target.value)
                  }
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="IT">IT</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="School of Management">
                    School of Management
                  </option>
                  <option value="Science">Science</option>
                  <option value="Economics">Economics</option>
                </select>
              </div>
            )}
          </div>
        ))}

        <div className={styles.addWrap}>
          <button className={styles.addBtn} onClick={addOrganization}>
            + Add Collaborators
          </button>
        </div>
      </div>

      <div className={styles.actionEnd}>
        <button
          className={styles.nextBtn}
          onClick={() => {            
            onNext();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
