import { useContext, useEffect, useState } from "react";
import { ActionContext } from "../context/context";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Actions = () => {
  const [userEmail, setUserEmail] = useState(null);
  const { bookState } = useContext(ActionContext);
  const email =
    Math.round(Math.random()) === 1 ? "bob@bbass.co" : "random@user.com";

  useEffect(() => {
    setUserEmail(email);
  }, []);

  const addToDb = async (arrName) => {
    // Get ref to the current user's book document
    const docRef = doc(db, "books", userEmail);

    // recreate the entire document in a new object
    const currentDocument = (await getDoc(docRef)).data();

    const docToSet = {
      toBeRead: currentDocument?.toBeRead || [],
      inProgress: currentDocument?.inProgress || [],
      completed: currentDocument?.completed || [],
    };

    // push the new book into the array specified in the function params
    docToSet[arrName].push(bookState);

    // set the new document
    await setDoc(docRef, docToSet);
  };

  return (
    <div id="actions" className="ml-4 bg-white rounded-md">
      <div className="">
        <button className="p-2 w-full" onClick={() => addToDb("toBeRead")}>
          Add to TBR
        </button>
        <button className="p-2 w-full" onClick={() => addToDb("inProgress")}>
          Add to In Progress
        </button>
        <button className="p-2 w-full" onClick={() => addToDb("completed")}>
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
