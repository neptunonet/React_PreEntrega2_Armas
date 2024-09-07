import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";

const Store = () => {
 const { id } = useParams();

  return (
    <>
      <aside>
        <p>Futuros Filtros</p>
      </aside>
      <ItemList category={id} />
    </>
  );
}

export default Store;