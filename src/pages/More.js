import { useParams } from "react-router-dom";

export default function More() {
  const { itemId } = useParams();
  return <div>More Item {itemId} </div>;
}
