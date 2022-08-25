const getTheTitles = function(obj) {
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
        arr.push(obj[i]['title']);
    }
    return arr;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
