import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

  return (
    <aside className="infobox infobox-warning warning--medium">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
