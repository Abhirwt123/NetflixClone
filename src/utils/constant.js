export const LOGO =
    "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456";
export const HOME_BG =
    "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgyOWFmZDUxMWIwYWJiNDY4OTM3ZDBjOTA1NTI0ZiIsInN1YiI6IjY1YTIwOWFhMjU4ODIzN2NmMjM2ZmM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUYPRn3o7wMONBEKdd-r_vBt-DH0ks6NUmnQMMMbZVQ",
    },
};
export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const Header_LANG_CONFIG = {
    en: {
        GptBtnText: "Search Movies",
        BtnText: "Sign Out",
    },
    hindi: {
        GptBtnText: "फ़िल्में खोजें",
        BtnText: "साइन आउट",
    },
};
export const FOOTER_LANG_CONFIG = {
    en: {
        number: "Questions? Call",
        links: [
            { listItem: "Faq", },
            { listItem: "Help Center" },
            { listItem: "Terms of use" },
            { listItem: "Privacy" },
        ],
        linksSecond: [
            { listItem: "Cookie Preferences", },
            { listItem: "Corporate Information" },
        ],
    },
    hindi: {
        number: "प्रशन? पुकारना",
        links: [
            { listItem: "सामान्य प्रश्न" },
            { listItem: "सहायता केंद्र" },
            { listItem: "उपयोग की शर्तें" },
            { listItem: "गोपनीयता" },
        ],
        linksSecond: [
            { listItem: "कुकी प्राथमिकताएँ" },
            { listItem: "कॉर्पोरेट जानकारी" },
        ],
    },
};
export const SIGN_UP_LANG_CONFIG = {
    en: {
        signUp: "Sign Up",
        signIn: "Sign In",
        message: " Sign Up for injoying your favourite Movie Series here",
        emailPlaceholdertext: "Email Address",
        passwordPlaceholdertext: "Password"
    },
    hindi: {
        signUp: "साइन अप करें",
        signIn: "दाखिल करना",
        message: " अपनी पसंदीदा मूवी श्रृंखला का आनंद लेने के लिए यहां साइन अप करें",
        emailPlaceholdertext: "मेल पता",
        passwordPlaceholdertext: "पासवर्ड"
    }
}
export const SEARCH_BOX_LANG_CONFIG = {
    en: {
        btnText: "Search Movie",
        placeholderText: "Search Movies Here"
    },
    hindi: {
        btnText: "मूवी खोजें",
        placeholderText: "यहां फिल्में खोजें"
    }
}
export const OPEN_AI_KEY = "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";