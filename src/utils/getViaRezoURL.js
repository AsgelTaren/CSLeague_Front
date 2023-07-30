const getGoogleURL = (from) => {
    const rootUrl = `https://auth.viarezo.fr/oauth/authorize`;

    const options = {
        redirect_uri: process.env.REACT_APP_VIAREZO_CLIENT_REDIRECT,
        client_id: process.env.REACT_APP_VIAREZO_CLIENT_ID,
        response_type: "code",
        scope: "default",
        state: from,
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;
};

export default getGoogleURL;