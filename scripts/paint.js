import { getPaint } from './database.js'

const paint = getPaint()

export const Paint = () => {
    let html = "<h2>Paint</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paint.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}