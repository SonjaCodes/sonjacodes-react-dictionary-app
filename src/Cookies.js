import { useState, useEffect } from "react";
import "./Cookies.css";

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie-consent");
    if (storedConsent === "true") {
      setConsent(true);
    }
  }, []);

  const handleConsent = () => {
    setConsent(true);
    localStorage.setItem("cookie-consent", "true");
  };

  if (consent) return null;

  return (
    <div className="cookie-consent-banner">
      <p>
        Life is better with cookies. This website uses cookies to improve your
        experience. By continuing to use this website, you agree to our use of
        cookies.
        <br />
        <button onClick={handleConsent}>Agree</button>
      </p>
    </div>
  );
};

export default CookieConsent;
