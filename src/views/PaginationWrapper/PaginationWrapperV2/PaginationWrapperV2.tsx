"use client";
import { useState } from "react";
import { Pagination } from "@/src/shared/ui/pagination/pagination_v2/Pagination";
import styles from "./PaginationWrapperV2.module.css";

export const PaginationWrapperV2 = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(5);

  return (
    <section className={styles.paginationWrapper}>
      <Pagination page={page} perPage={perPage} total={50} onChange={setPage} />
    </section>
  );
};
