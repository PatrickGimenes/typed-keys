import { words } from "prelude-ls";
import React, { useState, useEffect } from "react";
import wordlist from "./resources/words.json";

const MAX_TYPED_KEYS = 30;

const getWord = () => {
  const index = Math.floor(Math.random() * wordlist.length);
  const word = wordlist[index];
  return word.toLowerCase();
};

const isValidKey = (key, word) => {
  if (!word) return false;
  const result = word.split("").includes(key);
  return result;
};

const Word = ({ word, validKeys }) => {
  if (!word) return null;
  const joinedKeys = validKeys.join("");
  const matched = word.slice(0, joinedKeys.length);
  const remaider = word.slice(joinedKeys.length);

  return (
    <>
      <span className="matched">{matched}</span>
      <span className="remainder">{remaider}</span>
    </>
  );
};

const App = () => {
  const [typedKeys, setTypedKeys] = useState([]);
  const [validKeys, setvalidKeys] = useState([]);
  const [word, setWord] = useState("");

  useEffect(() => {
    setWord(getWord());
  }, []);

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;
    setTypedKeys((prev) => [...prev, key].slice(MAX_TYPED_KEYS * -1));

    if (isValidKey(key, word)) {
      setvalidKeys((prev) => {
        const isValidLength = prev.length <= word.length;
        const isNextChar = isValidKey && word[prev.length] === key;
        return isNextChar ? [...prev, key] : prev;
      });
    }
  };

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <Word word={word} validKeys={validKeys} />
      </div>
      <div className="typed-keys">{typedKeys ? typedKeys.join("") : null}</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>sobre</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
