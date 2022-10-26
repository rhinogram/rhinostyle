import GraphemeSplitter from 'grapheme-splitter';

function isEmoji(str) {
  const emojiRe = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;
  const isMatch = emojiRe.test(str);
  return isMatch;
}

// a grapheme is a representation of a character as one visual unit (e.g. "🏳️‍🌈" instead of "1f3f3-fe0f-200d-1f308")
const splitter = new GraphemeSplitter();

// this function was added to resolve an issue with the way in which Firefox handles the deletion of emojis.
// when hitting backspace on an emoji in Firefox, it takes multiple keypresses to delete a "combined" emoji (emoji with zero-width-joiners)
// e.g. 🏳️‍🌈 is recognized as 🏳️🌈 and therefore requires two backspaces to delete
function handleDeleteEmoji(event, inputRef, inputName, message, handleChange) {
  const isFirefox = navigator.userAgent.includes('Firefox');
  // if backspace is pressed, get the grapheme directly behind the cursor (character to be deleted)
  if (isFirefox && event.code === 'Backspace') {
    const cursorIndex = inputRef.current.selectionStart;
    const graphemesArray = splitter.splitGraphemes(message.slice(0, cursorIndex));
    const lastGrapheme = graphemesArray[graphemesArray.length - 1];
    // if the last grapheme is an emoji, remove it from the message
    if (isEmoji(lastGrapheme)) {
      event.preventDefault();
      const updatedMessage = message.slice(0, cursorIndex - lastGrapheme.length) + message.slice(cursorIndex);
      handleChange(inputName, updatedMessage);
    }
  }
}

export default handleDeleteEmoji;
