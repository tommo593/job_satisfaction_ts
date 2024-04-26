import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-4 rounded text-lg"
    >
      Log In
    </button>
  );
};

export default LoginButton;
