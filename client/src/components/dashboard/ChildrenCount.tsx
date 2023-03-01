import {FaChild} from 'react-icons/fa'

interface ChildrenProps {
  total: number;
}

const ChildrenCount = ({total}: ChildrenProps) => {
  return (
    <div className='rounded-lg bg-primary2 p-6 text-secondary'>
      <div className="flex mb-5 flex-row justify-between">
        <h3 className='capitalize'>Total Children</h3>
        <FaChild size={28} />
      </div>
      <h1 className='font-bold text-3xl'>{total}</h1>
    </div>
  )
}

export default ChildrenCount