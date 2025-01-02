import Image from "next/image";
import { crimsonPro } from "./ui/fonts";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={`${crimsonPro.className} text-3xl`}>Movies matter.</h1>
    </div>

  );
}
