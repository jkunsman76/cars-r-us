import { Interior } from './interior.js';
import { Paint } from './paint.js';
import { Technology } from './tech.js';
import { Wheels } from './wheels.js';

export const carsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
                ${Paint()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__tech options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        
        </article>
    `
}