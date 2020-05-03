# use-node-runner

This is a React.js hook that enables code to be run on the node.js code runner which is avaliable at https://github.com/jonathan-fielding/nodejs-runner (or as a Docker container https://hub.docker.com/r/jonthanfielding/nodejs-runner).

## Usage

Just a simple usage example for now

```
import useNodeRunner from 'use-node-runner';
export default function() {
  const { setRunnerCode, response } = useNodeRunner('ws://localhost:3001');

  function runCode() {
    setRunnerCode(`console.log('hello')`);
  }

  return (
    <div>
      <button onClick={runCode}>Run Code</button>
      <ul>
        {response &&
          response.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
```

## TODO

- Convert to typescript
- Write docs
- Write blog post

## Licence

Copyright 2020 Jonathan Fielding

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
