import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const BannerPage = () => {
  const [wordCountList, setWordCountList] = useState([])
  const [characterCount, setCharacterCount] = useState('')
  //   setWordCountList(...wordCountList, 'item')
  const HandleAddButton = e => {
    e.preventDefault()
    if (characterCount !== '') {
      const item = {
        id: uuidv4(),
        word: characterCount,
      }
      setWordCountList([...wordCountList, item])
      setCharacterCount('')
    } else {
      alert('Please give correct Input')
    }
  }

  return (
    <section className="sectionContainer">
      <aside className="leftPart">
        <h1>Count the characters like a Boss..</h1>
        {wordCountList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        ) : (
          <ul className="listContainer">
            {wordCountList.map(eachWord => (
              <li key={eachWord.id}>
                <p>
                  {eachWord.word} : {eachWord.word.length}
                </p>
              </li>
            ))}
          </ul>
        )}
      </aside>
      <aside className="rightPart">
        <h1>Character Counter</h1>
        <form className="inputContainer">
          <input
            type="text"
            placeholder="Enter the Characters here "
            value={characterCount}
            onChange={e => setCharacterCount(e.target.value)}
          />
          <button type="submit" onClick={HandleAddButton}>
            Add
          </button>
        </form>
      </aside>
    </section>
  )
}

export default BannerPage
