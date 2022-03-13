/// <reference types="react" />
import './typography.css';
export interface TypographyProps {
    /**
     * How large should the button be?
     */
    textType?: 'small' | 'medium' | 'large' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * Button contents
     */
    text: string;
}
declare const Typography: ({ textType, text }: TypographyProps) => JSX.Element;
export default Typography;
