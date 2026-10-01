// function DataPeserta
const DataPeserta = ({ peserta, onCancel, onEdit }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          borderRadius: "8px",
          margin: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(55, 56, 42, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 6px 0", fontSize: "18px" }}>
            Nama: {peserta.nama}
          </h4>
          <p>Jurusan: {peserta.jurusan}</p>
        </div>
        <div>
          <button
            onClick={() => onEdit(peserta)}
            style={{
              display: "flex",
              gap: "8px",
              accentColor: "blue",
              marginTop: "10px",
              padding: "6px 12px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
          <div>
            <button
              onClick={() => onCancel(peserta.id)}
              style={{
                display: "flex",
                gap: "8px",
                accentColor: "red",
                marginTop: "10px",
                padding: "6px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPeserta;
