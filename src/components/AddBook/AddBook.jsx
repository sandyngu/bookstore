import React from 'react';
import { connect } from "react-redux";
import { addArticle } from "../../actions";

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const { title } = this.state;
      this.props.addArticle({ title });
      this.setState({ title: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button type="submit">SAVE</button>
                </form>
            </div>
        );
    }
};

const Form = connect(
    null,
    mapDispatchToProps
  )(AddBook);

export default AddBook;
