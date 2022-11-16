import { ArrowRightIcon } from "@heroicons/react/24/solid";

const CustomPointer: React.FC = () => {
  return (
    <div id="customPointer" className="hidden absolute z-50 md:flex justify-center items-center pointer-events-none rounded-full w-3 h-3 bg-sky-600">
        <ArrowRightIcon className="w-10 -rotate-45 duration-500 hidden"/>
    </div>
  )
}

export default CustomPointer;
