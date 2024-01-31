"use client";

import { cn } from "@/lib/utils";
import React, { FC } from "react";

type Props = {
  Title: string;
  Subtitle?: string;
  className?: string;
  titleClassName?: string;
};

const Heading: FC<Props> = ({
  Title,
  Subtitle,
  className,
  titleClassName,
}: Props) => {
  return (
    <div className={className}>
      <h1 className={cn("text-4xl font-bold text-gray-700", titleClassName)}>
        {Title}
      </h1>
      <h3 className="font-light text-gray-500">{Subtitle}</h3>
    </div>
  );
};

export default Heading;
