import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //GET ALL NOTE
  const getNotes = async () => {
    //API CALL

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
      },
    });
    const json = await response.json;
    console.log(json);
  };
  //ADD A NOTE
  const addNote = async (title, description, tag) => {
    //TODO API CALL
    console.log("ÄDDING A NEW NOTE");
    const note = {
      _id: "62b3340cb82esb718a0dfd610",
      user: "62b2fdd2ccaff2d92e27b86d",
      title: title,
      description: description,
      tag: tag,
      date: "2022-06-22T15:23:56.552Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    //API CALL

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
      },

      body: JSON.stringify({ title, description, tag }),
    });
  };
  //DELETE A NOTE
  const deleteNote = (id) => {
    console.log("DELETING NOTE WITH ID" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //EDIT A NOTE
  const editNote = async (id, title, description, tag) => {
    //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJmZGQyY2NhZmYyZDkyZTI3Yjg2ZCIsImlhdCI6MTY1NTg5NzYxNH0.GJ3zSZ42DdDZ_zMDYRZvlMXwMcPv_BfaU8v4leMTHqo",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    //LOGIC TO EDIT IN CLIENT SERVER OR DATA
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
