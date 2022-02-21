import { Contact } from '~/components/Contact'
import { H6 } from '~/components/Typography'

export default function ChatPage() {
  return (
    <>
      <H6>Chat Messages</H6>
      <div className="flex flex-col gap-5">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </>
  )
}
