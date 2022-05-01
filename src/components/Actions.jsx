import { useContext, useEffect, useState } from "react";
import { ActionContext } from "../context/context";
import { setDoc, doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Actions = () => {
  const [userEmail, setUserEmail] = useState(null);
  const { bookState } = useContext(ActionContext);
  const email =
    Math.round(Math.random()) === 1 ? "bob@bbass.co" : "random@user.com";

  useEffect(() => {
    setUserEmail(email);
  }, []);

  const addToTbr = async () => {
    // Get ref to the current user's book document
    const docRef = doc(db, "books", userEmail);

    // instantiate empty array that will replace existing document
    const toBeRead = [];

    // get existing books from the TBR doc
    const existingTbr = (await getDoc(docRef)).data().toBeRead;

    // check if any books already exist in tbr
    if (!!existingTbr) {
      // puth existing book objects in to new toBeRead array
      existingTbr.forEach((book) => {
        toBeRead.push(book);
      });
    }

    // push the new book into the toBeRead array
    toBeRead.push(bookState);

    // set the new document
    await setDoc(docRef, { toBeRead });
  };

  const addToInProgress = () => {
    //
  };

  const addToCompleted = () => {
    //
  };

  return (
    <div id="actions" className="ml-4 bg-white rounded-md">
      <div className="">
        <button className="p-2 w-full" onClick={addToTbr}>
          Add to TBR
        </button>
        <button className="p-2 w-full" onClick={addToInProgress}>
          Add to In Progress
        </button>
        <button className="p-2 w-full" onClick={addToCompleted}>
          Add to Completed
        </button>
      </div>

      {bookState.id}
      <br />
      {bookState.title}
      <br />
      {bookState.author}
      <br />
    </div>
  );
};

export default Actions;
