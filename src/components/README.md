# README.md

## Developer note

The following describes the reasoning in the components and styles structure.

### Components directory

All react components live in this directory and is structured by
fat `Container` and skinny `Presentational` components. Following a pattern
described by Dan Abramov, co-creator of "Create React App', it helps
developers to reason by;

- Seperations of concerns,
- Reusability,
- Clean testible code where presentational components does not alter logic
- Enforce layout abstraction

Summarizing this pattern, components can be thought of

- How it looks: stateless, just render OR
- How it Works: stateful, service or data source

[Further reading...](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

Given that, all ***Container*** components is place in `/Containers` directory, everything else
that is a presentational component in this location.

--

### Styling Components and CSS

The adopted CSS writing style is using `styled-components` that have existing CSS support and adapted
properties ie. ``${props => props.color...` in additional, readability making it easy to trace
since they live in a single file comparing component with the style. It is expressed in literal
template strings which I find disappointing for having lacked CSS properties type-hinting.

Although preference of SMACSS structure, I haven't it as a requirement or having duplicated alot of
styles for this small-sized webapp. However in one or two cases, I've have resolved in import the CSS
file directly where reasonable.

--

### Event order:

this.setState() / this.forceUpdate()
```
shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
```

PropertyChange

```
componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
```
