import { createPortal } from "react-dom";

const PopupContent = ({ show }) => {
  return createPortal(
    <section>
      {show && (
        <div>
            Copied
        </div>
      )}
    </section>,
    document.querySelector("#portal-popup")
  );
};
export default PopupContent;