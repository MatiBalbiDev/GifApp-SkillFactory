import { useFetchGif } from "../hooks/useFetchGif.js";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { imagenes, loading } = useFetchGif(category);

  return (
    <>
      <div className="category">
        <h3 className="title-search">{category}</h3>
      </div>

      {/* Desplegar Listado */}
      <div className="card-grid">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          imagenes.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};
