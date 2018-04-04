---
path: "/avoid-bind-in-react"
date: "2018-04-04T19:32:33.962Z"
title: "How to avoid .bind(this) in react components?"
description: "Shows you how to avoid an irritating function binding in react"
---

###The issue
*Disclaimer: examples are shown for typescript, but should work in .jsx files as well

When creating a new react component that needs to have state or 
lifecycle hooks you have to extend React.Component class:

```javascript
class MyComponent extends React.Component<{}, {}> {
    constructor(props){
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e) {
        console.log("wow!");
    }

    render() {
        return (
            <input 
                type="button" 
                value="Click me"
                onClick={this.handleButtonClick} 
            />
        )
    }
}
```
The above code works and it's fine, however the **.bind(this)** statement in the constructor
is some kind of a pitfall because we might forget it. 
And it also adds up excessive lines of code.

###The solution
So there are a couple of ways we can go about it

1. **My preferred method.**

This solves the issue and it is elegant and readable. Notice the **private readonly** access modifiers, they are not necessary per se, however they are protecting us from mutating the function, and as we know - immutability has a ton of value.

```javascript
class MyComponent extends React.Component<{}, {}> {
    constructor(props){
        super(props);
    }

    private readonly handleButtonClick = (e): void => {
        console.log("wow!");
    }

    render() {
        return (
            <input 
                type="button" 
                value="Click me"
                onClick={this.handleButtonClick} 
            />
        )
    }
}
```

2. **Anonymous wrapper with fat arrow syntax**

This basically does the same as the first solution, however it polluting the jsx
and you might forget about it again!

```javascript
class MyComponent extends React.Component<{}, {}> {
    constructor(props){
        super(props);      
    }

    handleButtonClick(e) {
        console.log("wow!");
    }

    render() {
        return (
            <input 
                type="button" 
                value="Click me"
                onClick={() => this.handleButtonClick()} 
            />
        )
    }
}
```

That's it! I hope this will help you write a bit better .jsx/.tsx code in the future!