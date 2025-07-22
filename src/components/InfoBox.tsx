import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

export const InfoBox = ({ mode, severity, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
