import { Link } from "react-router-dom";

const Item = ({ wine_name, img, sale_price, grape_variety, id, tag}) => {
    return(
      <article className="item">
        <Link to={`/detalle/${id}`}>
          <picture className="item__picture">
            <span className="item__picture--pill">{tag}</span>
            <img className="item__picture--img item__picture--img--1" src={`/img${img.front}`} alt={`${wine_name} - Figura`} />
            <img className="item__picture--img item__picture--img--2" src={`/img${img.back}`} alt={`${wine_name} - Caja`} />
          </picture>
          <div className="item__info">
            <h3 className="item__info--title">{grape_variety}</h3>
            <h4 className="item__info--item">{wine_name}</h4>
            <p className="item__info--price">$ {sale_price} .-</p>
          </div>
        </Link>
      </article>
    );
};

export default Item;