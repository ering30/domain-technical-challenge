import { useDispatch } from "react-redux";
import { updateUserAvatar } from "../redux/user.slice";

export default function useFileInput() {
  const dispatch = useDispatch();
  const handleFileInputChange = (event: HTMLInputElement) => {
    if (!event.files || event.files.length === 0) return;
    if (event.files.length > 0) {
      const imgURL = URL.createObjectURL(event.files[0]);
      dispatch(updateUserAvatar(imgURL));
      console.log("file", event.files[0].name);
    }
  };
  return { handleFileInputChange };
}
