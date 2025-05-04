export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "The Evil One",
            power: "Mind control"
        },
        {
            id: 2,
            name: "The Dark Lord",
            power: "Shadow manipulation"
        }
    ]
}

export const getVillains = () => {
    return structuredClone(database.villains);
}