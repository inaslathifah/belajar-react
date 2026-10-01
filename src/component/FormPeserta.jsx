import { useState, useEffect } from "react";
const FormPeserta = ({ onSimpan, onCancel, pesertaEdit }) => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");

  // useEffect digunakan untuk melakukan side effect pada komponen, misalnya untuk mengubah state ketika props berubah.
  // useEffect adalah hasil request dari server yang menghasilkan sebuah data, dan dirender cuma sekali, dan tidak akan dirender
  //    lagi ketika state berubah. useEffect akan dijalankan ketika komponen pertama kali dirender, dan ketika props atau state berubah.
  useEffect(() => {
    if (pesertaEdit) {
      setNama(pesertaEdit.nama);
      setJurusan(pesertaEdit.jurusan);
    } else {
      setNama("");
      setJurusan("");
    }
  }, [pesertaEdit]);

  const handleSimpan = (e) => {
    e.preventDefault();
    
    // Logic untuk handle simpan data peserta, misalnya mengirim data ke server atau menyimpan di state.
    onSimpan({
      id: pesertaEdit ? pesertaEdit.id : Date.now(),
      // Jika pesertaEdit ada, gunakan ID yang sama, jika tidak, buat ID baru menggunakan Date.now() untuk memastikan ID unik.
      // Menggunakan ID dari peserta yang diedit atau timestamp sebagai ID unik
      nama,
      jurusan,
    });
    setNama(""); // Reset input nama setelah disimpan
    setJurusan(""); // Reset input jurusan setelah disimpan
  };

  return (
    <div>
      <form
        method="post"
        onSubmit={handleSimpan}
        style={{
          background: "#f5f6f8",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3>Tambah Peserta</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <label
            style={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            Nama:
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan Nama Peserta"
          />
          <label
            style={{
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            Jurusan:
          </label>
          <input
            type="text"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            placeholder="Masukkan Jurusan Peserta"
          />
          <button
            type="submit"
            style={{
              background: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              padding: "8px 16px",
            }}
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPeserta;
