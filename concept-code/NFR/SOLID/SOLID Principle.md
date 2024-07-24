[Extensibility], [Reusability], [Maintainability], [Interchangeability], [Separation of Concerns]()

**Mind_Setup_for_SOLID**

1.  `Your classes/component are already on PROD`
2.  `Any change in existing code can create bug`
3.  `If you are working on a new class, think about`
    - `Reusability`

[This is the Only Right Way to Write React clean-code - SOLID](https://www.youtube.com/watch?v=MSq_DCRxOxw)

`The SOLID principles are a set of design principles in object-oriented programming that can help make your code more modular, maintainable, and scalable. Let's go through each principle with an example of a React component.`

# 1. Single Responsibility Principle (SRP)

_A class/component should have only one reason to change, meaning it should have only one job or responsibility._

# 2. Open/Closed Principle (OCP) with Higher-Order Components

_Software entities should be open for extension but closed for modification._

**Benefits:**

[Extensibility]: `The Button component can now have logging functionality without changing its implementation.`
[Reusability]: `The withLogging HOC can be applied to any other component that needs similar logging behavior.`
[Maintainability]: `Keeping the logging logic separate from the Button component adheres to the OCP and makes the codebase easier to manage.`

# 3. The Liskov Substitution Principle (LSP)

`It is a key concept in object-oriented design, and it states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. This principle ensures that a subclass can stand in for its superclass and that the program will still work correctly.`

`In simpler terms, if class B is a subclass of class A, then we should be able to replace A with B without disrupting the behavior of the program. This principle helps in designing robust and interchangeable components in software development.`

# 4. Interface segregation principle

`Imagine you have a remote control that can operate your TV, DVD player, sound system, and lights.` _Instead of having one remote with all the buttons_, `you have separate remotes for each device. Each remote only has the buttons necessary for that specific device. This is what ISP advocates for in your code: small, focused interfaces.`

`Best example is Product component with Image component and pass onlt image src/alt to it, instead`
`of entire product object {}`

_Clients should not be forced to depend on interfaces they do not use._

`In simpler terms, it means that no class should be forced to implement methods it does not need. Instead of one fat interface, multiple smaller and more specific interfaces are preferred so that classes only need to implement the methods that are relevant to them.`

[Component Props Segregation]() `Ensure that your` _components only receive the props they actually need._ `This avoids bloating the component with unnecessary data and methods, making it easier to read and maintain.`

**Key Points of the Interface Segregation Principle:**

1. [Specific Interfaces](): Instead of creating a large, all-encompassing interface, create smaller, more specific interfaces. Each interface should only include methods that are relevant to a particular client or module.

2. [Avoid Fat Components](): Don't force a component to implement methods or props that it doesn't need. This reduces complexity and makes the component easier to understand and maintain.

3. [Role-Specific Interfaces](): In practical terms, for React components, this means creating role-specific props or context rather than passing down large objects with many properties, some of which may not be used by all components.

# 5. Dependency Inversion Principle (DIP)

`It states that high-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).`

`Dependency Inversion in React involves ensuring that high-level components don't directly depend on low-level components. Instead, both should rely on abstractions, like props or context, to foster flexibility and maintainability. This promotes modularity, simplifies testing, and allows for easier code maintenance.`

`Adhering to the Dependency Inversion Principle in React leads to a` 1. _more scalable architecture with better separation of concerns._ 2. _It simplifies unit testing by enabling easy mockup of low-level components, enhancing control and precision in testing high-level components._

**In Exercise: Benefits of This Approach:**

1.  [Reusability]: `The BookForm component can be reused for both creating and editing a book. This reduces code duplication and makes the codebase easier to maintain.`

2.  [Separation of Concerns](): `The form UI is separated from the business logic of handling form submission. This makes each part of the code easier to understand and maintain.`

3.  [Flexibility]: `If the form UI needs to change, it can be done in one place (BookForm), and all forms using this component will automatically reflect the changes. Similarly, if the submission logic changes, it can be updated in CreateBookForm or EditBookForm without affecting the form UI.`

4.  [Testability]: `It's easier to test the BookForm component separately from the submission logic. You can also mock the onSubmit prop to test different submission scenarios.`
