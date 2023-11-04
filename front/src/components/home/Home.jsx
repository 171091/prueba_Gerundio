import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllFruits,
  getAllVegetables,
  orderRecipeAlphabetic,
  getFruits,
  getVegetables,
  deleteFilters,
  cleanStates,
} from "../../redux/actions";
import { useEffect, useState } from "react";

export default function HomePage(props) {
  let { myFruits, loading, fruits, myVegetables, vegetables } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFruits());
    dispatch(cleanStates());
    dispatch(getAllVegetables());
    dispatch(cleanStates());
  }, [dispatch]);
  useEffect(() => {
    if (!fruits.length && !myFruits.length) {
      dispatch(getFruits());
      dispatch(getAllFruits());
      loading = true;
    }
    if (!vegetables.length && !myVegetables.length) {
      dispatch(getVegetables());
      dispatch(getAllVegetables());
      loading = true;
    } else {
      loading = false;
    }
  }, [dispatch, fruits]);

  const [page, setPage] = useState(1);
  const finalPage = page * 9; //9 indica la cantidad de recetas que voy a mostrar por página
  const startPage = finalPage - 9;
  const actualPage = myRecipes?.slice(startPage, finalPage);
  const totalPages = Math.ceil(myRecipes.length / 9);
  const handlerPrevPage = () => {
    setPage(page - 1);
  };
  const handlerNextPage = () => {
    setPage(page + 1);
  };
  const handlerPageNumber = (n) => {
    setPage(n);
  };

  const orderHandler = (event) => {
    const { name, value } = event.target;
    if (name === "Alphabetic") {
      dispatch(orderRecipeAlphabetic(value));
    } else {
      dispatch(price(value));
    }
  };

  const reset = () => {
    dispatch(deleteFilters());
    const selectElements = document.getElementsByTagName("select");
    for (let i = 0; i < selectElements.length; i++) {
      selectElements[i].selectedIndex = 0;
    }
  };

  return (
    <div>
      <NavBar setPage={setPage} />
      <div className={styles.options}>
        <select
          name="Alphabetic"
          onChange={orderHandler}
          defaultValue="Alphabetic Order"
        >
          <option disabled>Order By Alphabethic</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select name="price" onChange={orderHandler} defaultValue="price">
          <option disabled> Order By</option>
          <option value="Ascendente">Lowest Score</option>
          <option value="Descendente">Highest Score</option>
        </select>
        <button onClick={reset}>Reset</button>
      </div>
      <br />
      <div className={styles.paginado}>
        <Paginado
          totalPages={totalPages}
          page={page}
          prevPage={handlerPrevPage}
          nextPage={handlerNextPage}
          pageNumber={handlerPageNumber}
        />
      </div>
      <div className={styles.contenedor}>
        {loading ? (
          <div className={styles.loader}>
            <img src={loader} alt="Loading" />
          </div>
        ) : actualPage.length > 0 ? (
          actualPage.map((fruits, vegetables) => {
            return (
              <div key={fruits.id & vegetables.id}>
                <Card
                  id={fruits.id & vegetables.id}
                  name={fruits.name & vegetables.name}
                  price={fruits.price & vegetables.price}
                  quantity={fruits.quantity & vegetables.quantity}
                  category={fruits.category & vegetables.category}
                />
              </div>
            );
          })
        ) : (
          <h2>
            I did not find the vegetables and fruits you are looking for, but we
            are working on it
          </h2>
        )}
      </div>
    </div>
  );
}
