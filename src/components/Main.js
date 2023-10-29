export default function Main(props) {
 
  return (
    <div style={{ minHeight: "400px" }}>
      <h3>Write your note</h3>

      <textarea
        name="sdas"
        id={props.curnote}
        cols="30"
        rows="10"
        value={props.value}
        onChange={props.changeInputs}
      ></textarea>
    </div>
  );
}
