import './App.css';
import Booklist from './components/Booklist/Booklist';
import Book from './components/Book/Book';
import AddBook from './components/AddBook/AddBook';
import EditBook from './components/EditBook/EditBook';
import DeleteBook from './components/DeleteBook/DeleteBook';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Booklist/>
      </div>
    );
  };
};

export default App;
