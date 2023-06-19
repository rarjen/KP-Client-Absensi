import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import { fetchListKaryawans } from "../../redux/lists/actions";

export default function PostAbsen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const [form, setForm] = useState({
    karyawan: null,
    status_absensi: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchListKaryawans());
  }, [dispatch]);

  const handleChange = (e, name) => {
    setForm({ ...form, [name]: e });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      karyawan_id: form.karyawan.value,
      status_absensi: form.status_absensi.value,
    };

    const res = await postData("/absensi/postAbsen", payload);
    if (res?.data?.data) {
      dispatch(setNotif(true, "success", `Berhasil tambah absen`));
      navigate("/karyawan");
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
        textSecond={"Karyawan"}
        urlSecond={"/karyawan"}
        textThird="Create"
      />
      {alert.status && <PAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        lists={lists}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
