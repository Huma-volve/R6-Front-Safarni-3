import { useNavigate } from "react-router";
import arrowLeft from "@/assets/icons/arrowLeft.svg";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      aria-label="go back"
      onClick={() => navigate(-1)}
      className="cursor-pointer p-3.5 bg-gray-100 rounded-full mb-6"
    >
      <img src={arrowLeft} alt="back icon" />
    </button>
  );
};

export default BackBtn;
