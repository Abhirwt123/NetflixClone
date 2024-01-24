import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../utils/GptSlice";
import { Header_LANG_CONFIG } from "../utils/constant";

const Header = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const changedlang=useSelector((store)=>store.supportedlang.Lang)
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
  return (
    <div className="absolute z-10 w-full header">
      <div className="flex justify-between items-center">
        <div className="img-wrap w-2/12">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            alt="logo"
          />
        </div>
        {
          user &&
          <div className="flex gap-2 justify-end px-6">
            <button
              className="px-4 py-1 bg-red-700 text-white rounded-md me-16 text-lg"
              onClick={handelSearchMoviesPage}>
             {Header_LANG_CONFIG[changedlang].GptBtnText}
            </button>
            <img src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="userIcon" className="w-[8%] object-cover rounded-md" />
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
