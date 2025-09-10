import { Outlet, useNavigate } from "react-router";
import arrowLeft from "@/assets/icons/arrowLeft.svg";

const CheckoutLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="m-auto w-full max-w-[1272px] px-4">
      <button
        aria-label="go back"
        onClick={() => navigate(-1)}
        className="cursor-pointer p-3.5 bg-gray-100 rounded-full mb-6"
      >
        <img src={arrowLeft} alt="back icon" />
      </button>
      <div className="mb-[72px] grid grid-cols-2 gap-6">
        <Outlet />
      </div>
    </div>
  );
};

export default CheckoutLayout;
