Automatic Code Splitting:Next.js automatically code-splits pages, so each page becomes a separate chunk. We don't need to do anything special for this.
Dynamic Imports: We'll use dynamic imports with the dynamic function from next/dynamic to split components.
import() Function: We'll use the standard import() function to import a module asynchronously at runtime.
Route-based Code Splitting: We'll define a dynamic route in the pages directory to demonstrate route-based code splitting.
