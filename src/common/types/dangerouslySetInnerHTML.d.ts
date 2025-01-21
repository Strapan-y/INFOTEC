declare namespace React {
    interface DOMAttributes<T> {
      dangerouslySetInnerHTML?: {
        __html: string;
      };
    }
  }