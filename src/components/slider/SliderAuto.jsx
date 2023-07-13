import React from 'react'
import { useState, useEffect } from 'react'
import leftarrow from '../../assets/left-arrow.svg'
import rightarrow from '../../assets/right-arrow.svg'
import "./Slider.css"
import sliderData from '../../data/sliderData'


export default function Slider() {

  const[sliderIndex, setSliderIndex] = useState(1)


  const toggleImage = (indexClick) => {

    //Cette fonction callback va être appelée avec le state en cours et la valeur de retour sera la valeur du nouveau state
    //Maintenant la valeur du state sera la valeur de retour de cette fonction callback qui change la valeur du state
    setSliderIndex(state => {
      if (indexClick + state > sliderData.length) {
        return 1
      }
      else if (indexClick + state < 1) {
        return sliderData.length
      }
      else {
        return indexClick + state
      }
    })
  }

  //useEffect permet d'exécuter un effet après la première création d'un élément et sa mise en place dans le DOM
  //et après chaque mise à jour de cet élément dans le DOM
  //useEffect est un hook
  //Il prend 2 arguments : le premier est l'effet qu'on veut exécuter qui est une fonction callback
  //le deuxième : le tableau des dépendances qui sont les valeurs que j'ai envie de surveiller
  useEffect(() => {

    //On crée un setInterval
    //Cette fonction va utiliser toggleImage qui lui-même utilise setSliderIndex et de cette façon, on aura toujours accès au nouveau state
    const intervalID = setInterval(() => toggleImage(1), 2000)

    //On fait une clean up function pour que le composant se met à jour et que le DOM se met à jour
    //cette clean up function va être appelée
    //Donc à partir de là, la valeur à surveiller c'est sliderIndex
    //Donc quand c'est mis à jour ça va d'abord clear puis après lancer le useEffect
    //donc ça va recréer un inverval à chaque fois 

    return () => clearInterval(intervalID)

  }, [])

  return (
    <>
      <p className='index-number'>{sliderIndex}/{sliderData.length}</p>
      <div className="slider">
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
