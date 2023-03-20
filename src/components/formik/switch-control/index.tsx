import {Box, Flex, Switch, SwitchProps} from "@chakra-ui/react"
import {css} from "@emotion/react"
import {useField, useFormikContext} from "formik"
import React, {FC} from "react"
import {isRequiredField} from "utils"
import {BaseProps, FormControl} from "../form-control"

export type SwitchControlProps = BaseProps & {switchProps?: SwitchProps; validationSchema?: any}

export const SwitchControl: FC<SwitchControlProps> = React.forwardRef(
  (props: SwitchControlProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {name, label, switchProps, validationSchema, ...rest} = props
    const [field, {error, touched}] = useField(name)
    const {isSubmitting} = useFormikContext()
    const isRequired = isRequiredField(props.validationSchema, field.name)

    return (
      <Box
        css={css`
          .chakra-form__label {
            margin-bottom: 0;
          }
          .chakra-switch {
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
          }
          .chakra-form__error-message {
            margin-top: 0;
          }
        `}
      >
        <FormControl name={name} label={label} as={Flex} alignItems="center" isRequired={isRequired} {...rest}>
          <Switch
            {...field}
            id={name}
            isInvalid={!!error && touched}
            isChecked={field.value}
            isDisabled={isSubmitting}
            ref={ref}
            {...switchProps}
          />
        </FormControl>
      </Box>
    )
  }
)

SwitchControl.displayName = "SwitchControl"

export default SwitchControl
