import { Avatar } from './Avatar'
import { H6, Paragraph } from './Typography'

function Contact() {
  return (
    <div className="flex w-[35rem] cursor-pointer items-center gap-3 rounded-md bg-gray-300 p-5">
      {/* Avatar */}
      <Avatar src="/Avatar.png" className="" />
      <div className="w-10 flex-grow">
        {/* Username / Number */}
        <H6 className="font-bold text-black" variant="custom">
          Test
        </H6>
        {/* Last Message */}
        <Paragraph className="box truncate font-thin italic ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          ipsum.
        </Paragraph>
      </div>
    </div>
  )
}

export { Contact }
