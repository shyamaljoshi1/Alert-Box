import { useEffect } from "react";
import ReactDOM from "react-dom";
import './box.css';

const ConfirmationBox = ({handleConfirm,handleCancel,title,discription}) =>{

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
                <h2>{title}</h2>
                <p>{discription}</p>
                <div className="btn">   
                    <button  className="confim-btn" onClick={handleConfirm}>Confirm</button>
                    <button  className="cancel-btn" onClick={handleCancel}>cancel</button>
                </div>
                
            </div>
        </>,
        document.querySelector(".portalModalDiv")
    )
}

export default ConfirmationBox;