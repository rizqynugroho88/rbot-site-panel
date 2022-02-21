import { ContainerWrapper } from '~/components/Container'
import { Input, InputRadio } from '~/components/Form'
import { H6 } from '~/components/Typography'

export default function PreferencePage() {
  return (
    <ContainerWrapper>
      <H6>Preferences</H6>
      <Input label="Haha" type={'text'} />

      <InputRadio />
      <InputRadio />
      <InputRadio />
    </ContainerWrapper>
  )
}
