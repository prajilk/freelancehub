import { useDispatch } from "react-redux";
import { useProfile } from "../api/get-profile";
import { useEffect } from "react";
import PageLoading from "../components/common/page-loading";
import { setUser } from "../redux/userSlice";

const ProfileProvider = ({ children }) => {
  const { data: profile, isLoading } = useProfile();

  const dispatch = useDispatch();

  useEffect(() => {
    profile && dispatch(setUser(profile));
  }, [profile]);

  if (isLoading) {
    return <PageLoading />;
  }

  return <>{children}</>;
};

export default ProfileProvider;
