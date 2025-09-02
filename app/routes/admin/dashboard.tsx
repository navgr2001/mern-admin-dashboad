import Header from "components/Header";
import React from "react";

const dashboard = () => {
  const user = { name: "Naveen" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations in real  time"
      />
      Dashboard Page Contents
    </main>
  );
};

export default dashboard;
