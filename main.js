import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://extra.codemotion.com/workshop-fest-it-2023-agenda/" target="_blank">
      <img src="https://extra.codemotion.com/app/uploads/2023/03/Logo_Payoff.png" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1># Codemotion Workshop Fest 2023!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Per maggiori informazion su Vite, clicca sul logo
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
