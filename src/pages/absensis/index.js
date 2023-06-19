import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import BreadCrumb from "../../components/BreadCrumb";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbsensis } from "../../redux/absensis/actions";

export default function JabatanPage() {
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
