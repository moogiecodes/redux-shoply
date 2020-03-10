function formatName(name) {
  let words = name.split(" ");
  let newName = [];
  for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    newName.push(word);
  }
  return newName.join(" ");
}

export { formatName };