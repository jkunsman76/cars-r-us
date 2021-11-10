import { getInterior } from "./database.js"
import { getPaint } from "./database.js"
import { getTech } from "./database.js"
import { getWheels } from "./database.js"
import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const Interior = getInterior()
    const Paint = getPaint()
    const Tech = getTech()
    const Wheels = getWheels()

    const foundInterior = Interior.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaint = Paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundTech = Tech.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheels = Wheels.find(
        (wheels) => {
            return wheels.id === order.wheelsId
        }
    )

    const totalCost = foundInterior.price + foundPaint.price + foundTech.price + foundWheels.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
</li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

