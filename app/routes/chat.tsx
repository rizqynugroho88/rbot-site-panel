import { Avatar } from '~/components/Avatar'
import { Contact } from '~/components/Contact'
import { Grid } from '~/components/Grid'
import { H6, Paragraph } from '~/components/Typography'

export default function ChatPage() {
  return (
    <>
      <div className="grid h-full grid-cols-8 text-white">
        <div className="col-span-2 hidden bg-gray-700 md:block">
          <div className="border p-3">Message</div>
          <div className="flex flex-col gap-1 p-3">
            <p className="mb-2">Direct Message</p>
            <ContactPerson />
            <ContactPerson />
            <ContactPerson />
          </div>
        </div>
        <div className="col-span-full h-full bg-gray-700 md:col-span-6">
          <div className="border p-3 ">Admin Test</div>
          <div className="h-full bg-gray-800">
            <DirectMessage />
          </div>
        </div>
      </div>
    </>
  )
}

function ContactPerson() {
  return (
    <div className="flex w-full items-center gap-5 rounded-md bg-gray-800 p-2">
      <Avatar />
      <Paragraph className="text-white">Test Admin</Paragraph>
    </div>
  )
}

function DirectMessage() {
  return (
    <div className="h-full rounded-md bg-gray-800 p-2">
      <span>asd</span>
    </div>
  )
}
