- [ ] Why would you use class component over function components (removing hooks from the question)?

Before hooks were invented, class components were used because they had extra features that were not available in functional components, such as lifecycle methods and state. Now that hooks are available, there is not as much need for using class components. It is still important to understand how to write class components because a lot of code has been written in class components and we need to understand how they work. We might have to use class components in our future jobs if the company that we work for tells us to.

- [ ] Name three lifecycle methods and their purposes.

ComponentDidMount is invoked immediately after a component is mounted. This is a good place to add event listeners or put an API call. 

ShouldComponentUpdate is used to stop a component from updating.

ComponentWillUnmount is invoked before a component unmounts. It is best used for cleanup like cancelling network requests.


- [ ] What is the purpose of a custom hook?

Custom hooks allow us to build reusable hooks that apply non-visual behavior and stateful logic.

- [ ] Why is it important to test our apps?


It is important to test our apps because even though it takes time to write tests, it can save time in the long run by helping us avoid bugs in our code and making sure everything is working correctly.