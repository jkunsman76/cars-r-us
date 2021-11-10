import { Interior } from './interior.js';
import { Paint } from './paint.js';
import { Technology } from './tech.js';
import { Wheels } from './wheels.js';
import { Orders } from './orders.js';
import { addCustomOrder } from './database.js'

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === 'orderButton') {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                ${Paint()}
            </section>
            <section class="choices__interior options">
                ${Interior()}
            </section>
            <section class="choices__tech options">
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
        </section>

        </article>

        <article>
        
            <button id="orderButton">Create Custom Order</button>

        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}