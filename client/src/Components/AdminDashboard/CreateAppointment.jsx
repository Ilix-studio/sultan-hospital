import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import {
  AppointmentFormStyled,
  InputGroupStyled,
  IconStyled,
  InputLabelStyled,
  SubmitButtonStyled,
  SelectStyled,
  OptionStyled,
  CustomDatePicker,
  ErrorMessageStyled,
} from "./style";
import { useNavigate } from "react-router-dom";

const InputGroup = ({ icon, label, type, id, options, isDate, value, onChange, reset }) => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsTouched(false);
      setIsPhoneValid(true);
    }
  }, [reset]);

  useEffect(() => {
    if (type === "tel" && isTouched) {
      setIsPhoneValid(value.length === 10 && /^[9876]/.test(value));
    }
  }, [value, type, isTouched]);

  const handleDateChange = (date) => {
    onChange(id, date);
  };

  const handlePhoneChange = (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }
    setIsPhoneValid(newValue.length === 10 && /^[9876]/.test(newValue));
    onChange(id, newValue);
    setIsTouched(true); // Set the touched flag to true when the input is changed
  };

  const handleInputChange = (event) => {
    onChange(id, event.target.value);
    if (type === "tel") setIsTouched(true); // Set the touched flag to true when the input is changed
  };

  return (
    <div>
      <InputGroupStyled>
        <IconStyled src={icon} alt="" />
        {type === "select" ? (
          <SelectStyled id={id} aria-label={label} required onChange={handleInputChange} value={value}>
            <option value="" disabled>
              {label}
            </option>
            {options.map((option, index) => (
              <OptionStyled key={index} value={option.value}>
                {option.label}
              </OptionStyled>
            ))}
          </SelectStyled>
        ) : isDate ? (
          <CustomDatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            required
          />
        ) : type === "tel" ? (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handlePhoneChange}
            pattern="\d*"
            required
          />
        ) : (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handleInputChange}
            required
          />
        )}
      </InputGroupStyled>
      {type === "tel" && !isPhoneValid && isTouched && (
        <ErrorMessageStyled>Please enter a 10 digit number starting with 9, 8, 7, or 6</ErrorMessageStyled>
      )}
    </div>
  );
};

const inputData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/310ac18a98cfaac54eaca7e3246a79307c7c8b0ff2dd0993434fd1a51c35ed3b?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Your Full Name",
    type: "text",
    id: "fullName",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/000a0d85b632aa2390eb0b9fa584bc6ed4d9bd4605b2a5c63913f788fef6b499?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Your Phone Number",
    type: "tel",
    id: "phoneNumber",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e835f99efe92624f7d1d5abe31689d75e2d1a6129fb840db15a4fe1eee5220e?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Select Date",
    type: "date",
    id: "appointmentDate",
    isDate: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fefbe1531046f8a7bb901dc17fd878fd5f3641b1bbc1109ef627456f1336f23?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    label: "Appointment Time",
    type: "select",
    id: "appointmentTime",
    options: [
      { value: "10:00-11:00", label: "10:00 - 11:00" },
      { value: "11:00-12:00", label: "11:00 - 12:00" },
      { value: "12:00-13:00", label: "12:00 - 13:00" },
      { value: "13:00-14:00", label: "13:00 - 14:00" },
      { value: "14:00-15:00", label: "14:00 - 15:00" },
      { value: "15:00-16:00", label: "15:00 - 16:00" },
    ],
  },
];

const CreateAppointment = () => {
  const navigate = useNavigate();
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) => axios.post("http://localhost:5000/api/form/create", newAppointment),
    {
      onSuccess: () => {
        toast.success("Appointment created successfully!", {
          duration: 1000, // Set duration to 5000ms (5 seconds)
          style: {
            fontSize: '18px', // Increase font size
            minWidth: '350px' // Set minimum width
          }
        });
        setFormValues(initialFormValues); // Reset form values on success
        setReset(true); // Trigger reset for the InputGroup components
        setTimeout(() => setReset(false), 0); // Reset the reset flag to false
        setTimeout(() => navigate('/adminDashboard'), 3000);
      },
      onError: (error) => {
        toast.error(`Failed to create appointment: ${error.response?.data?.message || error.message}`, {
          duration: 3000, // Set duration to 5000ms (5 seconds)
          style: {
            fontSize: '18px', // Increase font size
            minWidth: '350px' // Set minimum width
          }
        });
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = formValues;
    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error("Please enter a valid 10 digit phone number starting with 9, 8, 7, or 6", {
        duration: 3000, // Set duration to 5000ms (5 seconds)
        style: {
          fontSize: '18px', // Increase font size
          minWidth: '350px' // Set minimum width
        }
      });
      return;
    }
    const appointmentData = {
      patientName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      date: formValues.appointmentDate.toISOString(), // Ensure date is in ISO string format
      timeSchedule: formValues.appointmentTime,
    };
    mutation.mutate(appointmentData);
  };

  return (
    <>
      <Toaster />
      <AppointmentFormStyled onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup key={index} {...input} value={formValues[input.id]} onChange={handleInputChange} reset={reset} />
        ))}
        <SubmitButtonStyled type="submit">Create an Appointment</SubmitButtonStyled>
      </AppointmentFormStyled>
    </>
  );
};

export default CreateAppointment;


