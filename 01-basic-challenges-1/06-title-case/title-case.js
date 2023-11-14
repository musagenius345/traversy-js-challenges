const titleCase = (str) => str.toLowerCase().split(' ').map((item) => item = item[0].toUpperCase() + item.slice(1)).join(' ')

module.exports = titleCase;
