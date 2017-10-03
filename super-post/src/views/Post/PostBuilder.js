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

    onPost() {
        fetch("http://badillosoft.herokuapp/api/post/new", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                content: this.state.draft
            })
        }).then(result => result.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }
        });
    }

    render() {
        return <div className="post-builder">
            <textarea onChange={e => this.updateDraft(e.target.innerText)} placeholder="Que estás pensando..."></textarea>
            <button onClick={e => this.onPost()} >publicar</button>
        </div>;
    }

}