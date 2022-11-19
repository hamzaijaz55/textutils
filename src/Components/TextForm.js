
import React, {useState} from 'react'





function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('UpperCase button is clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your record is in Upper Case", "Success")
    }


    
    const handleLoClick = ()=>{
        console.log('LowerCase button is clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your record is in Lower Case", "Success")
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Your record is in Capitalized", "Success")
   }

   const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
      
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Your record is downloaded", "Success")
}

const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
    props.showAlert("Extra spaces is removed", "Success")
}

const handleSaveClick = (e)=>{
  
    localStorage.setItem("Text",text);
  }

  const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
    props.showAlert("Your data is in Sentence form", "Success")
  };

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
    props.showAlert("Your record has been reversed", "Success")
  };

  const handleRetrieve = (e)=>{
    // console.log("save clicked");
    let a =localStorage.getItem("Text");
    setText(a); 
    props.showAlert("Your record has been retrieved", "Success")
  }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listen to your record", "Success")
      }
    
    const handleClear = ()=>{
        console.log('Clear button is clicked' + text);
        let newText = "";
        setText(newText);
        props.showAlert("Your record has been cleared", "Success")
    }
    const handleOnChange = (event)=>{
        console.log('handleOnChange button is clicked');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("New text")
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            
            <textarea className='form-label col-lg-12' style={{backgroundColor: props.mode ==='dark'?'rgb(18 80 129)':'white' , color: props.mode ==='dark'?'white':'rgb(18 80 129)'}}  value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>

        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase </button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase </button>
        <button className='btn btn-danger mx-2' onClick={handleClear}>Clear </button>
        <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalize}>capitalize FirstLetter </button>
        <button className='btn btn-success mx-2'  onClick={downloadTxtFile}>Download Text</button>
        <button className='btn btn-info mx-2'  onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        <br/>
        <button className='btn btn-primary mx-2' onClick={handleSaveClick}>Save </button>
        <button className='btn btn-primary mx-2' onClick={handleRetrieve}>Retrieve</button>
        <button className='btn btn-danger mx-2' onClick={handleSentenceCaseClick}>Sentence Case </button>
        <button className="btn btn-warning mx-2 my-2" onClick={reversed} >Reversed</button>
       
    </div>
    <div className='container my-3'style={{color: props.mode ==='dark'?'white':'#042743'}} >
        <h1>Your text Summery</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008  * text.split(" ").length} Minutes to read me</p>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm;