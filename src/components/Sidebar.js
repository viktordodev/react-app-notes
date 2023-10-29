import Note from "./Note";

export default function Sidebar(props) {
  const notesList = Array.from(props.notes);

  const renderNotes = notesList.map((item) => {
    return (
      <Note
        clickNote={props.clickNote}
        key={item.id}
        id={item.id}
        title={item.title}
        cname={item.selected}
        datad={item.desc}
      />
    );
  });
  return (
    <aside style={{ minHeight: "400px" }}>
      <div className="flex j-center">
        <h2>Notes</h2>
        <button onClick={props.clickFunc} style={{ marginLeft: "10px" }}>
          +
        </button>
      </div>
      <div>{renderNotes}</div>
    </aside>
  );
}
