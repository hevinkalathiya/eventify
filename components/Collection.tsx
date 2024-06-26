import React from "react";
import Card from "./Card";
import { Event } from "@prisma/client";
import { BeatLoader, RotateLoader } from "react-spinners";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
// import Pagination from "./Pagination";

type CollectionProps = {
  data: Event[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
  className?: string;
  loading?: boolean;
  review?: boolean;

};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
  className,
  loading,
  review
}: CollectionProps) => {
  return (
    <MaxWidthWrapper className="my-4">
      {data?.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul
            className={cn(
              ``,
              className
                ? className
                : "grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
            )}
          >
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";
              return (
                <li key={event?.id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                    review={review}
                  />
                </li>
              );
            })}
          </ul>

          {/* {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )} */}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          {loading ? (
            <RotateLoader color="#000" />
          ) : (
            <>
              <h3 className="h3-bold">{emptyTitle}</h3>
              <p className="text-grey-500">{emptyStateSubtext}</p>
            </>
          )}
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default Collection;
