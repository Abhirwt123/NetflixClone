import React, { useEffect} from "react";
import { addUser, removeUser } from "../../utils/userSlice";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../../utils/GptSlice";
import { Header_LANG_CONFIG, LOGO, PROFILE_ICON } from "../../utils/constant";
const Header = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const gptVal=useSelector((store)=>store.Gpt.searchMovie);
  const changedlang = useSelector((store) => store.supportedlang.Lang)
  const user = useSelector((store) => store.user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispath(
          addUser({ uid: uid, email: email, displayName: displayName })
        );
      } else {
        dispath(removeUser())
      }
    });
    return () => unsubscribe()
  }, [])
  const handelSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
    });

  }
  const handelSearchMoviesPage = () => {
    dispath(searchMovie());
  }
  // const handelPageRedirect=()=>{
  //   navigate('/browser')
  // }
  return (
    <div className="absolute z-10 w-full header lg:py-0 md:py-0 py-2">
      <div className="flex justify-between items-center">
        <div className="img-wrap lg:w-2/12 md:w-2/12 w-4/12 ">
          <img
            src={LOGO}
            alt="logo"
          />
        </div>
        {
          user &&
          <div className="flex gap-2 justify-end px-6">
            <button
              className="lg:px-4  px-2 py-1 bg-red-700 text-white rounded-md lg:me-16 lg:text-lg text-xs"
              onClick={handelSearchMoviesPage}>
              {gptVal?"Home":Header_LANG_CONFIG[changedlang].GptBtnText}
            </button>
            <img src={PROFILE_ICON} alt="userIcon" className="w-[8%] object-cover rounded-md" />
            <button
              className="text-white bg-red-700 lg:px-3 lg:py-2 p-1 rounded-md lg:text-lg text-xs"
              onClick={handelSignOut}>
              {Header_LANG_CONFIG[changedlang].BtnText}
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
