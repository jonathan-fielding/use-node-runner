import { useState, useMemo } from 'react';
import useWebSocket from 'react-use-websocket';

export default function useNodeRunner(socketUrl) {
  const [runnerCode, setRunnerCode] = useState('');
  const [response, setResponse] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useMemo(() => {
    if (runnerCode !== 'EXIT') {
      setResponse([]);
      setIsRunning(true);
    }

    sendMessage(runnerCode);
  }, [runnerCode]);

  useMemo(() => {
    if (!lastMessage) {
      return;
    }

    const { data } = lastMessage;
    if (data === '--- end ---') {
      setIsRunning(false);
    } else {
      setResponse([...response, data]);
    }
  }, [lastMessage]);

  return {
    runnerCode,
    setRunnerCode,
    response,
    isRunning,
  };
}
