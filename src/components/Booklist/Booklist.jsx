import React from 'react';
import { connect } from "react-redux";
import Book from '../Book/Book';

function Booklist() {

    const mapStateToProps = state => {
        return { articles: state.articles };
      };
      
      const ConnectedList = ({ articles }) => (
        <ul>
          {articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      );
      
      const List = connect(mapStateToProps)(ConnectedList);
      
    return (
        <div>
            
        </div>
    );
};

export default Booklist;
