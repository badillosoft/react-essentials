import React, { Component } from 'react';

export default class PostBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            draft: ""
        };
    }

    updateDraft(newValue) {
        this.setState({
            draft: newValue
        });
    }

    addPost() {
        this.props.addPost(this.state.draft);

        document.getElementById("txt-draft").value = "";
    }

    render() {
        return <div className="post-builder">
            <textarea id="txt-draft" onChange={e => this.updateDraft(e.target.value)} placeholder="Que estás pensando..."></textarea>
            <button onClick={e => this.addPost()} >publicar</button>
        </div>;
    }

}