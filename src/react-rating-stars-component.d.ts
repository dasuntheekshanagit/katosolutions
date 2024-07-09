declare module 'react-rating-stars-component' {
    import * as React from 'react';
  
    interface ReactStarsProps {
      count?: number;
      value?: number;
      onChange?: (newRating: number) => void;
      size?: number;
      isHalf?: boolean;
      emptyIcon?: React.ReactElement;
      halfIcon?: React.ReactElement;
      fullIcon?: React.ReactElement;
      activeColor?: string;
      color?: string;
      edit?: boolean;
    }
  
    const ReactStars: React.FC<ReactStarsProps>;
  
    export default ReactStars;
  }
  