"use client";
import { useState } from "react";
import { Button } from "@/src/shared/ui/buttons/button_v1/Button";
import { Modal } from "@/src/shared/ui/modals/Modal/Modal";
import styles from "./ModalWrapper.module.css";

export const ModalWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        active={open}
        handleClose={() => setOpen(false)}
        classContainer={styles.modalContent}
      >
        <h3>Are you sure you want to cancel this request?</h3>
        <p>Please do not close this page</p>
        <footer className={styles.modalContentFooter}>
          <Button variantColor="teal" fullWidth>
            Yes
          </Button>
          <Button onClick={() => setOpen(false)} variantColor="error" fullWidth>
            No
          </Button>
        </footer>
      </Modal>
    </>
  );
};
