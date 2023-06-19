import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";

export default function KaryawanCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    shift: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await postData("/shift/create", form);

    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Berhasil tambah karyawan ${res.data.data.shift}`
        )
      );
      navigate("/shift");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.message,
      });
    }
  };

  return (
    <Container>
      <PBreadCrumb
        textSecond={"Shift"}
        urlSecond={"/shift"}
        textThird="Create"
      />
      {alert.status && <PAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
