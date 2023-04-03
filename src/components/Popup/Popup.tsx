import { EmptyPopup, LoginPopup, SignUpPopup } from "collections/PopupContent";
import React, { RefObject } from "react";

export type TPopups = "login" | "signUp" | "null";

const popups = {
  null: EmptyPopup,
  login: LoginPopup,
  signUp: SignUpPopup,
};

interface PopupProps {
  closePopup: (type?: TPopups) => () => void;
  popupType: TPopups;
  ref?: RefObject<HTMLDivElement>;
}

export const Popup: React.FC<PopupProps> = ({
  popupType,
  closePopup,
  ...props
}) => {
  const CurrentPopup = popups[popupType];

  return popupType === "null" ? (
    <CurrentPopup closePopup={closePopup} />
  ) : (
    <>
      <div
        {...props}
        onClick={closePopup()}
        className={
          popupType
            ? "z-10 flex items-center fixed justify-center bg-slate-900 opacity-[0.9]  w-full h-full"
            : "hidden"
        }
      />
      <CurrentPopup closePopup={closePopup} />
    </>
  );
};
