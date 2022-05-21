import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [score, setscore] = useState(100)
  const [randomNum, setrandomNum] = useState(true)

  let disableDeck = false  

  useEffect(() => {
    let boxs = document.querySelectorAll('.box'),
        bBack = document.querySelectorAll('.box .back'),
      cardOne, 
      cardTwo

    if (randomNum) {
      console.log('new game')
      cardOne = ""
      cardTwo = ""
      setscore(100)
      let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
      arr.sort(() => Math.random() > 0.5 ? 1 : -1)
      boxs.forEach((b, i) =>  b.classList.remove("flip"))
      bBack.forEach((b, i) =>  b.innerHTML = arr[i])
      setrandomNum(false)
    }

    let flipCard = ({ target: clickedCard }) => {
      if (cardOne !== clickedCard ){
        clickedCard.classList.add("flip")
        if(!cardOne) {
          return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true
        let lookAtCardOne = cardOne.querySelector('.back').innerHTML,
            lookAtCardTwo = cardTwo.querySelector('.back').innerHTML
        matchCards(lookAtCardOne, lookAtCardTwo)
      }
    }

    let matchCards = (card1, card2) => {
      if(card1 === card2) {
        setscore(score + 10)
        cardOne.classList.add("match")
        cardTwo.classList.add("match")
        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        return (
          cardOne = "",
          cardTwo = ""
        )
      }
      else {
        setscore(score - 1)
      }
      cardOne.classList.add("nomatch")
      cardTwo.classList.add("nomatch")
      setTimeout(() => {
        cardOne.classList.remove("flip")
        cardTwo.classList.remove("flip")
        cardOne.classList.remove("nomatch")
        cardTwo.classList.remove("nomatch")
        cardOne = ""
        cardTwo = ""
      }, 1000)
    }

    boxs.forEach(b => {
      b.addEventListener("click", flipCard)
    })
  },[disableDeck, score, randomNum])

  return (
    <div >
      <Head>
        <title>memory game</title>
        <meta name="description" content="memory-game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page">
        <div className="buttons row">
          <button onClick={() => setrandomNum(true)}>new game</button>
          <p>Score: {score}</p>
        </div>
        <div className="game">
          <ul className="boxes grid">
            <li className='box'>
              <div className="front"></div>
              <div className="back">3</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">6</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">1</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">7</div>
            </li>

            <li className='box'>
              <div className="front"></div>
              <div className="back">4</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">2</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">5</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">8</div>
            </li>

            <li className='box'>
              <div className="front"></div>
              <div className="back">8</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">1</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">3</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">2</div>
            </li>

            <li className='box'>
              <div className="front"></div>
              <div className="back">6</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">4</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">7</div>
            </li>
            <li className='box'>
              <div className="front"></div>
              <div className="back">5</div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
