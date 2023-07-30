import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (<div>
        {searchParams.get("code")}
    </div>)
}

export { AuthPage };