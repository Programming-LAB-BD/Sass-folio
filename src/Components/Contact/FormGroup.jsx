export default function FormGroup({ name, children }) {
  return (
    <div className="form-group mb-6">
      <label>{name} :</label>
      {children}
    </div>
  );
}
