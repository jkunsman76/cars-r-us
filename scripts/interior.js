import {getInterior} from './database'

const interior = getInterior()

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interior.map( (interior) => {
            return `<option value="${interior.id}">${interior.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}