import Link from "next/link";
import { useMemo } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItems = useMemo(() => {
    return [
      { link: "/blocks/text", label: "Text" },
      { link: "/blocks/table", label: "Table" },
      { link: "/blocks/blockquote", label: "Blockquote" },
      { link: "/blocks/bullet-list", label: "Bullet List" },
      { link: "/blocks/ordered-list", label: "Ordered List" },
      { link: "/blocks/code", label: "Code" },
      { link: "/blocks/code-block", label: "Code Block" },
      { link: "/blocks/heading", label: "Heading" },
    ];
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {navItems.map((item) => {
          return (
            <Link key={item.link} href={item.link}>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div style={{ display: "flex", flex: 1, height: "100%" }}>
        <div style={{ marginLeft: "20px", marginRight: "20px", width: 600}}>{children}</div>
      </div>
    </div>
  );
}
