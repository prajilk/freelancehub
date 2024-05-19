import { useDispatch } from "react-redux";
import { useProfile } from "../api/get-profile";
import { useEffect } from "react";
import PageLoading from "../components/common/page-loading";
import { setUser } from "../redux/userSlice";
import { socket } from "../context/socket";

const ProfileProvider = ({ children }) => {
  const { data: profile, isLoading } = useProfile();
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
      socket.emit("joinRoom", profile._id);
    }
  }, [profile, socket]);

  if (isLoading) {
    return <PageLoading />;
  }

  return <>{children}</>;
};

export default ProfileProvider;
