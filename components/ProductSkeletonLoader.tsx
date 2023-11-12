import SkeletonLoading from "@/components/skeletonLoading";
import { Card, Skeleton } from "@nextui-org/react";

export default function ProductSkeletonLoader() {
  return (
    <div className="py-8">
      <Card className="bg-transparent sm:w-[90%] w-full flex flex-col gap-6 shadow-none rounded-none mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 w-full sm:p-8 p-3 bg-white">
          <div>
            <Skeleton className="sm:w-[200px] h-[200px] w-full rounded"></Skeleton>
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="md:w-[270px] h-3 w-[90%] rounded"></Skeleton>
            <Skeleton className="w-[200px] h-3  rounded"></Skeleton>
            <Skeleton className="w-[120px] h-3  rounded"></Skeleton>
            <Skeleton className="w-[100px] h-3  rounded"></Skeleton>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-white sm:p-8 p-3">
          <span>Product Details</span>

          <div className="flex flex-col gap-3 ">
            <Skeleton className="w-full h-3 rounded"></Skeleton>
            <Skeleton className="w-full h-3 rounded"></Skeleton>
            <Skeleton className="w-full h-3 rounded"></Skeleton>
            <Skeleton className="w-full h-3 rounded"></Skeleton>
            <Skeleton className="w-full h-3 rounded"></Skeleton>
            <Skeleton className="w-full h-3 rounded"></Skeleton>
          </div>
        </div>
      </Card>
      <div className="flex flex-col px-6">
       <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] justify-between gap-y-4 pt-10 max-w-[1280px]  py-10 mx-auto ">
        <SkeletonLoading />
      </div> 
      </div>
      
    </div>
  );
}
