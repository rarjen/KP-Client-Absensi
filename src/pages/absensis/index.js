import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
// import Button from "../../components/Button";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbsensis } from "../../redux/absensis/actions";

export default function JabatanPage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const absensis = useSelector((state) => state.absensis);

  useEffect(() => {
    dispatch(fetchAbsensis());
  }, [dispatch]);

  return (
    <Container className={"mt-3"}>
      <BreadCrumb textSecond={"Absensi"} />
      <PTableWithAction
        status={absensis.status}
        thead={[
          "Jam Masuk",
          "Jam Pulang",
          "Status Absensi",
          "Status",
          "Tanggal",
          "Karyawan",
          "Shift",
        ]}
        data={absensis.data}
        tbody={[
          "karyawan.full_name",
          "karyawan.shift.shift",
          "jam_masuk",
          "jam_pulang",
          "status_absensi",
          "status",
          "tanggal",
        ]}
        withoutPagination
      />
    </Container>
  );
}
