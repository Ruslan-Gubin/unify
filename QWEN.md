# Project Context & Guidelines

## Project Overview
A project for collecting frequently reused UI components that may be needed in any project, as well as useful hooks, working with native css style, recipes for writing optimized code, drawing on canvas, without complicated solutions.

## Project Information
- Project Name: my-ui-kit.
- Project Type: Web application.
- Location: ~/code/projects/front/myui/
- Framework/Technology: Next 16.0.10, React 19.2.3, CSS.
- UI Components: native

### Technical Stack
# Programming languages - programming languages used
- Languages: TypeScript 5.x: Strong typing to ensure the reliability of UI interfaces.
- Modern CSS: Using native features (CSS Variables, Container Queries, Nesting, @layer).
- JavaScript (ESNext): For writing lightweight and productive hooks.
# Frameworks - basic frameworks
- Next.js 16.0.10 (App Router): A basic framework with an emphasis on server-side components (RSC).
- React 19.2.3: Using new APIs (use, Actions, extended Ref support).
# Build tools - build systems, package managers, etc.
- NPM: Fast and functional management of packages (replaced for monorepositories and libraries).
- Turbine Unit / Next Build: Optimized project build.
- Slimmer and more beautiful: To maintain the purity and diversity of the code.
# Testing - frameworks and testing tools
- Vitest: Quick launch of unit tests for hooks and logic.
- React Testing Library: Testing accessibility and interaction with components.
- Playwright (Visual Regression): To check the rendering of the Canvas and the visual integrity of the UI.
# Other - other important technologies
- HTML5 Canvas API: Native drawing without external abstractions.
- Web API: Using built-in browser solutions (Popovers, Dialog, Native Drag & Drop).
- CSS Modules: Optional for isolating component styles without losing nativity.

## Development Guidelines

### Code Style & Conventions

# Coding Standards - Define coding standards and guidelines
- **KISS (Keep It Simple, Stupid):** We avoid complex abstractions. If the component can be written in 50 lines of native code, we write 50 lines.
- **React 19 Standards:** Active use of the `use client` only at the boundaries of interactivity.
- KISS & YAGNI: Prioritize simplicity. If the solution can be implemented using native CSS instead of JS   logic, choose CSS.
- React 19 Ready: Using new hooks (use, useOptimistic) and default server components.
- Performance First: * For Canvas: mandatory resource cleanup and use of requestAnimationFrame.
- Minimizing unnecessary re-renders: using React.memo only where it is really necessary (heavy calculations).
- Native UI: No heavy external libraries. All components are based on semantic HTML (using <dialog>, <popover>, <details>).
- CSS: Only native CSS (or CSS Modules). Avoiding CSS-in-JS. Using CSS variables for theming.
- Progressive Enhancement: The component must remain readable and functional even with a minimal set of styles.
- A11y (Availability): Mandatory use of ARIA attributes and compliance with the hierarchy of headings. If the component cannot be used from the keyboard, it is not ready.
- Memory Management: Each useEffect with addEventListener or setInterval must have a cleanup function.
- DPI Awareness: All code for Canvas must take into account devicePixelRatio for clarity on Retina displays.
- Immutable State: The React state is updated only through immutable patterns. No direct mutations of objects inside the state.
- Server First: All components are Server Components by default. use client is added only to interactive elements (buttons, forms, canvases).
- Standardized Hooks: Each hook must return a predictable interface [state, actions].
- Reference Stability: When creating hooks and passing functions to components (especially for Canvas), always wrap handlers in useCallback and complex calculations in useMemo. This is critical to prevent endless redrawing cycles in conjunction with useEffect.

# Naming conventions - specify naming conventions for variables and functions
- Components: PascalCase (for example, CustomButton.tsx).
- Hooks: Use + camelCase prefix (for example, useCanvasDraw.ts).
- Handler functions: Prefix handle for internal functions (for example, handleClick) and on for props (for example, onClick).
- CSS Classes: kebab-case. The BEM Lite methodology (for example, button, button--primary, button__icon) is welcome for the purity of the structure.
- CSS variables: --ui-kit-[component name]-[property] (for example, --ui-kit-btn-bg).
- Boolean Variables: Must begin with the prefixes is, has, should, can. For example: isMounted, hasError, shouldRender.

# Style Guides - Mention any style guides that you follow
- TypeScript: Strict typing, but without fanaticism (we avoid any). Priority to types, for extensibility of interface components
- Code Documentation: Each hook or complex recipe can be accompanied by a short JSDoc comment with an example of use.
- Types/Interfaces.
- reusable components, for example (Modal, Input, Button, Select, etc.) should not contain business logic.
- Auxiliary functions (outside the component body).

### File Structure
# Description of the structure of project directories and its organization
- src/app/: Next.js App Router — Contains the page structure and site navigation.
- src/views/: Composition layer. This is where large site blocks (Layouts, Product Cards, Tables) are assembled using atomic components from shared/ui.
- src/shared/: The system core (reusable modules).
- src/shared/ui/: Atomic components (Button, Input, Modal). Each component is encapsulated within its own folder. This ensures high portability, allowing you to easily copy a component into other projects along with all its styles. CSS Modules or Vanilla CSS are used for style isolation.
- src/shared/hooks/: Contains state logic only. Hooks do not contain markup. For example, useCanvas manages the rendering context and the canvas lifecycle but does not perform the drawing itself.
- src/shared/services/: Contains classes or objects for interacting with external systems: Browser APIs, complex Canvas operations (Buffer, Offscreen rendering), Storage management, or network requests.
- src/shared/helpers/: A collection of Pure Functions for frequently used calculations, such as debounce, date formatting, mathematical calculations for graphics, or percentage computing.
- src/shared/svg/: SVG icons wrapped in React components for convenient prop management (color, size, etc.).

## How to Use Qwen Code Assistant

### Common Tasks You Can Request
1. **Code Review**: "Check this hook for working with PaginationObserver for compliance with our project standards. Are there any memory leaks, unnecessary re-renders, or incorrect naming conventions?"
2. Naming Audit: "Review the function and variable names in this file. If any names are ambiguous or violate our prefix rules (handle, is, fetch, etc.), suggest better alternatives that reflect their true intent."
3. **Bug Fixing**: My Canvas component is blurred on Retina displays. Fix the initialization function in src/shared/services/canvas so that it takes into account devicePixelRatio.
4. **Refactoring**: Move the coordinate calculation logic from the chart component to src/shared/helpers as a pure function to make it testable.
5. **Documentation**: Add a JSDoc description for the localStorage service. Describe the input parameters and return types for the setItem and getItem methods.
6. **Testing**: Write a unit test on Vitest for a helper that calculates the percentage aspect ratio for cropping images.
7. **Feature Implementation**: Implement a 'recipe' for infinite background animation on Canvas using requestAnimationFrame and proper resource cleanup in useEffect.
8. Performance Audit: "Analyze this Canvas component. Are there any new objects being created in the rendering cycle (for example, new Path2D()) or operations that can be moved outside the requestAnimationFrame?"


### Effective Prompting Tips
- Role-Based Interaction: Address the assistant as a "Senior Frontend Engineer" or "Performance Expert
- **Language**: Отвечай только на русском языке. Все пояснения и разборы кода должны быть русскоязычными.
- Context First: Always start the request by specifying the folder you are working on (for example, "Working in src/shared/services, implement...").
- Task Splitting: Divide complex tasks into sub-items: first the logic (hook/service), then the visual representation (component), functions should be optimized as much as possible, adhere to the best code writing practices, and have strict memory control.
- Strict TypeScript: Avoid using any. All interfaces must be clearly described.
- Minimalistic Code: Priority is given to the simplest and most readable solution (KISS). Avoid overcomplicated abstractions.
- File Naming: Follow the rule: one folder, one component, naming files in PascalCase, and auxiliary files in camelCase.
- Clean code: Never use line numbering inside code blocks. The code must be presented in a "clean" form inside standard Markdown blocks (with an indication of the language) so that it can be copied and pasted with one button without additional editing.
- Comments: Write all explanations to the code outside the code block. Only minimal jsdocs or important technical comments in Russian are allowed inside the code.

### Guiding Questions for Better Results
When working on tasks, consider asking:
- Portability Check: "Is it possible to transfer this component to another project by simply copying the folder, or is it too dependent on the global context?"
- CSS Architecture: "Are CSS variables used for theming so that the whale user can easily change colors and margins?"
- React 19 Patterns: "Do I use the new features of React 19 (for example, ref as a prop or useActionState) to make the code more modern and concise?"
- Memory & Cleanup: "Is there a risk of memory leaks in my code (especially in useEffect or services)? Are all subscriptions and timers cleared?"
- Edge Cases: "How will the component behave if there is too much data (overflow), or if the Canvas has zero size during initialization?"
- Performance Leak: "Does this component provoke unnecessary re-renders when changing the global state or scrolling the page?"
- Accessibility (A11y): "Does this UI element support keyboard navigation and are the ARIA attributes positioned correctly?"

## Available Tools & Capabilities

### File Operations
- `read_file`: Reads the contents of any file in the project. It is used to analyze existing components in src/shared/ui or logic in src/shared/services before making changes.
- `edit`: It is forbidden to edit files, only you can suggest options
- `write_file`: Creation of new files is prohibited, only suggest options.
- `glob`: Search for files using pattern matching.
- `list_directory`: Listing files and directories. Allows the assistant to navigate the project structure and check for folders in the src.

### Code Analysis
- `grep_search`: Search for patterns across the entire codebase. It is used to search for all mentions of a function or variable to ensure safe refactoring and naming verification in all modules.
- `read_many_files`: Reading multiple files at the same time. Allows the assistant to analyze the relationships (for example, between CanvasService, the useCanvas hook and the CanvasDrawer component) for a deep understanding of the context.
- `web_search`: Getting up-to-date information from the Internet. It is used to search for the latest updates in the React 19, Next documentation.js or W3C specifications for native CSS.
- `web_fetch`: Extracting content from specific URLs. It helps you analyze code examples from official repositories or articles on optimizing Canvas to implement best practices.list_directory: Listing files and directories. Allows the assistant to navigate the project structure and check for folders in the src.

### Execution & Testing
- `run_shell_command`: Executing shell commands. It is used to run local tests (npm test), TypeScript type-check (npm type-check), and execute build scripts. This ensures that the proposed code does not break the project.
- Background process support: Allows you to run long-running commands, such as the Next development server.js or the test monitoring mode (watch mode), so that the assistant can track errors in real time during the code writing process.

### Task Management
- `todo_write`: Track multi-step tasks and progress
- `save_memory`: Remember important project-specific information

### Specialized Assistance
- `task`: Delegate to specialized subagents for complex analysis

## Security & Best Practices
- Sanitize User Input: Any user input displayed on the page or rendered on the Canvas must be cleared of XSS vulnerabilities.
- Secure Storage: When working with src/shared/services/storage, do not save sensitive data in the clear. Use validation mechanisms when reading data.
- Dependency Minimization: Avoid adding new npm packages without a good reason. The fewer dependencies there are, the smaller the attack surface.
- Content Security Policy (CSP): Consider the limitations of CSP when generating code, especially when working with inline styles or dynamic script execution.
- No Secrets in Code: Never include API keys, access tokens, or passwords in the code base. Always use environment variables (.env).
- No PII: Do not use user Personal Information (PII) in mock data or documentation examples.
- Memory Safety (Canvas): Always remove event handlers and clean the requestAnimationFrame in the cleanup block of the useEffect hook to avoid memory leaks and browser freezes.
- Hydration Consistency: In The Next.js always make sure that the initial rendering on the server matches the client's (especially when working with window, document, or random numbers).
- Graceful Degradation: If the browser does not support a specific API (for example, OffscreenCanvas or Popover API), the code must provide a fallback or correctly disable the functionality.
- Accessibility First: The safety of use also includes accessibility. Components should not block keyboard control or mislead the user by the lack of focus.

## Project-Specific Notes
- Zero-Dependency Goal: The main business logic of the project is to minimize external dependencies. Prefer native Web APIs (Intersection Observer, Resize Observer, Popover API, Dialog API) instead of installing third-party libraries.
- Canvas Rendering Architecture: We use a "reactive" approach to Canvas. This means that the rendering logic is separate from the React loop, but synchronized via refs.
- CSS Variable Theming: All component styling should rely on global CSS variables (design tokens) defined in src/shared/styles/variables.css. This allows you to change the theme of the entire UI kit centrally.
- Strict Hydration: Considering the use of Next.According to js 16, the assistant must ensure that components do not call window or document until the moment of mounting (useEffect) in order to avoid hydration errors.
- Canvas Layering: If the task involves static and dynamic elements (for example, a grid and moving parts), suggest using the multi-layer canvas technique through absolute positioning so as not to redraw the static background every frame.

## Common Commands
- `npm run dev`: Launching the development server Next.js . It is used for previewing components and demo pages in src/app.
- `npm run test`: Running unit tests in Vitest or Jest. It is used for checking logic and rendering components.

## Troubleshooting
Problem: Error "Text content does not match" when using window, localStorage, or dynamic dates.
Solution: Make sure that the code using the Browser API is wrapped in useEffect or executed only after mounting the component. Use the [isMounted, setIsMounted] pattern if necessary.

## Cross-Validation Instructions
- Impact Analysis: Before making changes to src/shared/helpers or src/shared/services, the assistant must perform grep_search to identify all dependent components and hooks.
- Visual Consistency: When changing CSS variables in variables.css, it is necessary to check the display of at least three different components from src/shared/ui in order to exclude visual regressions.
- Portability Test: When creating a new component, make sure that it does not import anything from src/app or src/views. It should only depend on other shared elements.
- TypeScript Strictness: Checking that new changes have not resulted in implicit any or have not suppressed type errors via // @ts-ignore.
- Naming Review: Final reconciliation of function and variable names to match the approved project prefixes before completing the task.
- Check that the name of the components and or functions is correct and that the function itself corresponds to the task being performed.
- Check that the function is as clean as possible, optimized for memory and speed as much as possible.
