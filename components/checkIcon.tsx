import Image from "next/image";
import checkIcon from "../public/checkbox-check-svgrepo-com.svg";
export default function CheckIcon() {
  return <Image src={checkIcon} width={20} height={20} alt="check icon" />;
}
