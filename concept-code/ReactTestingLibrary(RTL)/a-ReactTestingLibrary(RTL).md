[render],
[screen],
[getByText],
[getByRole],
[waitFor],
[fireEvent],
[toBeInTheDocument]

1. `render` _render(<Counter />);_

[To test the Counter component's functionality, rendering the component is essential because it creates the component tree and attaches it to the DOM. Without render(<Counter />);, the component wouldn't be instantiated, and its elements wouldn't be available for interaction or inspection in the test environment.]()

2. `screen`

[Yes, the screen object from the @testing-library/react library provides functions to query the rendered DOM, _but it only works after the component has been rendered_. The _render function_ from @testing-library/react is what actually mounts the component to a _virtual DOM_, making it possible for screen to find and interact with elements in the component.]()
