import React from "react";
import "../styles/ModalPopup.css";

const ModalPopup = ({ isOpen, onRequestClose, data, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onRequestClose();
  };

  return (
    <div className="modal-enhanced">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Appointment Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onRequestClose}
              aria-label="Close"
            ></button>
          </div>
        <div className="modal-body">
            <div className="appointment-text">
              <p><strong>Patient Name:</strong> {data.patientName || "N/A"}</p>
              <p><strong>Gender:</strong> {data.gender || "N/A"}</p>
              <p><strong>Phone Number:</strong> {data.phone || "N/A"}</p>
              <p><strong>Email:</strong> {data.email || "N/A"}</p>
              <p><strong>Appointment Date:</strong> {data.date ? data.date.toLocaleDateString() : "N/A"}</p>
              <p><strong>Time Slot:</strong> {data.timeSlot || "N/A"}</p>
              <p><strong>Doctor Name:</strong> {data.doctorName || "N/A"}</p>
              <p><strong>Appointment Priority:</strong> {data.appointmentPriority || "N/A"}</p>
              <p><strong>Appointment Status:</strong> {data.appointmentStatus || "N/A"}</p>
              <p><strong>Live Consultation:</strong> {data.liveConsultation || "N/A"}</p>
              <p><strong>Payment Mode:</strong> {data.paymentMode || "N/A"}</p>
              <p><strong>Payment Status:</strong> {data.paymentStatus || "N/A"}</p>
              <p><strong>Nurse Name:</strong> {data.nurseName || "N/A"}</p>
              <p><strong>Counter ID:</strong> {data.counterId || "N/A"}</p>
              <p><strong>Case ID:</strong> {data.caseId || "N/A"}</p>
            </div>
        </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onRequestClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;