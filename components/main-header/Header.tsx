import DesktopNavigations from "./DesktopNavigations";
import InputAndButtons from "./InputAndButtons";
import Logo from "./Logo";
import MobileNavigations from "./MobileNavigations";

export default function MainHeader() {
  return (
    <header className="w-full bg-primary shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <MobileNavigations />

        <Logo />

        <DesktopNavigations />

        <InputAndButtons />
      </div>
    </header>
  );
}
