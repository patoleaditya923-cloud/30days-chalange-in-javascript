async function searchWord(){

    const word=document.getElementById("word").value.trim();

    const result=document.getElementById("result");

    if(word===""){

        result.innerHTML="<p class='error'>Please enter a word.</p>";
        return;
    }

    result.innerHTML="Loading...";

    try{

        const response=await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if(!response.ok){

            throw new Error("Word not found");
        }

        const data=await response.json();

        const info=data[0];

        result.innerHTML=`

        <div class="word">${info.word}</div>

        <div class="phonetic">
            ${info.phonetic || ""}
        </div>

        <div class="meaning">

            <h3>Meaning</h3>

            <p>
            ${info.meanings[0].definitions[0].definition}
            </p>

        </div>

        `;

    }

    catch(error){

        result.innerHTML=`
        <p class="error">
        Word not found!
        </p>
        `;
    }

}