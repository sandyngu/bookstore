import './App.css';
import React from 'react';
import Booklist from './components/Booklist/Booklist';
import Book from './components/Book/Book';
import AddBook from './components/AddBook/AddBook';
import EditBook from './components/EditBook/EditBook';
import DeleteBook from './components/DeleteBook/DeleteBook';

class App extends React.Component {

  state = {
    books: [
      {
        id: 1,
        title: 'The Hunger Games',
        price: '$9.96',
        category: 'Young Adult, Adventure, Science Fiction',
        description: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.'
      }, {
        id: 2,
        title: 'Harry Potter and the Order of the Phoenix',
        price: '$6.98',
        category: 'Action, Adventure, Fantasy',
        description: `There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop. As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice. His fate depends on them all.`
      }, {
        id: 3,
        title: 'To Kill a Mockingbird',
        price: '$7.19', 
        category: 'Bildungsroman, Southern Gothic', 
        description: ''
      }, {
        id: 4,
        title: 'Pride and Prejudice',
        price: '$9.99', 
        category: 'Regency Romance', 
        description: ''
      }, {
        id: 5,
        title: 'Twilight',
        price: '$9.23', 
        category: 'Young Adult, Romance, Fantasy', 
        description: 'It is the first book in the Twilight series, and introduces seventeen-year-old Isabella "Bella" Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body.'
      }, {
        id: 6,
        title: 'The Book Thief',
        price: '$19.99', 
        category: 'Young Adult, Historical', 
        description: `It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still. By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found. But these are dangerous times. When Liesel's foster family hides a Jew in their basement, Liesel's world is both opened up, and closed down. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time.`
      }, {
        id: 7,
        title: 'Animal Farm',
        price: '$11.99', 
        category: 'Allegory, Political Satire', 
        description: 'A group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, however, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.'
      }, {
        id: 8,
        title: 'The Giving Tree',
        price: '$9.77', 
        category: `Picture Book, Children's Literature`, 
        description: 'The Giving Tree considers the nature of altruism and the obligation to give of oneself in a relationship.'
      }, {
        id: 9,
        title: 'The Fault in Our Stars',
        price: '$14.84', 
        category: 'Young Adult, Romance', 
        description: `The Fault in Our Stars is a novel which tells the story of Hazel Grace Lancaster, a 16 year old girl who has had cancer for three years, and Augustus 'Gus' Waters, a 17 year old boy who’s now in remission, and once had a tumour in his leg. The two fall hopelessly in love, even though they know their story will only end in heartbreak.`
      }, {
        id: 10,
        title: 'Gone With the Wind',
        price: '$18.62', 
        category: 'Romance, War, Epic, Drama, Historical', 
        description: `Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea.`
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Booklist/>
        <AddBook/>
      </div>
    );
  };
};

export default App;
