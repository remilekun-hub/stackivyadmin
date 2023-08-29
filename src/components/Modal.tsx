import { useEffect, useState } from "react";

type Prop = {
  open: boolean;
  children: JSX.Element;
};

function Modal({ open, children }: Prop) {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, open]);

  if (isOpen) {
    return (
      <div className="flex fixed  h-screen w-screen justify-center items-center bg-black/60 left-0 top-0 z-[999999999999999999999999999999] overflow-hidden">
        {children}
      </div>
    );
  }

  return <></>;
}

export default Modal;
