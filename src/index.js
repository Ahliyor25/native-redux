import { createStore } from './createStore'
import { decrement, increment } from './redux/actions'
import { СounterReducer } from './redux/rootReducer'
import './styles.css'

const counter  = document.getElementById('counter') 
const addBtn  = document.getElementById('add') 
const subBtn  = document.getElementById('sub') 
const asyncBtn  = document.getElementById('async') 
const themeBtn =  document.getElementById('theme')

const store  = createStore(СounterReducer,  0)

counter.innerHTML = store.getState()

addBtn.addEventListener('click', () => {

        store.dispath(increment())
        counter.innerHTML = store.getState()
})


subBtn.addEventListener('click', () => {
dispath(decrement())
        counter.innerHTML = store.getState()
   
})

store.dispath({type: 'INIT_APPLICATION'})



asyncBtn.addEventListener('click', async () => {


});

// themeBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
//     render();
// })



