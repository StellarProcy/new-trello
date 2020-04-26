board = Board.create!(title: "Facebook")

column = Column.create(name: "To Do", board: board, position: 0)

Card.create!(
    [
        {
            title: "Martian Chronicles",
            description: "Cult book by Ray Bradbury",
            column: column,
            position: 1
        }, 
        {
            title: "The Martian",
            description: "A group of Marines is sent to the red planet via an ancient",
            column: column,
            position: 2
        }
    ]
)