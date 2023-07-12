import React from 'react'
import { useState } from 'react'
import leftarrow from '../../assets/left-arrow.svg'
import rightarrow from '../../assets/right-arrow.svg'
import "./Slider.css"
import sliderData from '../../data/sliderData'


export default function Slider() {

  // On fait démarrer le useState à 1 pour avoir la première image du slider
  const[sliderIndex, setSliderIndex] = useState(1)


  // On fait la fonction qui va permettre de gérer quelle image display selon le state et l'index
  const toggleImage = (indexClick) => {
    let newState
    if (indexClick + sliderIndex > sliderData.length) {
      newState = 1
      //Si on est déjà à 5/5 et qu'on met suivant, on repart à la première image
    }
    else if (indexClick + sliderIndex < 1) {
      newState = sliderData.length
      //Si on est à la première et qu'on met previous, on repart à la dernière image
    }
    else {
      newState = indexClick + sliderIndex
      //Sinon le slider fonctionne normalement
    }
    // Une fois qu'on a vérifié les conditions on change le state avec newState
    setSliderIndex(newState)
  }

  return (
    <>
      {/* On va gérer l'affichage du index-number avec le useState donc index pour la première partie et longueur du tableau de données pour la deuxième */}
      <p className='index-number'>{sliderIndex}/{sliderData.length}</p>
      <div className="slider">
        {/* sliderData.find c'est une méthode qui va appeler un callback sur chaque élément d'un tableau jusqu'à trouver une certaine chose
        Là pour chaque objet, j'ai envie de trouver l'objet dont l'id est égale à sliderIndex.
        Et une fois qu'il l'a trouvé, il me donne la description de cet objet.*/}
        <p className="image-description">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
        <img src={`./images/img-${sliderIndex}.jpg`} alt={sliderData.find(obj => obj.id === sliderIndex).description} className="slider-image" />
        <button 
        onClick={() => toggleImage(-1)}
        className="navigation-button-previous">
          <img src={leftarrow} alt='previous image'/>
        </button>
        <button
        onClick={() => toggleImage(1)}
        className="navigation-button-next">
          <img src={rightarrow} alt='next image'/>
        </button>
      </div>
    </>
  )
}
