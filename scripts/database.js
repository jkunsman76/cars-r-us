const database = {
    paint: [
        { id: 1, color: "Silver", price: 1000 },
        { id: 2, color: "Midnight Blue", price: 1500 },
        { id: 3, color: "Firebrick Red", price: 2000 },
        { id: 4, color: "Spring Green", price: 3000 }
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 100 },
        { id: 2, type: "Charcoal Fabric", price: 200 },
        { id: 3, type: "White Leather", price: 250 },
        { id: 4, type: "Black Leather", price: 300 }
    ],
    technology: [
        { id: 1, tech: "Basic Package", price: 800 },
        { id: 2, tech: "Navigation Package", price: 1400 },
        { id: 3, tech: "Visibility Package", price: 2000 },
        { id: 4, tech: "Ultra Package", price: 2500 }
    ],
    wheels: [
        { id: 1, size: "17-inch Pair Radial", price: 400 },
        { id: 2, size: "17-inch Pair Radial Black", price: 500 },
        { id: 3, size: "18-inch Pair Spoke Silver", price: 800 },
        { id: 4, size: "18-inch Pair Spoke Black", price: 1000 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1
        }
    ],
    orderBuilder: {
        timestamp: 1,
    }
}

export const getPaint = () => {
    return database.paint.map(Paint => ({ ...Paint }))
}
export const getInterior = () => {
    return database.interior.map(Interior => ({ ...Interior }))
}
export const getTech = () => {
    return database.technology.map(Technology => ({ ...Technology }))
}
export const getWheels = () => {
    return database.wheels.map(Wheels => ({ ...Wheels }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {

    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
