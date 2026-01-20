export default function Formpage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Name"
        style={{
          display: "block",
          width: "100%",
          marginBottom: 12,
          padding: 8
        }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{
          display: "block",
          width: "100%",
          marginBottom: 12,
          padding: 8
        }}
      />

      <button style={{ padding: 10, width: "100%" }}>
        Submit
      </button>
    </div>
  );
}
