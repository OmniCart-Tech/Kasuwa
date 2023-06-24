import { FcOk } from "react-icons/fc";
interface notificationProps {
  action: string;
  name: string;
}
export default function Notification({ action, name }: notificationProps) {
  return (
    <div className=" border-l-3 rounded bg-white shadow border border-l-green-400 py-2 flex gap-2 px-2 max-w-[350px] sm:w-full fixed  m-auto top-[75px] w-[90%] left-[5%] sm:left-[25%] right-[25%] z-30">
      <FcOk color="green" stroke="green" size={30} />
      <div className="flex flex-col gap-2">
        <span>Product {action} </span>

        <p>
          {name} has been {action}{" "}
        </p>
      </div>
    </div>
  );
}
