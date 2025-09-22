import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import ModalPopup from "./components/ModalPopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    phone: "",
    email: "",
    date: null,
    timeSlot: "",
    doctorName: "",
    appointmentPriority: "",
    appointmentStatus: "",
    paymentMode: "",
    paymentStatus: "",
    liveConsultation: "",
    nurseName: "",
    counterId: "",
    caseId: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const genders = ["Male", "Female", "Other"];
  const priorities = ["High", "Medium", "Low"];
  const statusOptions = ["Scheduled", "Completed", "Cancelled"];
  const paymentModes = ["Cash", "Card", "UPI"];
  const paymentStatusOptions = ["Paid", "Pending"];
  const timeSlots = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setValidationErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.patientName.trim()) errors.patientName = "Please enter a valid name.";
    if (!formData.gender) errors.gender = "Please select a gender.";
    if (!formData.phone.trim()) errors.phone = "Please enter a valid phone number.";
    if (!formData.email.trim()) errors.email = "Please enter a valid email.";
    if (!formData.date) errors.date = "Please select a date.";
    if (!formData.timeSlot) errors.timeSlot = "Please select a time slot.";
    if (!formData.doctorName.trim()) errors.doctorName = "Please enter a doctor name.";
    if (!formData.appointmentPriority) errors.appointmentPriority = "Please select a priority.";
    if (!formData.appointmentStatus) errors.appointmentStatus = "Please select a status.";
    if (!formData.liveConsultation) errors.liveConsultation = "Please select a consultation option.";
    if (!formData.paymentMode) errors.paymentMode = "Please select a payment mode.";
    if (!formData.paymentStatus) errors.paymentStatus = "Please select a payment status.";
    if (!formData.nurseName.trim()) errors.nurseName = "Please enter a nurse name.";
    if (!formData.counterId.trim()) errors.counterId = "Please enter a counter ID.";
    if (!formData.caseId.trim()) errors.caseId = "Please enter a case ID.";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsModalOpen(true);
    } else {
      setValidationErrors(errors);
    }
  };

  const handleConfirm = () => {
    setFormData({
      patientName: "",
      gender: "",
      phone: "",
      email: "",
      date: null,
      timeSlot: "",
      doctorName: "",
      appointmentPriority: "",
      appointmentStatus: "",
      paymentMode: "",
      paymentStatus: "",
      liveConsultation: "",
      nurseName: "",
      counterId: "",
      caseId: "",
    });
    setValidationErrors({});
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h2 className="app-title">Patient Appointment Form</h2>

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          {/* Patient Details */}
          <div className="card-section">
            <div className="card-header">Patient Details</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    label="Patient Name*"
                    type="text"
                    placeholder="Enter your Name"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    className="no-blue-focus"
                  />
                  {validationErrors.patientName && (
                    <div className="invalid-feedback">{validationErrors.patientName}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Gender*"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={genders}
                    required
                  />
                  {validationErrors.gender && (
                    <div className="invalid-feedback">{validationErrors.gender}</div>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <InputField
                    label="Phone Number*"
                    type="tel"
                    placeholder="Enter Phone Number"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {validationErrors.phone && (
                    <div className="invalid-feedback">{validationErrors.phone}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <InputField
                    label="Email*"
                    type="email"
                    placeholder="Enter your mail"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {validationErrors.email && (
                    <div className="invalid-feedback">{validationErrors.email}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Doctor & Appointment Details */}
          <div className="card-section">
            <div className="card-header">Doctor & Appointment Details</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Appointment Date*</label>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData((prevData) => ({ ...prevData, date }))}
                    className="form-control"
                    placeholderText="Select date"
                    name="date"
                    required
                  />
                  {validationErrors.date && (
                    <div className="invalid-feedback">{validationErrors.date}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Time Slot*"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    options={timeSlots}
                    required
                  />
                  {validationErrors.timeSlot && (
                    <div className="invalid-feedback">{validationErrors.timeSlot}</div>
                  )}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <InputField
                    label="Doctor Name*"
                    type="text"
                    placeholder="Enter Doctor Name"
                    name="doctorName"
                    required
                    value={formData.doctorName}
                    onChange={handleChange}
                  />
                  {validationErrors.doctorName && (
                    <div className="invalid-feedback">{validationErrors.doctorName}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Appointment Priority*"
                    name="appointmentPriority"
                    value={formData.appointmentPriority}
                    onChange={handleChange}
                    options={priorities}
                    required
                  />
                  {validationErrors.appointmentPriority && (
                    <div className="invalid-feedback">{validationErrors.appointmentPriority}</div>
                  )}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <SelectField
                    label="Appointment Status*"
                    name="appointmentStatus"
                    value={formData.appointmentStatus}
                    onChange={handleChange}
                    options={statusOptions}
                    required
                  />
                  {validationErrors.appointmentStatus && (
                    <div className="invalid-feedback">{validationErrors.appointmentStatus}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Live Consultation*"
                    name="liveConsultation"
                    value={formData.liveConsultation}
                    onChange={handleChange}
                    options={["Yes", "No"]}
                    required
                  />
                  {validationErrors.liveConsultation && (
                    <div className="invalid-feedback">{validationErrors.liveConsultation}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="card-section">
            <div className="card-header">Payment Details</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <SelectField
                    label="Payment Mode*"
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    options={paymentModes}
                    required
                  />
                  {validationErrors.paymentMode && (
                    <div className="invalid-feedback">{validationErrors.paymentMode}</div>
                  )}
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Payment Status*"
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    options={paymentStatusOptions}
                    required
                  />
                  {validationErrors.paymentStatus && (
                    <div className="invalid-feedback">{validationErrors.paymentStatus}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Support Details */}
          <div className="card-section">
            <div className="card-header">Support Staff Details</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    label="Nurse Name"
                    type="text"
                    placeholder="Enter the Nurse name"
                    name="nurseName"
                    value={formData.nurseName}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.nurseName && (
                    <div className="invalid-feedback">{validationErrors.nurseName}</div>
                  )}
                </div>
                <div className="col-md-3">
                  <InputField
                    label="Counter ID*"
                    type="text"
                    placeholder="Enter the counter ID"
                    name="counterId"
                    required
                    value={formData.counterId}
                    onChange={handleChange}
                  />
                  {validationErrors.counterId && (
                    <div className="invalid-feedback">{validationErrors.counterId}</div>
                  )}
                </div>
                <div className="col-md-3">
                  <InputField
                    label="Case ID*"
                    type="text"
                    placeholder="Enter the Case ID"
                    name="caseId"
                    required
                    value={formData.caseId}
                    onChange={handleChange}
                  />
                  {validationErrors.caseId && (
                    <div className="invalid-feedback">{validationErrors.caseId}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary submit-button">
            Submit
          </button>
        </form>
      </div>

      <ModalPopup
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        data={formData}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;