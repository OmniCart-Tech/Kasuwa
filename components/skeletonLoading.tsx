import { Card, CardBody, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";

export default function SkeletonLoading() {
  function Skeletons() {
    const cardElements = [];
    
    for (let i = 0; i < 10; i++) {
      cardElements.push(
        <div key={i}>
          <Card
            className="Skeleton-sm rounded-md w-full sm:w-[230px] p-0 bg-white mx-auto sm:max-w-[220px]"
            style={{
              padding: "0px",
            }}
            radius="none"
          >
            <CardHeader className="absolute z-20 top-1 flex-col !items-start ">
              <Skeleton isLoaded={false} className="rounded-[50%] w-fit ml-auto">
                <div
                className="w-[20px] h-[20px] rounded-[50%]"
                ></div>
              </Skeleton>
            </CardHeader>
            <CardBody
              className="p-0 max-w-[unset] w-full"
              style={{
                maxWidth: "unset",
              }}
            >
              <Skeleton
                isLoaded={false}
                className="w-full m-auto  h-[200px] object-cover max-w-[unset]"
              />
              <CardFooter className="text-small justify-between flex flex-col gap-4 w-full p-0 py-2">
                <div className="px-2 w-full flex flex-col gap-2">
                  <div className="flex justify-between">
                    <Skeleton className="w-[110px] h-3 rounded-lg pb-2"></Skeleton>
                    <div className="flex justify-center gap-1 items-center">
                      <Skeleton isLoaded={false} className=" h-[25px] min-w-[25px]  p-1">
                        -
                      </Skeleton>
                      <Skeleton isLoaded={false}></Skeleton>
                      <Skeleton isLoaded={false} className="w-[25px] h-[25px] min-w-[25px] p-1">
                        +
                      </Skeleton>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Skeleton isLoaded={false} className="h-3 w-16 rounded-lg">
                      <p className="w-3"></p>
                    </Skeleton>
                    <Skeleton className="text-default-500 w-12 h-3 rounded-lg"></Skeleton>
                  </div>
                </div>
              </CardFooter>
            </CardBody>
          </Card>
        </div>
      );
    }

    return cardElements;
  }

  return <Skeletons />;
}
