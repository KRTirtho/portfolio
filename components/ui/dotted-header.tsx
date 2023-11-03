import React, { FC, PropsWithChildren } from "react";

const DottedHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[18px] h-[15px] rounded-full bg-primary" />
      <div className="w-10 h-px border border-dashed border-gray-400" />
      <h2 className="text-3xl">{children}</h2>
      <div className="w-full h-px border border-dashed border-gray-400" />
      <div className="w-[18px] h-[15px] rounded-full bg-primary" />
    </div>
  );
};

export default DottedHeader;
