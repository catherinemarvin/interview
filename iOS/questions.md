* What are some advantages and disadvantages of subclassing, especially with a large class hierarchy?
  * Code reuse limits complexity: subclassing vs. composition
  * Subclassing inherits interface and implmenetation and describes the hierarchy at compile time
  * Composition combines code and describes the runtime object graph
  * Subclassing conflates interface and implementation reuse and tightly couples subclasses to their superclass
    * Every change to the superclass affects each subclass, and vice versa.
* Have you ever used the Objective-C runtime functions?
  * What are some considerations you need to be aware of when using associated objects or swizzling?
  * Is it inherently bad to use the runtime like this?
* KVO vs NSNotifications vs Delegates
  * When would you use one over the other?
* What kind of issues should you be aware of when working with blocks?
  * Calling a nil block will crash the app
  * Strong reference cycles when capturing self
* When should you use blocks instead of delegate callbacks?
  * Blocks make it easy to see in one place what will happen before/after the task
  * Delegates introduce a lot of cruft
* GCD vs NSOperationQueue
* UIView construction: Autolayout vs. frame based layout vs. xib vs storyboards
  * Pros, cons, and best practices when working with storyboards
* What high-level architecture design patterns have you used for iOS development?
  * What is MVC?
  * What are its strengths and weaknesses?
  * Have you used any other patterns? (MVVM, VIPER, etc.)
* When is an appropriate use of a singleton and what issues can it create?
  * Global state!
  * Persistent state is the enemy of unit testing
  * Lifecycle: it becomes difficult to "shut down" a singleton.
  * If state is scoped to any session shorter than “a complete lifecycle of my app,” that state should not be managed by a singleton. A singleton that’s managing user-specific state is a code smell, 
* What other design patterns do you commonly use? (state, command, delegate, adapter, singleton, etc.)
* Networking
  * How do you handle asynchronous networking?
  * NSURLSession vs. third-party libraries like AFNetworking
  * How would you parse a network response from JSON into code objects?
* Core Data
  * How is Core Data different from straight SQLLite?
    * What is an ORM? Core Data almost always uses SQLLite
    * SQLLite is faster, but speed is not what Core Data tries to solve
    * Core data supports opening an archive of objects, tracking changes to the objects
    * Managed Object Context serves as a gateway to a persistence stack that mediates between the objects in the application and the external data store
    * Persistent Object stores.
* Favorite 3rd party libraries?
  * How do you evaluate when to use a library or when to build something yourself?
  * How do you pick between multiple similar libraries?
* What API would you add or improve on iOS?
* Have you ever used a testing framework?
  * What do you think the role of testing is?
* What kinds of problems do you enjoy working on?
* How do you feel about Swift?

General Questions

* Why did you start learning iOS?
* What are your favorite development tools?
* What are you most excited about learning?
