import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface LikeProp {
  onclick: () => void;
  color?: string;
}
const Like = ({ onclick, color = "red" }: LikeProp) => {
  return (
    <div>
      {/* <CiHeart size={40} onClick={onclick} color={color} /> */}
      <FaHeart size={40} onClick={onclick} color={color} />
    </div>
  );
};

export default Like;
