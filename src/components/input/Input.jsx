import PropTypes from 'prop-types'
import { forwardRef } from 'react'


import {
    StyledErrorMessage,
    StyledIcon,
    StyledIcons,
    StyledInputWrapper,
    StyledStatusIcons,
    StyledInput,
    StyledLabel,
    StyledSmall,
    StyledInputRoot,
} from './styles'

const Input = forwardRef(function Input(
    {
        label,
        name,
        type = 'icon',
        placeholder,
        helpText,
        onChange,
        onBlur,
        icon,
        iconPosition = 'left',
        iconCallback,
        statusIcon,
        statusIconCallback,
        touched = false,
        errors,
        rootClassName,
        inputProps,
        ...rest
    },
    ref
) {
    return (
        <>
            <StyledInputRoot className={rootClassName} {...rest}>
                <StyledInputWrapper
                    iconPosition={iconPosition}
                    touched={touched}
                    hasError={!!errors}
                    isSuccess={!errors && touched}
                >
                    {!!label && (
                        <StyledLabel htmlFor={name}>{label}</StyledLabel>
                    )}
                    <StyledIcons iconPosition={iconPosition}>
                        {icon && (
                            <StyledIcon
                                {...(iconCallback && { onClick: iconCallback })}
                            >
                                {icon}
                            </StyledIcon>
                        )}
                    </StyledIcons>
                    <StyledInput
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                        {...inputProps}
                    />
                    <StyledStatusIcons>
                        {errors ? (
                            <StyledIcon>
                                icon
                            </StyledIcon>
                        ) : (
                            touched && (
                                <StyledIcon>
                                    icon
                                </StyledIcon>
                            )
                        )}
                        {statusIcon && (
                            <StyledIcon
                                {...(statusIconCallback && {
                                    onClick: statusIconCallback,
                                })}
                            >
                                {statusIcon}
                            </StyledIcon>
                        )}
                    </StyledStatusIcons>
                </StyledInputWrapper>
                {errors?.message && (
                    <StyledErrorMessage>{errors.message}</StyledErrorMessage>
                )}
                {helpText && <StyledSmall>{helpText}</StyledSmall>}
            </StyledInputRoot>
        </>
    )
})

export default Input
