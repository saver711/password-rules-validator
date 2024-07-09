import React from "react";
interface CustomIconComponents {
    ValidIcon: React.ReactNode;
    InvalidIcon: React.ReactNode;
}
interface PasswordProps {
    value: string;
    valueAgain?: string;
    minLength?: number;
    maxLength?: number;
    iconSize?: number;
    validColor?: string;
    invalidColor?: string;
    validTextColor?: string;
    invalidTextColor?: string;
    onChange?: (isValid: boolean, failedRules: RuleNames[]) => any;
    messages?: {
        [key in RuleNames]?: string;
    };
    iconComponents?: CustomIconComponents;
}
export declare type RuleNames = "minLength" | "maxLength" | "specialChar" | "number" | "capital" | "match" | "lowercase" | "letter" | "notEmpty" | "noSpaces";
export interface PasswordRulesValidatorProps extends PasswordProps {
    className?: string;
    style?: React.CSSProperties;
    rules: Array<RuleNames>;
    rtl?: boolean;
    hideIcon?: boolean;
    specialCharsRegex?: RegExp;
}
export interface RuleProps {
    valid: boolean;
    iconSize?: number;
    iconComponents?: CustomIconComponents;
    validColor?: string;
    invalidColor?: string;
    validTextColor?: string;
    invalidTextColor?: string;
    rtl?: boolean;
    hideIcon?: boolean;
    children?: React.ReactNode;
}
declare const PasswordRulesValidator: React.FC<PasswordRulesValidatorProps>;
export default PasswordRulesValidator;
