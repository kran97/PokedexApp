import Card from "./ui/Card";
import classes from "./Pokemon.module.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Pokemon(props) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonData.data.id}.svg`;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function onSelectPokemon() {
    setModalIsOpen(true);
  }
  return (
    <Card>
      <div onClick={onSelectPokemon} className={classes.cardMainContent}>
        <img className={classes.pokemonImage} src={src} alt="" />
        <div className={classes.cardDescription}>
          <h3 className={classes.pokemonName}>{props.pokemonData.data.name}</h3>
          <p className={classes.pokemonId}>{props.pokemonData.data.id}</p>
        </div>
      </div>
      {
      modalIsOpen ? (
        <Modal data={props.pokemonData.data} onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null
      }
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </Card>
  );
}

export default Pokemon;
