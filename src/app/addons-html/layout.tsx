"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItems = useMemo(() => {
    return [{ link: "/addons/poll", label: "Poll" }];
  }, []);

  const [mode, setMode] =  useState("html");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        {navItems.map((item) => {
          return (
            <Link key={item.link} href={`${item.link}`}>
              {item.label}
            </Link>
          );
        })}
      </div> */}
      <div style={{ display: "flex", flex: 1, height: "100%" }}>
        <div style={{  width: 600 }}>{children}</div>
      </div>
    </div>
  );
}
