// 📘 React Revision Notes (Why & What)
// 1. What is React?
// Library (not framework) for building UI using components
// Created & maintained by Meta (Facebook)
// Declarative → you describe what UI should look like, React handles how
// Component-based → reusable pieces
// Uses Virtual DOM for performance

// 2. Why React? (Top 5 Reasons)
// #	Reason	One-Liner
// 1	Declarative	Say what, not how
// 2	Component-based	Reusable, testable UI pieces
// 3	Virtual DOM	Fast updates via diffing + reconciliation
// 4	Unidirectional data flow	Data down → events up (predictable)
// 5	Ecosystem	React Native, Next.js, huge community

// 3. React vs Vanilla JS (Interview Cheat Sheet)
// Vanilla JS	React
// Imperative (step-by-step DOM commands)	Declarative (state → UI)
// Manual DOM updates (innerHTML, appendChild)	Automatic re-renders
// Hard to scale	Scales naturally
// No component encapsulation	Components with props/state
// Direct DOM manipulation (slow at scale)	Virtual DOM (fast)

// 4. Virtual DOM Explained (3 Steps)
// React creates a virtual DOM (lightweight JS object copy of real DOM)
// On state change, new virtual DOM is created
// Diffing algorithm finds differences → Reconciliation updates only changed parts in real DOM

// 🧠 Memory trick: Virtual DOM = blueprint, Real DOM = actual house. Change blueprint, only repaint changed walls.

// 5. When NOT to use React
// Use React ✅	Skip React ❌
// Dashboards, social apps, e-commerce	Static blogs, landing pages, portfolios
// Frequent state changes	Content doesn't change
// Large team, long-term maintenance	One-page brochure site
// Interactive UI	HTML + CSS is enough

// 6. Common Interview Q&A (Quick Version)
// Q: Is React a framework?
// A: No — it's a library for the View layer only. You add routing (React Router), state (Redux/Zustand), etc.

// Q: Why virtual DOM?
// A: Real DOM manipulation is slow. Virtual DOM batched updates = faster.

// Q: React vs Angular?
// A: React is flexible, unopinionated, JSX. Angular is full framework, TypeScript-first, more boilerplate.

// Q: Can you use React without JSX?
// A: Yes — React.createElement() but JSX is cleaner.

// 7. Quick Memory Map
// text
// WHY REACT?
//     │
//     ├── Declarative (state => UI)
//     │
//     ├── Components (reusable + maintainable)
//     │
//     ├── Virtual DOM (performance)
//     │
//     ├── One-way data flow (debuggable)
//     │
//     └── Ecosystem (jobs + libraries)

// 8. Key Terms Glossary (5 min refresh)
// Term	Definition
// Declarative	Code describes outcome, not steps
// Imperative	Step-by-step instructions
// Component	Independent, reusable UI piece
// Virtual DOM	JS representation of real DOM
// Diffing	Comparing old vs new virtual DOM
// Reconciliation	Updating real DOM based on diff
// Unidirectional flow	Data flows parent → child only
// State	Data that changes over time
// Props	Read-only data passed from parent

// 9. Your Self-Check Questions (Answer in 1 sentence)
// Why is React declarative better for large apps?
// → Less bug-prone because you don't manually sync DOM with state.

// What problem does Virtual DOM solve?
// → Prevents slow, unnecessary real DOM manipulations.

// Name one app that should NOT use React.
// → A personal blog with static content.

// What happens when you call setState?
// → React re-renders the component and its children (unless memoized).

// Is React faster than vanilla JS always?
// → No — for tiny apps, vanilla can be faster. React wins at scale.

// 🔥 Pro Tip for Interview
// When they ask "Why React?", use this 3-sentence structure:

// "We use React because it makes UI development predictable through declarative code. Its component model keeps large codebases maintainable. And the virtual DOM gives us performance without manual optimization."

// REACT CORE CONCEPTS CHEATSHEET

// 1️⃣ WHY REACT EXISTS
// Problem: Manual DOM sync is bug-prone at scale
// Solution: Declarative UI (state → view)

// 2️⃣ SPA (Single Page Application)
// Load HTML once, JavaScript updates content
// No page reloads → feels like desktop app
// Trade-off: Bigger initial bundle

// 3️⃣ VIRTUAL DOM
// Step 1: State change
// Step 2: Create new virtual DOM tree
// Step 3: Diff with old virtual DOM
// Step 4: Calculate minimal changes
// Step 5: Batch update real DOM once

// 4️⃣ COMPONENT ARCHITECTURE
// Break UI into independent, reusable pieces
// Each component = isolated, testable, maintainable
// Props flow down, events flow up
// =======================================================================

// 2. JSX
// Topics:
// JSX syntax
// Expressions inside JSX
// Dynamic rendering
// className
// Fragments

// 1️⃣ JSX/SYNTAX RULES
// - One parent element
// - All tags close
// - camelCase attributes
// - className (not class)
// - htmlFor (not for)

// 2️⃣ EXPRESSIONS {}
// - Variables: {name}
// - Math: {age + 1}
// - Ternary: {isLoggedIn ? 'Yes' : 'No'}
// - Functions: {formatDate(date)}
// - DON'T use if/for/while

// 3️⃣ DYNAMIC RENDERING
// - Ternary: condition ? <A /> : <B />
// - && : {condition && <Component />}
// - Map: {array.map(item => <div>{item}</div>)}

// 4️⃣ className
// - Template: `class ${condition && 'active'}`
// - Join: ['base', isActive && 'active'].filter(Boolean).join(' ')

// 5️⃣ FRAGMENTS
// - Short: <> </>
// - Long: <React.Fragment>
// - Use long when need key prop

// 🎯 Interview Questions & Answers
// Q1: Why JSX? Why not just use React.createElement?
// "JSX is syntactic sugar. It makes code readable and maintainable. While you can use React.createElement, JSX prevents callback hell and looks like the final HTML."

// Q2: Can browsers understand JSX?
// "No. JSX is transformed by Babel or TypeScript into React.createElement calls before reaching the browser."

// Q3: Why use Fragments?
// "To return multiple elements from a component without adding extra DOM nodes. Important for table rows, flex/grid layouts, and avoiding div soup."

// Q4: Difference between {} for expressions and {{}} for objects?
// "Single {} for JavaScript expressions. Double {{}} when you want to pass a JavaScript object literal: style={{ color: 'red' }}—outer {} is JS, inner {} is object literal."

// =============================================================================================================
// // COMPONENTS CHEATSHEET
// 3. Components
// Learn:
// Functional components
// Reusable components
// Component structure

// 1️⃣ FUNCTIONAL COMPONENT STRUCTURE
const Component = ({ prop1, prop2 }) => {
  // State, effects, handlers
  return <div>{prop1}</div>;
};

// 2️⃣ REUSABLE COMPONENT PATTERNS
// - Configurable via props
// - Children prop for composition
// - Default props
// - Conditional rendering

// 3️⃣ BEST PRACTICES
// - One component per file
// - Keep components small (< 200 lines)
// - Use meaningful names (PascalCase)
// - Props should be readonly
// - Component = pure function of props

// 4️⃣ COMPONENT COMPOSITION
// - Children: <Card><p>Content</p></Card>
// - HOC: withAuth(Component)
// - Render props: <DataProvider render={data => <View data={data} />} />