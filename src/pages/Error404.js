import React from "react";
import PageNotFound from "../components/PageNotFound";
import PageOutline from "../components/PageOutline";

export default function Error404() {
  return (
    <PageOutline>
      <PageNotFound />;
    </PageOutline>
  );
}
