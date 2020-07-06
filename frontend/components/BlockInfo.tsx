import React from "react";

interface BlockInfoProps {
  type: string;
}

export const BlockInfo: React.FC<BlockInfoProps> = ({ type, children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 18,
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      {type}
      {children}
    </div>
  );
};
