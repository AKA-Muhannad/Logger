This is the best logger ever

**The useage of it**

```ts
import Logger from './Logger';

const logger = new Logger('context')

logger.info('hello')
```

**Why Logger?**

**Console.log:**
- Simplicity: It's a single function with a single purpose: outputting data to the console. Easy to use for quick checks.
- Conciseness: Syntax is straightforward: console.log(message). Perfect for basic debugging.
- Limitations:
- Destination: Only outputs to the browser's developer console or the Node.js console. Logs disappear when you refresh or close the console.
- No Levels: No way to categorize messages as debug, info, warn, or error. Makes filtering and prioritizing difficult.
- No Structure: Outputs data as plain strings, making analysis cumbersome.
- No Context: Lacks additional information like timestamps, filenames, or function names, hindering debugging.
- No Configuration: Not configurable. No control over how logs are displayed or stored.
**Loggers:**
- Versatility: Feature-rich libraries that provide a robust logging system.
- Multiple Outputs: Send logs to different destinations (console, files, databases, external services) depending on your needs.
- Log Levels: Define different levels (debug, info, warn, error) to categorize messages. Makes filtering and prioritizing logs more efficient.
- Structured Logging: Allow creation of structured logs using JSON or key-value pairs. This makes analysis and parsing much easier.
- Contextual Information: Can automatically include timestamps, filenames, function names, and other contextual data in the logs. Provides valuable information for debugging.
- Configuration: Highly configurable. You can control the logging behavior (what levels are logged, where they are sent, how they are formatted).

<br/>

<p align="center">
  <img width="627" alt="Screenshot 2024-08-04 at 23 09 21" src="https://github.com/user-attachments/assets/e9a7e8f6-33ad-4ac6-be8a-38babd26a1a0">
</p>

<br/>

* Performance and Thread Safety: While console.log is generally fast, in browsers it can be blocking, meaning the code execution might pause until the message is written to the console. Loggers typically offer non-blocking options, improving performance. Additionally, some loggers can ensure thread safety, which is crucial in a multi-threaded environment (not typically an issue in most browser JavaScript).
* Additional Benefits of Loggers:
- Rotation and Archiving: Loggers can automatically rotate log files when they reach a certain size, preventing disk space issues. They might also support archiving older logs.
- Error Handling: Loggers can handle errors gracefully, for example, by retrying to send a log message in case of network issues.
- Remote Logging: Some loggers can send logs to a central server for centralized management and analysis.
* Choosing the Right Tool:
- Development and Debugging: console.log remains a great choice for quick debugging and checking values during development.
- Production and Robust Logging: Loggers are essential for production environments. They provide a structured, reliable, and scalable way to capture application events for analysis and debugging.

**console.log:**
- Generally Synchronous: In most cases, console.log is considered synchronous. This means that the code execution pauses until the message is written to the console. However, there can be some browser-specific behaviors that introduce a slight asynchronous aspect.
- Asynchronous Potential in Browsers:
- Browser Buffering: While console.log itself might not be asynchronous, some browsers buffer console output before displaying it. This means the message might not appear immediately after the console.log call, creating an illusion of asynchronous behavior.
- Large Objects: If you're logging a very large object, the browser might take some time to process and display it in the console. This can make it seem like console.log is asynchronous, but it's more about the browser handling the complex data.

**Loggers (Potential for Async):**
- Flexible Output Options: Loggers often provide the ability to send logs to different destinations, some of which might be asynchronous. For example, sending logs to a remote server might involve a network request, which is inherently asynchronous.
- Non-Blocking: Many loggers are designed to be non-blocking. This means that the code execution doesn't pause when you call a logging function. The logger might handle the log message in the background while your code continues running. This improves performance, especially when dealing with large logs.

-----

**In Summary:**
console.log is generally synchronous but can have some browser-specific asynchronous quirks.
Loggers offer flexibility in output destinations, some of which might be asynchronous. Additionally, they can be non-blocking for better performance.
The key takeaway is that for most use cases, you won't experience significant asynchronous behavior with console.log or basic logger usage. However, it's good to be aware of the potential nuances, especially when working with complex data or dealing with asynchronous output destinations in loggers.
