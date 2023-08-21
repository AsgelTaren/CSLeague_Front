import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { createUserDataStore } from "../../core";

const Logout = () => {
    const navigate = useNavigate();
    const store = createUserDataStore()
    const cookies = new Cookies();
    useEffect(() => {
        cookies.remove("user_token",{path:"/"})
        store.setUser(undefined)
        navigate("/")
        navigate(0)
    },[])
    return(<div><p>Déconnexion</p></div>)
}

export {Logout}