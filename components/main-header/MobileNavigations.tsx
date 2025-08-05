import { CiBoxList } from "react-icons/ci";
import { Button } from "../ui/button";

const MobileNavigations = () => {
  return (
    <Button variant={"outline"} className="block md:hidden cursor-pointer">
      <CiBoxList />;
    </Button>
  );
};

export default MobileNavigations;
