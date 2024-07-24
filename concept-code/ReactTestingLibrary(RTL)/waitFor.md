# When to Use waitFor

[Waiting for Element Appearance/Disappearance](): `When you expect an element to appear or disappear from the DOM after some asynchronous operation.`
[Waiting for State Changes](): `When a component's state changes based on an` _asynchronous operation._
[Waiting for API Calls](): `When you need to wait for data to be fetched and rendered in the component.`

**Best Practices**

[Use findBy When Possible](): `Prefer findBy queries when you need to wait for an element to appear, as they are simpler and more readable. Use waitFor for more complex conditions.`
`Avoid Overusing waitFor: Only use waitFor when necessary. Overuse can make tests slower and more complex.`
