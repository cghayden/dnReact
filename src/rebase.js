import Rebase from "re-base";
import { firestore } from "./firebase";

//create an instance of re-base on firestore(bindings)
const rebase = Rebase.createClass(firestore);

export default rebase;
