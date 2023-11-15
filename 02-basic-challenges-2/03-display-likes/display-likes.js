/**
     * Returns a string of who likes the post.
     * @param {string[]} names - The names of the people who like the post.
     * @returns {string} - A string of who likes the post.
     */
function displayLikes(names) {
  const [first, second, third, ...rest] = names
  let message
  switch (names.length) {
    case 0:
      message = 'no one likes this'
      break;
    case 1:
      message = `${first} likes this`
      break
    case 2:
      message = `${first} and ${second} like this`
     break;
    case 3:
      message = `${first}, ${second} and ${third} like this`
     break;
    default:
      message = `${first}, ${second} and ${rest.length + 1} others like this`
      break;
  }
  return message
}

module.exports = displayLikes;
