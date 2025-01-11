// global.d.ts
interface SpeechRecognition extends EventTarget {
    new (): SpeechRecognition;
    lang: string;
    interimResults: boolean;
    continuous: boolean;
    start(): void;
    stop(): void;
    abort(): void;
    addEventListener(type: 'result' | 'end', listener: EventListener): void;
    removeEventListener(type: 'result' | 'end', listener: EventListener): void;
}

interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
}
