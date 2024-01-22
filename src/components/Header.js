import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const user =useSelector((store)=>store.user)
  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      // console.log(user.accessToken)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // navigate("/browser")
        // ...
        console.log(uid, email)
        dispath(
          addUser({ uid: uid, email: email, displayName: displayName })
        );
        // navigate("/browser")
      } else {
        // User is signed out
        // ...
        dispath(removeUser())
        // navigate("/")
      }
    });
    return () => unsubscribe()
  }, [])
  const handelSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-between items-center">
        <div className="img-wrap w-2/12">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            alt="logo"
          />
        </div>
        {user &&
          <div className="flex gap-2 justify-end px-6">
            <img src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="userIcon" className="w-[10%] object-cover" />
            <button className="text-white bg-red-700 lg:px-3 lg:py-2 p-1 rounded-md lg:text-xl text-xs" onClick={handelSignOut}>Sign Out</button>
          </div>
        }

      </div>
    </div>
  );
};

export default Header;
