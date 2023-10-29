import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [textarea, setTextArea] = useState("Type your Note Here");
  const [currentNote, setCurrentNote] = useState();

  // Add Note ( button Add )
  function handleAddNote(event) {
    setNotes((prevState) => {
      return [...prevState].map((obj) => {
        return {
          ...obj,
          selected: false,
        };
      });
    });

    setNotes((prevState) => {
      let newNote = {
        id: nanoid(),
        title: "Note - " + (prevState.length + 1),
        desc: "Type your Note Here",
        selected: true,
      };

      setCurrentNote(newNote.id);
      return [...prevState, newNote];
    });
  }

  //Manage Note Click
  function handleClickNote(e) {
    let noteId = e.target.id;
    setCurrentNote(noteId);
    setTextArea(() => {
      let newArr = notes.filter((obj) => obj.id === noteId);
      return newArr[0].desc;
    });

    setNotes((prevState) => {
      let newArr = prevState.filter((obj) => obj.id === noteId);

      let oldArr = [...prevState].map((obj) => {
        return {
          ...obj,
          selected: false,
        };
      });

      let curIndex = [...prevState].findIndex((obj) => obj.id === newArr[0].id);
      oldArr[curIndex].selected = true;

    
      return oldArr;
    });
  }

  // Managing Text Area Input

  function handelNotesInputs(event) {
    setNotes((prevState) => {
      let newArr = prevState.filter((obj) => {
        return obj.id === currentNote;
      });

      let oldArr = [...prevState];
    
      let curIndex = [...prevState].findIndex((obj) => obj.id === newArr[0].id);

      oldArr[curIndex].desc = event.target.value;

      const nEle = oldArr[curIndex];

      oldArr.splice(curIndex, 1);

      oldArr.unshift(nEle);
   
        return oldArr;
   
    });

    setTextArea(event.target.value);
  }
  return (
    <Split
      style={{ display: "flex" }}
      sizes={[25, 75]}
      minSize={100}
      expandToMin={false}
      gutterSize={3}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      {}
      <Sidebar
        areat={textarea}
        clickNote={handleClickNote}
        notes={notes}
        clickFunc={handleAddNote}
      />

      {notes.length > 0 ? (
        <Main
          curnote={currentNote}
          notes={notes}
          value={textarea}
          changeInputs={handelNotesInputs}
        />
      ) : null}
    </Split>
  );
}
