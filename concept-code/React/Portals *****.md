# Real Use Cases for React Portals

[Modals/Dialogs]: `Modals often need to be rendered at a higher z-index than other elements, and portaling helps ensure they are not constrained by parent styles.`

[Tooltips]: `Tooltips need to appear above other elements and should not be constrained by the parent element's overflow or positioning styles.`

[Dropdown Menus](:) `Similar to tooltips, dropdowns need to appear above other elements.`

[Notifications/Toasts]: `These often need to be rendered in a specific position on the screen, independent of the component structure.`

[Overlays]: `Full-screen overlays, such as loaders or confirm dialogs, can benefit from being rendered outside the main DOM hierarchy to avoid CSS conflicts.`
