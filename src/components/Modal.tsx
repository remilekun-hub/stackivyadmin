import { useEffect } from "react";

type ModalType = {
  children: JSX.Element;
};

function Modal({ children }: ModalType) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => document.body.classList.remove("overflow-y-hidden");
  }, []);

  return (
    <div className="fixed z-[9999999999999999] inset-0 flex justify-center items-center w-screen h-screen bg-[black]/70">
      <div className="">{children}</div>
    </div>
  );
}

export default Modal;
