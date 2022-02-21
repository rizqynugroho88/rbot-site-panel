import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { Grid } from '~/components/Grid'
import { H6 } from '~/components/Typography'

export default function Index() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className=" w-full max-w-8xl">
        <Grid rowGap>
          <Card size="xl">XL</Card>
          <Card size="md">Test</Card>
          <Card size="md">Test</Card>
          <Card size="md">Test</Card>
        </Grid>
      </div>
      <Button variant="primary">Primary</Button>
      <Button variant="warn">Warn</Button>
    </div>
  )
}
