import { useState } from "react";
import DataPeserta from "./component/DataPeserta";
import { Peserta } from "./component/Peserta";
import FormPeserta from "./component/FormPeserta";

function App() {
  const [pesertaList, setPesertaList] = useState(Peserta);
  const [editPeserta, setEditPeserta] = useState(null);
  const handleSimpan = (dataForm) => {
    if (editPeserta) {
      // Jika editPeserta ada, berarti kita sedang mengedit data peserta
      setPesertaList(
        pesertaList.map((peserta) =>
          peserta.id === dataForm.id ? dataForm : peserta,
        ),
      );
      setEditPeserta(null); // Reset editPeserta setelah selesai mengedit
    } else {
      // Jika editPeserta tidak ada, berarti kita sedang menambahkan data peserta baru
      setPesertaList([...pesertaList, dataForm]);
    }
    console.log(dataForm);
  };

  const handleCancel = (id) => {
    setPesertaList(pesertaList.filter((peserta) => peserta.id !== id));
    if (id === editPeserta?.id) {
      setEditPeserta(null);
    }
  };

  // const handleEdit = (pesertaToEdit) => {
  //   setEditPeserta(pesertaToEdit);
  // };

  return (
    <>
      <FormPeserta
        onSimpan={handleSimpan}
        onCancel={handleCancel}
        pesertaEdit={editPeserta}
      />
      {/* map = untuk looping */}
      {pesertaList.map((peserta) => (
        <DataPeserta
          key={peserta.id} // unik key untuk setiap item di dalam list, agar React bisa membedakan setiap item di dalam list.
          peserta={peserta}
          onCancel={handleCancel}
          onEdit={setEditPeserta}
        />
      ))}
    </>
  );
}

export default App;

// const [count, setCount] = useState(0);
// // useState adalah hook yang digunakan untuk membuat state di dalam function component.
// // State adalah ngerubah data jadi dinamis dengan aksi/event, misalnya data yang bisa berubah-ubah.
// // getter itu untuk mengambil data, setter itu untuk mengubah data.
// // setCount adalah setter, count adalah getter. useState(0) itu nilai awalnya 0.
// // setCount adalah fungsi untuk mengubah nilai count, dan count adalah nilai yang akan ditampilkan di UI.
// // function component dan class component
// function Peserta({ nama, kelas, nilai }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "10px",
//         borderRadius: "8px",
//         margin: "10px",
//         textAlign: "center",
//       }}
//     >
//       <h3>{nama}</h3>
//       <p>{kelas}</p>
//       <p>{nilai}</p>
//     </div>
//   );
// }

// // props itu properti, adalah membuat properti yang bisa dikirim ke component lain
// // atau membuat properti menjadi lebih dinamis
// return (
//   <>
//     <Peserta nama="Inas Lathifah" kelas="Web Programming" nilai={85} />
//     <Peserta nama="John Doe" kelas="Mobile Development" nilai={90} />
//     <Peserta nama="Jane Smith" kelas="iOS Development" nilai={78} />
//     <p>Total peserta: {count}</p>
//     <button onClick={() => setCount((count) => count + 1)}>
//       Tambah Peserta
//     </button>
//     <button onClick={() => setCount((count) => count - 1)}>
//       Kurangi Peserta
//     </button>
//   </>
// );
