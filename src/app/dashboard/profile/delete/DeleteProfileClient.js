"use client";

export const dynamic = "force-dynamic"; // ensure this page is rendered dynamically to avoid build errors

import { useState } from "react";
import styles from "./Delete.module.css";
import toast from "react-hot-toast";

import DeleteConfirmModal from "../../../../components/ui/DeleteConfirmModal/DeleteConfirmModal";
import {
  BTN_CANCEL,
  BTN_DELETE_ACCOUNT,
  IMAGE_ALT,
  MSG_DELETE_ACCOUNT,
  MSG_DELETED_YOUR_ACCOUNT,
  SUB_TITLE_DELETE_ACCOUNT,
  SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT,
} from "../../../../const-value/config-message/page";

import { getUserData } from "../../../../lib/auth";
import { useLoading } from "../../../../context/LoadingContext";
// import api from "../../../../lib/api";

// DeleteProfilePage: client-side component for account deletion flow
export default function DeleteProfilePage() {
  // modal open state
  const [open, setOpen] = useState(false);
  // flag to show post-delete success UI
  const [deleted, setDeleted] = useState(false);

  // global loading context to indicate async operations
  const { setLoading } = useLoading();

  // current authenticated user (from local storage/session)
  const userData = getUserData();

  // SAFETY GUARD: do not render if no authenticated user found
  if (!userData) return null;

  // handleDelete: perform delete request, show feedback and update UI
  const handleDelete = async () => {
    setLoading(true); // start global loader

    try {
      // call API to delete organization by identity
      const res = await api.delete(
        `/v1/organizations/${userData.identity}`
      );

      if (res?.status === true) {
        // successful delete: notify and update state
        toast.success(res.message);
        setDeleted(true);
        setOpen(false);
      } else {
        // API returned failure: show error toast
        toast.error(res.message);
      }
    } catch (err) {
      // network / unexpected error: show fallback message
      toast.error(
        err?.response?.data?.message || "Delete failed"
      );
    } finally {
      setLoading(false); // stop global loader
    }
  };

  return (
    <div className={styles.wrapper}>
      {!deleted && (
        <div className={styles.confirmBox}>
          <img
            src="/images/deleteprofileimage.png"
            alt={IMAGE_ALT}
            className={styles.icon}
          />

          <h2>{MSG_DELETE_ACCOUNT}</h2>

          <p>
            {SUB_TITLE_DELETE_ACCOUNT}
            <br />
            {SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT}
          </p>

          <div className={styles.btnRow}>
            {/* cancel button simply closes modal/keeps user on page */}
            <button className={styles.cancelBtn}>
              {BTN_CANCEL}
            </button>

            {/* open confirmation modal before deleting */}
            <button
              className={styles.deleteBtn}
              onClick={() => setOpen(true)}
            >
              {BTN_DELETE_ACCOUNT}
            </button>
          </div>
        </div>
      )}

      {/* confirmation modal: requires explicit confirm to invoke handleDelete */}
      <DeleteConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        userEmail={userData.email}
      />

      {/* success state shown after deletion */}
      {deleted && (
        <div className={styles.successBox}>
          {MSG_DELETED_YOUR_ACCOUNT}
        </div>
      )}
    </div>
  );
}
