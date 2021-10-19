import { getWheels } from './database'

const wheels = getWheels()

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select your wheels</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.size}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
