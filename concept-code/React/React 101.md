[User Interface](), [declarative UI programming](), [imperative programming]()
`Browser :` react.new

`React is a JavaScript library` _for building user interfaces_, `especially single-page applications where dynamic content needs to be rendered efficiently. `

[User Interface]() : `A user interface (UI) is the means through which a user interacts with a computer, system, or device. It includes the visual elements, commands, and interactions that allow a user to control and communicate with the software or hardware. User interfaces are designed to be intuitive and efficient, making it easier for users to accomplish their tasks.`

**React = declarative UI programming**

`In React,` _declarative UI programming_ `means describing the desired state of the user interface (UI) and letting React take care of updating the UI to match that state. Instead of specifying the` _step-by-step instructions_ `for how the UI should change` _(imperative programming),_ `you declare what the UI should look like for a given state, and React handles the rendering process.`

`defer`

<script src="script.js" defer></script>
<script src="script.js" async></script>
<script src="script.js" type="module"></script> // support import

Comparison, Loading Behavior, Execution Timing, Execution Order

[defer]
`Non-blocking`
`After the document is parsed`
`In the order they appear`

[async]
`Non-blocking`
`As soon as the script is downloaded`
`Not guaranteed`

[type="module"]
`Non-blocking`,
`deferred After the document is parsed`
`In the order they appear`

_If user disabled JavaScript on their Browser_
<noscript>
You need to enable JavaScript to run this app.
</noscript>

# function ?

`A block of code that will execute/invoke in future, when ever it get called. It is reusable.`

# Object

`To store multiple value togather.`

let name = 'test';
let age = 25;

_we can use Object_

`const Person = {`
`   name: "test",`
`   age: 25`
`}`
