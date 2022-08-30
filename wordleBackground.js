
function wordleBackground(){
    
  const htmlWord=   'works';


























  let correctWord = 'works';
  let correctWordDouble = true;
  let correctWordDoubleIndex1 = 2
  let correctWordDoubleIndex2 = 3
  const module = require('./wodlePossibleWords.js')

  function ifWordPossible(resolve, reject){
    if(module.ifWord(htmlWord) === true && htmlWord.length === 5){
      resolve('')
    }
    else if(module.ifWord(htmlWord) === false || htmlWord.length !== 5){
      reject('Invalid Word')
    }
 }
  function handleSuccess(input) {
    console.log(input)
 }
  function handleFailure(input) {
    console.log(input)
  }
  new Promise(ifWordPossible).then(handleSuccess).catch(handleFailure);
  let hWL2 = ''
  let hWL = ''
  let doubleLetter = false
  let doubleIndex1 = 0
  let doubleIndex2 = 0
  let repeatedCounter = 0;
  let repeatedCounterInner = 0
  let multipleVars = [false, 0, 0]
  function smallLogic(hWL, hWL2, ii, jj, multipleVars){
      if(hWL === hWL2 && ii !== jj){
          multipleVars[0]= true
          multipleVars[1]= ii
          multipleVars[2]= jj
          
      }
      return multipleVars
  }
  for(let ii = 0; ii < 5;ii++){
      hWL = htmlWord[ii]
      for(let jj = 0; jj < 5;jj++){
          hWL2 =htmlWord[jj]
          multipleVars = smallLogic(hWL, hWL2, ii, jj, multipleVars);
          if(multipleVars[0] === true){
            doubleLetter = multipleVars[0]
            doubleIndex1 = multipleVars[1]
            doubleIndex2 = multipleVars[2]
          }  

      }
  }


  let htmlWordLetter;
  let correctWordLetter;
  let something = false;
  let nothingCounter;
    
  class ColorsHtml{
    constructor(list){
      this._1 = list[0]
      this._2 = list[1]
      this._3 = list[2]
      this._4 = list[3]
      this._5 = list[4]
    }
    get _one(){
      return this._1
    }
    get _two(){
      return this._2
    }
    get _three(){
      return this._3
    }
    get _four(){
      return this._4
    }
    get _five(){
      return this._5
    }
    }
  let colorsStorage = []
  let multipleVars2 = [0, 0, 0];
  function logic(correctWordDoubleIndex1, correctWordDoubleIndex2, repeatedCounterInner, multipleVars2, correctWordLetter, htmlWordLetter, correctWordIterator, htmlWordIterator, nothingCounter, colorsStorage, doubleLetter, correctWordDouble, doubleIndex1, doubleIndex2, repeatedCounter){
    if(!doubleLetter){
      if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
          colorsStorage.push('green')
      }
      else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
          colorsStorage.push('yellow')
      }
      
      else if(htmlWordLetter !== correctWordLetter){
          nothingCounter++;
      }
      else{
          console.log('d')
      }
      multipleVars2[1] = repeatedCounter;
      multipleVars2[0] = nothingCounter;
      return multipleVars2;
      
  }
    else if(correctWordDouble === false){
      if(htmlWordIterator !== doubleIndex1 && htmlWordIterator !== doubleIndex2){
          if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
              colorsStorage.push('green')
          }
          else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
              colorsStorage.push('yellow')
          }
            
          else if(htmlWordLetter !== correctWordLetter){
              nothingCounter++;
          }
          else{
              console.log('d')
          }
          multipleVars2[1] = repeatedCounter;
          multipleVars2[0] = nothingCounter;
          return multipleVars2;
      }
      else if(htmlWordIterator === doubleIndex1 || htmlWordIterator === doubleIndex2){
          if(repeatedCounter === 1){

              if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
                  colorsStorage.push('green')

              }
              else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
                  colorsStorage.push('yellow')

              }
                  
              else if(htmlWordLetter !== correctWordLetter){
                  nothingCounter++;
              }
              else{
                  console.log('d')
              }
              multipleVars2[0] = nothingCounter;
              multipleVars2[1] = repeatedCounter;
              return multipleVars2;
          }
          else{
            if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
              colorsStorage[correctWordIterator] = 'green'
              colorsStorage[correctWordIterator-1] = 'gray'
            }
            else{
                nothingCounter++;
              }
            multipleVars2[0] = nothingCounter;
            multipleVars2[1] = repeatedCounter;
            return multipleVars2;
          
          }
          
          }
      }
    else{
      if(htmlWordIterator === doubleIndex1 || htmlWordIterator === doubleIndex2){
        if(correctWordDoubleIndex1 === correctWordIterator || correctWordDoubleIndex2 === correctWordIterator){
        repeatedCounterInner++;
          if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
              colorsStorage.push('green')
          }
          else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
              colorsStorage.push('yellow')
          }
            
          else if(htmlWordLetter !== correctWordLetter){
              nothingCounter++;
          }
          else{
              console.log('d')
          }
          if(repeatedCounterInner === 3){
            repeatedCounterInner = 0
            if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
              colorsStorage.pop()
              colorsStorage.pop()
              colorsStorage.push('green')
          }
        }
        }
        else{
          if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
          colorsStorage.push('green')
          }
          else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
              colorsStorage.push('yellow')
          }
            
          else if(htmlWordLetter !== correctWordLetter){
              nothingCounter++;
          }
          else{
              console.log('d')
          }
        }
        multipleVars2[1] = repeatedCounter;
        multipleVars2[0] = nothingCounter;
        return multipleVars2;
        
      }
      else{
        if(htmlWordLetter === correctWordLetter && correctWordIterator === htmlWordIterator){
          colorsStorage.push('green')

       }
        else if(htmlWordLetter === correctWordLetter && correctWordIterator!==htmlWordIterator){
            colorsStorage.push('yellow')

        }
            
        else if(htmlWordLetter !== correctWordLetter){
            nothingCounter++;
        }
        else{
            console.log('d')
        }
        multipleVars2[2] = repeatedCounterInner
        multipleVars2[0] = nothingCounter;
        multipleVars2[1] = repeatedCounter;
        return multipleVars2;
      }
      
      }
    }
    for (let htmlWordIterator = 0;htmlWordIterator < 5;htmlWordIterator++){
      htmlWordLetter = htmlWord[htmlWordIterator]
      nothingCounter = 0
      if(doubleLetter && !correctWordDouble){
        if(htmlWordIterator === doubleIndex1 || htmlWordIterator === doubleIndex2){
          repeatedCounter++;
        }
        }
    for(let correctWordIterator = 0;correctWordIterator < 5;correctWordIterator++){
      correctWordLetter = correctWord[correctWordIterator]
      multipleVars2 = logic(correctWordDoubleIndex1, correctWordDoubleIndex2, repeatedCounterInner, multipleVars2, correctWordLetter, htmlWordLetter, correctWordIterator, htmlWordIterator, nothingCounter, colorsStorage, doubleLetter, correctWordDouble, doubleIndex1, doubleIndex2, repeatedCounter)
      nothingCounter = multipleVars2[0]
      repeatedCounter = multipleVars2[1]
      repeatedCounterInner = multipleVars[2]
      if(nothingCounter >= 5){
        colorsStorage.push('gray')
      }
    }
  }

  let colorsNewClass = new ColorsHtml(colorsStorage)  
  return colorsNewClass;
}
  
  colorsNewClass = wordleBackground()
  console.log(colorsNewClass._one)
  console.log(colorsNewClass._two)
  console.log(colorsNewClass._three)
  console.log(colorsNewClass._four)
  console.log(colorsNewClass._five)