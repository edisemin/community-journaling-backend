const dataBase = {
    image: {
        comments: [{'first comment' : {
            reply: ['reply 1', 'reply 2', 'reply 3'],
            emoji1: {
                isThere: true,
                number: 5
            },
            emoji2: {
                isThere: false,
                number: 0
            },
            emoji3: {
                isThere: true,
                number: 1
            }
        }}
        , {'second comment' : {
            
            reply: ['reply 1', 'reply 2', 'reply 3'],
            emoji1: {
                isThere: false,
                number: 0
            },
            emoji2: {
                isThere: true,
                number: 4
            },
            emoji3: {
                isThere: true,
                number: 1
            }
        }
        }
        , {'third comment' :  {
            reply: ['reply 1', 'reply 2', 'reply 3'],
            emoji1: {
                isThere: true,
                number: 20
            },
            emoji2: {
                isThere: true,
                number: 3
            },
            emoji3: {
                isThere: false,
                number: 0
            }
        }
    }
    ]}
}

module.exports = dataBase
