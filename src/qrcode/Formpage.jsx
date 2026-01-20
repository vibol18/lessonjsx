export default function FormPage() {
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h2>Form</h2>
      <input
        type="text"
        placeholder="Name"
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 12
        }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 12
        }}
      />

      <button
        style={{
          width: "100%",
          padding: 12
        }}
      >
        Submit
      </button>
    </div>
  );
}
