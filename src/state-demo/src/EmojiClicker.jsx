import { useState } from 'react';
import { v4 as uuid } from 'uuid';
export default function EmojiClicker() {
  function randomEmoji() {
    const choices = ['😁', '😘', '😭', '🙄', '🤪 ', '🤢'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmoji) => [
      ...oldEmoji,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    // console.log(id);
    // delete the emoji with the specified
    setEmojis((prevEmoji) => {
      return prevEmoji.filter((e) => e.id !== id);
    });
  };
  const makeEverythingHeart = () => {
    setEmojis((prevEmoji) => {
      return prevEmoji.map((e) => {
        return {...e, emoji: '💚'}
      });
    });
  };
  return (
    <div>
      {emojis.map((e) => {
        return (
          <span
            onClick={() => deleteEmoji(e.id)}
            key={e.id}
            style={{ fontSize: '4rem' }}
          >
            {e.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeEverythingHeart}>Make them all hearts</button>
    </div>
  );
}
