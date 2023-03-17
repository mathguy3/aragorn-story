import React, { useState } from "react";
import "./App.css";
import StoryChunk, { Choice } from "./components/StoryChunk";
import storyChunks from "./data/story.json";
//import { getAiResponse } from "./ai/get-next-story";

interface IStoryChunk {
  text: string;
  header: string;
  choices: Choice[];
  accepted?: boolean;
}

function App() {
  const [state, setState] = useState({
    gameStarted: true,
    currentStoryChunk: storyChunks["0"],
    history: [storyChunks["0"] as IStoryChunk],
    showFace: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleChoiceSelection(choice) {
    //setIsLoading(true);
    /*const aiResponse: string = ""; /*await getAiResponse(
      "Generate a continuation of this current story, and the user's last choice. Also generate 1 to 3 new choices for the user. Generate the choices using the json format [{ text: '', button: '' }] where text is a long description of the choice, and button is a short description in 1 or 2 words. Also, generate a title at the end, prefaced with the text 'title:'\nHere is the story so far:\n" +
        state.history.map((x) => x.text).join("\n") +
        "\nHere is the user's last choice:" +
        (choice.text ?? choice.button)
    );*/
    //setIsLoading(false);
    /*const choiceStart = aiResponse.indexOf("[");
    const choices = aiResponse.slice(choiceStart, aiResponse.indexOf("]") + 1);
    const choiceObject = JSON.parse(choices);
    const storyChunk: IStoryChunk = {
      text: aiResponse.slice(0, choiceStart),
      header: aiResponse.slice(aiResponse.indexOf("title:")),
      choices: choiceObject,
    };*/
    setState({
      ...state,
      //history: [...state.history, storyChunk],
      showFace: false,
      currentStoryChunk: storyChunks[choice.nextChunkId] ?? storyChunks[420],
    });
  }

  return (
    <div className="App">
      <header className={`App-header ${state.showFace ? "with-face" : ""}`}>
        <StoryChunk
          text={state.currentStoryChunk.text}
          header={state.currentStoryChunk.header}
          choices={state.currentStoryChunk.choices}
          onChoiceClick={handleChoiceSelection}
        />
        {isLoading && <div>Loading...</div>}
      </header>
    </div>
  );
}

export default App;
