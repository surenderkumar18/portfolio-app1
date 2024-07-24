A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

The cool thing about render props, is that the component that receives the prop is very reusable. We can use it multiple times, passing different values to the render prop each time.

Although they’re called render props, a render prop doesn’t have to be called render. Any prop that renders JSX is considered a render prop! Let’s rename the render props that were used in the previous example, and give them specific names instead!
