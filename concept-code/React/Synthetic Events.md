# What Are Synthetic Events?

`In React, synthetic events are a way to handle events (like clicks, typing, etc.) in a consistent manner across different browsers. They provide a layer of abstraction that normalizes the differences between browsers.`

**Why Use Synthetic Events?**

[Consistency]: `Different browsers handle events in slightly different ways. Synthetic events ensure you get the same behavior no matter what browser you're using.`

[Performance]: `React optimizes event handling by reusing event objects through a process called event pooling. This reduces memory usage and improves performance.`

# Summary

[Synthetic Events](): `React's way of handling events consistently across browsers.`
[Consistency]: `Provides a uniform API for event handling.`
[Performance]: `Uses event pooling to reuse event objects and save memory.`
[Event Pooling](): `Reuses event objects to improve performance.`
[Event Persistence](): `Use event.persist() if you need to access the event asynchronously.`

# Event Pooling

`To improve performance, React reuses (or pools) synthetic event objects. After an event handler finishes executing, the event object's properties are nullified, making it ready to be reused in future events. This is called event pooling.`

Key Properties of Synthetic Events
Synthetic events have the same properties as native events, such as:

target: The element that triggered the event.
type: The type of event (e.g., 'click').
preventDefault(): A method to prevent the default behavior (e.g., submitting a form).
stopPropagation(): A method to stop the event from bubbling up to parent elements.
