"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import styles from "./Delete.module.css";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

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

import {
  deleteOrganizationApi,
} from "../../../../lib/api/organizer.api";
import {
  deleteUserApi,
} from "../../../../lib/api/user.api";

import { logout } from "../../../../store/authSlice";

export default function DeleteProfilePage() {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  // ✅ REDUX AUTH
  const { user, organizer, role, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  if (!isLoggedIn) return null;

  const identity =
    role === "organizer"
      ? organizer?.identity
      : user?.identity;

  const email =
    role === "organizer"
      ? organizer?.domainEmail
      : user?.email;

  if (!identity) return null;

  /* ================= DELETE ACCOUNT ================= */
  const handleDelete = async () => {
    try {
      let res;

      if (role === "organizer") {
        res = await deleteOrganizationApi(identity);
      } else {
        res = await deleteUserApi(identity);
      }

      if (res?.status) {
        toast.success(res.message || "Account deleted");
        setDeleted(true);
        setOpen(false);

        dispatch(logout());
      } else {
        toast.error(res?.message || "Delete failed");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Delete failed"
      );
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
            <button
              className={styles.cancelBtn}
              onClick={() => setOpen(false)}
            >
              {BTN_CANCEL}
            </button>

            <button
              className={styles.deleteBtn}
              onClick={() => setOpen(true)}
            >
              {BTN_DELETE_ACCOUNT}
            </button>
          </div>
        </div>
      )}

      <DeleteConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        userEmail={email}
      />

      {deleted && (
        <div className={styles.successBox}>
          {MSG_DELETED_YOUR_ACCOUNT}
        </div>
      )}
    </div>
  );
}
