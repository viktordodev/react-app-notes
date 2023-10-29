export default function Note(props) {
  const tabClass = props.cname ? "note-tab active" : "note-tab";
  const shortSummary = props.datad.substring(0, 10);

  return (
    <div onClick={props.clickNote} id={props.id}  className={tabClass}>
      {props.title} -{" "}
      {shortSummary.length > 9 ? shortSummary + "..." : shortSummary}
    </div>
  );
}
