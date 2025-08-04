import { IoClose, IoMenuSharp } from "react-icons/io5";

export default function MainHeader() {
  return (
    <header className="bg-primary">
      <ul className="list-none flex items-center justify-between px-5">
        <li>
          <IoMenuSharp />
        </li>
        <li>DeepMinuts</li>
        <li>
          <IoClose />
        </li>
      </ul>
    </header>
  );
}
