export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    if (counter === 0)
      element.innerHTML = `Non hai ancora cliccato`
    else if (counter === 1)
      element.innerHTML = `Hai cliccato ${counter} volta`
    else
      element.innerHTML = `Hai cliccato ${counter} volte`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
