"use client";

import { Event } from "@prisma/client";
import { format } from "date-fns";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  event: Event;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink }: CardProps) => {
  return (
    event && (
      <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
        <Link
          href={`/events/${event?.id}`}
          style={{ backgroundImage: `url(${event?.image})` }}
          className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        />

        <div className="flex min-h-[200px] flex-col gap-3 p-5 md:gap-4">
          {/* {!hidePrice && ( */}
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 ">
              {event?.isFree ? "FREE" : `$${event?.price}`}
            </span>
            <p className="p-semibold-14 w-auto rounded-full bg-gray-500/10 px-4 py-1 line-clamp-1">
              {event?.categories}
            </p>
          </div>
          {/* )} */}

          <p className="p-medium-16 p-medium-18 text-grey-500 flex items-center">
            <CalendarRange className="mr-2" />{" "}
            {format(event?.eventStartDate, "PPP")} - {event?.time}
          </p>

          <Link href={`/events/${event?.id}`}>
            <p className=" text-[16px] font-medium leading-[24px] md:text-[20px] md:leading-[30px]; line-clamp-2 flex-1 text-black">
              {event?.eventName}
            </p>
          </Link>

          <div className="flex-between w-full">
            <p className="p-medium-14 md:p-medium-16 text-grey-600 flex items-center gap-1">
              Organized by <p className="text-purple-500">{event?.organizer}</p>
            </p>



          </div>
        </div>
      </div>
    )
  );
};

export default Card;
