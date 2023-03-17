import React from "react";
import "./story.css";

export interface Choice {
  id?: string;
  text?: string;
  button: string;
  buttonStyle?: string;
}

interface StoryChunkProps {
  choices: Choice[];
  text: string;
  header: string;
  onChoiceClick: (choice: Choice) => any;
}

class StoryChunk extends React.Component<StoryChunkProps> {
  render() {
    return (
      <div className="story-chunk">
        <div className="story-content">
          <h2 className="story-header">{this.props.header}</h2>
          <p className="story-text">{this.props.text}</p>
        </div>
        {/*this.props.choices?.length && (
          <ul className="story-choices">
            {this.props.choices.map((choice) =>
              choice.text?.length ? (
                <li key={choice.id}>{choice.text}</li>
              ) : (
                <div />
              )
            )}
          </ul>
              )*/}
        <div className="choice-container">
          <div>
            {this.props.choices.map((choice, index) => (
              <button
                key={choice.id}
                className={`choice-btn choice${
                  choice.buttonStyle ?? (index % 3) + 1
                }`}
                onClick={() => this.props.onChoiceClick(choice)}
              >
                {choice.button}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StoryChunk;
