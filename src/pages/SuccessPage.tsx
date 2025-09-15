import checkmarkImg from "@/assets/images/checkmarkImg.png";
import greenCheckmark from "@/assets/icons/check-green.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={checkmarkImg} alt="A bank card" />
      </div>
      <div className="w-full max-w-[510px] mx-auto self-center">
        <img
          className="block mx-auto mb-6"
          src={greenCheckmark}
          alt="check mark"
        />
        <h2 className="font-medium text-[28px] text-gray-900 text-center mb-2">
          Payment Methed
        </h2>
        <p className="font-normal text-center text-lg text-gray-500 mb-4">
          Add You Payment Methed
        </p>
        <Button size="full" onClick={() => navigate("/")}>
          Back To Home
        </Button>
      </div>
    </>
  );
};

export default SuccessPage;
