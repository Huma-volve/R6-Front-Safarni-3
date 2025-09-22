import GoBackButton from "@/components/shared/GoBackButton";
import { Outlet } from "react-router";

const CheckoutLayout = () => {
  return (
    <div className="m-auto w-full max-w-[1272px] px-4">
      <GoBackButton />
      <div className="mb-[72px] grid grid-cols-1 md:grid-cols-2 gap-6">
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutLayout;
